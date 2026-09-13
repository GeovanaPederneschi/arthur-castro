import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import WhatsAppButton from "@/components/WhatsAppButton";

const post = getPostBySlug("problemas-tributarios-comuns")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: {
    canonical: `/blog/${post.slug}`,
  },
  openGraph: {
    type: "article",
    title: post.title,
    description: post.description,
    publishedTime: post.date,
    authors: [siteConfig.lawyerName],
  },
};

function CTA({ text }: { text: string }) {
  return (
    <div className="not-prose my-10 rounded-xl border border-[var(--color-gold-500)]/40 bg-[var(--color-gold-100)] p-6">
      <p className="font-serif text-lg font-semibold text-[var(--color-navy-900)]">
        {text}
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <WhatsAppButton
          message="Olá! Li o artigo sobre problemas tributários comuns no site e gostaria de falar sobre o meu caso."
          label="Falar no WhatsApp agora"
        />
        <Link
          href="/#contato"
          className="inline-flex items-center justify-center rounded-md border border-[var(--color-navy-900)] px-6 py-3 text-sm font-semibold text-[var(--color-navy-900)] transition-colors hover:bg-[var(--color-navy-900)] hover:text-white"
        >
          Preencher formulário de contato
        </Link>
      </div>
    </div>
  );
}

export default function BlogPostPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: siteConfig.lawyerName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brand,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteConfig.url}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <nav aria-label="breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:underline">Início</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{post.title}</span>
      </nav>

      <header className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-gold-500)]">
          {post.category}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[var(--color-navy-900)] sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>Por {siteConfig.lawyerName}</span>
          <span>•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <div className="prose-article mt-10 max-w-none space-y-6 text-slate-700 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[var(--color-navy-900)] [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
        <p>
          Lidar com tributos é uma das partes mais estressantes da vida
          financeira de pessoas físicas e empresas no Brasil. Entre prazos,
          notificações e a complexidade da legislação, é comum que problemas
          simples se transformem em dívidas grandes — muitas vezes por falta
          de orientação no momento certo. Neste artigo, reunimos os{" "}
          <strong>7 problemas tributários mais comuns</strong> enfrentados por
          contribuintes e empresas, e como um{" "}
          <strong>advogado tributarista</strong> pode ajudar a resolver cada
          um deles.
        </p>

        <h2 id="malha-fina">1. Cair na malha fina do Imposto de Renda</h2>
        <p>
          A malha fina é o processo de checagem da Receita Federal que cruza
          as informações da sua declaração de Imposto de Renda com dados de
          terceiros, como empregadores, bancos e planos de saúde. Divergências
          — mesmo pequenas, como um valor de dedução informado incorretamente
          — podem fazer a declaração ficar retida.
        </p>
        <p>
          O que fazer: consulte o extrato do processamento da declaração no
          site da Receita Federal para identificar a pendência exata. Em
          muitos casos, é possível apresentar uma declaração retificadora. Em
          outros, quando já há um Auto de Infração ou notificação de
          lançamento, pode ser necessário apresentar impugnação dentro do
          prazo — perder esse prazo pode transformar uma pendência simples em
          uma cobrança bem mais difícil de reverter.
        </p>

        <h2 id="autuacoes-fiscais">2. Autuações fiscais e multas inesperadas</h2>
        <p>
          Empresas de todos os portes estão sujeitas a fiscalizações da
          Receita Federal, das Secretarias da Fazenda estaduais e das
          Prefeituras. Uma autuação fiscal pode surgir por divergências em
          declarações acessórias, classificação incorreta de produtos ou
          serviços, ou interpretação diferente da lei tributária sobre uma
          operação específica.
        </p>
        <p>
          O que fazer: toda autuação tem prazo para apresentação de defesa
          administrativa (impugnação), geralmente de 30 dias. Antes de aceitar
          uma cobrança como definitiva, vale avaliar se há fundamento jurídico
          para contestá-la — muitas autuações são reduzidas ou anuladas nas
          instâncias administrativas, sem necessidade de judicialização.
        </p>

        <h2 id="dividas-tributarias">3. Dívidas tributárias acumuladas</h2>
        <p>
          É comum que dívidas com o Fisco se acumulem em períodos de
          dificuldade financeira, especialmente em empresas. O problema
          cresce porque tributos em atraso são corrigidos por juros e multa,
          e a inscrição em dívida ativa pode levar a uma execução fiscal, com
          risco de penhora de bens.
        </p>
        <p>
          O que fazer: avaliar as opções de parcelamento ordinário ou, quando
          disponíveis, programas de transação tributária — que podem oferecer
          descontos relevantes em multas e juros, além de prazos maiores para
          pagamento. A escolha da modalidade certa depende do tipo de tributo,
          do valor da dívida e da capacidade de pagamento.
        </p>

        <CTA text="Está com dívidas tributárias acumuladas e não sabe por onde começar? Vamos conversar sobre as opções disponíveis para o seu caso." />

        <h2 id="bitributacao">4. Bitributação e cobrança indevida de tributos</h2>
        <p>
          Em alguns casos, um mesmo fato gerador pode ser cobrado por mais de
          um ente federativo — ou um tributo pode ser calculado sobre uma base
          maior do que a legalmente prevista. Isso é comum em disputas
          envolvendo ISS entre municípios, ICMS em operações interestaduais e
          a inclusão indevida de determinados valores na base de cálculo de
          contribuições federais.
        </p>
        <p>
          O que fazer: identificar se há cobrança em duplicidade ou cálculo
          incorreto exige análise técnica da legislação aplicável a cada
          tributo. Quando confirmada, é possível pleitear a restituição ou
          compensação dos valores pagos indevidamente, respeitado o prazo
          prescricional.
        </p>

        <h2 id="planejamento-empresarial">5. Falta de planejamento tributário empresarial</h2>
        <p>
          Muitas empresas pagam mais tributos do que deveriam simplesmente por
          estarem no regime tributário errado, ou por não estruturarem
          corretamente suas operações. A escolha entre Simples Nacional, Lucro
          Presumido e Lucro Real, por exemplo, pode representar diferenças
          significativas na carga tributária ao longo do ano.
        </p>
        <p>
          O que fazer: revisar periodicamente o enquadramento tributário e a
          estrutura societária da empresa, especialmente diante de mudanças no
          faturamento, na atividade ou na legislação. O planejamento
          tributário lícito (elisão fiscal) é uma ferramenta de gestão, não um
          risco — desde que bem fundamentado.
        </p>

        <h2 id="elisao-evasao">6. Dúvidas sobre o que é permitido: elisão x evasão fiscal</h2>
        <p>
          É comum a confusão entre práticas legais de economia tributária e
          condutas que configuram sonegação fiscal. A <em>elisão fiscal</em> é
          a organização lícita dos negócios para reduzir a carga tributária
          dentro da lei. Já a <em>evasão fiscal</em> envolve ocultação ou
          fraude, com consequências que vão além da esfera tributária,
          podendo gerar responsabilização criminal.
        </p>
        <p>
          O que fazer: qualquer estratégia de redução de tributos deve ser
          avaliada previamente por um profissional, com base em fundamentos
          jurídicos sólidos e documentação consistente, evitando estruturas
          artificiais que possam ser desconsideradas pelo Fisco.
        </p>

        <h2 id="heranca-doacao">7. Heranças e doações: ITCMD mal planejado</h2>
        <p>
          A transmissão de bens por herança ou doação está sujeita ao ITCMD
          (Imposto sobre Transmissão Causa Mortis e Doação), cuja alíquota
          varia conforme o estado. A falta de planejamento sucessório pode
          resultar em um imposto mais alto do que o necessário, além de
          processos de inventário mais longos e custosos.
        </p>
        <p>
          O que fazer: instrumentos como doação em vida com reserva de
          usufruto, holding patrimonial e testamento podem ajudar a organizar
          a sucessão de forma mais eficiente, dentro da legalidade. Quanto
          antes o planejamento sucessório é iniciado, mais alternativas
          costumam estar disponíveis.
        </p>

        <h2 id="conclusao">Conclusão: prevenir custa menos do que remediar</h2>
        <p>
          A maioria dos problemas tributários listados acima tem uma coisa em
          comum: quanto antes a situação é analisada por um profissional, mais
          opções existem para resolvê-la de forma vantajosa. Deixar prazos
          passarem ou tentar resolver sozinho uma notificação da Receita
          Federal pode reduzir significativamente as alternativas disponíveis
          mais adiante.
        </p>
        <p>
          Se você se identificou com algum dos problemas acima — seja uma
          notificação de malha fina, uma autuação fiscal ou dívidas
          acumuladas — o próximo passo é buscar uma análise específica do seu
          caso.
        </p>

        <CTA text="Quer entender melhor a sua situação tributária? Fale agora e receba uma orientação inicial sobre o seu caso." />
      </div>

      <footer className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>
          Este artigo tem caráter informativo e não substitui uma análise
          jurídica individualizada. Cada caso tributário possui
          particularidades que podem alterar significativamente a estratégia
          recomendada.
        </p>
        <Link href="/blog" className="mt-4 inline-block font-semibold text-[var(--color-navy-900)] hover:underline">
          ← Voltar para o blog
        </Link>
      </footer>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import ArticleCTA from "@/components/ArticleCTA";
import VideoSlot from "@/components/VideoSlot";
import RelatedArticles from "@/components/RelatedArticles";

const post = getPostBySlug("como-calcular-itbi-sao-paulo")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    type: "article",
    title: post.title,
    description: post.description,
    publishedTime: post.date,
    authors: [siteConfig.lawyerName],
  },
};

export default function BlogPostPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: siteConfig.lawyerName },
    publisher: { "@type": "Organization", name: siteConfig.brand },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Atualizações Tributárias", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav aria-label="breadcrumb" className="text-sm text-[var(--color-ink-faint)]">
        <Link href="/" className="hover:underline">Início</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:underline">Atualizações Tributárias</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--color-ink-soft)]">{post.title}</span>
      </nav>

      <header className="mt-6 border-b border-[var(--color-line)] pb-8">
        <p className="eyebrow">{post.category}</p>
        <h1 className="mt-3 font-serif text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[var(--color-ink-faint)]">
          <span>Por {siteConfig.lawyerName}</span>
          <span>·</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
          </time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <VideoSlot title={post.title} />

      <div className="prose-article mt-10 max-w-none space-y-6 text-[var(--color-ink-soft)] [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[var(--color-ink)] [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
        <p>
          Quem compra um imóvel em São Paulo costuma levar um susto na hora de
          pagar o ITBI (Imposto de Transmissão de Bens Imóveis): o valor da
          guia emitida pela Prefeitura, muitas vezes, é maior do que o
          esperado com base no preço pago pelo imóvel. Entender por que isso
          acontece é o primeiro passo para saber se você está pagando o valor
          correto.
        </p>

        <h2>O que é o ITBI e quando ele é cobrado</h2>
        <p>
          O ITBI é um imposto municipal cobrado sempre que há transferência
          onerosa de um imóvel — na compra e venda, por exemplo. Em São
          Paulo, a alíquota é de 3% sobre a base de cálculo, e o pagamento
          costuma ser exigido antes do registro da escritura em cartório.
        </p>

        <h2>Valor de compra x Valor Venal de Referência: qual a diferença</h2>
        <p>
          O problema começa aqui: a Prefeitura não usa necessariamente o
          valor que você pagou pelo imóvel como base de cálculo. Ela compara
          esse valor com o chamado <strong>Valor Venal de Referência</strong>{" "}
          — uma estimativa própria do município, calculada a partir de dados
          como localização, metragem e características do imóvel — e cobra o
          ITBI sobre o que for maior entre os dois.
        </p>
        <p>
          Em muitos casos, o Valor Venal de Referência é significativamente
          mais alto do que o valor real de mercado pago pelo comprador,
          especialmente em imóveis negociados abaixo da média da região ou em
          bairros que passaram por valorização recente.
        </p>

        <h2>Como consultar o Valor Venal de Referência do seu imóvel</h2>
        <p>
          O valor de referência usado pela Prefeitura de São Paulo pode ser
          consultado diretamente no site da Secretaria Municipal da Fazenda,
          informando o número do contribuinte (SQL) do imóvel. Antes de
          pagar a guia, vale comparar esse número com o valor da escritura ou
          do contrato de compra e venda.
        </p>

        <h2>Por que essa diferença pode pesar no seu bolso</h2>
        <p>
          Em um imóvel de médio valor, a diferença entre calcular o ITBI
          sobre o valor de compra ou sobre o Valor Venal de Referência pode
          representar alguns milhares de reais. Como o pagamento costuma ser
          feito sob pressão do prazo do cartório, muitos compradores acabam
          quitando a guia sem questionar — mesmo quando existe uma
          divergência relevante entre os dois valores.
        </p>

        <ArticleCTA
          text="Está com dúvidas sobre o valor cobrado no seu ITBI? Posso te ajudar a entender se a conta está correta."
          whatsappMessage="Olá! Li o artigo sobre como calcular o ITBI em São Paulo e tenho uma dúvida sobre a minha guia."
        />
      </div>

      <RelatedArticles
        slugs={["prefeitura-cobrou-itbi-a-mais", "como-reduzir-itbi-antes-de-pagar"]}
      />

      <footer className="mt-12 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-ink-faint)]">
        <p>
          Este artigo tem caráter informativo e não substitui uma análise
          jurídica individualizada. Cada caso possui particularidades que
          podem alterar significativamente o cálculo e a estratégia
          recomendada.
        </p>
        <Link href="/blog" className="mt-4 inline-block text-[var(--color-ink)] hover:text-[var(--color-brass)] hover:underline">
          ← Voltar para Atualizações Tributárias
        </Link>
      </footer>
    </article>
  );
}

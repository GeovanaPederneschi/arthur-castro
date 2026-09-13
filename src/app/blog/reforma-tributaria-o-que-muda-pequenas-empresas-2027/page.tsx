import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import ArticleCTA from "@/components/ArticleCTA";
import VideoSlot from "@/components/VideoSlot";
import RelatedArticles from "@/components/RelatedArticles";

const post = getPostBySlug("reforma-tributaria-o-que-muda-pequenas-empresas-2027")!;

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
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
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
        <Link href="/blog" className="hover:underline">Blog</Link>
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
          A Reforma Tributária aprovada pela Emenda Constitucional 132/2023
          muda a forma como o Brasil cobra impostos sobre o consumo. A
          transição já começou e vai se estender até 2033 — o que pode
          parecer distante, mas exige atenção desde já de quem administra uma
          pequena ou média empresa.
        </p>

        <h2>O que é a Reforma Tributária, em resumo</h2>
        <p>
          A reforma substitui um conjunto de tributos sobre o consumo — PIS,
          Cofins, IPI, ICMS e ISS — por um modelo mais simples, baseado em
          dois novos tributos: a CBS (Contribuição sobre Bens e Serviços),
          de competência federal, e o IBS (Imposto sobre Bens e Serviços),
          de competência compartilhada entre Estados e Municípios. Juntos,
          eles funcionam como um IVA (Imposto sobre Valor Agregado) dual.
        </p>

        <h2>O Simples Nacional muda?</h2>
        <p>
          O Simples Nacional continua existindo como está, com a opção de
          recolhimento unificado. A novidade é que as empresas optantes
          poderão optar por recolher o IBS e a CBS “por fora” do Simples,
          seguindo o regime normal, quando isso for vantajoso — por exemplo,
          para gerar créditos tributários a clientes que estejam no regime
          normal. Essa é uma decisão que vale a pena avaliar caso a caso.
        </p>

        <h2>Cronograma de transição</h2>
        <ul>
          <li><strong>2026:</strong> início da cobrança-teste do IBS e da CBS, com alíquotas reduzidas, sem aumento de carga tributária</li>
          <li><strong>2027:</strong> início efetivo da CBS, com extinção do PIS e da Cofins</li>
          <li><strong>2029 a 2032:</strong> redução gradual de ICMS e ISS, com aumento proporcional do IBS</li>
          <li><strong>2033:</strong> extinção completa do modelo atual, com vigência plena do novo sistema</li>
        </ul>

        <h2>O que pequenas empresas devem observar desde já</h2>
        <p>
          Mesmo com a transição gradual, é importante acompanhar o impacto
          nos sistemas de emissão de nota fiscal, na formação de preços e em
          contratos de fornecimento de longo prazo. Empresas de serviços,
          historicamente tributadas por ISS com alíquotas mais baixas em
          muitos municípios, tendem a sentir o impacto de forma mais
          perceptível ao longo da transição.
        </p>

        <ArticleCTA
          text="Quer entender como a Reforma Tributária vai impactar especificamente a sua empresa? Vamos conversar sobre o seu caso."
          whatsappMessage="Olá! Li o artigo sobre a Reforma Tributária e gostaria de entender o impacto na minha empresa."
        />
      </div>

      <RelatedArticles
        slugs={["ibs-cbs-como-novo-iva-afeta-preco-servico", "revisar-contratos-antes-reforma-tributaria"]}
      />

      <footer className="mt-12 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-ink-faint)]">
        <p>
          Este artigo tem caráter informativo e não substitui uma análise
          jurídica individualizada. A regulamentação da Reforma Tributária
          ainda está em curso e pode sofrer alterações até a entrada em vigor
          de cada etapa.
        </p>
        <Link href="/blog" className="mt-4 inline-block text-[var(--color-ink)] hover:text-[var(--color-brass)] hover:underline">
          ← Voltar para o blog
        </Link>
      </footer>
    </article>
  );
}

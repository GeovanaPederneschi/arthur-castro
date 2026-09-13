import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import ArticleCTA from "@/components/ArticleCTA";
import VideoSlot from "@/components/VideoSlot";
import RelatedArticles from "@/components/RelatedArticles";

const post = getPostBySlug("prefeitura-cobrou-itbi-a-mais")!;

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
          Se você comparou o valor pago pelo imóvel com o Valor Venal de
          Referência da Prefeitura e percebeu uma diferença considerável, vale
          entender um ponto importante: a forma como muitos municípios
          calculam o ITBI vem sendo questionada nos tribunais — e, em alguns
          casos, considerada ilegal.
        </p>

        <h2>O que decidiu o STJ sobre a base de cálculo do ITBI</h2>
        <p>
          O Superior Tribunal de Justiça firmou entendimento de que a base de
          cálculo do ITBI deve corresponder, via de regra, ao valor de
          transação do imóvel — ou seja, ao valor efetivamente pago na
          compra e venda, informado pelas partes. O valor venal usado para
          fins de IPTU (ou uma referência própria criada pelo município para
          o ITBI) não pode ser aplicado automaticamente, sem um processo
          administrativo específico que justifique o arbitramento de um
          valor maior.
        </p>

        <h2>Por que a cobrança baseada só no Valor de Referência pode ser ilegal</h2>
        <p>
          Na prática, isso significa que a Prefeitura não pode simplesmente
          substituir o valor declarado pelas partes por uma tabela própria de
          referência, sem abrir um procedimento fiscal específico para
          arbitrar esse valor, com direito a contraditório. Quando isso
          acontece, o contribuinte pode questionar a cobrança.
        </p>

        <h2>Como saber se você pagou ITBI a mais</h2>
        <p>
          Compare três números: o valor da transação (escritura ou contrato),
          o valor usado na guia de ITBI e o Valor Venal de Referência
          consultado no site da Prefeitura. Se o ITBI foi calculado sobre o
          Valor de Referência e este é sensivelmente maior do que o valor
          real da transação, há indício de cobrança indevida — e,
          dependendo do caso, é possível pedir a diferença de volta.
        </p>

        <ArticleCTA
          text="Acha que pagou ITBI acima do valor devido? Posso analisar a sua guia e o valor de referência usado pela Prefeitura."
          whatsappMessage="Olá! Li o artigo sobre a cobrança de ITBI acima do valor de referência e acho que posso estar nessa situação."
        />
      </div>

      <RelatedArticles
        slugs={["como-calcular-itbi-sao-paulo", "como-reduzir-itbi-antes-de-pagar"]}
      />

      <footer className="mt-12 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-ink-faint)]">
        <p>
          Este artigo tem caráter informativo e não substitui uma análise
          jurídica individualizada. A aplicação do entendimento do STJ
          depende das circunstâncias de cada caso e da legislação municipal
          vigente.
        </p>
        <Link href="/blog" className="mt-4 inline-block text-[var(--color-ink)] hover:text-[var(--color-brass)] hover:underline">
          ← Voltar para o blog
        </Link>
      </footer>
    </article>
  );
}

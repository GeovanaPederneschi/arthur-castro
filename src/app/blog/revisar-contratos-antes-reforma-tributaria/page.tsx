import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import ArticleCTA from "@/components/ArticleCTA";
import VideoSlot from "@/components/VideoSlot";
import RelatedArticles from "@/components/RelatedArticles";

const post = getPostBySlug("revisar-contratos-antes-reforma-tributaria")!;

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
        <h1 className="mt-3 font-serif text-3xl leading-tight text-[var(--color-navy)] sm:text-4xl">
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
          Empresas com contratos de longo prazo — aluguel, prestação de
          serviços continuados, fornecimento — costumam negociar o preço com
          base na carga tributária vigente na época da assinatura. O
          problema é que muitos desses contratos não preveem o que acontece
          quando essa carga tributária muda estruturalmente, como está
          prestes a acontecer.
        </p>

        <h2>Por que contratos antigos não preveem a mudança</h2>
        <p>
          Contratos redigidos antes da aprovação da Reforma Tributária
          dificilmente contêm cláusulas específicas sobre IBS e CBS, porque
          esses tributos simplesmente não existiam. Sem uma previsão clara
          de repactuação, a parte que arca com o aumento da carga tributária
          ao longo da transição pode não ter respaldo contratual para
          repassar essa diferença ao preço.
        </p>

        <h2>Cláusulas de repactuação tributária</h2>
        <p>
          Uma cláusula de repactuação tributária permite que o preço do
          contrato seja revisado quando houver alteração relevante na carga
          de tributos que incidem sobre aquela operação — para mais ou para
          menos. Ela pode prever, por exemplo, revisão automática do valor
          ou reabertura de negociação em datas específicas da transição da
          reforma (2027, 2029, 2033).
        </p>

        <h2>O que revisar antes de 2027</h2>
        <ul>
          <li>Contratos de prestação de serviços continuados sem cláusula de reajuste tributário</li>
          <li>Contratos de fornecimento com preço fixo por longo período</li>
          <li>Contratos de locação comercial com repasse de tributos ao locatário</li>
          <li>Planilhas de formação de preço que ainda não simulam o IBS/CBS “por fora”</li>
        </ul>
        <p>
          Revisar esses pontos com antecedência evita que a empresa seja
          surpreendida no meio da transição, tendo que arcar sozinha com um
          aumento de carga tributária que poderia ter sido previsto e
          negociado com a outra parte do contrato.
        </p>

        <ArticleCTA
          text="Sua empresa tem contratos longos que precisam ser revisados antes da Reforma Tributária? Vamos analisar os pontos de atenção."
          whatsappMessage="Olá! Li o artigo sobre revisão de contratos antes da Reforma Tributária e gostaria de avaliar os contratos da minha empresa."
        />
      </div>

      <RelatedArticles
        slugs={["reforma-tributaria-o-que-muda-pequenas-empresas-2027", "ibs-cbs-como-novo-iva-afeta-preco-servico"]}
      />

      <footer className="mt-12 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-ink-faint)]">
        <p>
          Este artigo tem caráter informativo e não substitui uma análise
          jurídica individualizada. A revisão contratual deve considerar as
          particularidades de cada operação e as normas complementares ainda
          em elaboração.
        </p>
        <Link href="/blog" className="mt-4 inline-block text-[var(--color-ink)] hover:text-[var(--color-wine)] hover:underline">
          ← Voltar para Atualizações Tributárias
        </Link>
      </footer>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import ArticleCTA from "@/components/ArticleCTA";
import VideoSlot from "@/components/VideoSlot";
import RelatedArticles from "@/components/RelatedArticles";

const post = getPostBySlug("inss-negou-isencao-imposto-de-renda-acao-judicial")!;

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
          É frustrante reunir laudos médicos, preencher formulários e esperar
          semanas por uma resposta, só para descobrir que o pedido de
          isenção do Imposto de Renda foi negado. Mas uma negativa
          administrativa não é a palavra final sobre o assunto.
        </p>

        <h2>Por que pedidos administrativos costumam ser negados</h2>
        <p>
          É comum que órgãos como o INSS neguem o pedido por exigirem
          requisitos que a lei não impõe — como comprovar que a doença está
          “em atividade” para condições que, pela própria natureza, não têm
          essa característica avaliável dessa forma, ou desconsiderar laudos
          médicos por questões meramente formais. Em muitos casos, a
          negativa decorre de uma interpretação mais restritiva do que
          aquela adotada pelos tribunais.
        </p>

        <h2>Quando vale a pena entrar com ação judicial</h2>
        <p>
          Quando o pedido administrativo é negado, apesar de a pessoa
          preencher os requisitos legais — doença da lista, comprovada por
          laudo oficial — a ação judicial costuma ser o caminho mais
          eficaz. Os tribunais já pacificaram entendimentos favoráveis ao
          contribuinte em diversos pontos, como a desnecessidade de a doença
          estar “em atividade” para a maioria das hipóteses e o
          reconhecimento da isenção mesmo quando o laudo pericial não é
          exatamente o exigido administrativamente, desde que comprove a
          doença.
        </p>

        <h2>O que esperar do processo judicial</h2>
        <p>
          A ação costuma pedir, ao mesmo tempo, o reconhecimento da isenção
          para os proventos futuros e a restituição dos valores retidos
          indevidamente nos últimos cinco anos. O processo pode incluir a
          realização de perícia judicial, especialmente quando o laudo
          administrativo é contestado pelo INSS ou pela Receita Federal. Na
          maioria dos casos, o processo tramita sem necessidade de audiências
          presenciais frequentes.
        </p>

        <ArticleCTA
          text="Teve o pedido de isenção negado pelo INSS ou pela Receita Federal? Vamos avaliar se a via judicial pode reverter essa decisão."
          whatsappMessage="Olá! Meu pedido de isenção do Imposto de Renda foi negado e gostaria de entender se vale a pena entrar com uma ação judicial."
        />
      </div>

      <RelatedArticles
        slugs={["doencas-que-dao-direito-isencao-imposto-de-renda", "como-pedir-restituicao-imposto-de-renda-doenca-grave"]}
      />

      <footer className="mt-12 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-ink-faint)]">
        <p>
          Este artigo tem caráter informativo e não substitui uma análise
          jurídica individualizada. O resultado de uma ação judicial depende
          das provas produzidas e das circunstâncias de cada caso.
        </p>
        <Link href="/blog" className="mt-4 inline-block text-[var(--color-ink)] hover:text-[var(--color-brass)] hover:underline">
          ← Voltar para o blog
        </Link>
      </footer>
    </article>
  );
}

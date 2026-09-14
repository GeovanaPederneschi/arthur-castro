import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import ArticleCTA from "@/components/ArticleCTA";
import VideoSlot from "@/components/VideoSlot";
import RelatedArticles from "@/components/RelatedArticles";

const post = getPostBySlug("divida-fiscal-prescreve-bloqueio-ilegal")!;

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
          Nem toda dívida cobrada em uma execução fiscal está, de fato, em
          condições de ser cobrada. Existem prazos e requisitos formais que,
          quando não observados pelo Fisco, podem tornar a cobrança inválida
          — e, com ela, o bloqueio de bens ou contas que dela decorre.
        </p>

        <h2>O que é a prescrição intercorrente</h2>
        <p>
          A prescrição intercorrente ocorre quando a execução fiscal fica
          parada por um longo período — em regra, mais de cinco anos — sem
          que o Fisco consiga localizar bens do devedor para satisfazer a
          dívida. Nesses casos, a lei prevê a extinção da execução pela
          prescrição, mesmo que a dívida original ainda não tenha sido paga.
          Isso significa que processos muito antigos, parados por anos, podem
          estar prescritos sem que a empresa ou a pessoa devedora saiba.
        </p>

        <h2>Vícios comuns na Certidão de Dívida Ativa (CDA)</h2>
        <p>
          Toda execução fiscal precisa se basear em uma Certidão de Dívida
          Ativa (CDA) válida, que deve indicar com clareza a origem da
          dívida, o valor atualizado e a forma de cálculo de juros e multas.
          Erros na CDA — como a ausência de informações obrigatórias ou a
          cobrança de valores prescritos — podem ser usados para contestar a
          execução, total ou parcialmente.
        </p>

        <h2>Como saber se o bloqueio da sua conta tem base legal</h2>
        <p>
          O primeiro passo é obter uma cópia do processo de execução fiscal e
          verificar: há quanto tempo o processo está parado sem movimentação
          útil? A CDA apresenta todos os requisitos legais? O valor cobrado
          corresponde à dívida original, com atualização correta? Essas
          perguntas ajudam a identificar se existe fundamento para contestar
          a cobrança antes de simplesmente aceitar o bloqueio como definitivo.
        </p>

        <ArticleCTA
          text="Quer verificar se a dívida que originou o bloqueio da sua conta ainda pode ser cobrada? Envie o número do processo para uma análise inicial."
          whatsappMessage="Olá! Li o artigo sobre prescrição de dívida fiscal e gostaria de verificar se esse é o meu caso."
        />
      </div>

      <RelatedArticles
        slugs={["conta-bloqueada-judicialmente-o-que-fazer", "excecao-pre-executividade-desbloquear-conta"]}
      />

      <footer className="mt-12 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-ink-faint)]">
        <p>
          Este artigo tem caráter informativo e não substitui uma análise
          jurídica individualizada. A configuração da prescrição depende do
          histórico completo de movimentação de cada processo.
        </p>
        <Link href="/blog" className="mt-4 inline-block text-[var(--color-ink)] hover:text-[var(--color-wine)] hover:underline">
          ← Voltar para Atualizações Tributárias
        </Link>
      </footer>
    </article>
  );
}

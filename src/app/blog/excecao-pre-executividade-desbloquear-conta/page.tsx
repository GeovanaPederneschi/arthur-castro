import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import ArticleCTA from "@/components/ArticleCTA";
import VideoSlot from "@/components/VideoSlot";
import RelatedArticles from "@/components/RelatedArticles";

const post = getPostBySlug("excecao-pre-executividade-desbloquear-conta")!;

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
          Uma dúvida comum de quem tem a conta bloqueada por uma execução
          fiscal é se é preciso pagar a dívida à vista, ou ao menos garantir
          o juízo com um bem, para poder se defender. Em determinadas
          situações, existe um caminho mais rápido: a Exceção de
          Pré-Executividade.
        </p>

        <h2>O que é a Exceção de Pré-Executividade</h2>
        <p>
          A Exceção de Pré-Executividade é um instrumento processual que
          permite ao executado (empresa ou pessoa física) apresentar defesa
          dentro da própria execução fiscal, sem a necessidade de garantir o
          juízo com penhora de bens ou depósito do valor cobrado. Ela é
          cabível quando o vício alegado pode ser verificado de plano pelo
          juiz, sem necessidade de produção de provas mais complexas — como
          nulidades formais na CDA, prescrição ou ilegitimidade da parte
          cobrada.
        </p>

        <h2>Quando ela pode ser usada para desbloquear a conta</h2>
        <p>
          Se o bloqueio decorreu de uma execução fiscal com vícios evidentes
          — por exemplo, uma CDA que não identifica corretamente o devedor,
          ou uma dívida já prescrita — a Exceção de Pré-Executividade pode
          ser apresentada pedindo o reconhecimento do vício e,
          consequentemente, a liberação dos valores bloqueados, sem que a
          empresa precise antecipar o pagamento da dívida questionada.
        </p>

        <h2>Diferença entre pré-executividade e embargos à execução</h2>
        <p>
          Os embargos à execução também são uma forma de defesa, mas
          costumam exigir a garantia do juízo (penhora de bens ou depósito)
          como condição para serem recebidos, além de permitirem discussões
          mais amplas sobre o mérito da dívida. Já a Exceção de
          Pré-Executividade é mais restrita quanto às matérias que podem ser
          alegadas, mas dispensa essa garantia prévia — o que a torna, em
          muitos casos, o caminho mais rápido para reverter um bloqueio
          quando o vício é evidente.
        </p>

        <ArticleCTA
          text="Quer avaliar se o bloqueio da sua conta pode ser revertido por meio de uma Exceção de Pré-Executividade? Envie os dados do processo para uma análise."
          whatsappMessage="Olá! Li o artigo sobre Exceção de Pré-Executividade e gostaria de saber se posso usar esse recurso para desbloquear a conta da minha empresa."
        />
      </div>

      <RelatedArticles
        slugs={["conta-bloqueada-judicialmente-o-que-fazer", "divida-fiscal-prescreve-bloqueio-ilegal"]}
      />

      <footer className="mt-12 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-ink-faint)]">
        <p>
          Este artigo tem caráter informativo e não substitui uma análise
          jurídica individualizada. A viabilidade da Exceção de
          Pré-Executividade depende da natureza do vício alegado em cada
          processo.
        </p>
        <Link href="/blog" className="mt-4 inline-block text-[var(--color-ink)] hover:text-[var(--color-brass)] hover:underline">
          ← Voltar para o blog
        </Link>
      </footer>
    </article>
  );
}

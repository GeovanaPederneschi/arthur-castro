import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import ArticleCTA from "@/components/ArticleCTA";
import VideoSlot from "@/components/VideoSlot";
import RelatedArticles from "@/components/RelatedArticles";

const post = getPostBySlug("conta-bloqueada-judicialmente-o-que-fazer")!;

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
          Chegar para trabalhar e descobrir que a conta da empresa está
          bloqueada, sem aviso prévio, é uma das situações mais estressantes
          que um empresário pode enfrentar. Na maioria dos casos, esse
          bloqueio é resultado de uma execução fiscal — uma cobrança judicial
          de dívida com a Receita Federal, o INSS, o Estado ou o Município.
        </p>

        <h2>O que é o Sisbajud e por que ele bloqueou sua conta</h2>
        <p>
          O Sisbajud (Sistema de Busca de Ativos do Poder Judiciário) é a
          ferramenta usada pela Justiça para localizar e bloquear valores em
          contas bancárias de devedores, de forma eletrônica e imediata,
          diretamente junto às instituições financeiras. Quando uma execução
          fiscal está em andamento e a empresa não paga nem parcela a dívida
          voluntariamente, o juiz pode autorizar esse bloqueio para garantir o
          valor cobrado.
        </p>

        <h2>O bloqueio é sempre definitivo?</h2>
        <p>
          Não. O bloqueio via Sisbajud é, a princípio, uma medida para
          garantir o valor da execução — não significa que o dinheiro já foi
          transferido para o credor. Existe um intervalo entre o bloqueio e a
          efetiva transferência (chamada de penhora on-line), durante o qual
          é possível apresentar defesa para tentar reverter ou reduzir a
          medida.
        </p>

        <h2>Primeiros passos nas 24 horas depois do bloqueio</h2>
        <ul>
          <li>Identifique o número do processo de execução fiscal que originou o bloqueio (a informação costuma constar no extrato bancário ou pode ser solicitada ao banco).</li>
          <li>Verifique se a empresa foi devidamente citada no processo antes do bloqueio.</li>
          <li>Reúna documentos fiscais e contábeis recentes relacionados à dívida cobrada.</li>
          <li>Avalie, com orientação jurídica, se existe fundamento para contestar o valor ou a validade da cobrança.</li>
        </ul>

        <h2>Erros que costumam piorar a situação</h2>
        <p>
          Tentar negociar diretamente com o órgão credor sem entender a fase
          processual em que a execução se encontra, ou simplesmente esperar o
          prazo passar sem apresentar nenhuma defesa, são erros comuns que
          reduzem as chances de reverter o bloqueio rapidamente. Cada dia sem
          uma resposta formal ao processo aumenta o risco de a penhora se
          tornar definitiva.
        </p>

        <ArticleCTA
          text="Sua empresa está com a conta bloqueada agora? Quanto antes o processo for analisado, maiores as chances de reverter a situação rapidamente."
          whatsappMessage="Olá! A conta da minha empresa foi bloqueada judicialmente e preciso de orientação sobre o que fazer."
        />
      </div>

      <RelatedArticles
        slugs={["divida-fiscal-prescreve-bloqueio-ilegal", "excecao-pre-executividade-desbloquear-conta"]}
      />

      <footer className="mt-12 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-ink-faint)]">
        <p>
          Este artigo tem caráter informativo e não substitui uma análise
          jurídica individualizada. O tempo de resposta e as medidas
          cabíveis dependem da fase processual e do tribunal responsável.
        </p>
        <Link href="/blog" className="mt-4 inline-block text-[var(--color-ink)] hover:text-[var(--color-brass)] hover:underline">
          ← Voltar para Atualizações Tributárias
        </Link>
      </footer>
    </article>
  );
}

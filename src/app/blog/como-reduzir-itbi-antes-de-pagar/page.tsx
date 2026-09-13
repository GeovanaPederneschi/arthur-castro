import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import ArticleCTA from "@/components/ArticleCTA";
import VideoSlot from "@/components/VideoSlot";
import RelatedArticles from "@/components/RelatedArticles";

const post = getPostBySlug("como-reduzir-itbi-antes-de-pagar")!;

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
          Identificar que o ITBI cobrado está acima do valor de compra é só o
          primeiro passo. O próximo é saber qual caminho seguir — e ele muda
          dependendo de você ainda não ter pago a guia ou já ter quitado o
          imposto há algum tempo.
        </p>

        <h2>Caminho 1: contestar o valor antes de pagar</h2>
        <p>
          Se a guia ainda não foi paga, é possível apresentar uma
          impugnação administrativa perante a Prefeitura, questionando o
          valor usado como base de cálculo e pedindo que o ITBI seja
          recalculado sobre o valor real da transação. Em paralelo, quando o
          prazo do cartório não permite esperar pela resposta administrativa,
          pode ser necessário buscar uma medida judicial para liberar o
          registro sem o pagamento do valor questionado, ou mediante depósito
          apenas da parte incontroversa.
        </p>

        <h2>Caminho 2: pedir a restituição de valores já pagos</h2>
        <p>
          Se o ITBI já foi pago com base no Valor Venal de Referência, o
          contribuinte pode pedir a restituição do valor pago a maior. O
          prazo geral para reaver tributos municipais pagos indevidamente é
          de cinco anos, contados do pagamento. O pedido pode ser feito
          administrativamente perante a Prefeitura ou, quando negado ou
          demorado, por via judicial.
        </p>

        <h2>O que reunir antes de buscar orientação jurídica</h2>
        <ul>
          <li>Escritura ou contrato de compra e venda, com o valor da transação</li>
          <li>Guia de ITBI paga (DAMSP) e comprovante de pagamento</li>
          <li>Consulta ao Valor Venal de Referência usado pela Prefeitura</li>
        </ul>
        <p>
          Com esses documentos em mãos, é possível avaliar rapidamente se há
          fundamento para contestar o valor pago e qual estratégia — administrativa
          ou judicial — é mais adequada ao seu caso.
        </p>

        <ArticleCTA
          text="Quer avaliar se vale a pena contestar o ITBI que você pagou ou está prestes a pagar? Envie os documentos e vamos analisar juntos."
          whatsappMessage="Olá! Li o artigo sobre como reduzir ou pedir a restituição do ITBI e gostaria de avaliar o meu caso."
        />
      </div>

      <RelatedArticles
        slugs={["como-calcular-itbi-sao-paulo", "prefeitura-cobrou-itbi-a-mais"]}
      />

      <footer className="mt-12 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-ink-faint)]">
        <p>
          Este artigo tem caráter informativo e não substitui uma análise
          jurídica individualizada. Prazos e procedimentos podem variar
          conforme a legislação do município onde o imóvel está localizado.
        </p>
        <Link href="/blog" className="mt-4 inline-block text-[var(--color-ink)] hover:text-[var(--color-brass)] hover:underline">
          ← Voltar para Atualizações Tributárias
        </Link>
      </footer>
    </article>
  );
}

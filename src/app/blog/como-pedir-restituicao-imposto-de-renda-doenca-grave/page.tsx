import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import ArticleCTA from "@/components/ArticleCTA";
import VideoSlot from "@/components/VideoSlot";
import RelatedArticles from "@/components/RelatedArticles";

const post = getPostBySlug("como-pedir-restituicao-imposto-de-renda-doenca-grave")!;

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
          Se você descobriu que tem direito à isenção do Imposto de Renda por
          conta de uma doença grave, a boa notícia é que o benefício não vale
          só daqui para frente: é possível reaver o imposto que já foi
          retido, indevidamente, nos últimos anos.
        </p>

        <h2>Por quanto tempo dá para pedir de volta</h2>
        <p>
          O prazo para pedir a restituição de Imposto de Renda pago
          indevidamente é de cinco anos, contados retroativamente a partir
          da data do pedido. Ou seja, quanto mais cedo o pedido for feito
          depois do diagnóstico, maior o período que pode ser recuperado.
        </p>

        <h2>Documentos necessários</h2>
        <ul>
          <li>Laudo pericial emitido por serviço médico oficial, indicando a doença e a data do diagnóstico</li>
          <li>Comprovantes de rendimento (informe de rendimentos do INSS ou do órgão pagador) do período que se pretende reaver</li>
          <li>Declarações de Imposto de Renda entregues no período, se já apresentadas</li>
          <li>Documento de identificação e comprovante de residência</li>
        </ul>

        <h2>Passo a passo do pedido administrativo</h2>
        <p>
          O pedido de reconhecimento da isenção é feito junto ao órgão
          pagador do benefício (INSS ou órgão do regime próprio), que passa a
          não reter mais o imposto sobre os proventos futuros. Já a
          restituição dos valores retidos no passado é pleiteada junto à
          Receita Federal, por meio de retificação das declarações de
          Imposto de Renda dos anos abrangidos pelo direito, ou por pedido
          administrativo específico quando não houve declaração no período.
        </p>

        <h2>E quando o pedido demora ou é indeferido?</h2>
        <p>
          Não é incomum que o pedido administrativo demore além do
          razoável, ou seja negado por interpretação restritiva do órgão
          responsável — por exemplo, exigindo indicação de “moléstia em
          atividade” quando a lei não faz essa exigência para todas as
          doenças da lista. Nesses casos, a via judicial costuma ser mais
          eficaz para garantir o direito.
        </p>

        <ArticleCTA
          text="Quer verificar quanto você pode ter direito a reaver de Imposto de Renda pago nos últimos anos? Envie seus documentos para uma análise."
          whatsappMessage="Olá! Li o artigo sobre restituição de Imposto de Renda por doença grave e gostaria de entender como pedir a restituição no meu caso."
        />
      </div>

      <RelatedArticles
        slugs={["doencas-que-dao-direito-isencao-imposto-de-renda", "inss-negou-isencao-imposto-de-renda-acao-judicial"]}
      />

      <footer className="mt-12 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-ink-faint)]">
        <p>
          Este artigo tem caráter informativo e não substitui uma análise
          jurídica individualizada. O valor e o período recuperável dependem
          da documentação disponível em cada caso.
        </p>
        <Link href="/blog" className="mt-4 inline-block text-[var(--color-ink)] hover:text-[var(--color-brass)] hover:underline">
          ← Voltar para Atualizações Tributárias
        </Link>
      </footer>
    </article>
  );
}

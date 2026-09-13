import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import ArticleCTA from "@/components/ArticleCTA";
import VideoSlot from "@/components/VideoSlot";
import RelatedArticles from "@/components/RelatedArticles";

const post = getPostBySlug("ibs-cbs-como-novo-iva-afeta-preco-servico")!;

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
          Para empresas de serviço, a Reforma Tributária traz uma mudança
          estrutural na forma de calcular impostos — e isso tem efeito
          direto sobre o preço cobrado do cliente final e sobre a margem do
          negócio.
        </p>

        <h2>O que são o IBS e a CBS</h2>
        <p>
          O IBS e a CBS substituem, de forma combinada, o ICMS, o ISS, o PIS
          e a Cofins. Ao contrário do ISS — cobrado hoje por cada
          município com alíquotas que variam de 2% a 5% — o novo sistema
          prevê uma alíquota de referência mais alta, mas com o benefício de
          gerar créditos ao longo da cadeia produtiva, algo que o ISS não
          permite.
        </p>

        <h2>Como funciona o cálculo “por fora”</h2>
        <p>
          Uma mudança relevante é que o IBS e a CBS serão calculados “por
          fora” do preço, de forma destacada na nota fiscal — diferente do
          ICMS atual, que é calculado “por dentro” e já embutido no valor do
          produto ou serviço. Essa mudança de metodologia exige atenção na
          hora de revisar tabelas de preços, para que o valor final cobrado
          do cliente continue fazendo sentido.
        </p>

        <h2>Impacto no preço final e na margem de serviços</h2>
        <p>
          Empresas de serviço que hoje pagam ISS com alíquotas baixas — por
          exemplo, 2% ou 3% em alguns municípios — podem sentir um aumento
          proporcional da carga tributária nominal ao longo da transição,
          já que a alíquota de referência do IBS somado à CBS tende a ser
          mais alta. O direito a se apropriar de créditos de IBS/CBS pagos
          em insumos e serviços contratados pode compensar parte desse
          efeito, mas isso exige reorganizar processos internos de compras e
          contratação para aproveitar corretamente esses créditos.
        </p>

        <ArticleCTA
          text="Quer entender como o IBS e a CBS vão impactar o preço dos seus serviços? Vamos analisar o seu caso específico."
          whatsappMessage="Olá! Li o artigo sobre IBS e CBS e gostaria de entender o impacto no preço dos serviços da minha empresa."
        />
      </div>

      <RelatedArticles
        slugs={["reforma-tributaria-o-que-muda-pequenas-empresas-2027", "revisar-contratos-antes-reforma-tributaria"]}
      />

      <footer className="mt-12 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-ink-faint)]">
        <p>
          Este artigo tem caráter informativo e não substitui uma análise
          jurídica individualizada. Alíquotas de referência ainda dependem de
          regulamentação complementar e podem ser ajustadas até a entrada em
          vigor de cada fase da reforma.
        </p>
        <Link href="/blog" className="mt-4 inline-block text-[var(--color-ink)] hover:text-[var(--color-brass)] hover:underline">
          ← Voltar para Atualizações Tributárias
        </Link>
      </footer>
    </article>
  );
}

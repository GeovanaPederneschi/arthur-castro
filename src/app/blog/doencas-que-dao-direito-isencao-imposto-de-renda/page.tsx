import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import ArticleCTA from "@/components/ArticleCTA";
import VideoSlot from "@/components/VideoSlot";
import RelatedArticles from "@/components/RelatedArticles";

const post = getPostBySlug("doencas-que-dao-direito-isencao-imposto-de-renda")!;

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
          Poucas pessoas sabem, mas quem se aposentou ou recebe pensão e foi
          diagnosticado com determinadas doenças graves tem direito a parar
          de pagar Imposto de Renda sobre esses valores — e ainda pode reaver
          o que foi descontado indevidamente nos últimos anos.
        </p>

        <h2>Quem tem direito à isenção</h2>
        <p>
          A isenção prevista na Lei nº 7.713/1988 se aplica a proventos de
          aposentadoria, reforma ou pensão recebidos por portadores de
          determinadas doenças graves, ainda que a doença tenha sido
          contraída depois da aposentadoria. Ela vale tanto para
          aposentados do INSS quanto para servidores públicos aposentados e
          pensionistas, sobre os valores recebidos desses benefícios.
        </p>

        <h2>Lista de doenças que dão direito à isenção</h2>
        <p>Entre as doenças que garantem o direito à isenção estão:</p>
        <ul>
          <li>Neoplasia maligna (câncer)</li>
          <li>AIDS</li>
          <li>Esclerose múltipla</li>
          <li>Doença de Parkinson</li>
          <li>Cardiopatia grave</li>
          <li>Cegueira (inclusive monocular, conforme entendimento jurisprudencial)</li>
          <li>Hanseníase</li>
          <li>Nefropatia grave (insuficiência renal crônica)</li>
          <li>Hepatopatia grave</li>
          <li>Espondiloartrose anquilosante</li>
          <li>Fibrose cística (mucoviscidose)</li>
          <li>Tuberculose ativa</li>
          <li>Alienação mental</li>
          <li>Paralisia irreversível e incapacitante</li>
          <li>Contaminação por radiação</li>
        </ul>

        <h2>A isenção vale só para aposentados do INSS?</h2>
        <p>
          Não. Ela também alcança aposentados e pensionistas de regimes
          próprios de previdência (servidores públicos). O ponto em comum é
          a natureza do rendimento: proventos de aposentadoria, reforma ou
          pensão. Salários de quem ainda está na ativa, por exemplo, não
          entram nessa isenção.
        </p>

        <h2>O que é preciso para comprovar a doença</h2>
        <p>
          A comprovação é feita por meio de laudo pericial emitido por
          serviço médico oficial da União, dos Estados, do Distrito Federal
          ou dos Municípios — não basta um laudo particular. O laudo deve
          indicar a doença, e pode ainda indicar se há ou não indicação de
          cura, o que impacta o tempo de validade da isenção.
        </p>

        <ArticleCTA
          text="Você ou um familiar aposentado tem uma dessas doenças? Vamos verificar se há direito à isenção e à restituição de valores já pagos."
          whatsappMessage="Olá! Li o artigo sobre isenção de Imposto de Renda para doenças graves e gostaria de saber se tenho direito."
        />
      </div>

      <RelatedArticles
        slugs={["como-pedir-restituicao-imposto-de-renda-doenca-grave", "inss-negou-isencao-imposto-de-renda-acao-judicial"]}
      />

      <footer className="mt-12 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-ink-faint)]">
        <p>
          Este artigo tem caráter informativo e não substitui uma análise
          jurídica individualizada. O direito à isenção depende da
          comprovação médica adequada e das circunstâncias de cada caso.
        </p>
        <Link href="/blog" className="mt-4 inline-block text-[var(--color-ink)] hover:text-[var(--color-brass)] hover:underline">
          ← Voltar para Atualizações Tributárias
        </Link>
      </footer>
    </article>
  );
}

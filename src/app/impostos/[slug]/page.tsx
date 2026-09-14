import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { taxCategories, getTaxCategoryBySlug } from "@/lib/tax-categories";
import { siteConfig } from "@/lib/site-config";
import ArticleCTA from "@/components/ArticleCTA";

export async function generateStaticParams() {
  return taxCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getTaxCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `/impostos/${category.slug}`,
    },
  };
}

export default async function TaxCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getTaxCategoryBySlug(slug);
  if (!category) notFound();

  const otherCategories = taxCategories.filter((c) => c.slug !== category.slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Impostos", item: `${siteConfig.url}/impostos` },
      { "@type": "ListItem", position: 3, name: category.title, item: `${siteConfig.url}/impostos/${category.slug}` },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <nav aria-label="breadcrumb" className="text-sm text-[var(--color-ink-faint)]">
        <Link href="/" className="hover:underline">Início</Link>
        <span className="mx-2">/</span>
        <Link href="/impostos" className="hover:underline">Impostos</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--color-ink-soft)]">{category.title}</span>
      </nav>

      <header className="mt-6 border-b border-[var(--color-line)] pb-8">
        <p className="eyebrow">Impostos</p>
        <h1 className="mt-3 font-serif text-3xl leading-tight text-[var(--color-navy)] sm:text-4xl">
          {category.title}
        </h1>
        <div className="mt-4 h-px w-16 bg-[var(--color-navy)]" />
        <p className="mt-5 max-w-2xl text-[var(--color-ink-soft)] leading-relaxed">
          {category.description}
        </p>
      </header>

      <div className="mt-10 divide-y divide-[var(--color-line)]">
        {category.taxes.map((tax) => (
          <div key={tax.name} className="py-7">
            <h2 className="font-serif text-xl text-[var(--color-navy)]">{tax.name}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {tax.description}
            </p>
          </div>
        ))}
      </div>

      <ArticleCTA
        text={`Está com uma questão relacionada a ${category.shortTitle.toLowerCase()}? Vamos conversar sobre o seu caso.`}
        whatsappMessage={`Olá! Vim pelo site, na seção de Impostos sobre ${category.shortTitle}, e gostaria de falar sobre uma questão tributária.`}
      />

      <div className="mt-12 border-t border-[var(--color-line)] pt-8">
        <p className="eyebrow">Outras categorias de impostos</p>
        <div className="mt-4 space-y-4">
          {otherCategories.map((c) => (
            <Link key={c.slug} href={`/impostos/${c.slug}`} className="group block">
              <p className="font-serif text-lg text-[var(--color-navy)] group-hover:text-[var(--color-wine)]">
                {c.title}
              </p>
              <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{c.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <footer className="mt-12 text-sm text-[var(--color-ink-faint)]">
        <Link href="/impostos" className="inline-block text-[var(--color-ink)] hover:text-[var(--color-wine)] hover:underline">
          ← Voltar para Impostos
        </Link>
      </footer>
    </article>
  );
}

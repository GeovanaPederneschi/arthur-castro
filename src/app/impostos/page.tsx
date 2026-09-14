import type { Metadata } from "next";
import Link from "next/link";
import { taxCategories } from "@/lib/tax-categories";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impostos",
  description:
    "Guia organizado por espécie tributária: impostos sobre consumo, renda, patrimônio e as novidades da Reforma Tributária, explicados de forma clara.",
  alternates: {
    canonical: "/impostos",
  },
};

export default function ImpostosPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <p className="eyebrow">Direito Tributário</p>
      <h1 className="mt-3 font-serif text-4xl text-[var(--color-navy)] sm:text-5xl">
        Impostos
      </h1>
      <div className="mt-6 h-px w-16 bg-[var(--color-navy)]" />
      <p className="mt-6 max-w-2xl text-[var(--color-ink-soft)] leading-relaxed">
        Um guia organizado por espécie tributária, para ajudar você a
        entender qual imposto está em jogo no seu caso — de {siteConfig.city}{" "}
        a qualquer lugar do Brasil.
      </p>

      <div className="mt-14 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
        {taxCategories.map((category, index) => (
          <Link
            key={category.slug}
            href={`/impostos/${category.slug}`}
            className="group grid gap-2 py-8 sm:grid-cols-[80px_1fr] sm:gap-8"
          >
            <span className="font-serif text-2xl text-[var(--color-navy)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="font-serif text-xl text-[var(--color-navy)] group-hover:underline">
                {category.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {category.description}
              </p>
              <p className="mt-3 text-xs uppercase tracking-wide text-[var(--color-ink-faint)]">
                {category.taxes.map((t) => t.name).join(" · ")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

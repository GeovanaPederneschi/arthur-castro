import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Atualizações Tributárias",
  description:
    `Artigos sobre Direito Tributário escritos por ${siteConfig.lawyerName}: ITBI, execução fiscal, isenção de Imposto de Renda, ` +
    "Reforma Tributária, malha fina e mais.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <p className="eyebrow">Atualizações Tributárias</p>
      <h1 className="mt-3 font-serif text-4xl text-[var(--color-ink)] sm:text-5xl">
        Atualizações Tributárias
      </h1>
      <p className="mt-5 max-w-2xl text-[var(--color-ink-soft)] leading-relaxed">
        Artigos com explicações claras sobre os principais temas de Direito
        Tributário, para ajudar você a entender seus direitos e obrigações
        diante do Fisco.
      </p>

      <div className="mt-14 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
        {sorted.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block py-8">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--color-ink-faint)]">
              <span className="eyebrow">{post.category}</span>
              <span>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h2 className="mt-3 font-serif text-2xl text-[var(--color-ink)] group-hover:text-[var(--color-brass)]">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

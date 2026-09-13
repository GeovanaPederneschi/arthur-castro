import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog Jurídico Tributário",
  description:
    `Artigos sobre Direito Tributário escritos por ${siteConfig.lawyerName}: malha fina, autuações fiscais, ` +
    "planejamento tributário, parcelamento de dívidas e mais.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-gold-500)]">
        Blog
      </p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-[var(--color-navy-900)] sm:text-4xl">
        Blog Jurídico Tributário
      </h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Artigos com explicações claras sobre os principais temas de Direito
        Tributário, para ajudar você a entender seus direitos e obrigações
        diante do Fisco.
      </p>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="font-medium uppercase tracking-wide text-[var(--color-gold-500)]">
                {post.category}
              </span>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
            <h2 className="mt-3 font-serif text-xl font-semibold text-[var(--color-navy-900)] group-hover:underline">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

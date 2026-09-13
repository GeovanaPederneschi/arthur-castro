import Link from "next/link";
import { posts } from "@/lib/blog-data";

export default function BlogTeaser() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-gold-500)]">
              Blog
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-[var(--color-navy-900)] sm:text-3xl">
              Conteúdo sobre Direito Tributário
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[var(--color-navy-900)] hover:underline"
          >
            Ver todos os artigos →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-gold-500)]">
                {post.category}
              </p>
              <h3 className="mt-2 font-serif text-lg font-semibold text-[var(--color-navy-900)] group-hover:underline">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { posts } from "@/lib/blog-data";

export default function BlogTeaser() {
  const featured = posts.filter((post) => post.featured);
  const items = (featured.length > 0 ? featured : posts).slice(0, 4);

  return (
    <section className="bg-[var(--color-paper)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--color-line)] pb-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Blog</p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--color-ink)] sm:text-4xl">
              Conteúdo sobre Direito Tributário
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-[var(--color-ink)] underline decoration-[var(--color-line)] underline-offset-4 hover:decoration-[var(--color-ink)]"
          >
            Ver todos os artigos →
          </Link>
        </div>

        <div className="mt-2 divide-y divide-[var(--color-line)]">
          {items.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block py-8 sm:flex sm:items-start sm:justify-between sm:gap-10"
            >
              <div>
                <p className="eyebrow">{post.category}</p>
                <h3 className="mt-2 font-serif text-xl text-[var(--color-ink)] group-hover:text-[var(--color-brass)]">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-[var(--color-ink-soft)]">{post.excerpt}</p>
              </div>
              <span className="mt-4 hidden shrink-0 text-sm text-[var(--color-ink-faint)] sm:mt-1 sm:block">
                Ler →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

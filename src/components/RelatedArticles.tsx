import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";

export default function RelatedArticles({
  slugs,
  heading = "Continue lendo sobre este tema",
}: {
  slugs: string[];
  heading?: string;
}) {
  const items = slugs.map(getPostBySlug).filter((p): p is NonNullable<typeof p> => Boolean(p));
  if (items.length === 0) return null;

  return (
    <div className="not-prose mt-12 border-t border-[var(--color-line)] pt-8">
      <p className="eyebrow">{heading}</p>
      <div className="mt-4 space-y-4">
        {items.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <p className="font-serif text-lg text-[var(--color-navy)] group-hover:text-[var(--color-wine)]">
              {post.title}
            </p>
            <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

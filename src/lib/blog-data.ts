export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  date: string; // ISO
  readingTime: string;
};

export const posts: BlogPost[] = [
  {
    slug: "problemas-tributarios-comuns",
    title: "7 problemas tributários mais comuns (e como resolver cada um)",
    excerpt:
      "Malha fina, autuações, dívidas com o Fisco e falta de planejamento: entenda os problemas tributários mais frequentes e como um advogado pode ajudar.",
    description:
      "Conheça os 7 problemas tributários mais comuns enfrentados por pessoas físicas e empresas no Brasil — malha fina do Imposto de Renda, autuações fiscais, dívidas tributárias, bitributação e mais — e saiba como resolver cada um com orientação jurídica adequada.",
    category: "Direito Tributário",
    date: "2026-09-13",
    readingTime: "9 min de leitura",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

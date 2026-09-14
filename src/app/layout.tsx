import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} | Advogado Tributarista em ${siteConfig.city}`,
    template: `%s | ${siteConfig.brand}`,
  },
  description:
    `Advogado tributarista em ${siteConfig.city} especializado em planejamento tributário, defesa em autuações fiscais, ` +
    `recuperação de créditos e parcelamento de dívidas com o Fisco. Atendimento consultivo e contencioso, com fale conosco pelo WhatsApp.`,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.lawyerName }],
  creator: siteConfig.lawyerName,
  applicationName: siteConfig.brand,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    title: `${siteConfig.brand} | Advogado Tributarista em ${siteConfig.city}`,
    description:
      "Planejamento tributário, defesa fiscal e recuperação de créditos. Fale agora pelo WhatsApp e agende uma consulta.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} | Advogado Tributarista`,
    description:
      "Planejamento tributário, defesa fiscal e recuperação de créditos. Fale agora pelo WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: siteConfig.googleSiteVerification,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brand,
    url: siteConfig.url,
  };

  const legalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: siteConfig.brand,
    image: `${siteConfig.url}/opengraph-image`,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    priceRange: "$$",
    areaServed: "BR",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      addressCountry: siteConfig.country,
    },
    founder: {
      "@type": "Person",
      name: siteConfig.lawyerName,
    },
    knowsAbout: [
      "Direito Tributário",
      "Planejamento Tributário",
      "Defesa Fiscal",
      "Recuperação de Créditos Tributários",
      "Imposto de Renda",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-paper)] text-[var(--foreground)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton
          message="Olá! Vim pelo site e gostaria de falar sobre uma questão tributária."
          floating
        />
      </body>
    </html>
  );
}

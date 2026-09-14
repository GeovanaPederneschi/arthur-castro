import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LandmarkBand from "@/components/LandmarkBand";
import WhyUs from "@/components/WhyUs";
import catedralSe from "../../public/images/catedral-se.jpg";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import BlogTeaser from "@/components/BlogTeaser";
import ContactSection from "@/components/ContactSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Advogado Tributarista em ${siteConfig.city}`,
  description:
    `Advogado tributarista em ${siteConfig.city}: planejamento tributário, defesa em autuações fiscais, recuperação de créditos e ` +
    `parcelamento de dívidas com o Fisco. Fale agora pelo WhatsApp.`,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <LandmarkBand src={catedralSe} alt="Catedral da Sé, São Paulo" />
      <WhyUs />
      <Process />
      <FAQ />
      <BlogTeaser />
      <ContactSection />
    </>
  );
}

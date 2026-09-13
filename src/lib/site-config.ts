/**
 * Configuração central do site. Troque os valores abaixo pelos dados reais
 * do escritório — todo o site (metatags, JSON-LD, rodapé, botão de WhatsApp,
 * formulário de contato) lê a partir daqui.
 */

export const siteConfig = {
  // Identidade
  lawyerName: "Arthur Castro",
  fullLegalName: "João Arthur Mendes Castro",
  oab: "OAB/SP 545.110",
  brand: "Arthur Castro Advocacia Tributária",
  tagline: "Segurança jurídica para suas questões com o Fisco",

  // Domínio de produção (usado em metadata, sitemap, robots, JSON-LD)
  // TODO: trocar pelo domínio real depois de configurar na Vercel
  url: "https://arthur-castro.vercel.app",

  // Localização (importante para SEO local — ajuste para a cidade real)
  city: "São Paulo",
  state: "SP",
  stateFull: "São Paulo",
  country: "BR",
  addressLocality: "São Paulo",
  addressRegion: "SP",
  serviceArea: "Atendimento em todo o Brasil (presencial em São Paulo/SP e 100% online para outras localidades)",

  // Contato
  phoneDisplay: "(11) 96285-6873",
  phoneE164: "+5511962856873",
  whatsappNumber: "5511962856873",
  email: "jamc.08062000@gmail.com",

  // Redes sociais (opcional — deixe "" para ocultar no rodapé)
  instagram: "",
  linkedin: "https://www.linkedin.com/in/joao-arthur-mendes-castro/",

  // SEO
  keywords: [
    "advogado tributarista",
    "advogado tributário",
    "planejamento tributário",
    "defesa fiscal",
    "malha fina imposto de renda",
    "recuperação de créditos tributários",
    "parcelamento de dívidas tributárias",
    "consultoria tributária empresarial",
    "advogado tributarista São Paulo",
  ],
} as const;

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

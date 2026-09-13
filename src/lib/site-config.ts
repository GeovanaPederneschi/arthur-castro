/**
 * Configuração central do site. Troque os valores abaixo pelos dados reais
 * do escritório — todo o site (metatags, JSON-LD, rodapé, botão de WhatsApp,
 * formulário de contato) lê a partir daqui.
 */

export const siteConfig = {
  // Identidade
  lawyerName: "Arthur Castro",
  oab: "OAB/SP 000.000", // TODO: número real da OAB
  brand: "Arthur Castro Advocacia Tributária",
  tagline: "Segurança jurídica para suas questões com o Fisco",

  // Domínio de produção (usado em metadata, sitemap, robots, JSON-LD)
  // TODO: trocar pelo domínio real depois de configurar na Vercel
  url: "https://www.arthurcastroadvocacia.com.br",

  // Localização (importante para SEO local — ajuste para a cidade real)
  city: "São Paulo",
  state: "SP",
  stateFull: "São Paulo",
  country: "BR",
  addressLocality: "São Paulo",
  addressRegion: "SP",
  serviceArea: "Atendimento em todo o Brasil (presencial em São Paulo/SP e 100% online para outras localidades)",

  // Contato
  phoneDisplay: "(11) 90000-0000", // TODO: telefone real
  phoneE164: "+5511900000000", // TODO: telefone real em formato E.164
  whatsappNumber: "5511900000000", // TODO: número real (DDI+DDD+número, só dígitos)
  email: "contato@arthurcastroadvocacia.com.br", // TODO: e-mail real

  // Redes sociais (opcional — deixe "" para ocultar no rodapé)
  instagram: "",
  linkedin: "",

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

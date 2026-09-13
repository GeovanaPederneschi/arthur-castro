export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  featured?: boolean;
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

  // Pilar 1 — ITBI e Transações Imobiliárias
  {
    slug: "como-calcular-itbi-sao-paulo",
    title: "Como calcular o ITBI em São Paulo: valor venal x valor de compra",
    excerpt:
      "Entenda a diferença entre o valor de compra do imóvel e o Valor Venal de Referência usado pela Prefeitura para cobrar o ITBI — e por que essa conta pode sair mais cara do que deveria.",
    description:
      "Guia prático sobre como calcular o ITBI em São Paulo: a diferença entre valor de compra e Valor Venal de Referência, como consultar a guia na Prefeitura e por que muitos compradores pagam mais do que deveriam.",
    category: "ITBI e Imóveis",
    date: "2026-09-14",
    readingTime: "7 min de leitura",
    featured: true,
  },
  {
    slug: "prefeitura-cobrou-itbi-a-mais",
    title: "A Prefeitura cobrou seu ITBI a mais? Entenda o Valor de Referência",
    excerpt:
      "Uma decisão do STJ limitou o uso do Valor Venal de Referência para cobrar ITBI. Veja o que isso significa na prática para quem comprou ou vai comprar um imóvel.",
    description:
      "Entenda por que cobrar ITBI com base no Valor Venal de Referência, sem processo administrativo próprio, pode ser considerado ilegal pelo STJ — e o que isso significa para quem comprou um imóvel em São Paulo.",
    category: "ITBI e Imóveis",
    date: "2026-09-18",
    readingTime: "8 min de leitura",
  },
  {
    slug: "como-reduzir-itbi-antes-de-pagar",
    title: "Como reduzir o ITBI antes de pagar (ou pedir restituição)",
    excerpt:
      "Se a guia de ITBI veio mais alta do que o valor da compra, existem caminhos administrativos e judiciais para corrigir isso antes ou depois do pagamento.",
    description:
      "Saiba como contestar a cobrança de ITBI acima do valor de compra do imóvel, incluindo os caminhos administrativo e judicial para reduzir o valor antes de pagar ou pedir restituição de valores já pagos.",
    category: "ITBI e Imóveis",
    date: "2026-09-22",
    readingTime: "8 min de leitura",
  },

  // Pilar 2 — Execução Fiscal e Bloqueio de Contas
  {
    slug: "conta-bloqueada-judicialmente-o-que-fazer",
    title: "Conta bancária da empresa bloqueada judicialmente: o que fazer",
    excerpt:
      "Sua empresa acordou com a conta travada por ordem judicial? Entenda o que é o bloqueio via Sisbajud e o que fazer nas primeiras 24 horas.",
    description:
      "O que fazer quando a conta bancária da empresa é bloqueada judicialmente por dívida fiscal: como funciona o Sisbajud, prazos e primeiros passos para reagir dentro das primeiras 24 horas.",
    category: "Execução Fiscal",
    date: "2026-09-15",
    readingTime: "7 min de leitura",
    featured: true,
  },
  {
    slug: "divida-fiscal-prescreve-bloqueio-ilegal",
    title: "Dívida fiscal prescreve? Quando o bloqueio da conta é ilegal",
    excerpt:
      "Nem toda cobrança de dívida ativa é válida. Entenda a prescrição intercorrente e outros vícios que podem tornar nulo o bloqueio da sua conta.",
    description:
      "Entenda o que é a prescrição intercorrente em execuções fiscais e outros vícios na Certidão de Dívida Ativa (CDA) que podem tornar ilegal o bloqueio judicial de contas bancárias.",
    category: "Execução Fiscal",
    date: "2026-09-19",
    readingTime: "8 min de leitura",
  },
  {
    slug: "excecao-pre-executividade-desbloquear-conta",
    title: "Exceção de Pré-Executividade: como desbloquear a conta sem pagar",
    excerpt:
      "Existe um instrumento jurídico para contestar uma execução fiscal sem precisar pagar a dívida à vista nem oferecer bens à penhora. Entenda como funciona.",
    description:
      "Como funciona a Exceção de Pré-Executividade para desbloquear a conta bancária de uma empresa em execução fiscal, sem necessidade de pagamento imediato da dívida ou penhora de bens.",
    category: "Execução Fiscal",
    date: "2026-09-23",
    readingTime: "8 min de leitura",
  },

  // Pilar 3 — Isenção de IRPF para Doenças Graves
  {
    slug: "doencas-que-dao-direito-isencao-imposto-de-renda",
    title: "Quais doenças dão direito à isenção do Imposto de Renda?",
    excerpt:
      "Aposentados e pensionistas com determinadas doenças graves têm direito à isenção do Imposto de Renda sobre proventos. Veja a lista atualizada.",
    description:
      "Lista atualizada das doenças graves que dão direito à isenção do Imposto de Renda para aposentados e pensionistas, com explicação sobre quem tem direito e como comprovar.",
    category: "Isenção de IRPF",
    date: "2026-09-16",
    readingTime: "7 min de leitura",
    featured: true,
  },
  {
    slug: "como-pedir-restituicao-imposto-de-renda-doenca-grave",
    title: "Como pedir a restituição do IR pago com doença grave",
    excerpt:
      "Quem tem direito à isenção pode reaver o imposto retido nos últimos cinco anos. Entenda o passo a passo para pedir a restituição.",
    description:
      "Passo a passo para solicitar a restituição do Imposto de Renda retido indevidamente nos últimos cinco anos por aposentados ou pensionistas com direito à isenção por doença grave.",
    category: "Isenção de IRPF",
    date: "2026-09-20",
    readingTime: "7 min de leitura",
  },
  {
    slug: "inss-negou-isencao-imposto-de-renda-acao-judicial",
    title: "INSS negou a isenção do Imposto de Renda? Veja o que fazer",
    excerpt:
      "Quando o pedido administrativo de isenção é negado, a via judicial costuma ser o caminho mais rápido e seguro para garantir o direito.",
    description:
      "O que fazer quando o INSS ou a Receita Federal negam a isenção do Imposto de Renda por doença grave, e por que a ação judicial pode ser o caminho mais rápido para garantir o benefício.",
    category: "Isenção de IRPF",
    date: "2026-09-24",
    readingTime: "7 min de leitura",
  },

  // Pilar 4 — Reforma Tributária
  {
    slug: "reforma-tributaria-o-que-muda-pequenas-empresas-2027",
    title: "Reforma Tributária: o que muda para pequenas empresas a partir de 2027",
    excerpt:
      "IBS, CBS e o fim gradual do modelo atual: entenda, de forma prática, o que a Reforma Tributária muda para pequenas e médias empresas.",
    description:
      "O que a Reforma Tributária muda na prática para pequenas e médias empresas a partir de 2027, incluindo o novo IVA dual (IBS e CBS) e o cronograma de transição.",
    category: "Reforma Tributária",
    date: "2026-09-17",
    readingTime: "8 min de leitura",
    featured: true,
  },
  {
    slug: "ibs-cbs-como-novo-iva-afeta-preco-servico",
    title: "IBS e CBS: como o novo IVA vai afetar o preço do seu serviço",
    excerpt:
      "O novo modelo de tributação sobre o consumo muda a forma de calcular impostos em serviços. Entenda o impacto no preço final e na margem do seu negócio.",
    description:
      "Como o IBS e a CBS, os novos tributos sobre o consumo criados pela Reforma Tributária, afetam a formação de preço e a margem de empresas prestadoras de serviço.",
    category: "Reforma Tributária",
    date: "2026-09-21",
    readingTime: "8 min de leitura",
  },
  {
    slug: "revisar-contratos-antes-reforma-tributaria",
    title: "Por que revisar contratos longos antes da Reforma Tributária",
    excerpt:
      "Contratos de longo prazo sem cláusula de repactuação tributária podem gerar prejuízo quando o novo sistema entrar em vigor. Veja o que revisar.",
    description:
      "Por que empresas com contratos de longo prazo precisam revisar cláusulas tributárias antes da transição da Reforma Tributária, evitando prejuízos com a mudança do sistema de impostos sobre consumo.",
    category: "Reforma Tributária",
    date: "2026-09-25",
    readingTime: "7 min de leitura",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

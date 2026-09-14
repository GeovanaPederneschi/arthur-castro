export type TaxItem = {
  name: string;
  description: string;
};

export type TaxCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  taxes: TaxItem[];
};

export const taxCategories: TaxCategory[] = [
  {
    slug: "consumo",
    title: "Impostos sobre Consumo",
    shortTitle: "Consumo",
    description:
      "Tributos que incidem sobre a circulação de mercadorias e a prestação de serviços, cobrados em praticamente toda operação comercial.",
    taxes: [
      {
        name: "ICMS",
        description:
          "Imposto estadual sobre a circulação de mercadorias e sobre serviços de transporte interestadual e intermunicipal e de comunicação. É um dos tributos mais relevantes para empresas que vendem produtos ou prestam esses serviços.",
      },
      {
        name: "ISS",
        description:
          "Imposto municipal sobre serviços de qualquer natureza, cobrado pela prefeitura onde o serviço é prestado (ou, em alguns casos, onde o tomador está localizado). A alíquota varia conforme o município e a atividade.",
      },
      {
        name: "IPI",
        description:
          "Imposto federal sobre produtos industrializados, cobrado na saída de produtos de estabelecimentos industriais ou equiparados. Incide de forma seletiva, com alíquotas diferentes conforme a essencialidade do produto.",
      },
      {
        name: "PIS",
        description:
          "Contribuição federal que financia o Programa de Integração Social, calculada sobre o faturamento ou a folha de pagamento das empresas, a depender do regime de apuração adotado.",
      },
      {
        name: "Cofins",
        description:
          "Contribuição federal para o financiamento da Seguridade Social, incidente sobre o faturamento das empresas, normalmente apurada em conjunto com o PIS.",
      },
    ],
  },
  {
    slug: "renda",
    title: "Impostos sobre Renda",
    shortTitle: "Renda",
    description:
      "Tributos que incidem sobre o resultado (lucro ou rendimento) obtido por pessoas físicas e empresas em um determinado período.",
    taxes: [
      {
        name: "IRPJ",
        description:
          "Imposto de Renda da Pessoa Jurídica, incidente sobre o lucro das empresas. A forma de apuração varia conforme o regime tributário: Simples Nacional, Lucro Presumido ou Lucro Real.",
      },
      {
        name: "CSLL",
        description:
          "Contribuição Social sobre o Lucro Líquido, cobrada das empresas em conjunto com o IRPJ, com finalidade de custear a Seguridade Social.",
      },
      {
        name: "Imposto de Renda",
        description:
          "Imposto de Renda da Pessoa Física, incidente sobre os rendimentos recebidos por indivíduos — salários, aluguéis, aposentadorias e outras fontes —, com regras próprias de isenção e dedução.",
      },
    ],
  },
  {
    slug: "patrimonio",
    title: "Impostos sobre Patrimônio",
    shortTitle: "Patrimônio",
    description:
      "Tributos que incidem sobre a propriedade ou a transmissão de bens, como imóveis e veículos.",
    taxes: [
      {
        name: "ITBI",
        description:
          "Imposto municipal sobre a transmissão de bens imóveis por ato oneroso, como a compra e venda. É pago pelo comprador, geralmente antes do registro da escritura em cartório.",
      },
      {
        name: "ITCMD",
        description:
          "Imposto estadual sobre a transmissão de bens por herança (causa mortis) ou doação. As alíquotas e regras variam conforme o estado onde o processo tramita.",
      },
      {
        name: "IPTU",
        description:
          "Imposto municipal sobre a propriedade predial e territorial urbana, cobrado anualmente pelos municípios com base no valor venal do imóvel.",
      },
      {
        name: "IPVA",
        description:
          "Imposto estadual sobre a propriedade de veículos automotores, cobrado anualmente com base no valor do veículo.",
      },
    ],
  },
  {
    slug: "reforma-tributaria",
    title: "Reforma Tributária",
    shortTitle: "Reforma Tributária",
    description:
      "Os novos tributos sobre o consumo criados pela Emenda Constitucional 132/2023, que substituirão gradualmente o modelo atual até 2033.",
    taxes: [
      {
        name: "IBS",
        description:
          "Imposto sobre Bens e Serviços, de competência compartilhada entre Estados e Municípios, que substituirá o ICMS e o ISS ao longo da transição da Reforma Tributária.",
      },
      {
        name: "CBS",
        description:
          "Contribuição sobre Bens e Serviços, de competência federal, que substituirá o PIS e a Cofins. Junto com o IBS, forma o novo modelo de IVA dual brasileiro.",
      },
      {
        name: "Imposto Seletivo",
        description:
          "Novo tributo federal que incidirá sobre produtos prejudiciais à saúde ou ao meio ambiente, como cigarros e bebidas alcoólicas, com função extrafiscal semelhante à de um \"imposto do pecado\".",
      },
    ],
  },
];

export function getTaxCategoryBySlug(slug: string) {
  return taxCategories.find((category) => category.slug === slug);
}

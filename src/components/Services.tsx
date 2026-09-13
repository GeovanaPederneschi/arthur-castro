const services = [
  {
    number: "01",
    title: "Defesa em Autuações e Processos Fiscais",
    description:
      "Elaboração de defesas administrativas e judiciais contra autuações, multas e cobranças indevidas de tributos federais, estaduais e municipais.",
  },
  {
    number: "02",
    title: "Recuperação de Créditos Tributários",
    description:
      "Identificação e recuperação de valores pagos indevidamente ou a maior, via compensação ou restituição administrativa e judicial.",
  },
  {
    number: "03",
    title: "Parcelamento e Negociação de Dívidas",
    description:
      "Análise de programas de parcelamento e transação tributária para regularizar débitos com a Receita Federal, Estados e Municípios.",
  },
  {
    number: "04",
    title: "Consultoria Tributária Empresarial",
    description:
      "Suporte contínuo para decisões de negócio com impacto fiscal: escolha de regime tributário, reorganizações societárias e operações relevantes.",
  },
  {
    number: "05",
    title: "Imposto de Renda: Malha Fina e Regularização",
    description:
      "Análise de notificações e pendências na malha fina, retificação de declarações e defesa em procedimentos fiscalizatórios da Receita Federal.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-[var(--color-paper)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Áreas de Atuação</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--color-ink)] sm:text-4xl">
            Soluções jurídicas para as principais questões tributárias
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)]">
            Atendimento consultivo e contencioso, com atenção às particularidades
            de cada caso e comunicação clara em cada etapa do processo.
          </p>
        </div>

        <div className="mt-14 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
          {services.map((service) => (
            <div
              key={service.title}
              className="grid gap-2 py-8 sm:grid-cols-[80px_1fr] sm:gap-8"
            >
              <span className="font-serif text-2xl text-[var(--color-brass)]">
                {service.number}
              </span>
              <div>
                <h3 className="font-serif text-lg text-[var(--color-ink)]">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Planejamento Tributário",
    description:
      "Estruturação lícita da carga tributária de pessoas físicas e empresas, com foco em segurança jurídica e redução de riscos fiscais.",
  },
  {
    title: "Defesa em Autuações e Processos Fiscais",
    description:
      "Elaboração de defesas administrativas e judiciais contra autuações, multas e cobranças indevidas de tributos federais, estaduais e municipais.",
  },
  {
    title: "Recuperação de Créditos Tributários",
    description:
      "Identificação e recuperação de valores pagos indevidamente ou a maior, via compensação ou restituição administrativa e judicial.",
  },
  {
    title: "Parcelamento e Negociação de Dívidas",
    description:
      "Análise de programas de parcelamento e transação tributária para regularizar débitos com a Receita Federal, Estados e Municípios.",
  },
  {
    title: "Consultoria Tributária Empresarial",
    description:
      "Suporte contínuo para decisões de negócio com impacto fiscal: escolha de regime tributário, reorganizações societárias e operações relevantes.",
  },
  {
    title: "Imposto de Renda: Malha Fina e Regularização",
    description:
      "Análise de notificações e pendências na malha fina, retificação de declarações e defesa em procedimentos fiscalizatórios da Receita Federal.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-gold-500)]">
            Áreas de Atuação
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-[var(--color-navy-900)] sm:text-3xl">
            Soluções jurídicas para as principais questões tributárias
          </h2>
          <p className="mt-3 text-slate-600">
            Atendimento consultivo e contencioso, com atenção às particularidades
            de cada caso e comunicação clara em cada etapa do processo.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-serif text-lg font-semibold text-[var(--color-navy-900)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

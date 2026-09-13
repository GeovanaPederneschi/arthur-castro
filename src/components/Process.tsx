const steps = [
  {
    number: "01",
    title: "Contato inicial",
    description: "Você explica sua situação pelo WhatsApp, formulário ou telefone.",
  },
  {
    number: "02",
    title: "Análise do caso",
    description: "Avaliação dos documentos e do histórico fiscal para entender riscos e alternativas.",
  },
  {
    number: "03",
    title: "Estratégia jurídica",
    description: "Apresentação das opções disponíveis, prazos e possíveis caminhos administrativos e judiciais.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description: "Condução do caso com atualizações periódicas até a solução ou regularização da questão.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-gold-500)]">
            Como funciona
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-[var(--color-navy-900)] sm:text-3xl">
            Um processo simples, do primeiro contato à solução
          </h2>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative pl-12">
              <span className="absolute left-0 top-0 font-serif text-3xl font-semibold text-[var(--color-gold-500)]">
                {step.number}
              </span>
              <h3 className="font-semibold text-[var(--color-navy-900)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

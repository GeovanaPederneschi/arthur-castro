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
    <section className="bg-[var(--color-paper)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Como funciona</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--color-navy)] sm:text-4xl">
            Um processo simples, do primeiro contato à solução
          </h2>
        </div>

        <div className="mt-14 grid gap-10 border-t border-[var(--color-line)] pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-serif text-3xl text-[var(--color-wine)]">
                {step.number}
              </span>
              <h3 className="mt-3 font-serif text-lg text-[var(--color-navy)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

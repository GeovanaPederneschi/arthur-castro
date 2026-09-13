const faqs = [
  {
    question: "O que faz um advogado tributarista?",
    answer:
      "O advogado tributarista atua na prevenção e solução de questões relacionadas a tributos federais, estaduais e municipais. Isso inclui planejamento tributário, defesa em fiscalizações e autuações, recuperação de valores pagos indevidamente e negociação de dívidas com o Fisco.",
  },
  {
    question: "Caí na malha fina do Imposto de Renda. O que devo fazer?",
    answer:
      "O primeiro passo é identificar o motivo da retenção na consulta do extrato da declaração no site da Receita Federal. Em muitos casos é possível retificar a declaração; em outros, pode ser necessário apresentar impugnação ou recurso administrativo. Um advogado tributarista pode analisar o caso e indicar o caminho mais adequado.",
  },
  {
    question: "Recebi uma notificação ou autuação fiscal. É grave?",
    answer:
      "Toda notificação tem prazos que precisam ser observados com atenção. Nem toda autuação é definitiva: existem instâncias administrativas de defesa antes de qualquer cobrança se tornar exigível. O ideal é buscar orientação assim que a notificação for recebida, para não perder prazos de defesa.",
  },
  {
    question: "É possível parcelar dívidas tributárias?",
    answer:
      "Sim. A depender do tributo e do órgão credor, existem programas de parcelamento ordinário e, eventualmente, programas especiais de transação tributária, que podem incluir descontos em multas e juros. Uma análise prévia ajuda a identificar a modalidade mais vantajosa para cada situação.",
  },
  {
    question: "Empresas pequenas também precisam de planejamento tributário?",
    answer:
      "Sim. A escolha do regime tributário (Simples Nacional, Lucro Presumido ou Lucro Real) e a forma como as operações são estruturadas têm impacto direto na carga tributária, independentemente do porte da empresa. O planejamento ajuda a evitar tanto o pagamento a maior de tributos quanto riscos fiscais por enquadramento incorreto.",
  },
  {
    question: "Como funciona uma consulta inicial?",
    answer:
      "A consulta inicial pode ser feita por WhatsApp, telefone ou videochamada. Nela, é feita uma primeira avaliação da situação e explicação sobre os próximos passos, prazos e documentos necessários para dar andamento ao caso.",
  },
];

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-[var(--color-paper-tint)] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Dúvidas Frequentes</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--color-ink)] sm:text-4xl">
            Perguntas comuns sobre Direito Tributário
          </h2>
        </div>

        <div className="mt-10 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base text-[var(--color-ink)]">
                {faq.question}
                <span className="shrink-0 font-sans text-lg text-[var(--color-brass)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}

import { siteConfig } from "@/lib/site-config";

const points = [
  {
    title: "Atendimento personalizado",
    description:
      "Cada caso é analisado individualmente, considerando o contexto financeiro e os objetivos de cada cliente.",
  },
  {
    title: "Comunicação clara",
    description:
      "Explicações em linguagem acessível sobre prazos, riscos e alternativas, sem juridiquês desnecessário.",
  },
  {
    title: "Atuação consultiva e contenciosa",
    description:
      "Suporte tanto na prevenção de problemas tributários quanto na defesa em processos administrativos e judiciais já em curso.",
  },
  {
    title: "Atendimento remoto",
    description:
      "Consultas por videochamada e acompanhamento digital de processos, para clientes de qualquer lugar do Brasil.",
  },
];

export default function WhyUs() {
  return (
    <section id="sobre" className="bg-[var(--color-paper-tint)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-20">
        <div>
          <p className="eyebrow">Sobre o escritório</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--color-ink)] sm:text-4xl">
            {siteConfig.lawyerName}
          </h2>
          <p className="mt-5 text-[var(--color-ink-soft)] leading-relaxed">
            Escritório dedicado ao Direito Tributário, com atuação voltada a
            pessoas físicas e empresas que enfrentam desafios com a Receita
            Federal, Estados e Municípios — desde o planejamento preventivo até
            a defesa em processos fiscais.
          </p>
          <p className="mt-4 text-[var(--color-ink-soft)] leading-relaxed">
            O objetivo é oferecer orientação jurídica objetiva, com foco em
            reduzir riscos, evitar passivos desnecessários e dar previsibilidade
            às decisões tributárias do dia a dia.
          </p>
          <p className="mt-6 text-sm text-[var(--color-ink-faint)]">{siteConfig.oab}</p>
        </div>

        <div className="divide-y divide-[var(--color-line)] border-t border-[var(--color-line)] md:border-t-0">
          {points.map((point) => (
            <div key={point.title} className="py-5 first:pt-0 md:first:pt-0">
              <h3 className="font-serif text-base text-[var(--color-ink)]">
                {point.title}
              </h3>
              <p className="mt-1.5 text-sm text-[var(--color-ink-soft)]">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

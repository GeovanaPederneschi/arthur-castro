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
    <section id="sobre" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-gold-500)]">
            Sobre o escritório
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-[var(--color-navy-900)] sm:text-3xl">
            {siteConfig.lawyerName}
          </h2>
          <p className="mt-4 text-slate-600">
            Escritório dedicado ao Direito Tributário, com atuação voltada a
            pessoas físicas e empresas que enfrentam desafios com a Receita
            Federal, Estados e Municípios — desde o planejamento preventivo até
            a defesa em processos fiscais.
          </p>
          <p className="mt-4 text-slate-600">
            O objetivo é oferecer orientação jurídica objetiva, com foco em
            reduzir riscos, evitar passivos desnecessários e dar previsibilidade
            às decisões tributárias do dia a dia.
          </p>
          <p className="mt-4 text-sm text-slate-500">{siteConfig.oab}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="rounded-xl bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-[var(--color-navy-900)]">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

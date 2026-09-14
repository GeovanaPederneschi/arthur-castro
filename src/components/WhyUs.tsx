import Image from "next/image";
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[240px_1fr] md:gap-16">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border border-[var(--color-line)] sm:h-56 sm:w-56">
              <Image
                src="/images/arthur-castro.jpg"
                alt={`${siteConfig.lawyerName}, advogado tributarista`}
                fill
                sizes="224px"
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-4 font-serif text-lg text-[var(--color-navy)]">
              {siteConfig.fullLegalName}
            </p>
            <p className="text-sm text-[var(--color-ink-faint)]">{siteConfig.oab}</p>
          </div>

          <div>
            <p className="eyebrow">Sobre o escritório</p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--color-navy)] sm:text-4xl">
              {siteConfig.fullLegalName}
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

            <div className="mt-10 grid gap-x-8 gap-y-5 border-t border-[var(--color-line)] pt-8 sm:grid-cols-2">
              {points.map((point) => (
                <div key={point.title}>
                  <h3 className="font-serif text-base text-[var(--color-navy)]">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[var(--color-ink-soft)]">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

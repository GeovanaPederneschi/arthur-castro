import { siteConfig } from "@/lib/site-config";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-900)] text-white">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-gold-400)]">
            Direito Tributário
          </p>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Advogado tributarista para proteger você e sua empresa das exigências do Fisco
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-200 sm:text-lg">
            Atuação em planejamento tributário, defesa em autuações fiscais,
            recuperação de créditos e negociação de dívidas com a Receita
            Federal, Estados e Municípios. Atendimento claro, direto e
            orientado à sua realidade.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              message="Olá! Vim pelo site e gostaria de falar sobre uma questão tributária."
              label="Falar agora no WhatsApp"
              className="justify-center px-6 py-3 text-base"
            />
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Agendar uma consulta
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center sm:text-left">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Foco</dt>
              <dd className="mt-1 text-sm font-semibold text-white">Direito Tributário</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Atuação</dt>
              <dd className="mt-1 text-sm font-semibold text-white">PF e Empresas</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Atendimento</dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                {siteConfig.city} e online
              </dd>
            </div>
          </dl>
        </div>

        <div className="hidden md:block">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="font-serif text-lg font-semibold text-[var(--color-gold-400)]">
              Quando procurar um advogado tributarista?
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>• Você caiu na malha fina ou recebeu notificação da Receita Federal</li>
              <li>• Sua empresa foi autuada ou recebeu cobrança indevida de tributos</li>
              <li>• Você tem dívidas tributárias e não sabe como negociar</li>
              <li>• Precisa estruturar sua empresa para pagar menos impostos, dentro da lei</li>
              <li>• Vai receber herança ou doação e quer entender o ITCMD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { siteConfig } from "@/lib/site-config";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <p className="eyebrow">Direito Tributário</p>

        <h1 className="mt-5 font-serif text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">
          Advocacia Tributária
        </h1>

        <div className="mx-auto mt-6 h-px w-16 bg-[var(--color-brass)]" />

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ink-soft)]">
          Se você recebeu uma notificação da Receita Federal, está com dívidas
          tributárias ou não sabe por onde começar, aqui você recebe
          explicações claras, sem termos técnicos difíceis, sobre o que fazer
          a seguir.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton
            message="Olá! Vim pelo site e gostaria de falar sobre uma questão tributária."
            label="Falar agora no WhatsApp"
          />
          <a
            href="#contato"
            className="inline-flex items-center justify-center border border-[var(--color-line)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
          >
            Agendar uma consulta
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-4 border-t border-[var(--color-line)] pt-8">
          <div>
            <dt className="eyebrow">Foco</dt>
            <dd className="mt-1 text-sm text-[var(--color-ink)]">Direito Tributário</dd>
          </div>
          <div>
            <dt className="eyebrow">Atuação</dt>
            <dd className="mt-1 text-sm text-[var(--color-ink)]">PF e Empresas</dd>
          </div>
          <div>
            <dt className="eyebrow">Atendimento</dt>
            <dd className="mt-1 text-sm text-[var(--color-ink)]">
              {siteConfig.city} e online
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

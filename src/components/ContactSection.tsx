"use client";

import { FormEvent, useState } from "react";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const inputClasses =
  "mt-1 w-full border-0 border-b border-[var(--color-line)] bg-transparent px-0 py-2 text-sm text-[var(--color-ink)] focus:border-[var(--color-ink)] focus:outline-none";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const topic = String(form.get("topic") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const text =
      `Olá! Meu nome é ${name}.\n` +
      (phone ? `Telefone para contato: ${phone}\n` : "") +
      (topic ? `Assunto: ${topic}\n` : "") +
      `Mensagem: ${message}`;

    setSubmitted(true);
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="bg-[var(--color-paper)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-20">
        <div>
          <p className="eyebrow">Fale comigo</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--color-ink)] sm:text-4xl">
            Vamos conversar sobre o seu caso
          </h2>
          <p className="mt-5 text-[var(--color-ink-soft)] leading-relaxed">
            Preencha o formulário ao lado ou entre em contato diretamente pelos
            canais abaixo. O envio do formulário abre uma conversa no WhatsApp
            com sua mensagem já preenchida.
          </p>

          <ul className="mt-10 space-y-4 border-t border-[var(--color-line)] pt-6 text-sm">
            <li className="flex items-center gap-3">
              <span className="eyebrow w-24 shrink-0">Telefone</span>
              <a href={`tel:${siteConfig.phoneE164}`} className="text-[var(--color-ink)] hover:text-[var(--color-brass)]">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="eyebrow w-24 shrink-0">E-mail</span>
              <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-ink)] hover:text-[var(--color-brass)]">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="eyebrow w-24 shrink-0">Atendimento</span>
              <span className="text-[var(--color-ink)]">{siteConfig.city} / {siteConfig.state} e todo o Brasil (online)</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="border border-[var(--color-line)] p-6 sm:p-8">
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="eyebrow">Nome</label>
              <input id="name" name="name" type="text" required className={inputClasses} />
            </div>

            <div>
              <label htmlFor="phone" className="eyebrow">Telefone / WhatsApp</label>
              <input id="phone" name="phone" type="tel" required className={inputClasses} />
            </div>

            <div>
              <label htmlFor="topic" className="eyebrow">Assunto</label>
              <select id="topic" name="topic" className={`${inputClasses} bg-[var(--color-paper)]`}>
                <option>Defesa em Autuação Fiscal</option>
                <option>Recuperação de Créditos</option>
                <option>Parcelamento de Dívidas</option>
                <option>Consultoria Tributária Empresarial</option>
                <option>Imposto de Renda / Malha Fina</option>
                <option>Outro assunto</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="eyebrow">Mensagem</label>
              <textarea id="message" name="message" rows={3} required className={inputClasses} />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-paper)] transition-colors hover:bg-[var(--color-charcoal)]"
            >
              Enviar e continuar no WhatsApp
            </button>

            {submitted && (
              <p className="text-sm text-[var(--color-ink-soft)]">
                Se o WhatsApp não abriu automaticamente, verifique se o navegador
                bloqueou pop-ups ou fale diretamente pelo botão flutuante.
              </p>
            )}

            <p className="text-xs text-[var(--color-ink-faint)]">
              Ao enviar, você será redirecionado ao WhatsApp com sua mensagem
              preenchida para dar continuidade ao atendimento.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { siteConfig, whatsappLink } from "@/lib/site-config";

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
    <section id="contato" className="bg-[var(--color-navy-900)] py-16 text-white sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-gold-400)]">
            Fale comigo
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
            Vamos conversar sobre o seu caso
          </h2>
          <p className="mt-4 text-slate-300">
            Preencha o formulário ao lado ou entre em contato diretamente pelos
            canais abaixo. O envio do formulário abre uma conversa no WhatsApp
            com sua mensagem já preenchida.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-[var(--color-gold-400)]">Telefone</span>
              <a href={`tel:${siteConfig.phoneE164}`} className="hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[var(--color-gold-400)]">E-mail</span>
              <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[var(--color-gold-400)]">Atendimento</span>
              <span>{siteConfig.city} / {siteConfig.state} e todo o Brasil (online)</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 text-slate-800 shadow-xl sm:p-8"
        >
          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-navy-700)] focus:outline-none focus:ring-1 focus:ring-[var(--color-navy-700)]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                Telefone / WhatsApp
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-navy-700)] focus:outline-none focus:ring-1 focus:ring-[var(--color-navy-700)]"
              />
            </div>

            <div>
              <label htmlFor="topic" className="text-sm font-medium text-slate-700">
                Assunto
              </label>
              <select
                id="topic"
                name="topic"
                className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-[var(--color-navy-700)] focus:outline-none focus:ring-1 focus:ring-[var(--color-navy-700)]"
              >
                <option>Planejamento Tributário</option>
                <option>Defesa em Autuação Fiscal</option>
                <option>Recuperação de Créditos</option>
                <option>Parcelamento de Dívidas</option>
                <option>Imposto de Renda / Malha Fina</option>
                <option>Outro assunto</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-slate-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-navy-700)] focus:outline-none focus:ring-1 focus:ring-[var(--color-navy-700)]"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
            >
              Enviar e continuar no WhatsApp
            </button>

            {submitted && (
              <p className="text-sm text-emerald-600">
                Se o WhatsApp não abriu automaticamente, verifique se o navegador
                bloqueou pop-ups ou fale diretamente pelo botão flutuante.
              </p>
            )}

            <p className="text-xs text-slate-500">
              Ao enviar, você será redirecionado ao WhatsApp com sua mensagem
              preenchida para dar continuidade ao atendimento.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

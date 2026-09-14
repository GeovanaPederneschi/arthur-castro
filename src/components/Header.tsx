"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import WhatsAppButton from "./WhatsAppButton";

const navLinks = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/impostos", label: "Impostos" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#faq", label: "Dúvidas" },
  { href: "/blog", label: "Atualizações" },
  { href: "/#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-lg tracking-wide text-[var(--color-navy)] sm:text-xl">
            {siteConfig.lawyerName}
          </span>
          <span className="eyebrow mt-0.5">Advocacia Tributária</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton
            message="Olá! Vim pelo site e gostaria de agendar uma conversa."
            variant="outline"
          />
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center border border-[var(--color-line)] text-[var(--color-ink)] md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-paper)] px-4 pb-5 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppButton
              message="Olá! Vim pelo site e gostaria de agendar uma conversa."
              variant="outline"
              className="mt-1 w-full"
            />
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import WhatsAppButton from "./WhatsAppButton";

const navLinks = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#faq", label: "Dúvidas Frequentes" },
  { href: "/blog", label: "Blog" },
  { href: "/#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-lg font-semibold text-[var(--color-navy-900)] sm:text-xl">
            {siteConfig.lawyerName}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-wide text-[var(--color-gold-500)]">
            Advocacia Tributária
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[var(--color-navy-900)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton message="Olá! Vim pelo site e gostaria de agendar uma conversa." />
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-[var(--color-navy-900)]"
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppButton
              message="Olá! Vim pelo site e gostaria de agendar uma conversa."
              className="mt-1 w-full"
            />
          </nav>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-charcoal)] text-[var(--color-paper-tint)]/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg text-[var(--color-paper)]">
            {siteConfig.lawyerName}
          </p>
          <p className="mt-1 text-xs uppercase tracking-wide text-[var(--color-brass-soft)]">{siteConfig.oab}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Advocacia especializada em Direito Tributário, com atuação consultiva e
            contenciosa para pessoas físicas e empresas.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-paper)]">
            Navegação
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/#servicos" className="hover:text-[var(--color-paper)]">Serviços</Link></li>
            <li><Link href="/#sobre" className="hover:text-[var(--color-paper)]">Sobre</Link></li>
            <li><Link href="/#faq" className="hover:text-[var(--color-paper)]">Dúvidas Frequentes</Link></li>
            <li><Link href="/blog" className="hover:text-[var(--color-paper)]">Atualizações Tributárias</Link></li>
            <li><Link href="/#contato" className="hover:text-[var(--color-paper)]">Contato</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-paper)]">
            Contato
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`tel:${siteConfig.phoneE164}`} className="hover:text-[var(--color-paper)]">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--color-paper)]">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.city} / {siteConfig.state} — {siteConfig.serviceArea}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-[var(--color-paper-tint)]/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.brand}. Todos os direitos reservados.
          </p>
          <p>
            O conteúdo deste site tem caráter informativo e publicitário, em
            conformidade com o Código de Ética e Disciplina da OAB, não
            constituindo consulta jurídica nem garantia de resultado.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-[var(--color-navy-950)] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg font-semibold text-white">
            {siteConfig.lawyerName}
          </p>
          <p className="mt-1 text-sm text-[var(--color-gold-400)]">{siteConfig.oab}</p>
          <p className="mt-4 max-w-xs text-sm text-slate-400">
            Advocacia especializada em Direito Tributário, com atuação consultiva e
            contenciosa para pessoas físicas e empresas.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Navegação
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/#servicos" className="hover:text-white">Serviços</Link></li>
            <li><Link href="/#sobre" className="hover:text-white">Sobre</Link></li>
            <li><Link href="/#faq" className="hover:text-white">Dúvidas Frequentes</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/#contato" className="hover:text-white">Contato</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Contato
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${siteConfig.phoneE164}`} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.city} / {siteConfig.state} — {siteConfig.serviceArea}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
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

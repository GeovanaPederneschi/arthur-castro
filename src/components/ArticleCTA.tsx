import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function ArticleCTA({
  text,
  whatsappMessage,
}: {
  text: string;
  whatsappMessage: string;
}) {
  return (
    <div className="not-prose my-10 border border-[var(--color-line)] bg-[var(--color-paper-tint)] p-6">
      <p className="font-serif text-lg text-[var(--color-ink)]">{text}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <WhatsAppButton message={whatsappMessage} label="Falar no WhatsApp agora" />
        <Link
          href="/#contato"
          className="inline-flex items-center justify-center border border-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
        >
          Preencher formulário de contato
        </Link>
      </div>
    </div>
  );
}

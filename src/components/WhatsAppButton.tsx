import { whatsappLink } from "@/lib/site-config";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.66 4.523 1.804 6.383L4 29l7.82-1.75A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.36l-.355-.21-4.64 1.038 1.02-4.53-.232-.37A9.71 9.71 0 0 1 5.25 15c0-5.93 4.824-10.75 10.754-10.75S26.75 9.07 26.75 15 21.934 24.75 16.004 24.75Zm5.62-7.36c-.308-.155-1.82-.9-2.102-1.003-.282-.103-.487-.154-.692.155-.205.309-.795 1.003-.975 1.21-.18.205-.36.23-.667.077-.308-.155-1.3-.48-2.475-1.53-.915-.816-1.532-1.824-1.712-2.132-.18-.309-.02-.475.135-.628.138-.138.308-.36.462-.54.154-.18.205-.309.308-.514.103-.205.051-.386-.026-.54-.077-.155-.692-1.67-.949-2.287-.25-.6-.504-.52-.692-.53-.18-.008-.386-.01-.59-.01-.206 0-.54.077-.822.386-.283.309-1.08 1.055-1.08 2.573s1.105 2.986 1.258 3.192c.154.205 2.174 3.32 5.267 4.655.736.318 1.31.508 1.758.65.738.235 1.41.202 1.94.123.592-.088 1.82-.744 2.076-1.463.257-.72.257-1.336.18-1.464-.077-.128-.283-.205-.59-.36Z" />
    </svg>
  );
}

export default function WhatsAppButton({
  message,
  label = "Fale no WhatsApp",
  floating = false,
  variant = "dark",
  className = "",
}: {
  message: string;
  label?: string;
  floating?: boolean;
  variant?: "dark" | "outline";
  className?: string;
}) {
  if (floating) {
    return (
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center overflow-hidden border border-[var(--color-ink)] bg-[var(--color-paper)] p-3 text-[var(--color-ink)] shadow-[0_2px_10px_rgba(28,27,25,0.08)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]"
      >
        <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
        <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium tracking-wide opacity-0 transition-all duration-300 group-hover:ml-2.5 group-hover:max-w-[140px] group-hover:opacity-100">
          Fale comigo
        </span>
      </a>
    );
  }

  const styles =
    variant === "outline"
      ? "border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
      : "bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-charcoal)]";

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${styles} ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
      {label}
    </a>
  );
}

"use client";

import { useMemo, useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

const ALIQUOTA = 0.03; // 3% — alíquota do ITBI no município de São Paulo

function parseValue(raw: string): number {
  const cleaned = raw.replace(/\./g, "").replace(",", ".").replace(/[^0-9.]/g, "");
  const value = parseFloat(cleaned);
  return Number.isFinite(value) ? value : 0;
}

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function ItbiCalculator() {
  const [purchaseRaw, setPurchaseRaw] = useState("");
  const [referenceRaw, setReferenceRaw] = useState("");

  const purchaseValue = parseValue(purchaseRaw);
  const referenceValue = parseValue(referenceRaw);

  const { base, itbiPago, itbiSobreCompra, diferenca } = useMemo(() => {
    const base = Math.max(purchaseValue, referenceValue);
    const itbiSobreCompra = purchaseValue * ALIQUOTA;
    const itbiPago = base * ALIQUOTA;
    const diferenca = Math.max(itbiPago - itbiSobreCompra, 0);
    return { base, itbiPago, itbiSobreCompra, diferenca };
  }, [purchaseValue, referenceValue]);

  const hasValues = purchaseValue > 0 && referenceValue > 0;
  const hasDifference = hasValues && diferenca > 0.01;

  function handleBlur(raw: string, setter: (v: string) => void) {
    const value = parseValue(raw);
    setter(value > 0 ? formatCurrency(value) : "");
  }

  return (
    <div className="not-prose my-10 border border-[var(--color-line)] p-6 sm:p-8">
      <p className="eyebrow">Calculadora simples</p>
      <h2 className="mt-2 font-serif text-xl text-[var(--color-ink)] sm:text-2xl">
        Quanto você pode estar pagando de ITBI a mais
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
        Digite os dois valores em reais (por exemplo, 500000 para R$
        500.000) para ver a diferença entre o ITBI calculado sobre o valor
        que você pagou e o ITBI calculado sobre o Valor Venal de Referência
        usado pela Prefeitura.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="purchase" className="eyebrow block min-h-[2.2em]">
            Valor que você pagou pelo imóvel
          </label>
          <input
            id="purchase"
            type="text"
            inputMode="decimal"
            placeholder="Ex: 500000"
            value={purchaseRaw}
            onChange={(e) => setPurchaseRaw(e.target.value)}
            onBlur={(e) => handleBlur(e.target.value, setPurchaseRaw)}
            className="mt-1 w-full border-0 border-b border-[var(--color-line)] bg-transparent px-0 py-2 text-base text-[var(--color-ink)] focus:border-[var(--color-ink)] focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="reference" className="eyebrow block min-h-[2.2em]">
            Valor Venal de Referência da Prefeitura
          </label>
          <input
            id="reference"
            type="text"
            inputMode="decimal"
            placeholder="Ex: 650000"
            value={referenceRaw}
            onChange={(e) => setReferenceRaw(e.target.value)}
            onBlur={(e) => handleBlur(e.target.value, setReferenceRaw)}
            className="mt-1 w-full border-0 border-b border-[var(--color-line)] bg-transparent px-0 py-2 text-base text-[var(--color-ink)] focus:border-[var(--color-ink)] focus:outline-none"
          />
        </div>
      </div>

      {hasValues && (
        <div className="mt-8 border-t border-[var(--color-line)] pt-6">
          <dl className="grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="eyebrow">ITBI sobre o valor pago</dt>
              <dd className="mt-1 font-serif text-lg text-[var(--color-ink)]">
                {formatCurrency(itbiSobreCompra)}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">ITBI cobrado pela Prefeitura</dt>
              <dd className="mt-1 font-serif text-lg text-[var(--color-ink)]">
                {formatCurrency(itbiPago)}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Possível diferença cobrada a mais</dt>
              <dd className={`mt-1 font-serif text-lg ${hasDifference ? "text-[var(--color-brass)]" : "text-[var(--color-ink)]"}`}>
                {formatCurrency(diferenca)}
              </dd>
            </div>
          </dl>

          {hasDifference ? (
            <div className="mt-6">
              <p className="text-sm text-[var(--color-ink-soft)]">
                Com base nos valores informados, a Prefeitura pode estar
                usando uma base de cálculo ({formatCurrency(base)}) mais alta
                do que o valor da sua transação para cobrar o ITBI.
              </p>
              <div className="mt-4">
                <WhatsAppButton
                  message="Olá! Usei a calculadora de ITBI do site e percebi que posso estar pagando a mais. Gostaria de entender melhor."
                  label="Falar sobre o meu caso no WhatsApp"
                />
              </div>
            </div>
          ) : (
            <p className="mt-6 text-sm text-[var(--color-ink-soft)]">
              Com os valores informados, não há diferença entre as duas
              bases de cálculo.
            </p>
          )}
        </div>
      )}

      <p className="mt-6 text-xs text-[var(--color-ink-faint)]">
        Cálculo estimado com a alíquota de 3% do ITBI em São Paulo, apenas
        para fins ilustrativos. O valor final depende da análise do caso
        concreto e da legislação municipal vigente.
      </p>
    </div>
  );
}

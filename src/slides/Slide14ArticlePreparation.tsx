import type { ReactNode } from "react";
import { Figure, Header, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

// Página 7 de Zhou et al. (2024): 595 × 791 pt, desenhada com 500 px de altura.
const PAGE_SCALE = 500 / 790.866;
const PAGE_LEFT = 64;
const PAGE_TOP = 130;

const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";

type Item = {
  id: string;
  kind: string;
  color: string;
  // caixa do item na página, em pontos do PDF
  box: [left: number, top: number, right: number, bottom: number];
  content: ReactNode;
};

const items: Item[] = [
  {
    id: "item-000086",
    kind: "título",
    color: "var(--blue)",
    box: [304, 53, 548, 82],
    content: "Contamination of canned and dry food with AFB1, DON…",
  },
  {
    id: "item-000087",
    kind: "parágrafo",
    color: "var(--green)",
    box: [304, 90, 548, 310],
    content: "Overall, 14 canned food items and 79 dry food items were assessed…",
  },
  {
    id: "item-000082",
    kind: "tabela",
    color: "var(--orange)",
    box: [56, 50, 266, 718],
    content: (
      <>
        Cada célula tem o próprio ID:{" "}
        <span style={{ fontFamily: MONO, fontWeight: 700 }}>item-000082:cell:7:7</span> = 5.49*
      </>
    ),
  },
];

export function Slide14ArticlePreparation(_: SlideProps) {
  return (
    <Slide>
      <Header title="Antes da leitura, o PDF vira uma lista de itens com ID" number={12} section="Preparação do artigo" />

      <Figure
        src="./assets/zhou-pagina-7.png"
        alt="Página 7 do artigo de Zhou et al. (2024) com os itens marcados"
        style={{ left: PAGE_LEFT, top: PAGE_TOP, width: 595.276 * PAGE_SCALE, height: 500, border: "1px solid var(--line)" }}
      />
      {items.map(({ id, color, box: [left, top, right, bottom] }) => (
        <div
          key={id}
          style={{
            position: "absolute",
            left: PAGE_LEFT + left * PAGE_SCALE,
            top: PAGE_TOP + top * PAGE_SCALE,
            width: (right - left) * PAGE_SCALE,
            height: (bottom - top) * PAGE_SCALE,
            border: `3px solid ${color}`,
            borderRadius: 4,
            background: `color-mix(in srgb, ${color} 10%, transparent)`,
          }}
        />
      ))}

      <svg style={{ position: "absolute", left: 462, top: 360, width: 44, height: 40 }} viewBox="0 0 44 40" aria-hidden="true">
        <path d="M4 20h32M24 8l12 12-12 12" fill="none" stroke="var(--navy)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div style={{ position: "absolute", left: 530, top: 140, width: 686, display: "flex", flexDirection: "column", gap: 22 }}>
        {items.map(({ id, kind, color, content }) => (
          <div key={id}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* mesma marcação da caixa na página, para ligar o item ao trecho do PDF */}
              <span style={{ width: 16, height: 16, border: `3px solid ${color}`, borderRadius: 4, background: `color-mix(in srgb, ${color} 10%, transparent)` }} />
              <span style={{ fontFamily: MONO, fontSize: 20, fontWeight: 700, color }}>{id}</span>
              <span style={{ fontSize: 17, color: "var(--muted)" }}>{kind}</span>
            </div>
            <div style={{ marginTop: 6, fontSize: 19, lineHeight: 1.4, color: "var(--ink)" }}>{content}</div>
          </div>
        ))}
      </div>

      <Text style={{ left: 530, top: 420, width: 686, fontSize: 20, lineHeight: 1.4, fontWeight: 700, color: "var(--navy)" }}>
        O agente cita esses IDs como evidência, e o código confere o valor no item citado.
      </Text>
    </Slide>
  );
}

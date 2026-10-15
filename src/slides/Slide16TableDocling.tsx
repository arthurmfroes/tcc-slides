import { Figure, Header, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

// tabela-zhou-docling.png tem 927 × 584 px; as marcações usam essas coordenadas.
const LEFT = 64;
const TOP = 130;
const SCALE = 720 / 927;

const marks = [
  { box: [10, 38, 260, 457], label: "Micotoxina e ração misturadas no rótulo de cada linha" },
  { box: [10, 455, 902, 561], label: "Cabeçalho no fim da tabela, quebrado em 3 linhas" },
];

function Badge({ left, top, n }: { left: number; top: number; n: number }) {
  return (
    <span style={{ position: "absolute", left, top, width: 30, height: 30, borderRadius: "50%", background: "var(--orange)", color: "white", fontSize: 16, fontWeight: 700, display: "grid", placeItems: "center" }}>
      {n}
    </span>
  );
}

export function Slide16TableDocling(_: SlideProps) {
  return (
    <Slide>
      <Header title="A mesma tabela convertida pelo Docling" number={15} section="Preparação do artigo" />
      <Figure
        src="./assets/tabela-zhou-docling.png"
        alt="Tabela 6 após a conversão do Docling, com linhas e colunas trocadas"
        style={{ left: LEFT, top: TOP, width: 927 * SCALE, height: 584 * SCALE }}
      />
      {marks.map(({ box: [left, top, right, bottom] }, index) => (
        <div key={index}>
          <div
            style={{
              position: "absolute",
              left: LEFT + left * SCALE,
              top: TOP + top * SCALE,
              width: (right - left) * SCALE,
              height: (bottom - top) * SCALE,
              border: "3px solid var(--orange)",
              borderRadius: 6,
              background: "color-mix(in srgb, var(--orange) 8%, transparent)",
            }}
          />
          <Badge left={LEFT + right * SCALE - 15} top={TOP + top * SCALE - 15} n={index + 1} />
        </div>
      ))}

      <div style={{ position: "absolute", left: 840, top: 200, width: 376, display: "flex", flexDirection: "column", gap: 36 }}>
        {marks.map(({ label }, index) => (
          <div key={label} style={{ display: "flex", gap: 14, fontSize: 22, lineHeight: 1.4, color: "var(--ink)" }}>
            <span style={{ flex: "none", width: 30, height: 30, marginTop: 1, borderRadius: "50%", background: "var(--orange)", color: "white", fontSize: 16, fontWeight: 700, display: "grid", placeItems: "center" }}>{index + 1}</span>
            {label}
          </div>
        ))}
      </div>

      <Text style={{ left: 64, top: 612, width: 1152, fontSize: 22, fontWeight: 700, color: "var(--navy)", textAlign: "center" }}>
        Os números estão lá, mas não se sabe a que micotoxina e ração cada um pertence.
      </Text>
    </Slide>
  );
}

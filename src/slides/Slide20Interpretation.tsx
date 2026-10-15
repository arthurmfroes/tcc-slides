import type { CSSProperties } from "react";
import { Header, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

type Row = [field: string, sheet: string, pipeline: string];

const zhouRows: Row[] = [
  ["n", "93", "93"],
  ["Média", "3,17", "3,17"],
  ["Máximo", "5,11", "5,11"],
  ["Positividade", "32", "32,26"],
  ["Apresentação", "—", "Pet food"],
];

const skrzydlewskiRows: Row[] = [
  ["Média", "30", "0"],
  ["Mediana", "—", "28"],
];

const RED = "#c0392b";

const panel: CSSProperties = {
  position: "absolute",
  top: 130,
  height: 365,
  background: "var(--pale)",
  border: "1px solid var(--line)",
  borderRadius: 14,
  padding: "22px 26px",
};

const cell: CSSProperties = { padding: "9px 0", fontSize: 20, color: "var(--ink)", borderTop: "1px solid var(--line)" };
const head: CSSProperties = { padding: "0 0 8px", fontSize: 15, fontWeight: 700, color: "var(--muted)", textAlign: "left" };

function Chip({ same }: { same: boolean }) {
  const color = same ? "var(--green)" : RED;
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 999,
        fontSize: 15,
        fontWeight: 700,
        color,
        background: `color-mix(in srgb, ${color} 12%, white)`,
      }}
    >
      {same ? "igual" : "diferente"}
    </span>
  );
}

function Comparison({ rows, chips = true }: { rows: Row[]; chips?: boolean }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={head}>Campo</th>
          <th style={head}>Planilha</th>
          <th style={head}>Pipeline</th>
          {chips && <th style={head} />}
        </tr>
      </thead>
      <tbody>
        {rows.map(([field, sheet, pipeline]) => (
          <tr key={field}>
            <td style={{ ...cell, fontWeight: 700 }}>{field}</td>
            <td style={cell}>{sheet}</td>
            <td style={cell}>{pipeline}</td>
            {chips && <td style={{ ...cell, textAlign: "right" }}><Chip same={sheet === pipeline} /></td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Slide20Interpretation(_: SlideProps) {
  return (
    <Slide>
      <Header title="Uma divergência não identifica automaticamente um erro" number={30} section="Interpretação" />

      <div style={{ ...panel, left: 64, width: 600 }}>
        <h2 style={{ margin: "0 0 16px", fontSize: 22, fontWeight: 700, color: "var(--navy)" }}>Zhou et al. (2024)</h2>
        <Comparison rows={zhouRows} />
      </div>

      <div style={{ ...panel, left: 696, width: 520 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "var(--navy)" }}>Skrzydlewski et al. (2025)</h2>
        <div style={{ margin: "4px 0 16px", fontSize: 16, color: "var(--muted)" }}>Valores preenchidos em 30 pares</div>
        <Comparison rows={skrzydlewskiRows} chips={false} />
        <div style={{ marginTop: 24, fontSize: 20, lineHeight: 1.45, color: "var(--ink)" }}>
          No artigo, 28 desses valores são <strong>medianas</strong>.
        </div>
      </div>

      <Text style={{ left: 64, top: 530, width: 1152, fontSize: 22, fontWeight: 700, color: "var(--navy)", textAlign: "center" }}>
        Só a leitura do artigo diz se a diferença é erro do pipeline ou da planilha.
      </Text>
    </Slide>
  );
}

import type { CSSProperties } from "react";
import { Header, Slide } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

// Grade reconstruída da Tabela 6 de Zhou et al. (2024), como o pipeline gravou em tables/item-000082.md.
const toxins = ["AFB1 (µg/kg)", "DON (mg/kg)", "FBs (mg/kg)", "OTA (µg/kg)", "T-2 (µg/kg)", "ZEN (µg/kg)"];
const rows: [string, ...string[]][] = [
  ["No. of samples", "45", "48", "45", "48", "45", "48", "45", "48", "45", "48", "45", "48"],
  ["No. of contaminated samples", "15", "15", "44", "48", "13", "8", "36", "32", "20", "32", "5", "2"],
  ["Contamination rate(%)", "33.33", "31.25", "97.78", "100", "28.89", "16.67", "80", "66.67", "44.44", "66.67", "11.11", "4.17"],
  ["Minimum", "2.09", "2.02", "0.25", "0.30", "0.25", "0.20", "2.00", "1.99", "10.00", "10.00", "30.00", "20.00"],
  ["Maximum", "4.00", "5.11", "1.70", "1.73", "3.95", "4.38", "10.55*", "17.10", "40.00", "40.00", "40.00", "30.00"],
  ["Mean^b", "2.97", "3.38", "0.64", "0.67", "1.89", "2.57", "5.49*", "7.14", "21.50", "19.06", "32.00", "25.00"],
];

const cell: CSSProperties = { padding: "8px 6px", fontSize: 15, borderBottom: "1px solid var(--line)", textAlign: "right", color: "var(--ink)" };
const header: CSSProperties = { ...cell, fontWeight: 700, color: "var(--navy)", background: "var(--pale-blue)", textAlign: "center" };

const points = [
  "Cada tabela é recortada do PDF como imagem e transcrita por um modelo de visão.",
  "Do Docling ficam só a posição da tabela, a legenda e as notas.",
];

export function Slide17TableVision(_: SlideProps) {
  return (
    <Slide>
      <Header title="A mesma tabela reconstruída por modelo de visão" number={16} section="Preparação do artigo" />

      <table style={{ position: "absolute", left: 64, top: 140, width: 1152, borderCollapse: "collapse", tableLayout: "fixed" }}>
        <colgroup>
          <col style={{ width: 228 }} />
          {Array.from({ length: 12 }, (_, index) => <col key={index} />)}
        </colgroup>
        <thead>
          <tr>
            <th rowSpan={2} style={{ ...header, textAlign: "left" }}>Item</th>
            {toxins.map((toxin) => <th key={toxin} colSpan={2} style={{ ...header, borderLeft: "2px solid white" }}>{toxin}</th>)}
          </tr>
          <tr>
            {toxins.flatMap((toxin) => [
              <th key={`${toxin}-f`} style={{ ...header, fontWeight: 600, fontSize: 14, borderLeft: "2px solid white" }}>Feline food</th>,
              <th key={`${toxin}-c`} style={{ ...header, fontWeight: 600, fontSize: 14 }}>Canine food</th>,
            ])}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, ...values]) => (
            <tr key={label}>
              <td style={{ ...cell, textAlign: "left", fontWeight: 700 }}>{label}</td>
              {values.map((value, index) => <td key={index} style={cell}>{value}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <ul style={{ position: "absolute", left: 64, top: 500, width: 1152, margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
        {points.map((point) => (
          <li key={point} style={{ display: "flex", gap: 16, fontSize: 22, lineHeight: 1.4, color: "var(--ink)" }}>
            <span style={{ flex: "none", width: 10, height: 10, marginTop: 11, borderRadius: "50%", background: "var(--green)" }} />
            {point}
          </li>
        ))}
      </ul>
    </Slide>
  );
}

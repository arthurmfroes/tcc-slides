import { Header, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

export const correspondenceData = [
  ["Micotoxina", 218],
  ["Produto", 190],
  ["Apresentação", 136],
  ["Categoria", 150],
  ["País", 224],
  ["Método", 142],
  ["Nº de amostras", 225],
  ["Positividade", 210],
  ["Média", 175],
  ["Máximo", 209],
] as const;

export function Slide19FieldCorrespondence(_: SlideProps) {
  const barStart = 190;
  const barWidth = 840;
  return (
    <Slide>
      <Header title="A correspondência varia bastante entre os campos" number={29} section="Resultados preliminares" />
      <svg className="chart-bars" viewBox="0 0 1130 440" role="img" aria-label="Correspondência em dez campos para 226 pares">
        {correspondenceData.map(([label, value], index) => {
          const y = 8 + index * 40;
          const width = (value / 226) * barWidth;
          return <g key={label}>
            <text x="170" y={y + 21} fontSize="15" textAnchor="end">{label}</text>
            <rect x={barStart} y={y} width={barWidth} height="26" rx="4" fill="#eaf1fa" />
            <rect x={barStart} y={y} width={width} height="26" rx="4" fill="#174a8b" />
            <text className="value" x={barStart + width + 10} y={y + 20} fontSize="14">{value}</text>
          </g>;
        })}
      </svg>
      <Text style={{ left: 320, top: 585, width: 640, height: 28, fontSize: 16, color: "var(--muted)", textAlign: "center" }}>Contagem de valores correspondentes em 226 pares</Text>
      <Text style={{ left: 265, top: 625, width: 750, height: 30, fontSize: 21, fontWeight: 700, color: "var(--orange)", textAlign: "center" }}>Apresentação e método concentram as maiores divergências.</Text>
    </Slide>
  );
}

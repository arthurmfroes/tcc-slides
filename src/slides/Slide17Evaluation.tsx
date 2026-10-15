import { Header, Panel, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

const steps = [
  "Selecionar a última execução concluída de cada artigo já catalogado.",
  "Parear manualmente uma linha do pipeline com a linha da planilha que representa a mesma ocorrência.",
  "Comparar separadamente dez campos compartilhados pelas duas representações.",
  "Usar o artigo para interpretar divergências, sem tratar a planilha como verdade absoluta.",
];

export function Slide17Evaluation(_: SlideProps) {
  return (
    <Slide>
      <Header title="Como a avaliação preliminar foi feita" number={27} section="Avaliação" />
      {steps.map((step, index) => {
        const top = [170, 285, 400, 515][index];
        return <div key={step}>
          <Panel tone={index === 3 ? "pale" : "orange"} style={{ left: 110, top, width: 56, height: 56, background: index === 3 ? "var(--green)" : "var(--orange)" }}>
            <Text style={{ left: 0, top: 8, width: 56, height: 40, fontSize: 24, fontWeight: 700, color: "white", textAlign: "center" }}>{index + 1}</Text>
          </Panel>
          <Text style={{ left: 200, top: top + 2, width: 930, height: 78, fontSize: 23, lineHeight: 1.42, color: "var(--ink)" }}>{step}</Text>
        </div>;
      })}
    </Slide>
  );
}

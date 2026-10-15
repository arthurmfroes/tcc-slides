import { Header, Metric, Panel, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

export function Slide18Coverage(_: SlideProps) {
  return (
    <Slide>
      <Header title="A saída cobriu quase toda a catalogação do recorte" number={28} section="Resultados preliminares" />
      <Metric value="20" label="artigos com execução concluída" left={120} width={250} />
      <Metric value="19" label="artigos com pares manuais" left={395} width={250} />
      <Metric value="233" label="registros na planilha" left={670} width={250} />
      <Metric value="226" label="registros pareados" left={945} width={250} color="var(--green)" />
      <Panel tone="blue" style={{ left: 170, top: 445, width: 940, height: 105 }}>
        <Text style={{ left: 40, top: 13, width: 220, height: 70, fontSize: 48, fontWeight: 700, color: "var(--green)", textAlign: "center" }}>97,0%</Text>
        <Text style={{ left: 270, top: 21, width: 620, height: 66, fontSize: 24, lineHeight: 1.3, fontWeight: 700, color: "var(--navy)" }}>dos registros da planilha tiveram uma ocorrência correspondente produzida pelo pipeline</Text>
      </Panel>
      <Text style={{ left: 330, top: 592, width: 620, height: 35, fontSize: 22, fontWeight: 700, color: "var(--orange)", textAlign: "center" }}>Cobertura do recorte não equivale a precisão.</Text>
    </Slide>
  );
}

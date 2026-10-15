import { Header, Panel, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

export function Slide13ReaderEvidence(_: SlideProps) {
  return (
    <Slide>
      <Header title="O agente leitor registra valor e evidência juntos" number={19} section="Agentes" />
      <Panel tone="pale" style={{ left: 85, top: 155, width: 535, height: 395 }}>
        <Text style={{ left: 35, top: 35, width: 460, height: 35, fontSize: 22, fontWeight: 700, color: "var(--blue)" }}>Trecho entregue ao agente</Text>
        <Text style={{ left: 35, top: 95, width: 455, height: 210, fontSize: 18, lineHeight: 1.55, color: "var(--ink)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}># Page 4{"\n"}[item-000072] The samples were collected in 2021.{"\n\n"}# Table item-000060{"\n"}[item-000060:cell:3:2] 12</Text>
      </Panel>
      <Panel tone="blue" style={{ left: 660, top: 155, width: 535, height: 395 }}>
        <Text style={{ left: 35, top: 35, width: 460, height: 35, fontSize: 22, fontWeight: 700, color: "var(--blue)" }}>Registro da evidência</Text>
        <Text style={{ left: 35, top: 95, width: 455, height: 210, fontSize: 20, lineHeight: 1.48, color: "var(--ink)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>registro: rec-000012{"\n"}campo: positivos{"\n"}valor: 12{"\n"}literal: "12"{"\n"}fonte: item-000060:cell:3:2</Text>
      </Panel>
      <Text style={{ left: 210, top: 590, width: 860, height: 40, fontSize: 24, fontWeight: 700, color: "var(--green)", textAlign: "center" }}>O programa verifica se a fonte existe e se contém o valor citado.</Text>
    </Slide>
  );
}

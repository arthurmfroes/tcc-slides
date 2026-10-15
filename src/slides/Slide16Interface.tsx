import { Figure, Header, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

export function Slide16Interface(_: SlideProps) {
  return (
    <Slide>
      <Header title="A interface apoia acompanhamento e conferência" number={26} section="Aplicação" />
      <Figure src="./assets/interface-resultado.png" alt="Tela de resultados do pipeline" style={{ left: 70, top: 145, width: 560, height: 410 }} rounded />
      <Figure src="./assets/interface-conferencia.png" alt="Tela de conferência entre pipeline e planilha" style={{ left: 650, top: 145, width: 560, height: 410 }} rounded />
      <Text style={{ left: 210, top: 570, width: 280, height: 30, fontSize: 21, fontWeight: 700, color: "var(--blue)", textAlign: "center" }}>Resultado</Text>
      <Text style={{ left: 790, top: 570, width: 280, height: 30, fontSize: 21, fontWeight: 700, color: "var(--blue)", textAlign: "center" }}>Conferência</Text>
      <Text style={{ left: 170, top: 615, width: 940, height: 35, fontSize: 20, color: "var(--muted)", textAlign: "center" }}>Valores abrem a evidência no artigo. O pareamento organiza a comparação por campo.</Text>
    </Slide>
  );
}

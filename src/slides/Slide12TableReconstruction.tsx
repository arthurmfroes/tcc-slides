import { Figure, Header, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

export function Slide12TableReconstruction(_: SlideProps) {
  return (
    <Slide>
      <Header title="Tabelas complexas exigem reconstrução visual" number={14} section="Ingestão" />
      <Text style={{ left: 75, top: 145, width: 340, height: 35, fontSize: 20, fontWeight: 700, color: "var(--navy)", textAlign: "center" }}>Artigo original</Text>
      <Text style={{ left: 470, top: 145, width: 340, height: 35, fontSize: 20, fontWeight: 700, color: "var(--green)", textAlign: "center" }}>Reconstrução por IA</Text>
      <Text style={{ left: 865, top: 145, width: 340, height: 35, fontSize: 20, fontWeight: 700, color: "var(--orange)", textAlign: "center" }}>Conversão inicial do Docling</Text>
      <Figure src="./assets/tabela-zhou-original.png" alt="Tabela original do artigo" style={{ left: 75, top: 205, width: 340, height: 260 }} />
      <Figure src="./assets/tabela-zhou-ia.png" alt="Tabela reconstruída por inteligência artificial" style={{ left: 470, top: 205, width: 340, height: 260 }} />
      <Figure src="./assets/tabela-zhou-docling.png" alt="Tabela após conversão inicial pelo Docling" style={{ left: 865, top: 205, width: 340, height: 260 }} />
      <Text style={{ left: 175, top: 510, width: 930, height: 64, fontSize: 26, fontWeight: 700, color: "var(--navy)", textAlign: "center" }}>A reconstrução recupera cabeçalhos e associações que a grade inicial fragmentou.</Text>
      <Text style={{ left: 430, top: 600, width: 420, height: 25, fontSize: 14, color: "var(--muted)", textAlign: "center" }}>Exemplo: Tabela 6 de Zhou et al. (2024)</Text>
    </Slide>
  );
}

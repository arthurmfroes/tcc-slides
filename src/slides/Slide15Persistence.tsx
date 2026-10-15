import { Figure, Header, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

export function Slide15Persistence(_: SlideProps) {
  return (
    <Slide>
      <Header title="O histórico permite reconstruir cada execução" number={17} section="Persistência" />
      <Figure src="./assets/schema-execucao.png" alt="Esquema das tabelas de execução e rastreabilidade" style={{ left: 105, top: 145, width: 1070, height: 340 }} />
      <Text style={{ left: 135, top: 520, width: 1010, height: 60, fontSize: 25, fontWeight: 700, color: "var(--navy)", textAlign: "center" }}>Documento, execução, etapa, artefato, evento e sessão permanecem ligados no banco.</Text>
      <Text style={{ left: 230, top: 592, width: 820, height: 35, fontSize: 20, color: "var(--muted)", textAlign: "center" }}>Isso permite comparar versões sem apagar resultados anteriores.</Text>
    </Slide>
  );
}

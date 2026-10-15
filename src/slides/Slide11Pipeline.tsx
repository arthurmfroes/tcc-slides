import { Figure, Header, Slide } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

export function Slide11Pipeline(_: SlideProps) {
  return (
    <Slide>
      <Header title="Fluxo da implementação atual" number={10} section="Arquitetura" />
      <Figure src="./assets/fluxo-pipeline.png" alt="Fluxo do PDF até a conferência humana" style={{ left: 120, top: 125, width: 1040, height: 500 }} />
    </Slide>
  );
}

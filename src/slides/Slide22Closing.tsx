import { Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

export function Slide22Closing(_: SlideProps) {
  return (
    <Slide dark>
      <div className="closing-accent" />
      <Text as="h1" style={{ left: 72, top: 280, width: 1060, fontSize: 64, fontWeight: 700, color: "white" }}>Obrigado</Text>
      <Text style={{ left: 72, top: 390, width: 600, fontSize: 24, fontWeight: 700, color: "white" }}>Arthur Moro Fróes</Text>
      <Text style={{ left: 72, top: 430, width: 600, fontSize: 18, color: "#c7d3e4" }}>Sistemas de Informação · UFSM · 2026</Text>
    </Slide>
  );
}

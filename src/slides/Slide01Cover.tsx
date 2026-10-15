import { Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

export function Slide01Cover(_: SlideProps) {
  return (
    <Slide dark>
      <div className="cover-accent" />
      <Text style={{ left: 72, top: 70, width: 420, height: 28, fontSize: 14, fontWeight: 700, color: "var(--orange)", letterSpacing: ".08em" }}>RESUMO DE ANDAMENTO</Text>
      <Text as="h1" style={{ left: 72, top: 132, width: 610, height: 250, fontSize: 42, lineHeight: 1.18, fontWeight: 700, color: "white" }}>Pipeline rastreável para extração de dados de ocorrência de micotoxinas</Text>
      <Text style={{ left: 72, top: 470, width: 390, height: 38, fontSize: 24, fontWeight: 700, color: "white" }}>Arthur Moro Fróes</Text>
      <Text style={{ left: 72, top: 516, width: 470, height: 32, fontSize: 18, color: "#c7d3e4" }}>Sistemas de Informação · UFSM · 2026</Text>
      <div
        style={{
          position: "absolute",
          left: 710,
          top: 125,
          width: 510,
          height: 437,
          background: "white",
          borderRadius: 14,
          padding: 6,
          boxShadow: "0 22px 50px rgba(0, 0, 0, 0.45)",
        }}
      >
        <img
          src="./assets/interface-ao-vivo.png"
          alt="Interface ao vivo do pipeline"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            display: "block",
            objectFit: "cover",
          }}
          loading="eager"
          draggable={false}
        />
      </div>
    </Slide>
  );
}

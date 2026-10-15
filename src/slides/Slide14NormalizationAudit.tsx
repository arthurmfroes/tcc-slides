import { Header, Rule, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

const mappings = [
  ["Micotoxina", "DON", "Deoxynivalenol"],
  ["Produto", "corn", "Maize"],
  ["Apresentação", "feline food", "Pet food"],
  ["Método", "UHPLC-MS/MS", "LC-MS/MS"],
];

const decisions = [
  ["Confirma", "a linha como está"],
  ["Corrige", "um campo da linha"],
  ["Descarta", "a linha"],
  ["Devolve", "uma pendência ao leitor"],
];

export function Slide14NormalizationAudit(_: SlideProps) {
  return (
    <Slide>
      <Header title="O normalizador padroniza os termos; o auditor decide cada linha" number={17} section="Agentes" />

      <Rule left={64} top={160} width={440} height={5} color="var(--orange)" />
      <Text as="h2" style={{ left: 64, top: 185, width: 440, fontSize: 26, fontWeight: 700, color: "var(--navy)" }}>Agente normalizador</Text>
      <Text style={{ left: 64, top: 240, width: 440, fontSize: 21, lineHeight: 1.4, color: "var(--ink)" }}>
        Troca os termos do artigo pelos do vocabulário da equipe.
      </Text>
      <div style={{ position: "absolute", left: 64, top: 320, width: 480, display: "flex", flexDirection: "column", gap: 14 }}>
        {mappings.map(([field, source, term]) => (
          <div key={field}>
            <div style={{ fontSize: 15, color: "var(--muted)" }}>{field}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 21, fontWeight: 700, color: "var(--navy)" }}>
              <span>{source}</span>
              <svg width="30" height="20" viewBox="0 0 30 20" aria-hidden="true">
                <path d="M2 10h23M17 3l8 7-8 7" fill="none" stroke="var(--orange)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{term}</span>
            </div>
          </div>
        ))}
      </div>

      <Rule left={600} top={160} width={616} height={5} color="var(--green)" />
      <Text as="h2" style={{ left: 600, top: 185, width: 616, fontSize: 26, fontWeight: 700, color: "var(--navy)" }}>Agente auditor</Text>
      <Text style={{ left: 600, top: 240, width: 616, fontSize: 21, lineHeight: 1.4, color: "var(--ink)" }}>
        Examina cada linha montada junto com a evidência e:
      </Text>
      <div style={{ position: "absolute", left: 600, top: 300, width: 616, display: "flex", flexDirection: "column", gap: 14 }}>
        {decisions.map(([verb, rest]) => (
          <div key={verb} style={{ display: "flex", alignItems: "baseline", gap: 14, fontSize: 23, color: "var(--ink)" }}>
            <strong style={{ width: 120, color: "var(--green)" }}>{verb}</strong>
            <span>{rest}</span>
          </div>
        ))}
      </div>
      <Text style={{ left: 600, top: 530, width: 616, fontSize: 18, lineHeight: 1.4, color: "var(--muted)" }}>
        Correções e descartes guardam o motivo da decisão.
      </Text>
    </Slide>
  );
}

import type { CSSProperties } from "react";
import { m } from "motion/react";
import { Header, Slide } from "../components/SlidePrimitives";
import { transitionDuration } from "../navigation";
import type { SlideProps } from "../types";

// Recorte da Tabela 6 com os IDs que a ingestão dá a cada célula (item-000082:cell:linha:coluna).
function MiniTable() {
  const td = (highlight = false): CSSProperties => ({
    border: "1px solid var(--line)",
    padding: "4px 3px",
    textAlign: "center",
    verticalAlign: "top",
    background: highlight ? "color-mix(in srgb, var(--orange) 14%, white)" : "white",
    outline: highlight ? "2px solid var(--orange)" : undefined,
    outlineOffset: -2,
  });
  const text = (value: string, bold = false) => <div style={{ fontSize: 10.5, fontWeight: bold ? 700 : 400, color: "var(--navy)" }}>{value}</div>;
  const id = (value: string) => <div style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 8.5, color: "var(--blue)", marginTop: 1 }}>{value}</div>;
  return (
    <div>
      <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 4 }}>
        Tabela <code style={{ color: "var(--blue)" }}>item-000082</code>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
        <tbody>
          <tr>
            <td style={td()}>{text("Item", true)}{id("cell:0:0")}</td>
            <td style={td()} colSpan={2}>{text("OTA (µg/kg)", true)}{id("cell:0:7")}</td>
          </tr>
          <tr>
            <td style={td()} />
            <td style={td()}>{text("Feline")}{id("cell:1:7")}</td>
            <td style={td()}>{text("Canine")}{id("cell:1:8")}</td>
          </tr>
          <tr>
            <td style={{ ...td(), padding: "1px", fontSize: 10, color: "var(--muted)" }} colSpan={3}>⋮</td>
          </tr>
          <tr>
            <td style={td()}>{text("Mean^b", true)}{id("cell:7:0")}</td>
            <td style={td(true)}>{text("5.49*", true)}{id("cell:7:7")}</td>
            <td style={td()}>{text("7.14")}{id("cell:7:8")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Registro rec-013 da execução de Zhou et al. (2024): média de OTA em ração felina.
const chip = (border: string) => ({ background: "white", borderRadius: 5, border: `1px solid ${border}`, padding: "4px 7px", fontSize: 11, color: "var(--navy)" });
const label = { fontSize: 9.5, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase" as const, letterSpacing: ".04em" };
// Chaves do objeto como o leitor envia, sem tradução.
const key = { ...label, textTransform: "none" as const, letterSpacing: 0, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" };

// Linha final do registro rec-013 (Zhou et al., 2024), como o pipeline a listou na auditoria de 02/10.
const recordPreview: [string, string][] = [
  ["mycotoxin", "Ochratoxin A"],
  ["mean", "5.49 µg/kg"],
  ["study_country", "China"],
];

const steps = [
  {
    num: "1",
    tag: "EVIDÊNCIA NO PDF",
    tagColor: "var(--orange)",
    bg: "var(--pale)",
    borderColor: "#e4dcd3",
    title: "Célula da tabela",
    actor: "Zhou et al. (2024), Tabela 6",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <MiniTable />
      </div>
    ),
  },
  {
    num: "2",
    tag: "AGENTE LEITOR",
    tagColor: "var(--orange)",
    bg: "var(--pale-orange)",
    borderColor: "#ffd6be",
    title: "Leitura",
    actor: "LLM (gpt-6-luna)",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ fontSize: 11, color: "var(--ink)", lineHeight: 1.3 }}>Registra o literal e a célula de cada campo:</div>
        <div style={{ background: "white", borderRadius: 6, border: "1px solid #ffd6be", padding: "5px 8px" }}>
          <div style={key}>analyte</div>
          <div style={{ fontSize: 11, color: "var(--navy)", marginTop: 1 }}><code>"OTA"</code> · <code>cell:0:7</code></div>
        </div>
        <div style={{ background: "white", borderRadius: 6, border: "1px solid #ffd6be", padding: "5px 8px" }}>
          <div style={key}>mean</div>
          <div style={{ fontSize: 11, color: "var(--navy)", marginTop: 1 }}><code>"5.49"</code> · <code>cell:7:7</code></div>
        </div>
        <div style={{ background: "white", borderRadius: 6, border: "1px solid #ffd6be", padding: "5px 8px" }}>
          <div style={key}>mean.unit</div>
          <div style={{ fontSize: 11, color: "var(--navy)", marginTop: 1 }}><code>"μg/kg"</code> · <code>cell:0:7</code></div>
        </div>
      </div>
    ),
  },
  {
    num: "3",
    tag: "SERVIDOR MCP",
    tagColor: "var(--blue)",
    bg: "var(--pale-blue)",
    borderColor: "#c7d8ed",
    title: "Verificação",
    actor: "Ferramenta de adição de evidência",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ fontSize: 11, lineHeight: 1.35, color: "var(--ink)" }}>
          Aceita o registro ou devolve o erro ao agente.
        </div>
        <div style={{ height: 1, background: "#c7d8ed", margin: "2px 0" }} />
        <div style={{ fontSize: 11, lineHeight: 1.35, color: "var(--ink)" }}>
          <strong>Evidência:</strong>
          <div style={{ marginTop: 2 }}>• A célula 7:7 contém 5.49.</div>
        </div>
        <div style={{ height: 1, background: "#c7d8ed", margin: "2px 0" }} />
        <div style={{ fontSize: 11, lineHeight: 1.35, color: "var(--ink)" }}>
          <strong>Unidade:</strong>
          <div style={{ marginTop: 2 }}>• Vem do cabeçalho da coluna: <code>5.49</code> → <code>5.49 µg/kg</code></div>
        </div>
      </div>
    ),
  },
  {
    num: "4",
    tag: "AGENTE NORMALIZADOR",
    tagColor: "var(--orange)",
    bg: "var(--pale)",
    borderColor: "#f0d5c5",
    title: "Vocabulário",
    actor: "LLM (gpt-6-luna)",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontSize: 11, color: "var(--ink)", lineHeight: 1.3 }}>Troca os termos pelos do vocabulário:</div>
        <div style={{ background: "white", borderRadius: 6, border: "1px solid #f0d5c5", padding: "5px 8px" }}>
          <div style={key}>mycotoxin</div>
          <div style={{ fontSize: 11, color: "var(--navy)", marginTop: 1 }}><code>"OTA"</code> → <strong>Ochratoxin A</strong></div>
        </div>
        <div style={{ background: "white", borderRadius: 6, border: "1px solid #f0d5c5", padding: "5px 8px" }}>
          <div style={key}>presentation</div>
          <div style={{ fontSize: 11, color: "var(--navy)", marginTop: 1 }}><code>"feline food products"</code> → <strong>Pet food</strong></div>
        </div>
      </div>
    ),
  },
  {
    num: "5",
    tag: "AGENTE AUDITOR",
    tagColor: "var(--green)",
    bg: "#f2f9f4",
    borderColor: "#b8e3c5",
    title: "Auditoria",
    actor: "LLM (gpt-6-sol)",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ fontSize: 11, lineHeight: 1.3, color: "var(--ink)" }}>
          Examina a linha com as 5 células citadas e <strong>confirma</strong>.
        </div>
        <div style={{ background: "white", borderRadius: 6, border: "1px solid #b8e3c5", padding: "5px 8px" }}>
          <div style={key}>reason</div>
          <div style={{ fontSize: 11, color: "var(--navy)", marginTop: 1, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>"Values match the cited cells of Table 6…"</div>
        </div>
      </div>
    ),
  },
  {
    num: "6",
    tag: "RESULTADO",
    tagColor: "var(--navy)",
    bg: "var(--pale-blue)",
    borderColor: "#c7d8ed",
    title: "Registro completo",
    actor: "Linha pronta para conferência",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {recordPreview.map(([name, value]) => (
          <div key={name} style={{ background: "white", borderRadius: 6, border: "1px solid #c7d8ed", padding: "4px 8px" }}>
            <div style={key}>{name}</div>
            <div style={{ fontSize: 11, color: "var(--navy)", marginTop: 1, fontWeight: 600 }}>{value}</div>
          </div>
        ))}
        <div style={{ background: "rgba(34, 139, 34, 0.08)", border: "1px dashed var(--green)", borderRadius: 5, padding: "4px 6px", fontSize: 10.5, lineHeight: 1.25, color: "var(--green)", fontWeight: 600 }}>
          ✓ Cada valor da linha volta à célula de onde saiu.
        </div>
      </div>
    ),
  },
];

// Sequência: visão geral, cada caixa aberta num painel e volta à visão geral.
export type TraceStep = "overview" | 0 | 1 | 2 | 3 | 4 | 5;

const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";
const STRIP = { left: 64, top: 175, width: 1152, height: 296, scale: 1 };
const GAP = 14;
const BOX_W = (STRIP.width - GAP * 5) / 6;
const PANEL = { left: 64, top: 118, width: 1152, height: 530 };

// Retângulo da caixa compacta i no slide, já com a escala da faixa.
function compactRect(i: number) {
  return {
    left: STRIP.left + i * (BOX_W + GAP) * STRIP.scale,
    top: STRIP.top,
    width: BOX_W * STRIP.scale,
    height: STRIP.height * STRIP.scale,
  };
}

const SEQUENCE: TraceStep[] = ["overview", 0, 1, 2, 3, 4, 5, "overview"];
const TRACE_FIRST_INDEX = 17;

function stepFromIndex(index: number): TraceStep | null {
  const position = index - TRACE_FIRST_INDEX;
  return position >= 0 && position < SEQUENCE.length ? SEQUENCE[position] : null;
}

function CompactBox({ step, idx }: { step: (typeof steps)[number]; idx: number }) {
  return (
    <div
      style={{
        position: "relative",
        background: step.bg,
        border: `1px solid ${step.borderColor}`,
        borderRadius: 13,
        padding: "14px 13px 16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BoxHeader step={step} scale={1} />
      <div style={{ flex: 1 }}>{step.content}</div>
      {idx < steps.length - 1 && (
        <div
          style={{
            position: "absolute",
            right: -12,
            top: "48%",
            transform: "translateY(-50%)",
            width: 20,
            height: 20,
            background: "var(--navy)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M2 7h9.5M7.5 3l4 4-4 4" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );
}

function BoxHeader({ step, scale }: { step: (typeof steps)[number]; scale: number }) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 * scale }}>
        <span style={{ fontSize: 10 * scale, fontWeight: 700, letterSpacing: ".05em", color: step.tagColor, textTransform: "uppercase" }}>{step.tag}</span>
        <span style={{ fontSize: 10 * scale, fontWeight: 700, background: "white", border: `1px solid ${step.borderColor}`, borderRadius: 8 * scale, padding: `${scale}px ${5 * scale}px`, color: step.tagColor }}>{step.num}</span>
      </div>
      <h2 style={{ margin: `${3 * scale}px 0 ${scale}px`, fontSize: 15 * scale, fontWeight: 700, color: "var(--navy)", lineHeight: 1.2 }}>{step.title}</h2>
      <div style={{ fontSize: 10.5 * scale, fontWeight: 600, color: "var(--muted)", marginBottom: 8 * scale }}>{step.actor}</div>
      <div style={{ height: 2, background: step.borderColor, marginBottom: 10 * scale }} />
    </>
  );
}

// ---------- Painéis abertos ----------

const card = (border: string): CSSProperties => ({ background: "white", borderRadius: 10, border: `1px solid ${border}`, padding: "10px 14px" });
const bigKey: CSSProperties = { fontFamily: MONO, fontSize: 14, fontWeight: 700, color: "var(--muted)" };
const bigValue: CSSProperties = { fontFamily: MONO, fontSize: 19, color: "var(--navy)", marginTop: 2 };
const cellId = (id: string) => <span style={{ fontFamily: MONO, color: "var(--blue)" }}>{id}</span>;

const otaRows: [label: string, row: number, feline: string, canine: string][] = [
  ["No. of samples", 2, "45", "48"],
  ["No. of contaminated samples", 3, "36", "32"],
  ["Contamination rate(%)", 4, "80", "66.67"],
  ["Minimum^a", 5, "2.00", "1.99"],
  ["Maximum", 6, "10.55", "17.10"],
  ["Mean^b", 7, "5.49*", "7.14"],
];

function CellDetail() {
  const td = (highlight = false): CSSProperties => ({
    border: "1px solid var(--line)",
    padding: "4px 10px",
    textAlign: "center",
    background: highlight ? "color-mix(in srgb, var(--orange) 14%, white)" : "white",
    outline: highlight ? "3px solid var(--orange)" : undefined,
    outlineOffset: -3,
  });
  const content = (text: string, id: string, bold = false) => (
    <>
      <div style={{ fontSize: 15, fontWeight: bold ? 700 : 400, color: "var(--navy)" }}>{text}</div>
      <div style={{ fontFamily: MONO, fontSize: 11, color: "var(--blue)" }}>{id}</div>
    </>
  );
  const parts = [
    ["item-000082", "tabela"],
    ["cell", "célula"],
    ["7", "linha"],
    ["7", "coluna"],
  ];
  return (
    <div style={{ display: "flex", gap: 48, alignItems: "center" }}>
      <table style={{ borderCollapse: "collapse", width: 600, tableLayout: "fixed" }}>
        <colgroup>
          <col style={{ width: 260 }} />
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <td style={{ ...td(), textAlign: "left" }}>{content("Item", "cell:0:0", true)}</td>
            <td style={td()} colSpan={2}>{content("OTA (µg/kg)", "cell:0:7", true)}</td>
          </tr>
          <tr>
            <td style={td()} />
            <td style={td()}>{content("Feline food", "cell:1:7")}</td>
            <td style={td()}>{content("Canine food", "cell:1:8")}</td>
          </tr>
          {otaRows.map(([label, row, feline, canine]) => (
            <tr key={row}>
              <td style={{ ...td(), textAlign: "left" }}>{content(label, `cell:${row}:0`, true)}</td>
              <td style={td(row === 7)}>{content(feline, `cell:${row}:7`, row === 7)}</td>
              <td style={td()}>{content(canine, `cell:${row}:8`)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div style={{ fontSize: 18, color: "var(--muted)", marginBottom: 14 }}>ID da célula destacada</div>
        <div style={{ display: "flex", gap: 6, fontFamily: MONO, fontSize: 26, fontWeight: 700, color: "var(--blue)" }}>
          {parts.map(([part, meaning], index) => (
            <div key={index} style={{ display: "flex", gap: 6 }}>
              {index > 0 && <span style={{ color: "var(--muted)" }}>:</span>}
              <div style={{ textAlign: "center" }}>
                <div>{part}</div>
                <div style={{ fontFamily: "inherit", fontSize: 14, fontWeight: 600, color: "var(--muted)", marginTop: 4 }}>{meaning}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Objeto enviado pelo leitor na execução de 02/10, chaves como no original.
const readerFields: [key: string, literal: string, source: string][] = [
  ["analyte", '"OTA"', "cell:0:7"],
  ["n_samples", '"45"', "cell:2:7"],
  ["positives", '"36"', "cell:3:7"],
  ["positivity_percent", '"80"', "cell:4:7"],
  ["max", '"10.55"', "cell:6:7"],
  ["mean", '"5.49"', "cell:7:7"],
  ["mean.unit", '"μg/kg"', "cell:0:7"],
  ["other_measures.minimum", '"2.00"', "cell:5:7"],
];

function ReaderDetail() {
  return (
    <div>
      <div style={{ fontSize: 18, color: "var(--ink)", marginBottom: 14 }}>Cada campo leva o literal copiado e a célula de onde saiu:</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        {readerFields.map(([name, literal, source]) => (
          <div key={name} style={card("#ffd6be")}>
            <div style={bigKey}>{name}</div>
            <div style={bigValue}>{literal}</div>
            <div style={{ fontFamily: MONO, fontSize: 14, color: "var(--blue)", marginTop: 4 }}>{source}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolDetail() {
  const checks = [
    <>A fonte {cellId("item-000082:cell:7:7")} existe na ingestão</>,
    <>O texto da célula contém o literal {cellId('"5.49"')}</>,
    <>{cellId('"μg/kg"')} é unidade de massa conhecida: fator 1 para µg/kg</>,
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "250px 1fr 260px", gap: 28, alignItems: "center" }}>
      <div style={card("#c7d8ed")}>
        <div style={bigKey}>mean</div>
        <div style={bigValue}>"5.49"</div>
        <div style={{ fontFamily: MONO, fontSize: 14, color: "var(--blue)", marginTop: 4 }}>cell:7:7</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {checks.map((check, index) => (
          <div key={index} style={{ display: "flex", gap: 12, alignItems: "baseline", fontSize: 19, color: "var(--ink)" }}>
            <span style={{ color: "var(--green)", fontWeight: 700 }}>✓</span>
            <span>{check}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ ...card("var(--green)"), background: "color-mix(in srgb, var(--green) 8%, white)" }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "var(--green)" }}>Aceito</div>
          <div style={{ ...bigValue, fontSize: 18 }}>5.49 µg/kg</div>
        </div>
        <div style={{ ...card("#c0392b"), background: "color-mix(in srgb, #c0392b 6%, white)" }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#c0392b" }}>Se falhar</div>
          <div style={{ fontSize: 16, color: "var(--ink)", marginTop: 2 }}>o erro volta ao leitor</div>
        </div>
      </div>
    </div>
  );
}

const normalizations: [fromKey: string, from: string, toKey: string, to: string][] = [
  ["analyte", '"OTA"', "mycotoxin", "Ochratoxin A"],
  ["material", '"feline food products"', "presentation", "Pet food"],
];

function NormalizerDetail() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      {normalizations.map(([fromKey, from, toKey, to]) => (
        <div key={toKey} style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", alignItems: "center" }}>
          <div style={card("#f0d5c5")}>
            <div style={bigKey}>{fromKey}</div>
            <div style={bigValue}>{from}</div>
          </div>
          <svg width="60" height="28" viewBox="0 0 60 28" aria-hidden="true">
            <path d="M8 14h40M38 5l10 9-10 9" fill="none" stroke="var(--orange)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={card("#f0d5c5")}>
            <div style={bigKey}>{toKey}</div>
            <div style={{ ...bigValue, fontFamily: "inherit", fontWeight: 700 }}>{to}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const citedCells: [field: string, value: string, source: string][] = [
  ["n_samples", "45", "cell:2:7"],
  ["positives", "36", "cell:3:7"],
  ["positivity_percent", "80", "cell:4:7"],
  ["max", "10.55", "cell:6:7"],
  ["mean", "5.49", "cell:7:7"],
];

// O motivo é ilustrativo: o real explicava grupos, que a apresentação não introduz.
function AuditorDetail() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
      <div>
        <div style={{ fontSize: 18, color: "var(--ink)", marginBottom: 12 }}>A linha montada, com as células citadas:</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {citedCells.map(([field, value, source]) => (
            <div key={field} style={{ ...card("#b8e3c5"), display: "grid", gridTemplateColumns: "1fr 90px 110px", alignItems: "baseline", padding: "7px 14px" }}>
              <span style={{ ...bigKey, fontSize: 15 }}>{field}</span>
              <span style={{ fontFamily: MONO, fontSize: 17, color: "var(--navy)" }}>{value}</span>
              <span style={{ fontFamily: MONO, fontSize: 15, color: "var(--blue)", textAlign: "right" }}>{source}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontSize: 18, color: "var(--ink)" }}>Decisão registrada:</div>
        <div style={card("#b8e3c5")}>
          <div style={bigKey}>audit</div>
          <div style={bigValue}>"confirmed"</div>
        </div>
        <div style={card("#b8e3c5")}>
          <div style={bigKey}>reason</div>
          <div style={{ ...bigValue, fontSize: 16, lineHeight: 1.45 }}>"Values match the cited cells of Table 6; OTA and feline food come from the column headers."</div>
        </div>
      </div>
    </div>
  );
}

// Linha final do rec-013: termo do vocabulário (ou valor) e a fonte de cada campo.
const recordColumns: { tag: string; color: string; border: string; bg: string; fields: [string, string, string][] }[] = [
  {
    tag: "Identidade",
    color: "var(--orange)",
    border: "#f0d5c5",
    bg: "var(--pale)",
    fields: [
      ["mycotoxin", "Ochratoxin A", "item-000082:cell:0:7"],
      ["presentation", "Pet food", "item-000028"],
    ],
  },
  {
    tag: "Resultados",
    color: "var(--orange)",
    border: "#ffd6be",
    bg: "var(--pale-orange)",
    fields: [
      ["n_samples", "45", "item-000082:cell:2:7"],
      ["positives", "36", "item-000082:cell:3:7"],
      ["positivity_percent", "80%", "item-000082:cell:4:7"],
      ["mean", "5.49 µg/kg", "item-000082:cell:7:7"],
      ["max", "10.55 µg/kg", "item-000082:cell:6:7"],
    ],
  },
  {
    tag: "Contexto e método",
    color: "var(--blue)",
    border: "#c7d8ed",
    bg: "var(--pale-blue)",
    fields: [
      ["study_country", "China", "item-000006"],
      ["sampling_period", "2022", "item-000022"],
      ["analytical_method", "Enzyme-linked immunosorbent assay", "item-000034"],
      ["target_category", "Animal", "item-000002"],
    ],
  },
];

function RecordDetail() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, alignItems: "start" }}>
      {recordColumns.map((col) => (
        <div key={col.tag} style={{ background: col.bg, border: `1px solid ${col.border}`, borderRadius: 12, padding: "12px 14px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".08em", color: col.color, textTransform: "uppercase", marginBottom: 10 }}>{col.tag}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {col.fields.map(([name, value, source]) => (
              <div key={name}>
                <div style={{ ...bigKey, fontSize: 12 }}>{name}</div>
                <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: 7, padding: "4px 10px", marginTop: 2 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--navy)" }}>{value}</div>
                  <div style={{ fontFamily: MONO, fontSize: 11, color: "var(--blue)" }}>{source}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const details = [CellDetail, ReaderDetail, ToolDetail, NormalizerDetail, AuditorDetail, RecordDetail];

// Painel que nasce do retângulo da caixa compacta e ocupa a área do slide; o conteúdo entra depois.
type Rect = { left: number; top: number; width: number; height: number };

// Espaçamento interno da caixa compacta já escalada e do painel aberto.
const COMPACT_PADDING = { paddingTop: 14 * STRIP.scale, paddingRight: 13 * STRIP.scale, paddingBottom: 16 * STRIP.scale, paddingLeft: 13 * STRIP.scale };
const HEADER_ZOOM = 1.35;
const PANEL_PADDING = { paddingTop: 26, paddingRight: 32, paddingBottom: 26, paddingLeft: 32 };

// Painel que cresce a partir da caixa compacta (ou encolhe de volta a ela). O cabeçalho fica igual o tempo todo;
// o conteúdo da caixa some enquanto o painel cresce e o detalhe aparece no lugar, e o inverso ao encolher.
function Panel({ idx, from, to, duration, shrink = false, delay = 0 }: { idx: number; from: Rect; to: Rect; duration: number; shrink?: boolean; delay?: number }) {
  const step = steps[idx];
  const Detail = details[idx];
  const open = { ...to, ...(shrink ? COMPACT_PADDING : PANEL_PADDING) };
  const start = { ...from, ...(shrink ? PANEL_PADDING : duration ? COMPACT_PADDING : PANEL_PADDING) };
  return (
    <m.div
      initial={{ ...start, opacity: delay ? 0 : 1 }}
      animate={shrink ? { ...open, opacity: 0 } : { ...open, opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: [0.65, 0, 0.35, 1],
        // Ao encolher, some depois de chegar à caixa; com espera, só aparece quando chega a vez.
        opacity: shrink ? { duration: 0.2, delay: delay + duration } : { duration: 0.15, delay },
      }}
      style={{
        position: "absolute",
        background: step.bg,
        border: `1px solid ${step.borderColor}`,
        borderRadius: 13 * STRIP.scale,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 18px 40px rgba(7, 27, 58, 0.12)",
      }}
    >
      {/* O cabeçalho cresce com o painel (zoom reflui o layout, então a largura acompanha) */}
      <m.div initial={{ zoom: shrink ? HEADER_ZOOM : duration ? 1 : HEADER_ZOOM }} animate={{ zoom: shrink ? 1 : HEADER_ZOOM }} transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}>
        <BoxHeader step={step} scale={STRIP.scale} />
      </m.div>
      <div style={{ position: "relative", flex: 1 }}>
        <m.div
          initial={{ opacity: shrink ? 0 : duration ? 1 : 0 }}
          animate={{ opacity: shrink ? 1 : 0 }}
          transition={{ duration: duration * 0.4, delay: delay + (shrink ? duration * 0.5 : duration * 0.25) }}
          style={{ position: "absolute", left: 0, top: 0, width: BOX_W - 26, transform: `scale(${STRIP.scale})`, transformOrigin: "0 0" }}
        >
          {step.content}
        </m.div>
        <m.div
          initial={{ opacity: shrink ? 1 : duration ? 0 : 1 }}
          animate={{ opacity: shrink ? 0 : 1 }}
          transition={{ duration: shrink ? duration * 0.3 : duration * 0.4, delay: delay + (shrink ? 0 : duration * 0.6) }}
          style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          <Detail />
        </m.div>
      </div>
    </m.div>
  );
}


function TraceView({ step, previousIndex, reducedMotion }: { step: TraceStep; previousIndex: number; reducedMotion: boolean }) {
  const previousStep = stepFromIndex(previousIndex);
  const moving = previousStep !== null && previousStep !== step;
  const duration = moving ? transitionDuration(reducedMotion) * 0.7 : 0;
  const focused = step !== "overview";
  return (
    <>
      <m.div
        initial={{ opacity: previousStep !== null && previousStep !== "overview" ? 0.15 : 1 }}
        animate={{ opacity: focused ? 0.15 : 1 }}
        transition={{ duration }}
        style={{
          position: "absolute",
          left: STRIP.left,
          top: STRIP.top,
          width: STRIP.width,
          height: STRIP.height,
          transform: `scale(${STRIP.scale})`,
          transformOrigin: "0 0",
          display: "grid",
          gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
          gap: GAP,
        }}
      >
        {steps.map((item, idx) => (
          <CompactBox key={item.num} step={item} idx={idx} />
        ))}
      </m.div>
      {focused && typeof previousStep === "number" && previousStep !== step ? (
        // Entre dois passos: o painel anterior volta à sua caixa e só então o seguinte se abre.
        <>
          <Panel idx={previousStep} from={PANEL} to={compactRect(previousStep)} duration={duration} shrink />
          <Panel idx={step} from={compactRect(step)} to={PANEL} duration={duration} delay={duration} />
        </>
      ) : (
        focused && <Panel idx={step} from={moving ? compactRect(step) : PANEL} to={PANEL} duration={duration} />
      )}
      {!focused && moving && previousStep !== "overview" && previousStep !== null && (
        <Panel idx={previousStep} from={PANEL} to={compactRect(previousStep)} duration={duration} shrink />
      )}
    </>
  );
}

export function traceSlide(step: TraceStep, number: number) {
  return function TraceSlide({ previousIndex, reducedMotion }: SlideProps) {
    return (
      <Slide>
        <TraceView step={step} previousIndex={previousIndex} reducedMotion={reducedMotion} />
        <Header title="O caminho completo de uma ocorrência" number={number} section="Rastreabilidade" />
      </Slide>
    );
  };
}

export const Slide19TraceOverview = traceSlide("overview", 18);
export const Slide20TraceCell = traceSlide(0, 19);
export const Slide21TraceReader = traceSlide(1, 20);
export const Slide22TraceTool = traceSlide(2, 21);
export const Slide23TraceNormalizer = traceSlide(3, 22);
export const Slide24TraceAuditor = traceSlide(4, 23);
export const Slide25TraceRecord = traceSlide(5, 24);
export const Slide26TraceSummary = traceSlide("overview", 25);

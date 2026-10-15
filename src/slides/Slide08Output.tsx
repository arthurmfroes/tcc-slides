import { Header, Slide } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

interface FieldItem {
  name: string;
  example: string;
  detail?: string;
}

interface ColumnDef {
  tag: string;
  tagColor: string;
  borderColor: string;
  bg: string;
  title: string;
  fields: FieldItem[];
}

const columns: ColumnDef[] = [
  {
    tag: "IDENTIDADE",
    tagColor: "var(--orange)",
    borderColor: "#f0d5c5",
    bg: "var(--pale)",
    title: "Identidade da ocorrência",
    fields: [
      { name: "Micotoxina", example: "Deoxynivalenol (DON)" },
      { name: "Produto", example: "Trigo" },
      { name: "Apresentação", example: "Grão" },
      { name: "Grupo de amostras", example: "Pequenos grãos" },
      { name: "Contexto", example: "Safra / Silagem" },
    ],
  },
  {
    tag: "NUMÉRICOS",
    tagColor: "var(--orange)",
    borderColor: "#ffd6be",
    bg: "var(--pale-orange)",
    title: "Resultados do ensaio",
    fields: [
      { name: "Nº de amostras", example: "569 amostras" },
      { name: "Positividade", example: "563 (98,9%)" },
      { name: "Média", example: "251 µg/kg" },
      { name: "Valor máximo", example: "4.487 µg/kg" },
      { name: "Outras medidas", example: "Mínimo: 17,3 µg/kg" },
    ],
  },
  {
    tag: "RASTREABILIDADE",
    tagColor: "var(--blue)",
    borderColor: "#c7d8ed",
    bg: "var(--pale-blue)",
    title: "Contexto e método",
    fields: [
      { name: "País", example: "Polônia" },
      { name: "Período", example: "2024" },
      { name: "Categoria", example: "Animal" },
      { name: "Método analítico", example: "LC-MS/MS" },
      { name: "Evidência rastreada", example: "Tabela 2, pág. 4" },
    ],
  },
];

export function Slide08Output(_: SlideProps) {
  return (
    <Slide>
      <Header title="O que o pipeline produz" number={10} section="Escopo" />

      <div
        style={{
          position: "absolute",
          left: 64,
          top: 140,
          width: 1152,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {columns.map((col) => (
          <div
            key={col.title}
            style={{
              background: col.bg,
              border: `1px solid ${col.borderColor}`,
              borderRadius: 14,
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".08em",
                color: col.tagColor,
                textTransform: "uppercase",
              }}
            >
              {col.tag}
            </div>
            <h2
              style={{
                margin: "4px 0 10px",
                fontSize: 18,
                fontWeight: 700,
                color: "var(--navy)",
                lineHeight: 1.2,
              }}
            >
              {col.title}
            </h2>

            <div style={{ height: 2, background: col.borderColor, marginBottom: 12 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {col.fields.map((f) => (
                <div key={f.name} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {f.name}
                  </span>
                  <div
                    style={{
                      background: "white",
                      border: "1px solid var(--line)",
                      borderRadius: 7,
                      padding: "5px 10px",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--navy)",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
                    }}
                  >
                    {f.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}

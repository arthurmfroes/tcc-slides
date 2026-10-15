import { Header, Slide } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

const columns = [
  {
    title: "Protótipos: requisições stateless",
    color: "var(--orange)",
    bg: "var(--pale)",
    border: "var(--line)",
    items: [
      "Modelos pequenos (DeepSeek, Qwen Flash), uma requisição por trecho.",
      "Cada requisição respondia em um único turno, preenchendo um JSON de schema forçado, sem saber nada das outras.",
      "O parágrafo da metodologia e a tabela de resultados iam em requisições separadas.",
      "A conciliação dos registros ficava para chamadas posteriores.",
    ],
  },
  {
    title: "Atual: sessão persistente no Codex",
    color: "var(--blue)",
    bg: "var(--pale-blue)",
    border: "#c7d8ed",
    items: [
      "Um agente lê o artigo inteiro numa sessão que mantém memória além do limite de contexto do modelo.",
      "Os registros são criados por ferramentas via MCP, formato mais natural para esses modelos que um JSON forçado.",
      "O agente usa vários turnos para ler e verificar o artigo antes de criar um registro.",
      "Ao ler a tabela de resultados, ainda tem na sessão o parágrafo da metodologia.",
    ],
  },
];

export function Slide10ArchitectureEvolution(_: SlideProps) {
  return (
    <Slide>
      <Header title="A arquitetura mudou durante o desenvolvimento" number={11} section="Processo" />

      <div
        style={{
          position: "absolute",
          left: 64,
          top: 140,
          width: 1152,
          height: 450,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
        }}
      >
        {columns.map((column) => (
          <div
            key={column.title}
            style={{
              background: column.bg,
              border: `1px solid ${column.border}`,
              borderTop: `5px solid ${column.color}`,
              borderRadius: 14,
              padding: "26px 30px",
            }}
          >
            <h2 style={{ margin: "0 0 22px", fontSize: 26, fontWeight: 700, color: "var(--navy)", lineHeight: 1.25 }}>
              {column.title}
            </h2>
            <ul style={{ margin: 0, paddingLeft: 22, display: "flex", flexDirection: "column", gap: 12 }}>
              {column.items.map((item) => (
                <li key={item} style={{ fontSize: 20, lineHeight: 1.4, color: "var(--ink)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          left: 64,
          top: 612,
          width: 1152,
          fontSize: 21,
          fontWeight: 700,
          color: "var(--green)",
          textAlign: "center",
        }}
      >
        Nas duas versões, o código confere se cada valor tem evidência correspondente no artigo.
      </div>
    </Slide>
  );
}

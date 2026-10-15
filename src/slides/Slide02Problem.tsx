import { Header, Rule, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

const article = [
  "Dados espalhados entre texto, tabelas e notas",
  "Tabelas sem formato padrão",
  "Resultados de outros estudos citados junto aos do próprio",
];

const database = [
  "Uma linha padronizada por ocorrência",
  "Termos e unidades do vocabulário da equipe",
  "Hoje, leitura manual: lenta e dependente de quem cataloga",
];

function Column({ left, color, title, items }: { left: number; color: string; title: string; items: string[] }) {
  return (
    <>
      <Rule left={left} top={160} width={528} height={5} color={color} />
      <Text as="h2" style={{ left, top: 185, width: 528, fontSize: 26, fontWeight: 700, color: "var(--navy)" }}>{title}</Text>
      <ul style={{ position: "absolute", left, top: 250, width: 528, margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 22 }}>
        {items.map((item) => (
          <li key={item} style={{ display: "flex", gap: 16, fontSize: 23, lineHeight: 1.4, color: "var(--ink)" }}>
            <span style={{ flex: "none", width: 10, height: 10, marginTop: 12, borderRadius: "50%", background: color }} />
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export function Slide02Problem(_: SlideProps) {
  return (
    <Slide>
      <Header title="O problema começa antes da IA" number={2} section="Contexto" />
      <Column left={64} color="var(--orange)" title="No artigo em PDF" items={article} />
      <Column left={688} color="var(--blue)" title="No banco do LAMIC" items={database} />
    </Slide>
  );
}

import { Header, Rule, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

const done = [
  "O pipeline produz registros comparáveis aos da planilha.",
  "Cada valor aponta para o trecho do artigo de onde saiu.",
];

const nextSteps = [
  "Revisar nos artigos as divergências e as 447 linhas sem par na planilha.",
  "Avaliar em artigos que não participaram do desenvolvimento.",
  "Adequar a aplicação ao uso da equipe de catalogação, a partir do teste com ela.",
  "Medir o tempo de catalogação com e sem o pipeline, contando a conferência humana.",
];

function List({ items, color }: { items: string[]; color: string }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 18 }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", gap: 16, fontSize: 22, lineHeight: 1.4, color: "var(--ink)" }}>
          <span style={{ flex: "none", width: 10, height: 10, marginTop: 11, borderRadius: "50%", background: color }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Slide21NextSteps(_: SlideProps) {
  return (
    <Slide>
      <Header title="Síntese e próximos passos" number={31} section="Encerramento" />

      <Rule left={64} top={160} width={440} height={5} color="var(--green)" />
      <Text as="h2" style={{ left: 64, top: 185, width: 440, fontSize: 26, fontWeight: 700, color: "var(--navy)" }}>Já feito</Text>
      <div style={{ position: "absolute", left: 64, top: 245, width: 440 }}>
        <List items={done} color="var(--green)" />
      </div>

      <Rule left={600} top={160} width={616} height={5} color="var(--orange)" />
      <Text as="h2" style={{ left: 600, top: 185, width: 616, fontSize: 26, fontWeight: 700, color: "var(--navy)" }}>Próximos passos</Text>
      <div style={{ position: "absolute", left: 600, top: 245, width: 616 }}>
        <List items={nextSteps} color="var(--orange)" />
      </div>
    </Slide>
  );
}

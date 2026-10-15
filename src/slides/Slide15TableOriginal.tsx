import { Header, Slide, Text } from "../components/SlidePrimitives";
import { ZhouTableCamera } from "../components/ZhouTableCamera";
import type { SlideProps } from "../types";

export function Slide15TableOriginal({ previousIndex, reducedMotion }: SlideProps) {
  return (
    <Slide>
      <ZhouTableCamera step="page" previousIndex={previousIndex} reducedMotion={reducedMotion} />
      <Header title="Tabelas exigem um tratamento diferente do texto" number={13} section="Preparação do artigo" />
      <Text style={{ left: 500, top: 190, width: 700, fontSize: 24, lineHeight: 1.4, fontWeight: 700, color: "var(--navy)" }}>
        Um parágrafo se lê em sequência. Numa tabela, cada valor depende da linha e da coluna em que está, e a coluna pode ter mais de um nível de cabeçalho.
      </Text>
      <Text style={{ left: 500, top: 370, width: 700, fontSize: 21, lineHeight: 1.45, color: "var(--ink)" }}>
        A Tabela 6 de Zhou et al. (2024) ainda tem um agravante: está impressa girada 90° na página 7.
      </Text>
    </Slide>
  );
}

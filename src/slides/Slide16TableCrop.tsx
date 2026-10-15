import { Header, Slide } from "../components/SlidePrimitives";
import { ZhouTableCamera } from "../components/ZhouTableCamera";
import type { SlideProps } from "../types";

export function Slide16TableCrop({ previousIndex, reducedMotion }: SlideProps) {
  return (
    <Slide>
      <ZhouTableCamera step="table" previousIndex={previousIndex} reducedMotion={reducedMotion} />
      <Header title="A Tabela 6 na orientação de leitura" number={14} section="Preparação do artigo" />
    </Slide>
  );
}

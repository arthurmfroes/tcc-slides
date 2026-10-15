import { ArticleCameraMupunga } from "../components/ArticleCameraMupunga";
import type { SlideProps } from "../types";

export function Slide07MupungaCover({ previousIndex, reducedMotion }: SlideProps) {
  return <ArticleCameraMupunga step="cover" previousIndex={previousIndex} reducedMotion={reducedMotion} />;
}

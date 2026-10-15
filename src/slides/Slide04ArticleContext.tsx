import { ArticleCamera } from "../components/ArticleCamera";
import type { SlideProps } from "../types";

export function Slide04ArticleContext({ previousIndex, reducedMotion }: SlideProps) {
  return <ArticleCamera step="context" previousIndex={previousIndex} reducedMotion={reducedMotion} />;
}

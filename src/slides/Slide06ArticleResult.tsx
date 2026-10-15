import { ArticleCamera } from "../components/ArticleCamera";
import type { SlideProps } from "../types";

export function Slide06ArticleResult({ previousIndex, reducedMotion }: SlideProps) {
  return <ArticleCamera step="result" previousIndex={previousIndex} reducedMotion={reducedMotion} />;
}

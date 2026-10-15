import { ArticleCamera } from "../components/ArticleCamera";
import type { SlideProps } from "../types";

export function Slide03ArticleCover({ previousIndex, reducedMotion }: SlideProps) {
  return <ArticleCamera step="cover" previousIndex={previousIndex} reducedMotion={reducedMotion} />;
}

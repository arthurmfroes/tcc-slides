import { ArticleCamera } from "../components/ArticleCamera";
import type { SlideProps } from "../types";

export function Slide05ArticleMethod({ previousIndex, reducedMotion }: SlideProps) {
  return <ArticleCamera step="method" previousIndex={previousIndex} reducedMotion={reducedMotion} />;
}

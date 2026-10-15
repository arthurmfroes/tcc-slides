import type { ComponentType } from "react";

export type SlideProps = {
  previousIndex: number;
  reducedMotion: boolean;
};

export type SlideDefinition = {
  number: number;
  title: string;
  component: ComponentType<SlideProps>;
};

import { m } from "motion/react";
import { transitionDuration } from "../navigation";

export type MupungaStep = "cover" | "table";

const NATURAL_WIDTH = 1489;

export const mupungaStates: Record<MupungaStep, { x: number; y: number; scale: number }> = {
  cover: {
    x: 370,
    y: 0,
    scale: 540 / NATURAL_WIDTH,
  },
  table: {
    x: -35.0,
    y: -5471.2,
    scale: 0.9081,
  },
};

export function mupungaStepFromSlideIndex(index: number): MupungaStep | null {
  return index === 6 ? "cover" : index === 7 ? "table" : null;
}

export function ArticleCameraMupunga({
  step,
  previousIndex,
  reducedMotion,
}: {
  step: MupungaStep;
  previousIndex: number;
  reducedMotion: boolean;
}) {
  const state = mupungaStates[step];
  const previousStep = mupungaStepFromSlideIndex(previousIndex);
  const isStepTransition = previousStep !== null && previousStep !== step;
  const initial = previousStep ? mupungaStates[previousStep] : state;
  const duration = transitionDuration(reducedMotion);

  return (
    <div className={`article-camera ${step === "cover" ? "article-camera--cover" : ""}`}>
      <m.img
        className="article-image article-image--mupunga"
        src="./assets/artigo-mupunga-p1-p4.webp"
        alt="Quatro primeiras páginas do artigo de Mupunga et al. sobre micotoxinas em cereais armazenados na Namíbia"
        draggable={false}
        initial={{ x: initial.x, y: initial.y, scale: initial.scale, filter: "blur(0px)" }}
        animate={{
          x: state.x,
          y: state.y,
          scale: state.scale,
          filter: reducedMotion || !isStepTransition ? "blur(0px)" : ["blur(0px)", "blur(11px)", "blur(0px)"],
        }}
        transition={{
          x: { duration: isStepTransition ? duration : 0, ease: [0.65, 0, 0.35, 1] },
          y: { duration: isStepTransition ? duration : 0, ease: [0.65, 0, 0.35, 1] },
          scale: { duration: isStepTransition ? duration : 0, ease: [0.65, 0, 0.35, 1] },
          filter: { duration: isStepTransition ? duration : 0, ease: "easeInOut", times: [0, 0.5, 1] },
        }}
      />
    </div>
  );
}

import { m } from "motion/react";
import { transitionDuration } from "../navigation";

export type ArticleStep = "cover" | "context" | "method" | "result";

type Highlight = { x: number; y: number; w: number; h: number; label: string };
type CameraState = { x: number; y: number; scale: number; highlights: Highlight[] };

const NATURAL_WIDTH = 1489;

const normalize = (x: number, y: number, w: number, h: number, label: string): Highlight => ({
  x: x / 1280,
  y: y / 720,
  w: w / 1280,
  h: h / 720,
  label,
});

export const articleStates: Record<ArticleStep, CameraState> = {
  cover: {
    x: 370,
    y: 0,
    scale: 540 / NATURAL_WIDTH,
    highlights: [],
  },
  context: {
    x: -148,
    y: -6221,
    scale: 2931 / NATURAL_WIDTH,
    highlights: [
      normalize(248, 133, 247, 47, "janeiro de 2021"),
      normalize(569, 133, 292, 47, "dezembro de 2024"),
      normalize(464, 442, 141, 47, "Polônia"),
    ],
  },
  method: {
    x: -116,
    y: -8085,
    scale: 2771 / NATURAL_WIDTH,
    highlights: [normalize(53, 191, 523, 48, "HPLC com detecção por MS/MS")],
  },
  result: {
    x: -1324,
    y: -8140,
    scale: 2627 / NATURAL_WIDTH,
    highlights: [
      normalize(124, 478, 348, 40, "produto"),
      normalize(483, 478, 179, 40, "número de amostras"),
      normalize(673, 478, 74, 40, "micotoxina"),
      normalize(967, 478, 170, 40, "ocorrência"),
      normalize(30, 524, 305, 40, "mediana"),
      normalize(345, 524, 500, 40, "máximo"),
    ],
  },
};

const orderedSteps: ArticleStep[] = ["cover", "context", "method", "result"];

export function articleStepFromSlideIndex(index: number): ArticleStep | null {
  return index >= 2 && index <= 5 ? orderedSteps[index - 2] : null;
}

export function ArticleCamera({ step, previousIndex, reducedMotion }: { step: ArticleStep; previousIndex: number; reducedMotion: boolean }) {
  const state = articleStates[step];
  const previousStep = articleStepFromSlideIndex(previousIndex);
  const isStepTransition = previousStep !== null && previousStep !== step;
  const initial = previousStep ? articleStates[previousStep] : state;
  const duration = transitionDuration(reducedMotion);

  return (
    <div className={`article-camera ${step === "cover" ? "article-camera--cover" : ""}`}>
      <m.img
        className="article-image article-image--skrzydlewski"
        src="./assets/artigo-skrzydlewski-p1-p3.webp"
        alt="Três primeiras páginas do artigo de Skrzydlewski et al. sobre micotoxinas em rações e matérias-primas"
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
      {state.highlights.map((highlight) => (
        <m.div
          key={highlight.label}
          className="evidence-highlight"
          aria-label={`Evidência: ${highlight.label}`}
          style={{
            left: highlight.x * 1280,
            top: highlight.y * 720,
            width: highlight.w * 1280,
            height: highlight.h * 720,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : duration * 0.78, duration: reducedMotion ? 0 : 0.22 }}
        />
      ))}
    </div>
  );
}

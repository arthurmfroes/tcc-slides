import { m } from "motion/react";
import { transitionDuration } from "../navigation";

export type ZhouStep = "page" | "table";

// zhou-pagina-7.png: página 7 renderizada a 200 dpi (595 × 791 pt → 1654 × 2197 px).
const WIDTH = 1654;
const HEIGHT = 2197;
const PX_PER_PT = 200 / 72;

// Caixa da Tabela 6 na página, em pontos do PDF.
const TABLE = { left: 56, top: 50, right: 266, bottom: 718 };

const PAGE_SCALE = 505 / HEIGHT;
const TABLE_SCALE = 1152 / ((TABLE.bottom - TABLE.top) * PX_PER_PT);

// Centro da tabela relativo ao centro da imagem; girando 90° no sentido horário, (dx, dy) vira (-dy, dx).
const dx = ((TABLE.left + TABLE.right) / 2) * PX_PER_PT - WIDTH / 2;
const dy = ((TABLE.top + TABLE.bottom) / 2) * PX_PER_PT - HEIGHT / 2;

export const zhouStates: Record<ZhouStep, { x: number; y: number; scale: number; rotate: number; clipPath: string }> = {
  page: {
    x: 64 + (WIDTH * PAGE_SCALE) / 2,
    y: 128 + (HEIGHT * PAGE_SCALE) / 2,
    scale: PAGE_SCALE,
    rotate: 0,
    clipPath: "inset(0px 0px 0px 0px)",
  },
  table: {
    x: 640 + TABLE_SCALE * dy,
    y: 375 - TABLE_SCALE * dx,
    scale: TABLE_SCALE,
    rotate: 90,
    clipPath: `inset(${TABLE.top * PX_PER_PT}px ${WIDTH - TABLE.right * PX_PER_PT}px ${HEIGHT - TABLE.bottom * PX_PER_PT}px ${TABLE.left * PX_PER_PT}px)`,
  },
};

export function zhouStepFromSlideIndex(index: number): ZhouStep | null {
  return index === 12 ? "page" : index === 13 ? "table" : null;
}

export function ZhouTableCamera({ step, previousIndex, reducedMotion }: { step: ZhouStep; previousIndex: number; reducedMotion: boolean }) {
  const state = zhouStates[step];
  const previousStep = zhouStepFromSlideIndex(previousIndex);
  const isStepTransition = previousStep !== null && previousStep !== step;
  const initial = previousStep ? zhouStates[previousStep] : state;
  const duration = isStepTransition ? transitionDuration(reducedMotion) : 0;

  return (
    <m.img
      src="./assets/zhou-pagina-7.png"
      alt="Página 7 do artigo de Zhou et al. (2024), com a Tabela 6 impressa girada"
      draggable={false}
      style={{
        position: "absolute",
        left: -WIDTH / 2,
        top: -HEIGHT / 2,
        width: WIDTH,
        height: HEIGHT,
        maxWidth: "none",
        transformOrigin: "50% 50%",
        border: "4px solid var(--line)",
        boxSizing: "border-box",
      }}
      initial={initial}
      animate={state}
      // O recorte fecha na primeira metade do movimento, para o resto da página sumir antes do zoom terminar.
      transition={{ duration, ease: [0.65, 0, 0.35, 1], clipPath: { duration: duration / 2, ease: "easeOut" } }}
    />
  );
}

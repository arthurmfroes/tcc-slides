export const TOTAL_SLIDES = 32;

export function clampSlide(value: number, total = TOTAL_SLIDES): number {
  return Math.min(total, Math.max(1, value));
}

export function parseSlideHash(hash: string, total = TOTAL_SLIDES): number {
  const match = hash.match(/^#\/slide\/(\d+)$/);
  if (!match) return 1;
  return clampSlide(Number(match[1]), total);
}

export function slideHash(slide: number): string {
  return `#/slide/${slide}`;
}

export function keyDelta(key: string): -1 | 0 | 1 {
  if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(key)) return 1;
  if (["ArrowLeft", "ArrowUp", "PageUp"].includes(key)) return -1;
  return 0;
}

export function transitionDuration(reducedMotion: boolean): number {
  return reducedMotion ? 0 : 1.35;
}

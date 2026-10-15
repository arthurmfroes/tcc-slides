import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Controls } from "./components/Controls";
import { Stage } from "./components/Stage";
import { clampSlide, keyDelta, parseSlideHash, slideHash } from "./navigation";
import { slides } from "./slides";

export function App() {
  const [current, setCurrent] = useState(() => parseSlideHash(window.location.hash, slides.length));
  const [previous, setPrevious] = useState(current);
  const touchStart = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;

  const goTo = useCallback((target: number) => {
    const next = clampSlide(target, slides.length);
    if (next === current) return;
    setPrevious(current);
    setCurrent(next);
    window.location.hash = slideHash(next);
  }, [current]);

  useEffect(() => {
    if (!window.location.hash) window.history.replaceState(null, "", slideHash(current));
    const onHashChange = () => {
      const next = parseSlideHash(window.location.hash, slides.length);
      setCurrent((value) => {
        if (value !== next) setPrevious(value);
        return next;
      });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [current]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const delta = keyDelta(event.key);
      if (delta) {
        event.preventDefault();
        goTo(current + delta);
      } else if (event.key === "Home") {
        event.preventDefault();
        goTo(1);
      } else if (event.key === "End") {
        event.preventDefault();
        goTo(slides.length);
      } else if (event.key.toLowerCase() === "f") {
        event.preventDefault();
        void document.documentElement.requestFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [current, goTo]);

  useEffect(() => {
    if (current === 2) {
      const preload = new Image();
      preload.src = "./assets/artigo-skrzydlewski-p1-p3.webp";
    } else if (current === 5 || current === 6) {
      const preload = new Image();
      preload.src = "./assets/artigo-mupunga-p1-p4.webp";
    }
  }, [current]);

  const definition = slides[current - 1];
  const SlideComponent = definition.component;

  return (
    <LazyMotion features={domAnimation} strict>
      <Stage
        onStageClick={(event) => {
          if ((event.target as HTMLElement).closest("button")) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          const relativeX = (event.clientX - bounds.left) / bounds.width;
          goTo(current + (relativeX < 0.25 ? -1 : 1));
        }}
        onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null; }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          const end = event.changedTouches[0]?.clientX;
          touchStart.current = null;
          if (start == null || end == null || Math.abs(end - start) < 55) return;
          goTo(current + (end < start ? 1 : -1));
        }}
      >
        <AnimatePresence initial={false} mode="sync">
          <m.div
            className="slide-layer"
            key={current}
            initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.28 }}
          >
            <SlideComponent previousIndex={previous - 1} reducedMotion={prefersReducedMotion} />
          </m.div>
        </AnimatePresence>
        <Controls
          current={current}
          total={slides.length}
          onPrevious={() => goTo(current - 1)}
          onNext={() => goTo(current + 1)}
          onFullscreen={() => void document.documentElement.requestFullscreen?.()}
        />
        <div className="progress" aria-hidden="true"><span style={{ width: `${(current / slides.length) * 100}%` }} /></div>
      </Stage>
    </LazyMotion>
  );
}

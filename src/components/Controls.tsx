type ControlsProps = {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onFullscreen: () => void;
};

export function Controls({ current, total, onPrevious, onNext, onFullscreen }: ControlsProps) {
  return (
    <nav className="controls" aria-label="Controles da apresentação" onClick={(event) => event.stopPropagation()}>
      <button type="button" onClick={onPrevious} aria-label="Slide anterior" disabled={current === 1}>←</button>
      <span aria-live="polite">{current} / {total}</span>
      <button type="button" onClick={onFullscreen} aria-label="Entrar em tela cheia">⛶</button>
      <button type="button" onClick={onNext} aria-label="Próximo slide" disabled={current === total}>→</button>
    </nav>
  );
}

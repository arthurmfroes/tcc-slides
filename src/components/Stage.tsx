import { useEffect, useState, type ReactNode } from "react";

const WIDTH = 1280;
const HEIGHT = 720;

function viewportScale() {
  // visualViewport desconta a barra de endereço do celular; innerWidth fica de reserva.
  const width = window.visualViewport?.width ?? window.innerWidth;
  const height = window.visualViewport?.height ?? window.innerHeight;
  return Math.min(width / WIDTH, height / HEIGHT);
}

export function Stage({ children, onStageClick, onTouchStart, onTouchEnd }: { children: ReactNode; onStageClick: (event: React.MouseEvent) => void; onTouchStart: (event: React.TouchEvent) => void; onTouchEnd: (event: React.TouchEvent) => void }) {
  const [scale, setScale] = useState(viewportScale);

  useEffect(() => {
    const resize = () => setScale(viewportScale());
    window.addEventListener("resize", resize);
    window.visualViewport?.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.visualViewport?.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="viewport">
      <div
        className="stage"
        style={{ transform: `translate(-50%, -50%) scale(${scale})` }}
        onClick={onStageClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {children}
      </div>
      <div className="rotate-hint">Gire o celular para ver os slides maiores</div>
    </main>
  );
}

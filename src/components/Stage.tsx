import { useEffect, useState, type ReactNode } from "react";

const WIDTH = 1280;
const HEIGHT = 720;

function viewportScale() {
  return Math.min(window.innerWidth / WIDTH, window.innerHeight / HEIGHT);
}

export function Stage({ children, onStageClick, onTouchStart, onTouchEnd }: { children: ReactNode; onStageClick: (event: React.MouseEvent) => void; onTouchStart: (event: React.TouchEvent) => void; onTouchEnd: (event: React.TouchEvent) => void }) {
  const [scale, setScale] = useState(viewportScale);

  useEffect(() => {
    const resize = () => setScale(viewportScale());
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <main className="viewport">
      <div
        className="stage"
        style={{ transform: `scale(${scale})` }}
        onClick={onStageClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {children}
      </div>
    </main>
  );
}

import type { CSSProperties, ReactNode } from "react";

type Positioned = CSSProperties & {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
};

export function Slide({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <section className={`slide ${dark ? "slide--dark" : ""} ${className}`.trim()}>{children}</section>;
}

export function Header({ title, number, section }: { title: string; number: number; section: string }) {
  return (
    <>
      <div className="top-rule" />
      <div className="section-label">{section}</div>
      <h1 className="slide-title">{title}</h1>
      <div className="footer-rule" />
      <div className="slide-number">{String(number).padStart(2, "0")}</div>
    </>
  );
}

export function Text({ children, as: Tag = "div", style, className = "" }: { children: ReactNode; as?: "div" | "p" | "h1" | "h2" | "h3"; style?: Positioned; className?: string }) {
  return <Tag className={`positioned-text ${className}`.trim()} style={style}>{children}</Tag>;
}

export function Rule({ left, top, width, height = 2, color = "var(--line)" }: { left: number; top: number; width: number; height?: number; color?: string }) {
  return <div className="rule" style={{ left, top, width, height, background: color }} />;
}

export function Panel({ children, style, tone = "pale", className = "" }: { children?: ReactNode; style: Positioned; tone?: "pale" | "blue" | "orange" | "white"; className?: string }) {
  return <div className={`panel panel--${tone} ${className}`.trim()} style={style}>{children}</div>;
}

export function Bullet({ children, top, left = 80, width = 1060, height = 58, color = "var(--orange)", fontSize = 23 }: { children: ReactNode; top: number; left?: number; width?: number; height?: number; color?: string; fontSize?: number }) {
  return (
    <div className="bullet" style={{ left, top, width, minHeight: height, fontSize }}>
      <span className="bullet__dot" style={{ background: color }} />
      <span>{children}</span>
    </div>
  );
}

export function Metric({ value, label, left, color = "var(--blue)", width = 240 }: { value: string; label: string; left: number; color?: string; width?: number }) {
  return (
    <div className="metric" style={{ left, width }}>
      <strong style={{ color }}>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export function Figure({ src, alt, style, rounded = false, loading = "lazy" }: { src: string; alt: string; style: Positioned; rounded?: boolean; loading?: "eager" | "lazy" }) {
  return <img className={`figure ${rounded ? "figure--rounded" : ""}`} src={src} alt={alt} style={style} loading={loading} draggable={false} />;
}

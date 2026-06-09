import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  inverted = false,
  className = "",
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const subColor = inverted ? "text-white/70" : "text-muted-foreground";
  const titleColor = inverted ? "text-white" : "text-navy";
  const eyebrowColor = inverted ? "text-teal" : "text-teal";

  return (
    <div className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <div className={`text-xs font-semibold tracking-[0.18em] uppercase ${eyebrowColor}`}>{eyebrow}</div>
      )}
      <h2 className={`mt-3 text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.15] ${titleColor}`}>
        {title}
      </h2>
      {subtitle && <p className={`mt-4 text-base md:text-lg leading-relaxed ${subColor}`}>{subtitle}</p>}
    </div>
  );
}

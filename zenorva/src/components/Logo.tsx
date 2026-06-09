import { Link } from "@tanstack/react-router";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const wordmarkColor = variant === "light" ? "text-white" : "text-[oklch(0.13_0.07_285)]";
  const violet = "oklch(0.55 0.25 285)";
  const violetLight = "oklch(0.72 0.20 285)";
  return (
    <Link to="/" className={`flex items-center gap-2.5 group ${className}`} aria-label="Zenorva Support home">
      <span className="inline-flex h-8 w-8 items-center justify-center">
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <circle cx="16" cy="16" r="13" fill="none" stroke={violet} strokeWidth="1.5" />
          <ellipse cx="16" cy="16" rx="6" ry="13" fill="none" stroke={violet} strokeWidth="1" opacity="0.5" />
          <ellipse cx="16" cy="16" rx="13" ry="6" fill="none" stroke={violet} strokeWidth="1" opacity="0.5" />
          <line x1="3" y1="16" x2="29" y2="16" stroke={violet} strokeWidth="1" opacity="0.5" />
          {/* Cameroon dot */}
          <circle cx="17.4" cy="17.6" r="2.2" fill={violetLight} />
        </svg>
      </span>
      <span className={`font-display text-xl tracking-tight ${wordmarkColor}`}>
        <span className="font-bold">Zenorva</span>
        <span className="font-light opacity-80"> Support</span>
      </span>
    </Link>
  );
}

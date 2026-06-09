import { Link } from "@tanstack/react-router";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const wordmarkColor = variant === "light" ? "text-white" : "text-[oklch(0.21_0.04_255)]";
  return (
    <Link to="/" className={`flex items-center gap-2.5 group ${className}`} aria-label="Zenorva Support home">
      <span className="inline-flex h-8 w-8 items-center justify-center">
        {/* Globe with dot over Central Africa */}
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <circle cx="16" cy="16" r="13" fill="none" stroke="oklch(0.78 0.14 175)" strokeWidth="1.5" />
          <ellipse cx="16" cy="16" rx="6" ry="13" fill="none" stroke="oklch(0.78 0.14 175)" strokeWidth="1" opacity="0.55" />
          <ellipse cx="16" cy="16" rx="13" ry="6" fill="none" stroke="oklch(0.78 0.14 175)" strokeWidth="1" opacity="0.55" />
          <line x1="3" y1="16" x2="29" y2="16" stroke="oklch(0.78 0.14 175)" strokeWidth="1" opacity="0.55" />
          {/* Cameroon dot — slightly above center, slightly right */}
          <circle cx="17.4" cy="17.6" r="2" fill="oklch(0.78 0.14 175)" />
        </svg>
      </span>
      <span className={`font-display text-xl tracking-tight ${wordmarkColor}`}>
        <span className="font-bold">Zenorva</span>
        <span className="font-light opacity-90">Support</span>
      </span>
    </Link>
  );
}

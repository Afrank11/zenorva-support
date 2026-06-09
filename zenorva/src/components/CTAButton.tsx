import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "ghost-light" | "ghost-dark" | "white" | "outline-violet";
type Size = "md" | "lg";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  withArrow?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none cursor-pointer";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-violet text-white hover:bg-[oklch(0.50_0.25_285)] shadow-[0_4px_14px_0_oklch(0.55_0.25_285/0.4)] hover:shadow-[0_6px_20px_0_oklch(0.55_0.25_285/0.5)] hover:-translate-y-0.5 active:translate-y-0",
  "ghost-light":
    "border border-white/25 text-white hover:bg-white/10 hover:border-white/40",
  "ghost-dark":
    "border border-border text-foreground hover:bg-secondary hover:border-violet/30",
  "outline-violet":
    "border-2 border-violet text-violet hover:bg-violet hover:text-white",
  white:
    "bg-white text-violet-deep hover:bg-white/90 shadow-sm hover:-translate-y-0.5 active:translate-y-0",
};

export const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(function CTAButton(
  { variant = "primary", size = "md", className = "", children, withArrow = true, ...props },
  ref,
) {
  return (
    <button ref={ref} className={`group ${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
      {withArrow && <span className="cta-arrow" aria-hidden="true">→</span>}
    </button>
  );
});

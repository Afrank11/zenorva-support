import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "ghost-light" | "ghost-dark" | "white";
type Size = "md" | "lg";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  withArrow?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary: "bg-teal text-teal-foreground hover:bg-teal/90 shadow-sm",
  "ghost-light": "border border-white/30 text-white hover:bg-white/10",
  "ghost-dark": "border border-border text-foreground hover:bg-secondary",
  white: "bg-white text-navy hover:bg-white/90 shadow-sm",
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

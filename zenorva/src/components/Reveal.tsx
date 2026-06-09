import { useInView } from "@/hooks/use-in-view";
import type { ReactNode, HTMLAttributes } from "react";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "article" | "header";
}

export function Reveal({ children, delay = 0, className = "", as = "div", ...rest }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

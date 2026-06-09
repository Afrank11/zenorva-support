import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1500,
  className = "",
}: StatCounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted =
    value >= 1000
      ? Math.round(n).toLocaleString("en-US")
      : n.toFixed(decimals);

  return (
    <span ref={ref} className={`font-mono ${className}`}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

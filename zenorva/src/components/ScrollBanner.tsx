import { useEffect, useState } from "react";
import { useBookCall } from "./BookCallModal";

export function ScrollBanner() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { open } = useBookCall();

  useEffect(() => {
    if (dismissed) return;
    const t = window.setTimeout(() => setShow(true), 60_000);
    const onScroll = () => {
      const pct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (pct > 0.7) setShow(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, [dismissed]);

  if (dismissed || !show) return null;

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 max-w-sm items-center gap-3 rounded-xl bg-[oklch(0.13_0.07_285)] text-white p-4 shadow-2xl ring-1 ring-white/10 animate-fade-in-up">
      <div className="flex-1">
        <p className="text-sm font-medium">Still reading? Talk to us.</p>
        <p className="text-xs text-white/60 mt-0.5">No commitment. Free 30-min discovery call.</p>
      </div>
      <button
        onClick={() => { open(); setDismissed(true); }}
        className="text-xs font-semibold text-teal hover:underline"
      >
        Book →
      </button>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="text-white/50 hover:text-white text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}

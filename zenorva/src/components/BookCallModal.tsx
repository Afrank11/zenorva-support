import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { CheckCircle2, PhoneCall, Users, BarChart3 } from "lucide-react";
import { CTAButton } from "./CTAButton";

interface BookCallContextValue {
  open: () => void;
  close: () => void;
}

const BookCallContext = createContext<BookCallContextValue | null>(null);

export function useBookCall() {
  const ctx = useContext(BookCallContext);
  if (!ctx) throw new Error("useBookCall must be used inside BookCallProvider");
  return ctx;
}

export function BookCallProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <BookCallContext.Provider value={{ open, close }}>
      {children}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="book-call-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl animate-fade-in-up overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header band */}
            <div className="bg-[oklch(0.13_0.07_285)] px-8 pt-8 pb-6 relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{ background: "radial-gradient(60% 80% at 80% 0%, oklch(0.55 0.25 285 / 0.5), transparent 60%)" }}
                aria-hidden="true"
              />
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 inline-flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                ✕
              </button>
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-3">
                  Free · No commitment
                </span>
                <h2 id="book-call-title" className="font-display text-2xl font-bold text-white leading-tight">
                  Book your free discovery call<br />
                  <span className="text-[oklch(0.75_0.18_285)]">— and unlock a 30-day pilot.</span>
                </h2>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  A 30-minute call. No sales pitch. Just an honest conversation about your support needs.
                </p>
              </div>
            </div>

            {/* What you get */}
            <div className="px-8 py-6">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-violet mb-4">What happens next</p>
              <ul className="space-y-3 mb-6">
                {[
                  { icon: <PhoneCall className="h-4 w-4" />, title: "Free 30-min discovery call", desc: "We learn your stack, ticket volume, and what great support looks like for you." },
                  { icon: <Users className="h-4 w-4" />, title: "We match & prepare your engineer", desc: "We find the right fit, train them on your product, and get everything ready." },
                  { icon: <BarChart3 className="h-4 w-4" />, title: "30-day pilot — risk free", desc: "Go live with defined KPIs and weekly reports. Cancel after 30 days if it's not right." },
                ].map((s) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-violet-light text-violet inline-flex items-center justify-center flex-none mt-0.5">
                      {s.icon}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-[oklch(0.13_0.07_285)] text-sm">{s.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{s.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
                {["No setup fees", "No long-term contract", "Responds within 1 business day"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-violet flex-none" />
                    {t}
                  </li>
                ))}
              </ul>

              <a href="mailto:hello@zenorvasupport.com?subject=Book%20a%20free%20discovery%20call" className="block">
                <CTAButton variant="primary" className="w-full">
                  Send us an email to book
                </CTAButton>
              </a>
              <p className="mt-3 text-xs text-muted-foreground text-center">
                Or reach out directly — <span className="font-medium text-[oklch(0.13_0.07_285)]">hello@zenorvasupport.com</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </BookCallContext.Provider>
  );
}

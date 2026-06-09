import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
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
            className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl p-8 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 h-9 w-9 rounded-full hover:bg-secondary inline-flex items-center justify-center text-muted-foreground"
            >
              ✕
            </button>
            <h2 id="book-call-title" className="font-display text-2xl font-bold text-navy">
              Book a free 30-minute consultation
            </h2>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
              We'll learn about your support needs and propose a tailored plan. No pressure, no commitment.
            </p>

            <div className="mt-6 rounded-xl border border-dashed border-border bg-secondary/60 p-6 text-center">
              <div className="text-sm text-muted-foreground">Calendly embed placeholder</div>
              <div className="mt-2 font-mono text-xs text-muted-foreground/80">your-calendly-link</div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@zenorvasupport.com?subject=Book%20a%20call"
                className="flex-1"
              >
                <CTAButton variant="primary" className="w-full">Email us instead</CTAButton>
              </a>
              <CTAButton variant="ghost-dark" withArrow={false} onClick={close} className="flex-1">
                Close
              </CTAButton>
            </div>

            <p className="mt-4 text-xs text-muted-foreground text-center">Typically responds within 1 business day.</p>
          </div>
        </div>
      )}
    </BookCallContext.Provider>
  );
}

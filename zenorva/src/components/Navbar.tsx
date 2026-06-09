import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";
import { useBookCall } from "./BookCallModal";

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/why-cameroon", label: "Why Cameroon" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useBookCall();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo variant={onDark ? "light" : "dark"} />

          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-colors ${
                  onDark ? "text-white/85 hover:text-white" : "text-foreground/80 hover:text-navy"
                }`}
                activeProps={{ className: onDark ? "text-white" : "text-navy" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className={`text-sm font-medium ${onDark ? "text-white/85 hover:text-white" : "text-foreground/80 hover:text-navy"}`}
            >
              Sign In
            </Link>
            <CTAButton size="md" onClick={open}>Book a Free Call</CTAButton>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <CTAButton size="md" onClick={open} className="!px-4 !py-2 text-xs">Book a Call</CTAButton>
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className={`h-10 w-10 inline-flex flex-col items-center justify-center gap-1.5 rounded-md ${
                onDark ? "text-white" : "text-foreground"
              }`}
            >
              <span className={`block h-0.5 w-5 bg-current transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 pt-2 animate-fade-in-up">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-md"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-2 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-md"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

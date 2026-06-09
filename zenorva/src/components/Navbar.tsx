import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";
import { useBookCall } from "./BookCallModal";
import { Menu, X } from "lucide-react";

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
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-[0_1px_16px_oklch(0.55_0.25_285/0.06)]"
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
                  onDark
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/75 hover:text-[oklch(0.13_0.07_285)]"
                }`}
                activeProps={{
                  className: onDark
                    ? "text-white"
                    : "text-[oklch(0.55_0.25_285)] font-semibold",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className={`text-sm font-medium ${
                onDark
                  ? "text-white/80 hover:text-white"
                  : "text-foreground/75 hover:text-[oklch(0.13_0.07_285)]"
              }`}
            >
              Sign In
            </Link>
            <CTAButton size="md" onClick={open}>Book a Free Call</CTAButton>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <CTAButton size="md" onClick={open} className="!px-4 !py-2 text-xs">
              Book a Call
            </CTAButton>
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className={`h-10 w-10 inline-flex items-center justify-center rounded-md ${
                onDark ? "text-white" : "text-foreground"
              }`}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-border mt-1">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-base font-medium text-foreground hover:bg-violet-light hover:text-violet rounded-lg transition-colors"
                  activeProps={{ className: "text-violet bg-violet-light font-semibold" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 text-base font-medium text-foreground hover:bg-violet-light hover:text-violet rounded-lg transition-colors"
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

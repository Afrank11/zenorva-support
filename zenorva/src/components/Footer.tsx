import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.13_0.07_285)] text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-white/55 max-w-xs leading-relaxed">
              World-class support engineers from Cameroon — built around your product and your customers.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/15 hover:border-[oklch(0.72_0.20_285)] hover:text-[oklch(0.72_0.20_285)] transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="X / Twitter"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/15 hover:border-[oklch(0.72_0.20_285)] hover:text-[oklch(0.72_0.20_285)] transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "About Us" },
              { to: "/careers", label: "Careers" },
              { to: "/contact", label: "Contact" },
            ]}
            extra={<span className="text-white/35 text-sm">Blog (coming soon)</span>}
          />

          <FooterCol
            title="Services"
            links={[
              { to: "/services", label: "Tier-1 Support" },
              { to: "/services", label: "Customer Support" },
              { to: "/services", label: "Helpdesk Management" },
              { to: "/pricing", label: "Pilot Program" },
            ]}
          />

          <FooterCol
            title="Resources"
            links={[
              { to: "/how-it-works", label: "How It Works" },
              { to: "/pricing", label: "Pricing" },
              { to: "/why-cameroon", label: "Why Cameroon" },
              { to: "/how-it-works", label: "FAQ" },
            ]}
          />
        </div>

        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-white/40">© 2026 Zenorva Support. All rights reserved. | Registered in Cameroon</p>
          <p className="text-xs text-white/35">Made with care from Yaoundé 🌍</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  extra,
}: {
  title: string;
  links: { to: string; label: string }[];
  extra?: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold text-white tracking-wide uppercase">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              to={l.to}
              className="text-sm text-white/60 hover:text-[oklch(0.72_0.20_285)] transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
        {extra && <li>{extra}</li>}
      </ul>
    </div>
  );
}

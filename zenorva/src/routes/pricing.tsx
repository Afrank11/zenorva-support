import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTAButton } from "@/components/CTAButton";
import { useBookCall } from "@/components/BookCallModal";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Simple, Transparent | Zenorva Support" },
      { name: "description", content: "One flat monthly rate per dedicated engineer. No setup fees. No long-term lock-in. Start with a 30-day pilot." },
      { property: "og:title", content: "Pricing — Zenorva Support" },
      { property: "og:description", content: "Starter from $900/mo. Most-popular Growth tier with volume discount. Custom Scale plans." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Starter",
    sub: "1 Engineer",
    price: "$900",
    cadence: "/ month",
    cta: "Get Started",
    items: ["1 dedicated Tier-1 support engineer", "Business hours coverage (40 hrs/week)", "Onboarding and training included", "Weekly performance report", "Escalation management", "Slack/email communication channel"],
    popular: false,
  },
  {
    name: "Growth",
    sub: "2–4 Engineers",
    price: "Custom",
    cadence: "approx. $800/engineer/mo",
    cta: "Request a Quote",
    items: ["Everything in Starter", "Team lead coordination included", "Staggered schedules possible", "Monthly strategy call with operations lead", "Volume discount applied"],
    popular: true,
  },
  {
    name: "Scale",
    sub: "5+ Engineers",
    price: "Custom",
    cadence: "tailored to your needs",
    cta: "Talk to Sales",
    items: ["Everything in Growth", "Dedicated account manager", "Priority matching and onboarding", "Custom SLA and reporting format", "Potential 24/7 coverage options"],
    popular: false,
  },
];

const faqs = [
  { q: "Is the pilot included in the pricing?", a: "Yes. The 30-day pilot is billed at the regular monthly rate. There are no setup fees and you can cancel at the end of the pilot with no penalty." },
  { q: "What payment methods do you accept?", a: "Wire transfer, SEPA, and major credit cards via invoice. Payments are monthly in advance." },
  { q: "Are there setup fees?", a: "No. Onboarding, training, and integration work is included in the monthly fee." },
  { q: "What happens if I need to pause?", a: "You can pause with 30 days notice. We'll hold your engineer for up to 60 days while you regroup, then re-onboard at no extra cost." },
];

function PricingPage() {
  const { open } = useBookCall();
  return (
    <>
      <section className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dots opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05]">
            Simple, <span className="text-teal">Transparent</span> Pricing
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            No hidden fees. No long-term lock-in. One flat monthly rate per engineer.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className={`relative h-full flex flex-col rounded-2xl border bg-white p-7 ${t.popular ? "border-teal border-2 shadow-xl md:scale-[1.02]" : "border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]"}`}>
                  {t.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-teal px-3 py-1 text-[11px] font-bold tracking-wider text-teal-foreground">
                      ⭐ MOST POPULAR
                    </span>
                  )}
                  <div>
                    <div className="text-xs font-semibold tracking-[0.18em] uppercase text-teal">{t.sub}</div>
                    <h3 className="mt-2 font-display text-2xl font-bold text-navy">{t.name}</h3>
                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="font-mono text-4xl font-bold text-navy">{t.price}</span>
                      <span className="text-sm text-muted-foreground">{t.cadence}</span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {t.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-sm text-foreground">
                        <span className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-teal/15 text-teal">
                          <svg viewBox="0 0 20 20" className="h-2.5 w-2.5"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <CTAButton variant={t.popular ? "primary" : "ghost-dark"} className="w-full" onClick={open}>{t.cta}</CTAButton>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-muted-foreground">All plans include a 30-day pilot option. Scale up or down with 30 days notice. No penalties.</p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Pricing FAQ" />
          <div className="mt-10 divide-y divide-border rounded-2xl bg-white border border-border">
            {faqs.map((f, i) => <FAQ key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [o, setO] = useState(false);
  return (
    <div>
      <button onClick={() => setO((v) => !v)} className="w-full flex items-center justify-between text-left p-5 hover:bg-secondary/40" aria-expanded={o}>
        <span className="font-display font-semibold text-navy">{q}</span>
        <span className={`text-teal text-2xl leading-none transition-transform ${o ? "rotate-45" : ""}`} aria-hidden>+</span>
      </button>
      {o && <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}

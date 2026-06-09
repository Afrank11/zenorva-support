import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";
import { useBookCall } from "@/components/BookCallModal";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — End-to-End Support Coverage | Zenorva Support" },
      { name: "description", content: "Tier-1 technical support, customer support, and helpdesk administration — built around your product and tools." },
      { property: "og:title", content: "Services — Zenorva Support" },
      { property: "og:description", content: "Tier-1 technical support, customer support, and helpdesk administration." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Tier-1 Technical Support",
    items: [
      "Ticket intake, triage, and classification",
      "First-line troubleshooting: OS issues, SaaS platform errors, basic networking",
      "User assistance via email, live chat, and ticketing systems",
      "Incident documentation and resolution notes",
      "Escalation to client's engineering team with full context",
    ],
    tools: "Zendesk · Freshdesk · Intercom · Jira Service Desk · HubSpot Service Hub",
  },
  {
    title: "Customer Support",
    items: [
      "Email support and help desk management",
      "Live chat coverage during business hours",
      "Customer issue resolution and follow-up",
      "FAQ and knowledge base contribution",
      "CSAT monitoring and response",
    ],
  },
  {
    title: "Helpdesk Administration",
    items: [
      "Queue management and SLA monitoring",
      "Ticket routing rules setup",
      "Reporting and weekly performance dashboards",
      "Onboarding new users to client's tools",
    ],
  },
];

function ServicesPage() {
  const { open } = useBookCall();
  return (
    <>
      <section className="bg-[oklch(0.13_0.07_285)] text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dots opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05]">
            End-to-End Support Coverage — Built Around <span className="text-teal">Your Product</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            From ticket triage to weekly reporting, we cover the operational layer so your team can focus on building.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="rounded-2xl border border-border bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">{s.title}</h2>
                <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-foreground">
                      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-teal/15 text-teal">
                        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                {s.tools && (
                  <div className="mt-6 pt-5 border-t border-border text-sm text-muted-foreground">
                    <span className="font-semibold text-navy">Tools:</span> {s.tools}
                  </div>
                )}
              </article>
            </Reveal>
          ))}

          <Reveal>
            <div className="rounded-2xl border-l-4 border-warning bg-warning/5 p-7">
              <h3 className="font-display text-xl font-semibold text-navy">What's not included (yet)</h3>
              <p className="mt-2 text-muted-foreground text-sm">Transparency matters. The following are out of scope in the initial phase:</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                {[
                  "Tier-2 / Tier-3 engineering work",
                  "24/7 round-the-clock coverage (available as an upgrade)",
                  "System ownership or admin access beyond the helpdesk",
                  "Custom software development",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2"><span className="text-warning mt-0.5">○</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-3xl text-center px-4">
          <SectionHeading title="Want a tailored scope?" subtitle="Tell us about your tools and ticket volume — we'll build the right support layer for you." />
          <div className="mt-8"><CTAButton size="lg" onClick={open}>Book a Free Consultation</CTAButton></div>
        </div>
      </section>
    </>
  );
}

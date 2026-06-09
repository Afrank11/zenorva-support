import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTAButton } from "@/components/CTAButton";
import { useBookCall } from "@/components/BookCallModal";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — A Structured Process From Day One | Zenorva Support" },
      { name: "description", content: "From discovery call to live operations and ongoing supervision — our 6-stage process for onboarding dedicated support engineers." },
      { property: "og:title", content: "How It Works — Zenorva Support" },
      { property: "og:description", content: "Our 6-stage onboarding process: discovery, matching, training, integration, live ops, supervision." },
    ],
  }),
  component: HowItWorksPage,
});

const stages = [
  { n: 1, t: "Discovery Call", w: "Week 0", d: "We learn everything about your support needs: current ticket volume, tools you use, customer types, escalation paths, and what 'good support' looks like for your company." },
  { n: 2, t: "Talent Matching", w: "Week 1", d: "We identify 1–2 engineers from our trained pool who match your industry and technical requirements. You receive a short profile for each. You approve or request alternatives." },
  { n: 3, t: "Dedicated Training", w: "Week 1–2", d: "Your selected engineer goes through tailored onboarding: your product documentation, your tone of voice, your escalation matrix, and your helpdesk tools. We handle this entirely." },
  { n: 4, t: "Systems Integration", w: "Week 2", d: "The engineer is set up in your Zendesk / Intercom / Freshdesk environment. We configure communication channels, ticket routing, and a daily check-in rhythm." },
  { n: 5, t: "Live Operations", w: "Week 3 onward", d: "The engineer begins handling tickets under close supervision. Daily internal QA checks. You receive a week-1 summary report." },
  { n: 6, t: "Ongoing Supervision & Reporting", w: "Continuous", d: "Weekly performance reports every Monday: tickets handled, response time, CSAT, escalations, open issues. Monthly review call with the operations lead." },
];

const faqs = [
  { q: "How long does onboarding take?", a: "Typically 2–3 weeks from discovery call to live operations. Faster if your tooling and documentation are already in place." },
  { q: "What if the engineer doesn't work out?", a: "We replace them at no cost. The pilot program is specifically designed to de-risk the match — if it's not right, we adjust quickly." },
  { q: "Can I scale up quickly?", a: "Yes. Once you're live, adding additional engineers usually takes 2–3 weeks each, and we maintain a trained bench for faster scale-ups." },
  { q: "Who do I contact if there's an issue?", a: "Kwale, our founder and operations lead, is your direct point of contact. No layers, no account managers." },
  { q: "Do engineers work in my time zone?", a: "Cameroon is UTC+1 — perfectly aligned with Western and Central Europe. We can also stagger schedules for North American coverage." },
];

function HowItWorksPage() {
  const { open } = useBookCall();
  return (
    <>
      <section className="bg-[oklch(0.13_0.07_285)] text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dots opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05]">
            A Structured Process <span className="text-teal">From Day One</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Six stages. Predictable timelines. No mysteries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ol className="space-y-6">
            {stages.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <li className="rounded-2xl border border-border bg-white p-7 flex gap-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="flex-none">
                    <div className="h-14 w-14 rounded-full bg-navy text-white font-mono text-lg font-semibold inline-flex items-center justify-center">{s.n}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-display text-xl font-bold text-navy">{s.t}</h3>
                      <span className="text-xs font-semibold tracking-wider uppercase text-teal">{s.w}</span>
                    </div>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-10 divide-y divide-border rounded-2xl bg-white border border-border">
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
          <div className="mt-12 text-center">
            <CTAButton size="lg" onClick={open}>Have more questions? Book a call</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between text-left p-5 hover:bg-secondary/40 transition-colors" aria-expanded={open}>
        <span className="font-display font-semibold text-navy">{q}</span>
        <span className={`text-teal text-2xl leading-none transition-transform ${open ? "rotate-45" : ""}`} aria-hidden>+</span>
      </button>
      {open && <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}

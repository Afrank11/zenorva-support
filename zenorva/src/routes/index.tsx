import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";
import { useBookCall } from "@/components/BookCallModal";
import { StatCounter } from "@/components/StatCounter";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zenorva Support — Dedicated support engineers from Cameroon" },
      {
        name: "description",
        content:
          "Bilingual EN/FR Tier-1 support engineers from Cameroon for SaaS, MSPs and SMEs. 40–60% lower cost. Founder-led quality control.",
      },
      { property: "og:title", content: "Zenorva Support — Dedicated support engineers from Cameroon" },
      {
        property: "og:description",
        content: "World-class support teams at African cost efficiency. Bilingual EN/FR. Founder-led oversight.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <MetricsBar />
      <Problem />
      <HowItWorksOverview />
      <ValueCards />
      <BehindEngineer />
      <CostComparison />
      <PilotCallout />
      <PartnerSection />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

/* ───── Section 1: Hero ───── */
function Hero() {
  const { open } = useBookCall();
  return (
    <section className="relative bg-navy text-white overflow-hidden pt-28 lg:pt-32">
      <div className="absolute inset-0 bg-grid-dots opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 10%, oklch(0.78 0.14 175 / 0.18), transparent 60%), radial-gradient(40% 40% at 0% 100%, oklch(0.78 0.14 175 / 0.12), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(90vh-7rem)]">
          {/* Left */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                🌍 Serving Companies in Europe & North America
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display font-bold text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight">
                World-Class Customer Support Teams — at{" "}
                <span className="text-teal">African Cost Efficiency</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
                We provide dedicated, trained support engineers from Cameroon for SaaS companies and MSPs.
                Reduce support costs by up to 60% — without compromising quality or response time.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton size="lg" onClick={open}>Book a Free Consultation</CTAButton>
                <Link to="/how-it-works">
                  <CTAButton size="lg" variant="ghost-light" withArrow={false}>See How It Works</CTAButton>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
                {[
                  "No long-term contracts required",
                  "30-day pilot program available",
                  "English & French support",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right — dashboard mockup */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <DashboardMockup />
            </Reveal>
          </div>
        </div>

        {/* Trusted by */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 text-center">Trusted by growing companies in:</p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-white/40">
            {["FinTech Startup", "E-Commerce SME", "SaaS Platform", "Managed Services Provider", "B2B Marketplace", "EdTech Scaleup"].map((n) => (
              <span key={n} className="font-display font-medium tracking-wide">{n}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-teal flex-none" aria-hidden="true">
      <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashboardMockup() {
  return (
    <div className="relative">
      <div
        className="rounded-2xl bg-navy-deep border border-white/10 shadow-2xl p-5 backdrop-blur"
        style={{ boxShadow: "0 30px 60px -20px rgba(0,201,167,0.18), 0 10px 30px -10px rgba(0,0,0,0.5)" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-teal/20 ring-2 ring-teal/40 inline-flex items-center justify-center text-xs font-semibold text-teal">KC</div>
            <div>
              <div className="text-xs text-white/60">Your dedicated engineer</div>
              <div className="text-sm font-medium text-white">Online · Yaoundé</div>
            </div>
          </div>
          <div className="text-[10px] uppercase tracking-wider text-teal font-semibold">Live</div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <Stat label="Avg. response" value="4 min" />
          <Stat label="CSAT" value="98.2%" />
        </div>

        <div className="mt-5 space-y-2">
          {[
            { id: "#4823", t: "Login error on Safari", s: "Resolved", c: "bg-success/15 text-success border-success/30" },
            { id: "#4824", t: "Billing question — Pro plan", s: "In Progress", c: "bg-teal/15 text-teal border-teal/30" },
            { id: "#4825", t: "API rate limit issue", s: "Escalated", c: "bg-warning/15 text-warning border-warning/30" },
          ].map((r) => (
            <div key={r.id} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5">
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-mono text-[11px] text-white/40">{r.id}</span>
                <span className="text-sm text-white/85 truncate">{r.t}</span>
              </div>
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${r.c}`}>{r.s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
      <div className="text-[11px] uppercase tracking-wider text-white/50">{label}</div>
      <div className="mt-1 font-mono text-xl text-teal">{value}</div>
    </div>
  );
}

/* ───── Section 1B: Live metrics ───── */
function MetricsBar() {
  return (
    <section className="bg-[oklch(0.18_0.025_260)] py-10 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          <Metric value={<><StatCounter value={98} suffix="%" /></>} label="QA Score Target" />
          <Metric value={<>&lt; <StatCounter value={4} /> min</>} label="Average First Response" />
          <Metric value={<><StatCounter value={40} />–<StatCounter value={60} suffix="%" /></>} label="Cost Reduction vs. In-House" />
          <Metric value={<span className="text-teal">EN + FR</span>} label="Bilingual Coverage" />
        </div>
      </div>
    </section>
  );
}
function Metric({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="px-6 py-4 lg:py-2 text-center">
      <div className="font-mono text-3xl lg:text-4xl text-teal font-medium">{value}</div>
      <div className="mt-1 text-xs text-white/55">{label}</div>
    </div>
  );
}

/* ───── Section 2: Problem ───── */
function Problem() {
  const items = [
    { icon: "💸", title: "US/EU Support Is Expensive", text: "A single in-house support engineer in the US costs $3,500–$5,000/month in salary alone — before benefits, overhead, and turnover." },
    { icon: "⏱️", title: "Hiring Takes Months", text: "Recruiting, interviewing, and onboarding takes 2–3 months. And if they leave, you start over." },
    { icon: "📉", title: "Quality Gets Sacrificed", text: "Cheap offshore outsourcing pools give you shared, undertrained agents. Tickets pile up. Customers churn." },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why companies come to us" title="Your support costs are eating your margins." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <div className="text-3xl">{it.icon}</div>
                <h3 className="mt-4 font-display text-xl font-semibold text-navy">{it.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-12 mx-auto max-w-4xl rounded-xl border-l-4 border-teal bg-secondary/60 p-6">
            <p className="font-display text-lg md:text-xl text-navy">
              There's a better model: a <span className="text-teal font-semibold">dedicated, trained engineer</span> who works exclusively for your company — at a fraction of the cost.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───── Section 3: How model works (overview) ───── */
function HowItWorksOverview() {
  const steps = [
    { n: 1, t: "Discovery Call", d: "We learn your product, tools, and support volume." },
    { n: 2, t: "We Match & Train", d: "We find and train the right engineer for your stack." },
    { n: 3, t: "They Join Your Tools", d: "Your engineer integrates into Zendesk, Intercom, etc." },
    { n: 4, t: "You Scale Confidently", d: "Weekly reports, KPIs, escalation handled." },
  ];
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="A Simpler Way to Scale Support" />
        <div className="mt-14 relative">
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-border" aria-hidden="true" />
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <li className="relative text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-white border-2 border-teal text-teal font-mono text-lg font-semibold inline-flex items-center justify-center shadow-sm relative z-10">
                    {s.n}
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-navy">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="mt-10 text-center">
          <Link to="/how-it-works" className="group inline-flex items-center gap-1 text-teal font-medium hover:underline">
            See the full process <span className="cta-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───── Section 4: Value cards ───── */
function ValueCards() {
  const cards = [
    { icon: "👤", title: "Dedicated Engineer", text: "Your engineer works exclusively for you — not a shared pool. They learn your product, tone, and workflows deeply." },
    { icon: "📊", title: "40–60% Cost Reduction", text: "Compare $4,000+/month for a US hire vs. $900/month with us. Same quality. Different geography." },
    { icon: "🌐", title: "Bilingual: English & French", text: "Our engineers support both English and French-speaking customers — a rare advantage that most providers cannot match." },
    { icon: "🛡️", title: "Founder-Led Quality Control", text: "Every engineer is supervised by our operations lead. Weekly reporting, SLA tracking, and escalation management included." },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Everything Included, Nothing Hidden"
          subtitle="When you work with Zenorva Support, you're not just getting an agent. You're getting a managed support operation — without the overhead."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 hover:border-teal/40 hover:shadow-md transition-all">
                <div className="h-11 w-11 rounded-xl bg-teal/10 inline-flex items-center justify-center text-2xl">{c.icon}</div>
                <h3 className="mt-4 font-display font-semibold text-navy text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Section 4B: Behind your engineer ───── */
function BehindEngineer() {
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="You Get More Than One Person"
          subtitle="Every Zenorva Support engagement is backed by a structured support layer — so your engineer always has what they need to perform."
        />

        <div className="mt-14 mx-auto max-w-3xl">
          <Reveal>
            <div className="flex flex-col items-center gap-6">
              <OrgBox label="Your Company" tone="muted" />
              <Connector />
              <OrgBox label="Your Dedicated Engineer" tone="teal" />
              <div className="w-full grid grid-cols-3 gap-4 relative">
                <div className="absolute left-[16.66%] right-[16.66%] -top-3 h-px bg-border" aria-hidden="true" />
                <OrgBox label="Founder / Ops Lead" small />
                <OrgBox label="Training & Onboarding" small />
                <OrgBox label="Weekly QA & Reporting" small />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {[
            { i: "🧑‍💼", t: "Direct founder access", d: "No account manager layers. You speak to Kwale directly." },
            { i: "📋", t: "Structured onboarding", d: "Every engineer trains on your product before day one." },
            { i: "📊", t: "Weekly performance reports", d: "Tickets, CSAT, response time, escalations — every Monday." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <div className="rounded-full bg-white border border-border px-5 py-4 flex items-center gap-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <span className="text-xl">{p.i}</span>
                <div>
                  <div className="font-display font-semibold text-navy text-sm">{p.t}</div>
                  <div className="text-xs text-muted-foreground">{p.d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function OrgBox({ label, tone = "default", small = false }: { label: string; tone?: "default" | "teal" | "muted"; small?: boolean }) {
  const cls =
    tone === "teal"
      ? "bg-navy text-white border-teal"
      : tone === "muted"
      ? "bg-white text-navy border-border"
      : "bg-white text-navy border-border";
  return (
    <div className={`${small ? "text-xs px-3 py-2" : "text-sm px-5 py-3"} rounded-xl border ${cls} font-display font-medium text-center w-full`}>
      {label}
    </div>
  );
}
function Connector() {
  return <div className="h-6 w-px bg-border" aria-hidden="true" />;
}

/* ───── Section 5: Cost comparison ───── */
function CostComparison() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dots opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading inverted title="The Math Is Simple" />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <CompareCard
            title="In-House US Engineer"
            tone="warn"
            rows={[
              ["Salary", "$3,500–$5,000 / month"],
              ["Benefits & overhead", "+$800–$1,200"],
              ["Recruiting cost", "$5,000–$10,000 (one-time)"],
              ["Training time", "4–8 weeks"],
              ["Risk", "High turnover"],
            ]}
            total="~$4,500–$6,200 / month"
          />
          <CompareCard
            title="Our Dedicated Engineer"
            tone="teal"
            badge="RECOMMENDED"
            rows={[
              ["Monthly fee", "$800–$1,000 / month"],
              ["Benefits/overhead", "$0 (included)"],
              ["Recruiting cost", "$0 (we handle it)"],
              ["Training", "Handled by us"],
              ["Risk", "Pilot program with easy exit"],
            ]}
            total="~$800–$1,000 / month"
          />
        </div>
        <Reveal delay={200}>
          <p className="mt-12 text-center font-mono text-2xl md:text-3xl text-teal">
            Save up to <StatCounter value={60000} prefix="$" />+ per year per engineer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
function CompareCard({
  title, rows, total, tone, badge,
}: { title: string; rows: [string, string][]; total: string; tone: "teal" | "warn"; badge?: string }) {
  const border = tone === "teal" ? "border-teal" : "border-warning/40";
  const totalColor = tone === "teal" ? "text-teal" : "text-white/80";
  return (
    <div className={`relative rounded-2xl bg-white/[0.04] border ${border} p-7`}>
      {badge && (
        <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-teal px-3 py-1 text-[10px] font-bold tracking-wider text-teal-foreground">
          {badge}
        </span>
      )}
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <ul className="mt-5 space-y-2.5">
        {rows.map(([k, v]) => (
          <li key={k} className="flex items-baseline justify-between gap-4 text-sm">
            <span className="text-white/60">{k}</span>
            <span className="text-white text-right">{v}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-5 border-t border-white/10 flex items-baseline justify-between">
        <span className="text-xs uppercase tracking-wider text-white/50">Total</span>
        <span className={`font-mono text-lg font-semibold ${totalColor}`}>{total}</span>
      </div>
    </div>
  );
}

/* ───── Section 6: Pilot ───── */
function PilotCallout() {
  const { open } = useBookCall();
  return (
    <section className="py-24" style={{ background: "linear-gradient(135deg, oklch(0.78 0.14 175), oklch(0.72 0.13 180))" }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-navy">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Not Ready to Commit? Start With a 30-Day Pilot.</h2>
        <p className="mt-4 text-lg text-navy/80 max-w-2xl mx-auto">
          Test one dedicated engineer for 30 days. Defined KPIs. Weekly reporting. Cancel anytime.
          Most clients scale to 2–5 engineers within 90 days.
        </p>
        <div className="mt-8">
          <CTAButton size="lg" variant="white" onClick={open}>Start Your 30-Day Pilot</CTAButton>
        </div>
        <p className="mt-4 text-sm text-navy/70">No setup fees. No long-term contract required for the pilot.</p>
      </div>
    </section>
  );
}

/* ───── Section 6B: Partner ───── */
function PartnerSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-teal">Not a vendor. A partner.</div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold text-navy">We Don't Disappear After Onboarding.</h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Most outsourcing companies hand you an agent and move on. At Zenorva Support, Kwale stays involved —
              reviewing performance, adjusting workflows, and proactively flagging issues before they become problems.
              Our goal is to become an extension of your team, not a line item on your invoice.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Proactive reporting — we surface issues before you notice them",
                "Regular strategy alignment — we adapt as your product evolves",
                "Transparent communication — no surprises, ever",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal/15 text-teal flex-none">
                    <Check />
                  </span>
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <blockquote className="rounded-2xl bg-navy text-white p-8 border-l-4 border-teal relative">
            <span aria-hidden className="absolute -top-2 left-6 font-display text-6xl text-teal leading-none">“</span>
            <p className="font-display text-xl md:text-2xl leading-snug">
              The best outsourcing partnerships stop feeling like outsourcing. The team becomes yours — aligned to your brand, your customers, and your growth.
            </p>
            <footer className="mt-6 text-sm text-white/60">— Zenorva Support founding philosophy</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

/* ───── Section 7: Testimonials ───── */
function Testimonials() {
  const items = [
    { q: "Our first-contact resolution rate jumped 22% within 6 weeks. The engineer felt like part of our team from day one.", a: "Sarah M.", r: "Head of Customer Success, B2B SaaS Platform" },
    { q: "We were spending $4,200/month on a part-time contractor. We switched and now have a full-time dedicated engineer at $950/month. The quality is genuinely better.", a: "Thomas B.", r: "CTO, Managed Service Provider, Germany" },
    { q: "The onboarding process was thorough — they understood our Zendesk setup within the first week. Highly professional.", a: "Amara D.", r: "Operations Lead, E-Commerce Company, UK" },
  ];
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What Our Clients Say" />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.a} delay={i * 80}>
              <figure className="h-full rounded-2xl bg-white p-7 border border-border border-l-2 border-l-teal shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <blockquote className="italic text-foreground leading-relaxed">"{t.q}"</blockquote>
                <figcaption className="mt-5">
                  <div className="font-display font-semibold text-navy">{t.a}</div>
                  <div className="text-sm text-muted-foreground">{t.r}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Section 8: Final CTA ───── */
function FinalCTA() {
  const { open } = useBookCall();
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dots opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          Ready to Build a Leaner, Better Support Team?
        </h2>
        <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
          Book a free 30-minute discovery call. We'll assess your support needs and propose a tailored solution — no pressure, no commitment.
        </p>
        <div className="mt-8">
          <CTAButton size="lg" onClick={open}>Book Your Free Consultation</CTAButton>
        </div>
        <p className="mt-4 text-sm text-white/50">Typically responds within 1 business day</p>
      </div>
    </section>
  );
}

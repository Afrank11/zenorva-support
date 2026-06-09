import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Users,
  BarChart3,
  Globe2,
  ShieldCheck,
  ArrowRight,
  Zap,
  Clock,
  TrendingDown,
  Languages,
  BadgeCheck,
  PhoneCall,
  ClipboardList,
  LineChart,
  Star,
} from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { useBookCall } from "@/components/BookCallModal";
import { StatCounter } from "@/components/StatCounter";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zenorva Support — Dedicated Support Engineers from Cameroon" },
      {
        name: "description",
        content:
          "Bilingual EN/FR Tier-1 support engineers from Cameroon for SaaS, MSPs and SMEs. 40–60% lower cost. Founder-led quality control.",
      },
      { property: "og:title", content: "Zenorva Support — Dedicated Support Engineers from Cameroon" },
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
      <AboutUs />
      <Problem />
      <BehindEngineer />
      <HowItWorksOverview />
      <OurStats />
      <TrustedBy />
      <CostComparison />
      <PilotCallout />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

/* ───── Hero ───── */
function Hero() {
  const { open } = useBookCall();

  return (
    <section className="relative bg-[oklch(0.13_0.07_285)] text-white overflow-hidden pt-28 lg:pt-32 min-h-svh flex flex-col justify-center">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-grid-dots" aria-hidden="true" />

      {/* Atmospheric glow blobs */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          inset: 0,
          background: [
            "radial-gradient(55% 45% at 75% 5%, oklch(0.55 0.25 285 / 0.22), transparent 60%)",
            "radial-gradient(40% 35% at 10% 85%, oklch(0.45 0.22 295 / 0.18), transparent 55%)",
            "radial-gradient(30% 40% at 50% 50%, oklch(0.55 0.25 285 / 0.06), transparent 60%)",
          ].join(", "),
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left */}
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-xs font-medium text-white/75 backdrop-blur-sm">
                <Globe2 className="h-3.5 w-3.5 text-[oklch(0.72_0.20_285)]" aria-hidden="true" />
                Serving Companies in Europe & North America
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display font-bold text-[38px] sm:text-5xl lg:text-[54px] xl:text-[58px] leading-[1.06] tracking-tight">
                World-Class Support Teams —{" "}
                <span className="text-gradient">at African Cost Efficiency</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 text-lg lg:text-xl text-white/65 max-w-xl leading-relaxed">
                Dedicated, trained support engineers from Cameroon for SaaS companies and MSPs. Reduce support
                costs by up to <span className="text-white font-semibold">60%</span> — without sacrificing
                quality or response time.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton size="lg" onClick={open}>
                  Book a Free Consultation
                </CTAButton>
                <Link to="/how-it-works">
                  <CTAButton size="lg" variant="ghost-light" withArrow={false}>
                    See How It Works
                  </CTAButton>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={290}>
              <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-white/65">
                {[
                  "No long-term contracts",
                  "30-day pilot available",
                  "English & French support",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[oklch(0.72_0.20_285)] flex-none" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right — dashboard mockup */}
          <div className="lg:col-span-6 xl:col-span-5">
            <Reveal delay={180} variant="scale">
              <DashboardMockup />
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ───── Trusted By ───── */
function TrustedBy() {
  return (
    <section className="py-10 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/60 text-center mb-5">
            Trusted by growing companies in:
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-foreground/40">
            {[
              "FinTech Startup",
              "E-Commerce SME",
              "SaaS Platform",
              "Managed Services",
              "B2B Marketplace",
              "EdTech Scaleup",
            ].map((n) => (
              <span key={n} className="font-display font-medium tracking-wide">{n}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <motion.div
      className="relative"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
    >
      {/* Glow behind the card */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.25 285 / 0.5), transparent 70%)" }}
      />

      <div
        className="relative rounded-2xl bg-[oklch(0.20_0.09_285)] border border-white/10 shadow-2xl p-5"
        style={{ backdropFilter: "blur(12px)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-full bg-[oklch(0.55_0.25_285)]/20 ring-2 ring-[oklch(0.55_0.25_285)]/40 inline-flex items-center justify-center text-xs font-bold text-[oklch(0.75_0.18_285)]">
              KC
            </div>
            <div>
              <div className="text-[11px] text-white/50">Your dedicated engineer</div>
              <div className="text-sm font-semibold text-white">Online · Yaoundé 🟢</div>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-[oklch(0.72_0.20_285)] font-semibold px-2 py-1 rounded-full bg-[oklch(0.55_0.25_285)]/15 border border-[oklch(0.55_0.25_285)]/25">
            Live
          </span>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <DashStat label="Avg. response" value="4 min" />
          <DashStat label="CSAT score" value="98.2%" />
        </div>

        {/* Ticket rows */}
        <div className="mt-5 space-y-2">
          {[
            {
              id: "#4823",
              title: "Login error on Safari",
              status: "Resolved",
              cls: "bg-emerald-500/12 text-emerald-400 border-emerald-500/25",
            },
            {
              id: "#4824",
              title: "Billing question — Pro plan",
              status: "In Progress",
              cls: "bg-[oklch(0.55_0.25_285)]/15 text-[oklch(0.75_0.18_285)] border-[oklch(0.55_0.25_285)]/30",
            },
            {
              id: "#4825",
              title: "API rate limit issue",
              status: "Escalated",
              cls: "bg-amber-500/12 text-amber-400 border-amber-500/25",
            },
          ].map((r) => (
            <div
              key={r.id}
              className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-mono text-[11px] text-white/35 flex-none">{r.id}</span>
                <span className="text-sm text-white/80 truncate">{r.title}</span>
              </div>
              <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border flex-none ${r.cls}`}>
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function DashStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
      <div className="text-[10px] uppercase tracking-wider text-white/45">{label}</div>
      <div className="mt-1 font-mono text-xl font-semibold text-[oklch(0.75_0.18_285)]">{value}</div>
    </div>
  );
}

/* ───── About Us ───── */
function AboutUs() {
  return (
    <section className="py-16 bg-violet-light">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-violet mb-4">
            Who we are
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] text-[oklch(0.13_0.07_285)]">
            We connect world-class African talent with companies that need{" "}
            <span className="text-gradient">reliable support.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Zenorva Support was founded in Cameroon with a simple belief: exceptional talent
            shouldn't be limited by geography. We recruit, train, and manage dedicated
            support engineers — then embed them directly into your team.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every client works with a named engineer who understands their product deeply.
            No ticket pools. No rotating agents. Just consistent, professional support — backed
            by founder-level oversight and weekly accountability.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───── Problem ───── */
function Problem() {
  const items = [
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "US/EU Support Is Expensive",
      text: "A single in-house engineer in the US costs $3,500–$5,000/month in salary alone — before benefits, overhead, and turnover risk.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hiring Takes Months",
      text: "Recruiting, interviewing, and onboarding takes 2–3 months. And if they leave, you start the whole process over.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quality Gets Sacrificed",
      text: "Cheap offshore pools give you shared, undertrained agents. Tickets pile up, response times slip, customers churn.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why companies come to us"
            title="Support costs are eating their margins."
          />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
            Every company we talk to is dealing with the same frustration: quality support costs too much,
            hiring takes forever, and cheap alternatives always disappoint. We built Zenorva Support to{" "}
            <span className="text-[oklch(0.13_0.07_285)] font-semibold">change that equation</span> — one
            dedicated engineer at a time.
          </p>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 90}>
              <div className="group h-full rounded-2xl border border-border bg-white p-7 hover:border-violet/30 hover:shadow-[0_8px_30px_oklch(0.55_0.25_285/0.08)] transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-violet-light inline-flex items-center justify-center text-violet">
                  {it.icon}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-[oklch(0.13_0.07_285)]">{it.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Our Stats ───── */
function OurStats() {
  const fields = ["SaaS Platforms", "FinTech", "E-Commerce", "Managed Services", "EdTech", "B2B Marketplaces"];
  return (
    <section className="bg-[oklch(0.13_0.07_285)] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dots" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(60% 80% at 50% 120%, oklch(0.55 0.25 285 / 0.22), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.22em] uppercase text-white/35 mb-10">
            Our numbers
          </p>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden mb-12">
          {[
            { icon: <BarChart3 className="h-5 w-5" />, value: <><StatCounter value={98} suffix="%" /></>, label: "QA Score Target" },
            { icon: <Clock className="h-5 w-5" />, value: <>&lt;&thinsp;<StatCounter value={4} />&thinsp;min</>, label: "Avg. First Response" },
            { icon: <TrendingDown className="h-5 w-5" />, value: <><StatCounter value={40} />–<StatCounter value={60} suffix="%" /></>, label: "Cost Reduction vs. In-House" },
            { icon: <Languages className="h-5 w-5" />, value: <span className="text-[oklch(0.75_0.18_285)]">EN + FR</span>, label: "Bilingual Coverage" },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 70}>
              <div className="bg-[oklch(0.17_0.08_285)] px-6 py-10 text-center text-white flex flex-col items-center gap-2">
                <div className="text-[oklch(0.72_0.20_285)] opacity-60">{m.icon}</div>
                <div className="font-mono text-4xl md:text-5xl font-semibold text-[oklch(0.75_0.18_285)]">{m.value}</div>
                <div className="text-[11px] text-white/40 leading-snug max-w-[110px]">{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal variant="fade" delay={200}>
          <div className="text-center">
            <p className="text-sm text-white/50 mb-4">We serve clients from fast-growing fields including:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {fields.map((f) => (
                <span key={f} className="px-4 py-1.5 rounded-full border border-white/12 bg-white/5 text-xs font-medium text-white/60 backdrop-blur-sm">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───── How It Works Overview ───── */
function HowItWorksOverview() {
  const steps = [
    { n: 1, icon: <PhoneCall className="h-5 w-5" />, t: "Discovery Call", d: "We learn your product, tools, and support volume in depth." },
    { n: 2, icon: <Users className="h-5 w-5" />, t: "We Match & Train", d: "We find and train the right engineer for your stack and culture." },
    { n: 3, icon: <ClipboardList className="h-5 w-5" />, t: "They Join Your Tools", d: "Your engineer integrates into Zendesk, Intercom, Freshdesk, etc." },
    { n: 4, icon: <LineChart className="h-5 w-5" />, t: "You Scale Confidently", d: "Weekly reports, KPIs tracked, escalations handled seamlessly." },
  ];

  return (
    <section className="py-24 bg-[oklch(0.20_0.09_285)] bg-grid-lines">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading inverted title="And A Simpler Way to Scale Support" />
        </Reveal>
        <div className="mt-14 relative">
          <div
            className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px"
            aria-hidden="true"
            style={{ background: "linear-gradient(to right, transparent, oklch(0.55 0.25 285 / 0.3), transparent)" }}
          />
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <li className="relative text-center">
                  <div className="mx-auto h-14 w-14 rounded-2xl bg-[oklch(0.13_0.07_285)] border-2 border-violet/50 text-[oklch(0.75_0.18_285)] inline-flex items-center justify-center shadow-[0_4px_16px_oklch(0.55_0.25_285/0.3)] relative z-10">
                    {s.icon}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-[oklch(0.72_0.20_285)]/70">{String(s.n).padStart(2, "0")}</div>
                  <h3 className="mt-2 font-display font-semibold text-white">{s.t}</h3>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="group inline-flex items-center gap-1.5 text-[oklch(0.75_0.18_285)] font-semibold hover:underline text-sm"
          >
            See the full process
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}


/* ───── Behind Your Engineer ───── */
function BehindEngineer() {
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title="You Get More Than One Person"
            subtitle="Every Zenorva Support engagement is backed by a structured support layer — so your engineer always has what they need to perform."
          />
        </Reveal>

        <div className="mt-14 mx-auto max-w-3xl">
          <Reveal>
            <div className="flex flex-col items-center gap-6">
              <OrgBox label="Your Company" tone="muted" />
              <Connector />
              <OrgBox label="Your Dedicated Engineer" tone="violet" />
              <div className="w-full relative">
                <div
                  className="absolute left-[16.66%] right-[16.66%] -top-3 h-px"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to right, transparent, oklch(0.55 0.25 285 / 0.3), transparent)" }}
                />
                <div className="grid grid-cols-3 gap-4">
                  <OrgBox label="Founder / Ops Lead" small />
                  <OrgBox label="Training & Onboarding" small />
                  <OrgBox label="Weekly QA & Reporting" small />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {[
            { icon: <BadgeCheck className="h-5 w-5 text-violet" />, t: "Direct founder access", d: "No account manager layers. You speak to the founder directly." },
            { icon: <ClipboardList className="h-5 w-5 text-violet" />, t: "Structured onboarding", d: "Every engineer trains on your product before day one." },
            { icon: <LineChart className="h-5 w-5 text-violet" />, t: "Weekly performance reports", d: "Tickets, CSAT, response time, escalations — every Monday." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <div className="rounded-2xl bg-white border border-border px-5 py-4 flex items-center gap-4 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:border-violet/25 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-violet-light flex items-center justify-center flex-none">
                  {p.icon}
                </div>
                <div>
                  <div className="font-display font-semibold text-[oklch(0.13_0.07_285)] text-sm">{p.t}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{p.d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrgBox({ label, tone = "default", small = false }: { label: string; tone?: "default" | "violet" | "muted"; small?: boolean }) {
  const cls =
    tone === "violet"
      ? "bg-[oklch(0.13_0.07_285)] text-white border-violet/40"
      : tone === "muted"
      ? "bg-white text-[oklch(0.13_0.07_285)] border-border"
      : "bg-white text-[oklch(0.13_0.07_285)] border-border";
  return (
    <div
      className={`${small ? "text-xs px-3 py-2.5" : "text-sm px-6 py-3.5"} rounded-xl border ${cls} font-display font-semibold text-center w-full shadow-[0_1px_4px_rgba(0,0,0,0.05)]`}
    >
      {label}
    </div>
  );
}

function Connector() {
  return (
    <div className="h-8 w-px bg-gradient-to-b from-border to-violet/30" aria-hidden="true" />
  );
}

/* ───── Cost Comparison ───── */
function CostComparison() {
  return (
    <section className="py-24 bg-[oklch(0.13_0.07_285)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dots" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(50% 60% at 80% 20%, oklch(0.55 0.25 285 / 0.15), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading inverted title="The Math Is Simple" />
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <Reveal delay={80}>
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
          </Reveal>
          <Reveal delay={160}>
            <CompareCard
              title="Our Dedicated Engineer"
              tone="violet"
              badge="RECOMMENDED"
              rows={[
                ["Monthly fee", "$800–$1,000 / month"],
                ["Benefits & overhead", "$0 (included)"],
                ["Recruiting cost", "$0 (we handle it)"],
                ["Training", "Handled by us"],
                ["Risk", "Pilot program — easy exit"],
              ]}
              total="~$800–$1,000 / month"
            />
          </Reveal>
        </div>
        <Reveal delay={250} variant="fade">
          <p className="mt-12 text-center font-mono text-2xl md:text-3xl text-[oklch(0.75_0.18_285)]">
            Save up to <StatCounter value={60000} prefix="$" />+ per year per engineer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CompareCard({
  title, rows, total, tone, badge,
}: { title: string; rows: [string, string][]; total: string; tone: "violet" | "warn"; badge?: string }) {
  const border = tone === "violet" ? "border-[oklch(0.55_0.25_285)]" : "border-amber-500/30";
  const totalColor = tone === "violet" ? "text-[oklch(0.75_0.18_285)]" : "text-white/75";
  return (
    <div className={`relative rounded-2xl bg-white/[0.04] border ${border} p-7 h-full`}>
      {badge && (
        <span className="absolute -top-3.5 left-7 inline-flex items-center rounded-full bg-violet px-3.5 py-1 text-[10px] font-bold tracking-wider text-white">
          {badge}
        </span>
      )}
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {rows.map(([k, v]) => (
          <li key={k} className="flex items-baseline justify-between gap-4 text-sm">
            <span className="text-white/55">{k}</span>
            <span className="text-white text-right font-medium">{v}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-5 border-t border-white/10 flex items-baseline justify-between">
        <span className="text-xs uppercase tracking-wider text-white/45">Total</span>
        <span className={`font-mono text-lg font-semibold ${totalColor}`}>{total}</span>
      </div>
    </div>
  );
}

/* ───── Pilot Callout ───── */
function PilotCallout() {
  const { open } = useBookCall();
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, oklch(0.55 0.25 285), oklch(0.45 0.28 295))" }}
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-grid-dots opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm mb-6">
            <Star className="h-3.5 w-3.5" aria-hidden="true" />
            Low-Risk Entry Point
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Not Ready to Commit?<br />Start With a 30-Day Pilot.
          </h2>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Test one dedicated engineer for 30 days. Defined KPIs. Weekly reporting. Cancel anytime.
            Most clients scale to 2–5 engineers within 90 days.
          </p>
          <div className="mt-8">
            <CTAButton size="lg" variant="white" onClick={open}>
              Start Your 30-Day Pilot
            </CTAButton>
          </div>
          <p className="mt-4 text-sm text-white/65">No setup fees. No long-term contract for the pilot.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───── Testimonials ───── */
function Testimonials() {
  const items = [
    {
      q: "Our first-contact resolution rate jumped 22% within 6 weeks. The engineer felt like part of our team from day one.",
      a: "Sarah M.",
      r: "Head of Customer Success, B2B SaaS Platform",
    },
    {
      q: "We were spending $4,200/month on a part-time contractor. We switched and now have a full-time dedicated engineer at $950/month. The quality is genuinely better.",
      a: "Thomas B.",
      r: "CTO, Managed Service Provider, Germany",
    },
    {
      q: "The onboarding process was thorough — they understood our Zendesk setup within the first week. Highly professional.",
      a: "Amara D.",
      r: "Operations Lead, E-Commerce Company, UK",
    },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Client outcomes" title="What Our Clients Say" />
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.a} delay={i * 80}>
              <figure className="h-full rounded-2xl bg-white p-7 border border-border hover:border-violet/25 hover:shadow-[0_8px_30px_oklch(0.55_0.25_285/0.07)] transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-violet text-violet" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed text-sm">"{t.q}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-violet-light flex items-center justify-center text-violet font-bold text-sm flex-none">
                    {t.a.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-[oklch(0.13_0.07_285)] text-sm">{t.a}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Final CTA ───── */
function FinalCTA() {
  const { open } = useBookCall();
  return (
    <section className="py-24 bg-[oklch(0.13_0.07_285)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dots" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(60% 55% at 50% 100%, oklch(0.55 0.25 285 / 0.2), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Ready to Build a Leaner,{" "}
            <span className="text-gradient">Better Support Team?</span>
          </h2>
          <p className="mt-5 text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute discovery call. We'll assess your support needs and propose a tailored
            solution — no pressure, no commitment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <CTAButton size="lg" onClick={open}>
              Book Your Free Consultation
            </CTAButton>
            <Link to="/pricing">
              <CTAButton size="lg" variant="ghost-light" withArrow={false} className="!border-white/30 !text-white hover:!bg-white/10">
                View Pricing
              </CTAButton>
            </Link>
          </div>
          <p className="mt-5 text-sm text-white/45">Typically responds within 1 business day</p>
        </Reveal>
      </div>
    </section>
  );
}

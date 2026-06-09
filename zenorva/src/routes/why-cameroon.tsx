import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";
import { useBookCall } from "@/components/BookCallModal";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/why-cameroon")({
  head: () => ({
    meta: [
      { title: "Why Cameroon — Untapped Tech Talent | Zenorva Support" },
      { name: "description", content: "Bilingual EN/FR engineers, EU time zone alignment, and founder-led oversight. See how Cameroon compares to India, Philippines, Eastern Europe, and LATAM." },
      { property: "og:title", content: "Why Cameroon — Zenorva Support" },
      { property: "og:description", content: "Cameroon offers bilingual talent, EU time zone alignment, and competitive pricing." },
    ],
  }),
  component: WhyCameroonPage,
});

const advantages = [
  { i: "💵", t: "Cost Without Compromise", d: "Cameroon's cost of living and labor market allow us to offer engineers at $800–$1,000/month — while still providing above-average local compensation, making retention strong. You save; they thrive." },
  { i: "🌐", t: "Genuinely Bilingual", d: "Cameroon is one of the world's few officially bilingual countries. Our engineers naturally communicate in both English and French — ideal for European companies with mixed customer bases." },
  { i: "🕐", t: "Time Zone Alignment With Europe", d: "Cameroon is UTC+1, aligning perfectly with Western and Central European working hours. Meetings, standups, and real-time collaboration work without compromise." },
  { i: "🎓", t: "Emerging Technical Talent", d: "A growing population of university-educated professionals with IT backgrounds, increasingly entering the global remote workforce. We tap into this talent before it becomes expensive." },
  { i: "🛡️", t: "Structured Internal Oversight", d: "Unlike other outsourcing providers that hand you a warm body and disappear, we provide founder-led supervision, SLA accountability, and weekly reporting. Quality is our responsibility." },
];

const cols = ["Zenorva Support", "India", "Philippines", "Eastern Europe", "DR / Colombia"];
const rows: { label: string; cells: (string | { v: string; tone?: "good" | "warn" | "bad" })[] }[] = [
  { label: "Cost / month", cells: ["$800–1,000", "$400–700", "$500–900", "$1,200–2,000", "$1,500–2,500"] },
  { label: "English quality", cells: [{ v: "Strong", tone: "good" }, { v: "Good", tone: "good" }, { v: "Strong", tone: "good" }, { v: "Good", tone: "good" }, { v: "Good", tone: "good" }] },
  { label: "French support", cells: [{ v: "Native", tone: "good" }, { v: "Rare", tone: "bad" }, { v: "Rare", tone: "bad" }, { v: "Limited", tone: "warn" }, { v: "Rare", tone: "bad" }] },
  { label: "EU time zone", cells: [{ v: "UTC+1", tone: "good" }, { v: "+4.5h", tone: "warn" }, { v: "+7h", tone: "bad" }, { v: "Aligned", tone: "good" }, { v: "−5/6h", tone: "bad" }] },
  { label: "Dedicated (not shared)", cells: [{ v: "Always", tone: "good" }, { v: "Varies", tone: "warn" }, { v: "Varies", tone: "warn" }, { v: "Usually", tone: "good" }, { v: "Usually", tone: "good" }] },
  { label: "Founder oversight", cells: [{ v: "Direct", tone: "good" }, { v: "No", tone: "bad" }, { v: "No", tone: "bad" }, { v: "No", tone: "bad" }, { v: "No", tone: "bad" }] },
];

function ToneCell({ c }: { c: string | { v: string; tone?: "good" | "warn" | "bad" } }) {
  if (typeof c === "string") return <span className="font-mono text-sm">{c}</span>;
  const icon = c.tone === "good" ? "✓" : c.tone === "warn" ? "⚠" : c.tone === "bad" ? "✕" : "";
  const color = c.tone === "good" ? "text-success" : c.tone === "warn" ? "text-warning" : c.tone === "bad" ? "text-danger" : "";
  return <span className="inline-flex items-center gap-1.5 text-sm"><span className={`${color} font-bold`}>{icon}</span> <span>{c.v}</span></span>;
}

function WhyCameroonPage() {
  const { open } = useBookCall();
  return (
    <>
      <section className="bg-[oklch(0.13_0.07_285)] text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dots opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05]">
            Cameroon's Untapped Tech Talent Is a <span className="text-teal">Competitive Advantage</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Bilingual engineers, aligned time zones, and founder-led oversight — at a price point no major outsourcing hub can match.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-20">
          {advantages.map((a, i) => (
            <Reveal key={a.t}>
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""}`}>
                <div className="aspect-[5/4] lg:aspect-auto lg:h-72 rounded-2xl bg-surface border border-border flex items-center justify-center text-7xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-dots opacity-20" aria-hidden="true" />
                  <span className="relative">{a.i}</span>
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-[0.18em] uppercase text-teal">{`0${i + 1}`}</div>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold text-navy">{a.t}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{a.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How We Compare" subtitle="Across the dimensions that actually matter for European and North American buyers." />
          <Reveal>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-display font-semibold text-navy"></th>
                    {cols.map((c, i) => (
                      <th key={c} className={`text-left p-4 font-display font-semibold ${i === 0 ? "text-teal-foreground bg-teal" : "text-navy"}`}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rows.map((r) => (
                    <tr key={r.label}>
                      <td className="p-4 font-medium text-navy whitespace-nowrap">{r.label}</td>
                      {r.cells.map((c, i) => (
                        <td key={i} className={`p-4 ${i === 0 ? "bg-teal/5 font-semibold" : "text-foreground"}`}><ToneCell c={c} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="mt-6 text-sm text-muted-foreground text-center max-w-3xl mx-auto">
            Zenorva Support is the only outsourcing partner combining French-language capability, EU time zone alignment,
            and direct founder oversight at this price point.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionHeading title="See if Cameroon is the right fit for you." subtitle="A free 30-minute call. We'll talk through your needs and recommend an honest path forward." />
          <div className="mt-8"><CTAButton size="lg" onClick={open}>Book a Free Consultation</CTAButton></div>
        </div>
      </section>
    </>
  );
}

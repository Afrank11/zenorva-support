import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";
import { useBookCall } from "@/components/BookCallModal";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Built on a Simple Belief | Zenorva Support" },
      { name: "description", content: "Zenorva Support connects world-class Cameroonian talent with international companies that need reliable, affordable support — without the tradeoffs." },
      { property: "og:title", content: "About Zenorva Support" },
      { property: "og:description", content: "Founder-led outsourcing from Cameroon. Quality over volume. Radical transparency. Shared growth." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { open } = useBookCall();
  return (
    <>
      <section className="bg-[oklch(0.13_0.07_285)] text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dots opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05]">
            Built on a Simple Belief: <span className="text-gradient">African Talent Deserves a Global Stage</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Zenorva Support was founded in Cameroon to connect world-class local talent with international companies that need reliable, affordable support — without the tradeoffs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-teal">Our mission</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-navy">The bridge we're building.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We started Zenorva Support because we saw two problems happening simultaneously: growing companies in
              Europe and North America struggling to afford quality customer support, and highly skilled, English- and
              French-fluent professionals in Cameroon with no real pathway into the global workforce.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We are the bridge. And we take that responsibility seriously.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-teal mb-3">The people behind it</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-12">Meet the founding team.</h2>
          </Reveal>

          {/* CEO — full-width featured card */}
          <Reveal>
            <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-start rounded-2xl bg-white border border-border p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] mb-6">
              <div className="mx-auto md:mx-0 h-40 w-40 rounded-full bg-teal/15 inline-flex items-center justify-center font-display font-bold text-5xl text-teal ring-4 ring-white shadow-md flex-none">
                KC
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-teal">CEO & Co-Founder</div>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-navy">Kwale Cedric</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Based in Cameroon, Kwale leads every client engagement personally — from the first discovery call
                  to ongoing weekly reporting. He handles client communication, engineer training, quality control, and
                  escalation management. When you work with Zenorva Support, you work with the founder. There are no
                  layers, no account managers, no hand-offs to people who don't know your account.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Operations", "Client Relations", "Strategy", "Quality Control"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-teal/10 text-teal text-[11px] font-semibold tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* CTO + COO — side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                initials: "FA",
                role: "CTO & Co-Founder",
                name: "Ateh Frank Ateh",
                bio: "Fullstack developer and network engineer, Frank architects the technical foundation that powers Zenorva Support. From tooling integrations to infrastructure, he ensures the systems are reliable, secure, and built to scale with every client we bring on.",
                tags: ["Fullstack Development", "Network Engineering", "Systems Architecture"],
              },
              {
                initials: "MT",
                role: "COO & Co-Founder",
                name: "Mbi Bocav Tsewele",
                bio: "Marketing lead and operations co-pilot, Mbi drives how the world sees Zenorva Support. He shapes brand positioning, lead generation, and partnership strategy — ensuring that as we grow, we stay true to the mission and quality that defines us.",
                tags: ["Marketing", "Growth Strategy", "Brand & Partnerships"],
              },
            ].map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white border border-border p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="h-16 w-16 rounded-full bg-teal/15 inline-flex items-center justify-center font-display font-bold text-2xl text-teal ring-2 ring-white shadow-sm flex-none">
                      {m.initials}
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-[0.16em] uppercase text-teal">{m.role}</div>
                      <h3 className="mt-1 font-display text-xl font-bold text-navy">{m.name}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">{m.bio}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-teal/10 text-teal text-[11px] font-semibold tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Values" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { t: "Quality Over Volume", d: "We will never take on more clients than we can serve with excellence. Growth is earned, not rushed." },
              { t: "Radical Transparency", d: "Every performance report, every issue, every improvement — communicated proactively. No surprises." },
              { t: "Shared Growth", d: "Our engineers grow professionally and financially as Zenorva Support grows. When they thrive, your customers feel it." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-white p-7">
                  <div className="text-xs font-mono text-teal">0{i + 1}</div>
                  <h3 className="mt-2 font-display text-xl font-bold text-navy">{v.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border-l-4 border-teal bg-white border border-border p-7">
              <h3 className="font-display text-lg font-semibold text-navy">Legal & Trust</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Zenorva Support operates as a legally registered business in Cameroon (Entreprise Individuelle / Sole
                Proprietorship). All client engagements are governed by a signed service contract and NDA. We take data
                confidentiality seriously and follow professional security and access standards across all client systems.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl text-center px-4">
          <SectionHeading title="Let's build something together." />
          <div className="mt-8"><CTAButton size="lg" onClick={open}>Book a Free Consultation</CTAButton></div>
        </div>
      </section>
    </>
  );
}

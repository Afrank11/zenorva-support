import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { z } from "zod";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join a Team Connecting Cameroon to the World | Zenorva Support" },
      { name: "description", content: "We are recruiting talented, professional, English-speaking individuals from Cameroon for technical support roles. Train, grow, and serve global clients." },
      { property: "og:title", content: "Careers at Zenorva Support" },
      { property: "og:description", content: "Build a real career in technical support. Above-average compensation, structured training, growth path." },
    ],
  }),
  component: CareersPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Required").max(40),
  city: z.string().trim().min(2, "Required").max(100),
  english: z.enum(["Beginner", "Intermediate", "Advanced", "Fluent"]),
  french: z.string().max(40).optional(),
  about: z.string().trim().min(10, "Tell us a bit about yourself").max(2000),
});

function CareersPage() {
  return (
    <>
      <section className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dots opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05]">
            Join a Team Connecting <span className="text-teal">Cameroon to the World</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            We are always recruiting talented, professional, English-speaking individuals from Cameroon who want to build a real career in technical support.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">Requirements</h2>
              <ul className="mt-5 space-y-3 text-foreground">
                {[
                  "Strong written and spoken English (non-negotiable)",
                  "Basic IT knowledge: comfortable with common software, browsers, email clients",
                  "French proficiency is a strong advantage",
                  "Professional attitude, reliable internet, ability to work structured hours",
                  "Willingness to learn new tools (Zendesk, Intercom, etc.) — experience not required",
                ].map((t) => <Bullet key={t} text={t} />)}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">What We Offer</h2>
              <ul className="mt-5 space-y-3 text-foreground">
                {[
                  "Above-average local compensation",
                  "Structured training program before you start with clients",
                  "Career growth path: Tier-1 → Tier-2 → Team Lead → Operations",
                  "Work remotely from Cameroon, serve international clients",
                  "Professional references and certificates after 12 months",
                ].map((t) => <Bullet key={t} text={t} />)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Apply Now" subtitle="Tell us about yourself. We review every application personally." />
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-teal/15 text-teal">
        <svg viewBox="0 0 20 20" className="h-3 w-3"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      </span>
      <span>{text}</span>
    </li>
  );
}

function ApplicationForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as any;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      setLoading(false);
      return;
    }
    setErrors({});
    // TODO: wire to the selected email delivery service
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="mt-10 rounded-2xl bg-white border border-border p-8 text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-success/15 text-success inline-flex items-center justify-center text-2xl">✓</div>
        <h3 className="mt-4 font-display text-xl font-bold text-navy">Application received</h3>
        <p className="mt-2 text-muted-foreground">Thank you. We'll review your application and get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 rounded-2xl bg-white border border-border p-7 space-y-5" noValidate>
      <Field label="Full Name" name="name" error={errors.name} />
      <Field label="Email Address" name="email" type="email" error={errors.email} />
      <Field label="Phone Number (WhatsApp preferred)" name="phone" error={errors.phone} />
      <Field label="City (in Cameroon)" name="city" error={errors.city} />
      <SelectField label="English proficiency (self-rated)" name="english" options={["Beginner","Intermediate","Advanced","Fluent"]} error={errors.english} />
      <Field label="French proficiency (optional)" name="french" required={false} error={errors.french} />
      <TextareaField label="Tell us about yourself (max 300 words)" name="about" error={errors.about} />
      <button type="submit" disabled={loading} className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-teal text-teal-foreground font-medium hover:bg-teal/90 transition-colors disabled:opacity-60 w-full">
        {loading ? "Sending…" : "Apply Now"} <span className="cta-arrow" aria-hidden>→</span>
      </button>
    </form>
  );
}

function inputCls(err?: string) {
  return `mt-1.5 w-full rounded-lg border ${err ? "border-danger" : "border-border"} bg-white px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal`;
}
function Field({ label, name, type = "text", error, required = true }: { label: string; name: string; type?: string; error?: string; required?: boolean }) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-navy">{label}{required && <span className="text-danger">*</span>}</span>
      <input name={name} type={type} className={inputCls(error)} />
      {error && <span className="text-xs text-danger mt-1 block">{error}</span>}
    </label>
  );
}
function SelectField({ label, name, options, error }: { label: string; name: string; options: string[]; error?: string }) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-navy">{label}<span className="text-danger">*</span></span>
      <select name={name} className={inputCls(error)} defaultValue="">
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <span className="text-xs text-danger mt-1 block">{error}</span>}
    </label>
  );
}
function TextareaField({ label, name, error }: { label: string; name: string; error?: string }) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-navy">{label}<span className="text-danger">*</span></span>
      <textarea name={name} rows={5} className={inputCls(error)} />
      {error && <span className="text-xs text-danger mt-1 block">{error}</span>}
    </label>
  );
}

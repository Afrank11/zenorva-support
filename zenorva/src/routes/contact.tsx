import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's Talk About Your Support Needs | Zenorva Support" },
      { name: "description", content: "Get in touch with Zenorva Support. We typically respond within 1 business day. NDA signed before onboarding." },
      { property: "og:title", content: "Contact Zenorva Support" },
      { property: "og:description", content: "Tell us about your support needs. We respond within 1 business day." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Required").max(100),
  company: z.string().trim().min(2, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  size: z.string().min(1, "Required"),
  volume: z.string().min(1, "Required"),
  tools: z.array(z.string()).optional(),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

function ContactPage() {
  return (
    <>
      <section className="bg-[oklch(0.13_0.07_285)] text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dots opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05]">
            Let's Talk About Your <span className="text-teal">Support Needs</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
            We respond within 1 business day. No pressure, no commitment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={120}><ContactSidebar /></Reveal>
        </div>
      </section>
    </>
  );
}

const tools = ["Zendesk", "Freshdesk", "Intercom", "Jira", "Other", "None yet"];

function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const data: any = Object.fromEntries(fd);
    data.tools = fd.getAll("tools");
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      setLoading(false);
      return;
    }
    setErrors({});
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white border border-border p-10 text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-success/15 text-success inline-flex items-center justify-center text-2xl">✓</div>
        <h2 className="mt-4 font-display text-2xl font-bold text-navy">Message sent</h2>
        <p className="mt-2 text-muted-foreground">Thanks for reaching out. We'll respond within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-white border border-border p-7 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" error={errors.name} />
        <Field label="Company Name" name="company" error={errors.company} />
      </div>
      <Field label="Work Email" name="email" type="email" error={errors.email} />
      <div className="grid sm:grid-cols-2 gap-5">
        <SelectField label="Company size" name="size" options={["1–10","11–50","51–200","200+"]} error={errors.size} />
        <SelectField label="Monthly support volume" name="volume" options={["<100 tickets","100–500","500–2000","2000+"]} error={errors.volume} />
      </div>
      <fieldset>
        <legend className="text-sm font-medium text-navy">Current tools used</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {tools.map((t) => (
            <label key={t} className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm cursor-pointer hover:border-teal has-[:checked]:bg-teal/10 has-[:checked]:border-teal has-[:checked]:text-navy">
              <input type="checkbox" name="tools" value={t} className="accent-[oklch(0.78_0.14_175)]" />
              {t}
            </label>
          ))}
        </div>
      </fieldset>
      <TextareaField label="Message" name="message" error={errors.message} />
      <button type="submit" disabled={loading} className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-teal text-teal-foreground font-medium hover:bg-teal/90 transition-colors disabled:opacity-60 w-full">
        {loading ? "Sending…" : "Send Message"} <span className="cta-arrow" aria-hidden>→</span>
      </button>
    </form>
  );
}

function ContactSidebar() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-navy text-white p-7">
        <h3 className="font-display text-lg font-semibold">Get in touch</h3>
        <ul className="mt-4 space-y-3 text-sm text-white/80">
          <li><span className="text-white/50">Email · </span><a href="mailto:hello@zenorvasupport.com" className="hover:text-teal">hello@zenorvasupport.com</a></li>
          <li><span className="text-white/50">Response time · </span>Within 1 business day</li>
          <li><span className="text-white/50">Time zone · </span>UTC+1 (Yaoundé, Cameroon)</li>
        </ul>
        <div className="mt-6 rounded-xl border border-dashed border-white/20 bg-white/5 p-5 text-center">
          <div className="text-xs uppercase tracking-wider text-white/50">Book a call directly</div>
          <div className="mt-2 font-mono text-xs text-white/70">Calendly embed placeholder</div>
        </div>
      </div>
      <div className="rounded-2xl bg-white border border-border p-6 space-y-3">
        <Trust icon="🔒" t="NDA Signed Before Onboarding" />
        <Trust icon="📋" t="Service Contract Provided" />
        <Trust icon="🌍" t="Serving clients in EU & North America" />
      </div>
    </div>
  );
}
function Trust({ icon, t }: { icon: string; t: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-9 w-9 rounded-full bg-teal/10 inline-flex items-center justify-center text-base">{icon}</span>
      <span className="text-sm font-medium text-navy">{t}</span>
    </div>
  );
}

function inputCls(err?: string) {
  return `mt-1.5 w-full rounded-lg border ${err ? "border-danger" : "border-border"} bg-white px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal`;
}
function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-navy">{label}<span className="text-danger">*</span></span>
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

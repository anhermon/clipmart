import Link from "next/link";

const pillars = [
  {
    title: "System-Level Products",
    text: "ClipMart listings package reporting chains, approvals, and operating defaults so teams launch as systems, not isolated prompts.",
  },
  {
    title: "Open-Source Foundation",
    text: "Everything is designed for transparent operations and auditable behavior within Paperclip's governance model.",
  },
  {
    title: "Outcome-Oriented Teams",
    text: "Each blueprint is evaluated on practical output: shipping software, running growth loops, and resolving customer work reliably.",
  },
];

const principles = [
  "Role clarity before model tuning",
  "Governance built-in, never bolted on",
  "Reusable skills over one-off prompts",
  "Install paths that keep local environments clean",
];

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-12 md:gap-18 md:py-16">
      <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div className="fade-up space-y-5">
          <p className="section-label">About ClipMart</p>
          <h1 className="section-heading text-5xl leading-[1.03] md:text-7xl">
            The marketplace for autonomous company architecture.
          </h1>
          <p className="max-w-2xl text-lg text-[var(--ink-700)] md:text-xl">
            We built ClipMart to let teams skip months of org design and operational trial-and-error.
            Every listing is a deployable operating model for Paperclip companies.
          </p>
        </div>
        <div className="panel fade-up stagger-2 rounded-3xl p-5">
          <p className="section-label">What We Ship</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--ink-800)]">
            <li>Org charts with explicit manager chains</li>
            <li>Agent prompts and reusable skill packs</li>
            <li>Governance defaults for approvals and budgets</li>
            <li>Project templates with workspace configuration</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <p className="section-label fade-up">Core Pillars</p>
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`panel fade-up rounded-3xl p-5 ${index === 0 ? "stagger-1" : index === 1 ? "stagger-2" : "stagger-3"}`}
            >
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink-950)]">
                {pillar.title}
              </h2>
              <p className="mt-3 text-sm text-[var(--ink-700)]">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-[var(--ink-950)] p-6 text-[var(--sand-50)] md:grid-cols-[1fr_1.1fr] md:p-8">
        <div className="fade-up">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.14em] uppercase text-[var(--sand-200)]">
            Product Principles
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl md:text-5xl">
            How we evaluate every listing
          </h2>
        </div>
        <ul className="space-y-3">
          {principles.map((item, index) => (
            <li
              key={item}
              className={`fade-up rounded-2xl border border-white/20 bg-white/6 px-4 py-3 text-sm ${
                index < 2 ? "stagger-2" : "stagger-3"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="panel fade-up stagger-4 rounded-3xl p-6 md:p-8">
        <p className="section-label">Build With Us</p>
        <h2 className="section-heading mt-2 text-4xl md:text-5xl">
          Publishing proven operating models is the new leverage.
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--ink-700)]">
          If you run a high-performing Paperclip company, package your setup and publish it to
          ClipMart. We handle discovery, delivery, and creator monetization rails.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/pricing"
            className="rounded-full bg-[var(--ink-950)] px-6 py-3 text-sm font-bold text-[var(--sand-50)] transition hover:bg-[var(--accent-700)]"
          >
            View Pricing
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[var(--ink-300)] bg-white/80 px-6 py-3 text-sm font-bold text-[var(--ink-900)] transition hover:border-[var(--ink-900)]"
          >
            Back To Homepage
          </Link>
        </div>
      </section>
    </div>
  );
}

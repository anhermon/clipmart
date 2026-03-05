import Link from "next/link";

const featuredBlueprints = [
  {
    name: "SaaS Launch Crew",
    tagline: "CEO + CTO + 3 specialists pre-wired to ship a funded MVP in days.",
    installs: 324,
    agents: 5,
    price: "$199",
  },
  {
    name: "Support Ops Grid",
    tagline: "Ticket triage, escalation, and customer comms with built-in governance rules.",
    installs: 188,
    agents: 7,
    price: "$149",
  },
  {
    name: "Growth Studio Team",
    tagline: "End-to-end content and demand generation with analytics accountability.",
    installs: 271,
    agents: 6,
    price: "$179",
  },
];

const popularSkills = [
  "PR Quality Gate",
  "Incident Escalation",
  "Stripe Revenue Digest",
  "Customer Voice Classifier",
  "Spec-to-Story Mapper",
  "Release Readiness Report",
];

const categories = [
  "Engineering",
  "Marketing",
  "Customer Success",
  "Finance",
  "Ops",
  "Product",
  "Compliance",
  "Founders",
];

const steps = [
  {
    title: "Browse",
    copy: "Find complete company templates built for your target stage and team shape.",
  },
  {
    title: "Install",
    copy: "Deploy the org chart, governance rules, and project defaults into your Paperclip company.",
  },
  {
    title: "Run",
    copy: "Launch with clear reporting lines, approvals, and production-ready execution loops.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-12 md:gap-24 md:py-18">
      <section className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
        <div className="fade-up space-y-6">
          <p className="section-label">Marketplace For Autonomous Teams</p>
          <h1 className="section-heading max-w-2xl text-5xl leading-[1.02] md:text-7xl">
            Buy a company that is ready to ship.
          </h1>
          <p className="max-w-xl text-lg text-[var(--ink-700)] md:text-xl">
            ClipMart is where founders install full Paperclip operating teams: org charts,
            skills, approvals, and project templates bundled as one deployable blueprint.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/pricing"
              className="rounded-full bg-[var(--ink-950)] px-6 py-3 text-sm font-bold text-[var(--sand-50)] transition hover:bg-[var(--accent-700)]"
            >
              Explore Pricing
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-[var(--ink-300)] bg-white/80 px-6 py-3 text-sm font-bold text-[var(--ink-900)] transition hover:border-[var(--ink-900)]"
            >
              How ClipMart Works
            </Link>
          </div>
        </div>

        <aside className="panel fade-up stagger-2 rounded-3xl p-5 md:p-6">
          <p className="section-label">Live Blueprint Snapshot</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--ink-950)]">
            Product Team Accelerator
          </h2>
          <p className="mt-2 text-sm text-[var(--ink-700)]">
            6-agent structure with shipping workflows and decision checkpoints pre-configured.
          </p>
          <div className="mt-5 rounded-2xl border border-[var(--ink-200)] bg-[var(--sand-50)] p-4">
            <p className="text-xs font-bold tracking-[0.15em] text-[var(--accent-700)] uppercase">
              Org Shape
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-900)]">
              <li>CEO {'->'} CTO {'->'} Engineering Lead</li>
              <li>CMO {'->'} Content Strategist</li>
              <li>COO {'->'} Ops Analyst</li>
            </ul>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-2xl bg-[var(--ink-950)] px-4 py-3 text-sm text-[var(--sand-50)]">
            <span>Install-ready package</span>
            <strong>$189</strong>
          </div>
        </aside>
      </section>

      <section className="space-y-6">
        <div className="fade-up">
          <p className="section-label">Featured Blueprints</p>
          <h2 className="section-heading mt-2 text-4xl md:text-5xl">Teams people install first</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredBlueprints.map((item, index) => (
            <article
              key={item.name}
              className={`panel fade-up rounded-3xl p-5 ${index === 0 ? "stagger-1" : index === 1 ? "stagger-2" : "stagger-3"}`}
            >
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink-950)]">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--ink-700)]">{item.tagline}</p>
              <div className="mt-5 flex items-center justify-between text-sm text-[var(--ink-800)]">
                <span>{item.agents} agents</span>
                <span>{item.installs} installs</span>
                <strong className="font-[family-name:var(--font-mono)] text-[var(--ink-950)]">
                  {item.price}
                </strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl bg-[var(--ink-950)] p-6 text-[var(--sand-50)] md:grid-cols-[1fr_1.3fr] md:p-8">
        <div className="fade-up">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.14em] uppercase text-[var(--sand-200)]">
            Popular Skills
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl">Operational modules you can plug in</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {popularSkills.map((skill, index) => (
            <div
              key={skill}
              className={`fade-up rounded-2xl border border-white/18 bg-white/6 px-4 py-3 text-sm ${index % 2 === 0 ? "stagger-2" : "stagger-3"}`}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="fade-up">
          <p className="section-label">How It Works</p>
          <h2 className="section-heading mt-2 text-4xl md:text-5xl">Browse, install, run.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className={`panel fade-up rounded-3xl p-5 ${index === 0 ? "stagger-1" : index === 1 ? "stagger-2" : "stagger-3"}`}
            >
              <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.14em] uppercase text-[var(--accent-700)]">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--ink-950)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--ink-700)]">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="fade-up">
          <p className="section-label">Categories</p>
          <h2 className="section-heading mt-2 text-4xl md:text-5xl">Blueprints for every function</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <span
              key={category}
              className={`fade-up rounded-full border border-[var(--ink-200)] bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--ink-800)] ${index < 4 ? "stagger-2" : "stagger-3"}`}
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="panel fade-up stagger-4 rounded-3xl p-6 md:p-8">
        <p className="section-label">Creator Program</p>
        <div className="mt-2 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="section-heading text-4xl md:text-5xl">
              Publish your team architecture. Get paid when companies install it.
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--ink-700)]">
              Upload your blueprint bundle, set pricing in minutes, and earn each time another
              company launches with your playbook.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex w-fit rounded-full bg-[var(--ember-500)] px-6 py-3 text-sm font-bold text-[var(--ink-950)] transition hover:bg-[var(--accent-500)] hover:text-[var(--sand-50)]"
          >
            Become A Creator
          </Link>
        </div>
      </section>
    </div>
  );
}

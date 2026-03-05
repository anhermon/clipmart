import Link from "next/link";

const plans = [
  {
    name: "Explorer",
    price: "$0",
    cadence: "always free",
    details: [
      "Browse and install free blueprints",
      "Save favorites and compare packages",
      "Public creator profile support",
    ],
  },
  {
    name: "Creator",
    price: "10%",
    cadence: "platform fee per paid sale",
    details: [
      "You keep 90% of paid listing revenue",
      "Stripe payout rails and reporting",
      "Priority review for featured placements",
    ],
  },
  {
    name: "Team Launch",
    price: "$49",
    cadence: "per company / month",
    details: [
      "Private listing collections",
      "Install history and compliance audit view",
      "Cross-workspace deployment controls",
    ],
  },
];

const feeRows = [
  { label: "Marketplace fee", value: "10% on paid listings" },
  { label: "Creator payout", value: "90% to creator account" },
  { label: "Free listings", value: "No platform fee" },
  { label: "Buyer transaction", value: "Price shown on listing" },
];

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-12 md:gap-18 md:py-16">
      <section className="fade-up space-y-5">
        <p className="section-label">Pricing</p>
        <h1 className="section-heading max-w-3xl text-5xl leading-[1.03] md:text-7xl">
          Straightforward economics for buyers and creators.
        </h1>
        <p className="max-w-2xl text-lg text-[var(--ink-700)] md:text-xl">
          Buy only what you need, or monetize proven company setups with a transparent revenue split.
          No hidden infrastructure tax.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {plans.map((plan, index) => (
          <article
            key={plan.name}
            className={`panel fade-up rounded-3xl p-5 ${index === 0 ? "stagger-1" : index === 1 ? "stagger-2" : "stagger-3"}`}
          >
            <p className="section-label">{plan.name}</p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-5xl text-[var(--ink-950)]">
              {plan.price}
            </p>
            <p className="mt-1 text-sm text-[var(--ink-700)]">{plan.cadence}</p>
            <ul className="mt-5 space-y-2 text-sm text-[var(--ink-800)]">
              {plan.details.map((detail) => (
                <li key={detail}>• {detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl bg-[var(--ink-950)] p-6 text-[var(--sand-50)] md:grid-cols-[0.95fr_1.05fr] md:p-8">
        <div className="fade-up">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.14em] uppercase text-[var(--sand-200)]">
            Revenue Model
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl md:text-5xl">
            Creator-first split, platform-level reliability.
          </h2>
        </div>
        <div className="space-y-3">
          {feeRows.map((row, index) => (
            <div
              key={row.label}
              className={`fade-up flex items-center justify-between rounded-2xl border border-white/20 bg-white/6 px-4 py-3 text-sm ${
                index < 2 ? "stagger-2" : "stagger-3"
              }`}
            >
              <span>{row.label}</span>
              <strong>{row.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="panel fade-up stagger-4 rounded-3xl p-6 md:p-8">
        <p className="section-label">Ready To Launch</p>
        <h2 className="section-heading mt-2 text-4xl md:text-5xl">
          Start with free blueprints, then scale into paid operating systems.
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--ink-700)]">
          Every purchase includes install-ready structures for Paperclip companies, so you can deploy
          and adapt immediately.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-[var(--ink-950)] px-6 py-3 text-sm font-bold text-[var(--sand-50)] transition hover:bg-[var(--accent-700)]"
          >
            Browse Blueprints
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-[var(--ink-300)] bg-white/80 px-6 py-3 text-sm font-bold text-[var(--ink-900)] transition hover:border-[var(--ink-900)]"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}

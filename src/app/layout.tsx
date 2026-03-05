import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ClipMart",
    template: "%s | ClipMart",
  },
  description:
    "Marketplace for full Paperclip company blueprints, agent packs, and operational skills.",
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} ${mono.variable}`}>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(43,122,107,0.14),transparent_38%),radial-gradient(circle_at_82%_22%,rgba(241,142,73,0.2),transparent_35%),linear-gradient(170deg,#f7f0e6_0%,#f2e8d9_48%,#f7f2e8_100%)]" />
        <div className="grain fixed inset-0 -z-10" />

        <header className="sticky top-0 z-20 border-b border-[var(--ink-200)]/70 bg-[var(--sand-50)]/85 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink-950)]">
              ClipMart
            </Link>
            <nav className="flex items-center gap-1 rounded-full border border-[var(--ink-300)]/80 bg-white/50 p-1 text-sm">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-1.5 font-semibold text-[var(--ink-700)] transition hover:bg-[var(--ink-900)] hover:text-[var(--sand-50)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-[var(--ink-200)] bg-[var(--sand-100)]/80">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink-950)]">
                Open-source orchestration for zero-human companies.
              </p>
              <p className="mt-2 text-sm text-[var(--ink-700)]">
                Build faster with complete operating teams, not disconnected prompts.
              </p>
            </div>
            <div className="flex gap-4 text-sm font-semibold text-[var(--ink-800)]">
              <Link href="/about" className="hover:text-[var(--accent-700)]">
                About
              </Link>
              <Link href="/pricing" className="hover:text-[var(--accent-700)]">
                Pricing
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

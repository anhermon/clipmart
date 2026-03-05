import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            ClipMart &mdash; The marketplace for Paperclip team blueprints
          </p>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

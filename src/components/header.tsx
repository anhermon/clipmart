"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-gray-900">
            ClipMart
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/browse"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Browse
            </Link>
            <Link
              href="/browse?type=team_blueprint"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Teams
            </Link>
            <Link
              href="/browse?type=skill"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Skills
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

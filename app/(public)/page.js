import Link from 'next/link';

/*
  ROUTE GROUPS:
  Folders wrapped in parentheses like (public) do NOT appear in the URL.
  So this file lives at: app/(public)/page.js
  But the browser URL is just: /
*/

export default function PublicHomePage() {
  return (
    <div>
      {/* Simple public navbar */}
      <nav className="border-b p-4 flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/merchant/dashboard">Merchant</Link>
        <Link href="/rider/dashboard">Rider</Link>
      </nav>

      <main className="p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          SwiftDrop — Public Home
        </h1>
        <p className="text-gray-700">
          This page is for standard visitors. Use the links above to open
          the Merchant or Rider dashboards.
        </p>
      </main>
    </div>
  );
}

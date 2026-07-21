import Link from 'next/link';

/*
  NESTED LAYOUTS:
  Root layout wraps this rider layout.
  This rider layout wraps all pages under (rider).

  ROUTE GROUP (rider):
  (rider) does not appear in the URL.
  URLs look like /rider/dashboard because of the rider/ folder.
*/

export default function RiderLayout({ children }) {
  return (
    <div className="min-h-screen">
      {/* Top bar — shared by all rider pages */}
      <header className="border-b p-4 flex gap-4 items-center">
        <span className="font-bold text-gray-900">Rider</span>
        <nav className="flex gap-4">
          <Link href="/rider/dashboard">Dashboard</Link>
          <Link href="/">Back to Home</Link>
        </nav>
      </header>

      {/* children = the page.js for the current rider route */}
      <main className="p-8">{children}</main>
    </div>
  );
}

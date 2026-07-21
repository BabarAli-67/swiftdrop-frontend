import Link from 'next/link';

/*
  NESTED LAYOUTS:
  - app/layout.tsx  → root shell (<html>, <body>) wraps EVERY page
  - this file       → merchant shell (sidebar) wraps ONLY pages under (merchant)

  ROUTE GROUP (merchant):
  The (merchant) name is NOT in the URL.
  Real URLs still start with /merchant/... because of the merchant/ folder inside.
*/

export default function MerchantLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar — shared by all merchant pages */}
      <aside className="w-48 border-r p-4">
        <h2 className="font-bold text-gray-900 mb-4">Merchant</h2>
        <nav className="flex flex-col gap-2">
          <Link href="/merchant/dashboard">Dashboard</Link>
          <Link href="/merchant/parcels">Parcels</Link>
          <Link href="/">Back to Home</Link>
        </nav>
      </aside>

      {/* children = the page.js for the current merchant route */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}

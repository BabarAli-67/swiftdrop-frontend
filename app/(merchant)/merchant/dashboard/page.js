/*
  URL for this page: /merchant/dashboard
  Path on disk: app/(merchant)/merchant/dashboard/page.js

  The (merchant) group is ignored in the URL.
  The merchant/ and dashboard/ folders become the path.
*/

export default function MerchantDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Merchant Dashboard
      </h1>
      <p className="text-gray-700">
        Main view for merchants. The sidebar on the left comes from
        (merchant)/layout.js and stays visible while you navigate.
      </p>
    </div>
  );
}

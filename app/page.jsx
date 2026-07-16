import MetricCard from '@/components/MetricCard';
import InventoryTracker from '@/components/InventoryTracker';

const METRICS = [
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: 'Rs. 45,230',
    percentageChange: '12.5%',
    variant: 'success',
  },
  {
    id: 'cancellations',
    title: 'Active Cancellations',
    value: '14 Parcels',
    percentageChange: '4.2%',
    variant: 'danger',
  },
];

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        SwiftDrop Analytics Dashboard
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {METRICS.map((metric) => (
          <MetricCard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            percentageChange={metric.percentageChange}
            variant={metric.variant}
          />
        ))}
      </div>

      <InventoryTracker />
    </main>
  );
}

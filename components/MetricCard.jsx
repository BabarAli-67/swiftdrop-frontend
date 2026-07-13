export default function MetricCard({ title, value, percentageChange, variant }) {
  const isSuccess = variant === 'success';

  return (
    <div className="border rounded-lg p-4 bg-white">
      <p className="text-sm text-gray-500">{title}</p>

      <div className="flex justify-between mt-2">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <span className={isSuccess ? 'text-green-600' : 'text-red-600'}>
          {isSuccess ? '↑' : '↓'} {percentageChange}
        </span>
      </div>
    </div>
  );
}

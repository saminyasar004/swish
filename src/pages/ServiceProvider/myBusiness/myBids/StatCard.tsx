interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function StatCard({
  title,
  value,
  description,
  icon,
  color,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border px-4 py-4 w-full max-w-md">
      {/* Header: title + icon */}
      <div className="flex justify-between items-start w-full mb-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <h1 className={`text-xl font-semibold ${color}`}>{value}</h1>
        </div>
        <div className="text-2xl">{icon}</div>
      </div>

      {/* Description */}
      {description && (
        <span className="text-sm text-gray-500">{description}</span>
      )}
    </div>
  );
}

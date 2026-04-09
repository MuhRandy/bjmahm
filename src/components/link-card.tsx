import type { LinkItem } from "../data/dashboardData";

interface LinkCardProps {
  item: LinkItem;
}

export function LinkCard({ item }: LinkCardProps) {
  const statusColors = {
    active: "bg-green-100 text-green-700",
    soon: "bg-yellow-100 text-yellow-700",
    maintenance: "bg-red-100 text-red-700",
  };

  const statusText = {
    active: "✅ Aktif",
    soon: "⏳ Segera",
    maintenance: "🔧 Maintenance",
  };

  const handleClick = (e: React.MouseEvent) => {
    if (item.url === "#") {
      e.preventDefault();
      alert(`🔗 ${item.title} sedang dalam penyusunan. Akan segera tersedia.`);
    }
  };

  return (
    <a
      href={item.url}
      onClick={handleClick}
      className="block bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-secondary/30 transition-all duration-200 group"
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl group-hover:scale-110 transition-transform">
          {item.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
            <span
              className={`text-xs px-2 py-1 rounded-full ${statusColors[item.status]}`}
            >
              {statusText[item.status]}
            </span>
          </div>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
      </div>
    </a>
  );
}

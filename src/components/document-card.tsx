import type { DocumentItem } from "../data/dashboardData";

interface DocumentCardProps {
  doc: DocumentItem;
}

const typeIcons = {
  sop: "📋",
  guide: "📖",
  template: "📄",
  report: "📊",
};

const typeLabels = {
  sop: "SOP",
  guide: "Panduan",
  template: "Template",
  report: "Laporan",
};

export function DocumentCard({ doc }: DocumentCardProps) {
  return (
    <a
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-secondary/30 transition-all duration-200"
    >
      <div className="flex items-center gap-3">
        <div className="text-2xl">{typeIcons[doc.type]}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-medium text-gray-800 truncate">{doc.title}</h3>
            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
              {typeLabels[doc.type]}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">{doc.description}</p>
        </div>
        <div className="text-gray-300 text-xl">→</div>
      </div>
    </a>
  );
}

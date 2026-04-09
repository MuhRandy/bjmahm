import { useState } from "react";
import { linksData, documentsData } from "./data/dashboardData";
import { LinkCard } from "./components/link-card";
import { DocumentCard } from "./components/document-card";

type TabType = "all" | "schedule" | "tools" | "docs" | "general";

function App() {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const categories = [
    { id: "all", label: "Semua", icon: "🏠" },
    { id: "schedule", label: "Schedule", icon: "📅" },
    { id: "tools", label: "Tools", icon: "🛠️" },
    { id: "docs", label: "Dokumentasi", icon: "📚" },
    { id: "general", label: "General", icon: "📌" },
  ];

  const filteredLinks = linksData.filter(
    (item) => activeTab === "all" || item.category === activeTab,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🍜</span>
            <h1 className="text-2xl md:text-3xl font-bold">Gacoan Dashboard</h1>
          </div>
          <p className="text-primary-100 text-sm">
            Pusat informasi dan tools untuk manajer operasional
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as TabType)}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                activeTab === cat.id
                  ? "bg-secondary text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Links Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <span>🔗</span> Link & Tools
            </h2>
            <span className="text-sm text-gray-400">
              {filteredLinks.length} item
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLinks.map((item) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Dokumentasi Section (hanya tampil di tab 'all' atau 'docs') */}
        {(activeTab === "all" || activeTab === "docs") && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <span>📄</span> Dokumentasi
              </h2>
              <span className="text-sm text-gray-400">
                {documentsData.length} dokumen
              </span>
            </div>
            <div className="space-y-3">
              {documentsData.map((doc) => (
                <DocumentCard key={doc.id} doc={doc} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>Gacoan Internal Dashboard · Dikelola oleh Manajer Operasional</p>
          <p className="mt-1 text-xs">🔧 Data diperbarui secara berkala</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

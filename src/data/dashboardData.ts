export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  category: "schedule" | "tools" | "docs" | "general";
  status: "active" | "soon" | "maintenance";
}

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "sop" | "guide" | "template" | "report";
  lastUpdated: string;
}

export const linksData: LinkItem[] = [
  {
    id: "jadwal-shift",
    title: "Jadwal Shift",
    description: "Lihat dan edit jadwal harian kru per station",
    url: "https://docs.google.com/spreadsheets/d/...",
    icon: "📅",
    category: "schedule",
    status: "active",
  },
  {
    id: "data-kru",
    title: "Data Kru",
    description: "Database kru, kontak, dan riwayat off",
    url: "https://docs.google.com/spreadsheets/d/...",
    icon: "👥",
    category: "tools",
    status: "active",
  },
  {
    id: "input-absensi",
    title: "Input Absensi",
    description: "Rekam break, after break, dan izin kru",
    url: "#",
    icon: "📋",
    category: "tools",
    status: "soon",
  },
  {
    id: "laporan-harian",
    title: "Laporan Harian",
    description: "Ringkasan penjualan, kendala, dan catatan shift",
    url: "#",
    icon: "📊",
    category: "tools",
    status: "soon",
  },
  {
    id: "sop-mie-gacoan",
    title: "SOP Mie Gacoan",
    description: "Standar operasional pembuatan mie dan topping",
    url: "https://docs.google.com/document/d/...",
    icon: "🍜",
    category: "docs",
    status: "active",
  },
  {
    id: "sop-kasir",
    title: "SOP Kasir",
    description: "Prosedur transaksi dan penanganan uang",
    url: "https://docs.google.com/document/d/...",
    icon: "💰",
    category: "docs",
    status: "active",
  },
  {
    id: "pengumuman",
    title: "Pengumuman Tim",
    description: "Informasi penting dari manajemen",
    url: "#",
    icon: "📣",
    category: "general",
    status: "soon",
  },
];

export const documentsData: DocumentItem[] = [
  {
    id: "doc-1",
    title: "Panduan Kebersihan Dapur",
    description: "Standar kebersihan dan sanitasi area dapur",
    url: "https://docs.google.com/document/d/...",
    type: "guide",
    lastUpdated: "2026-03-15",
  },
  {
    id: "doc-2",
    title: "Template Laporan Shift",
    description: "Format laporan harian untuk shift manager",
    url: "https://docs.google.com/spreadsheets/d/...",
    type: "template",
    lastUpdated: "2026-03-20",
  },
  {
    id: "doc-3",
    title: "Prosedur Big Order",
    description: "Penanganan pesanan besar dan reservasi",
    url: "https://docs.google.com/document/d/...",
    type: "sop",
    lastUpdated: "2026-03-10",
  },
  {
    id: "doc-4",
    title: "Rekap Penjualan Bulanan",
    description: "Template rekap penjualan per bulan",
    url: "https://docs.google.com/spreadsheets/d/...",
    type: "report",
    lastUpdated: "2026-04-01",
  },
];

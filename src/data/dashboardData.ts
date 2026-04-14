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
    id: "schedule-tools",
    title: "Schedule Tools",
    description: "Lihat dan edit jadwal harian kru per station",
    url: "https://docs.google.com/spreadsheets/d/1mMwzDD7ry6xlEecOBocRnowkG2quC0lYjSLzyYkJo-s/edit?gid=1868337595#gid=1868337595",
    icon: "📅",
    category: "schedule",
    status: "active",
  },
  {
    id: "data-kru-perbantuan-dan-ct",
    title: "Data Kru Perbantuan dan CT",
    description:
      "Database dan schedule kru CT dan perbantuan yang tidak masuk pada Schedule Tools atau SS Crew",
    url: "https://docs.google.com/spreadsheets/d/1hpXDeUJMrJ87KRc1BGREreuvR0rE1KAmsv8rghNEtog/edit?gid=0#gid=0",
    icon: "👥",
    category: "schedule",
    status: "active",
  },
  {
    id: "ss-crew-april",
    title: "SS Crew April",
    description:
      "Database dan schedule kru seluruh resto Kalimantan 1 periode April 2026",
    url: "https://docs.google.com/spreadsheets/d/1IcNHm00oHqrq_SjVokUYWCHAJ_DYKb1ewn_ZNZ8Xqzw/edit?gid=72267620#gid=72267620",
    icon: "🗓️👥",
    category: "schedule",
    status: "active",
  },
  {
    id: "auto-schedule-website",
    title: "Website Auto Schedule",
    description: "Website Auto Schedule resmi Gacoan",
    url: "https://sca.miegacoan.id",
    icon: "🌐",
    category: "schedule",
    status: "active",
  },
  {
    id: "schedule-crew-management",
    title: "Schedule Crew Management",
    description: "Schedule Crew Management seperti QC, Stocker, dan CEL",
    url: "https://docs.google.com/spreadsheets/d/1MyNpxx2bPbxvWNy5a23AmqkHLzlj5zv6bYrgYGwPwCY/edit?gid=639936730#gid=639936730",
    icon: "👮‍♀️",
    category: "schedule",
    status: "active",
  },
  {
    id: "template-schedule-manual",
    title: "Template Schedule Manual",
    description:
      "Data perhitungan berapa seharusnya kru dipasang pada schedule berdasarkan histori mie dan template schedule manual",
    url: "https://docs.google.com/spreadsheets/d/1ALTHVi88bbLccApu0nxthn4_u7z1XF3FMn159NBW_Qg/edit?gid=228259692#gid=228259692",
    icon: "🗓️",
    category: "schedule",
    status: "active",
  },
  {
    id: "schedule-crew-set-up",
    title: "Schedule Crew Set Up",
    description: "Schedule crew set up dari akademi",
    url: "https://docs.google.com/spreadsheets/d/1hgDVesCogLrKswN6iHJwzj6xvTX26S-CA_H8a_YMF-A/edit?gid=573583615#gid=573583615",
    icon: "🧑‍🏫",
    category: "schedule",
    status: "active",
  },
  {
    id: "mpp-crew",
    title: "MPP Crew",
    description:
      "Data labor crew wajib update tiap ada perubahan seperti kru masuk maupun kru keluar",
    url: "https://docs.google.com/spreadsheets/d/1hnGVWddND1s6poTfOohfNUPh4YymoOyknhZFXb5RpFM/edit?gid=1685704719#gid=1685704719",
    icon: "📝",
    category: "schedule",
    status: "active",
  },
  {
    id: "cacp-otomatis",
    title: "CACP Otomatis",
    description: "CACP lebih mudah hanya dengan dua kali klik",
    url: "https://docs.google.com/spreadsheets/d/1bxV7hokL7dxt-7F4tYfKoe5zFzcJs3MAXhNel8r8YP8/edit?gid=1863371609#gid=1863371609",
    icon: "📋",
    category: "tools",
    status: "active",
  },
  {
    id: "manager-tasks-list",
    title: "Tasks List Manager",
    description: "Daftar tugas untuk manager dari SM",
    url: "https://docs.google.com/spreadsheets/d/1yoTu5joiFWzvLp01fdl1Q5vzS7rK0yoesy-xyXWZ_nM/edit?gid=70100101#gid=70100101",
    icon: "✅",
    category: "tools",
    status: "active",
  },
  {
    id: "schedule-manager",
    title: "Schedule Manager April",
    description: "Schedule manager periode april 2026",
    url: "https://docs.google.com/spreadsheets/d/1Q8ArYZ_F7pxBFreU_WdN-MNbijOrMVsz7xoim6nV6k4/edit?gid=1576191533#gid=1576191533",
    icon: "🧑‍💼",
    category: "tools",
    status: "active",
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

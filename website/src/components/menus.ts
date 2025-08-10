// Struktur data menu dan submenunya

export type SubMenu = {
  title: string;
  description: string;
  href: string;
};

export type MenuGroup = {
  name: string;
  description: string;
  items: SubMenu[];
};

export const MENU_GROUPS: Record<string, MenuGroup[]> = {
  Features: [
    {
      name: "Inventory",
      description: "Kelola inventaris dengan mudah",
      items: [
        { title: "Mobile App", description: "Akses dari mana saja", href: "#" },
        { title: "QR Coding", description: "Scan cepat item", href: "#" },
        { title: "Alerts", description: "Notifikasi stok menipis", href: "#" },
      ],
    },
    {
      name: "Integrations",
      description: "Hubungkan ke aplikasi favorit",
      items: [
        { title: "Reporting", description: "Laporan otomatis", href: "#" },
        { title: "API Access", description: "Integrasi kustom", href: "#" },
      ],
    },
  ],
  Solutions: [
    {
      name: "Business",
      description: "Solusi untuk perusahaan",
      items: [
        { title: "Retail", description: "Toko dan e-commerce", href: "#" },
        { title: "Warehouse", description: "Gudang dan logistik", href: "#" },
      ],
    },
  ],
  Learn: [
    {
      name: "Resources",
      description: "Belajar dan dukungan",
      items: [
        { title: "Documentation", description: "Panduan lengkap", href: "#" },
        { title: "Blog", description: "Artikel terbaru", href: "#" },
        { title: "Community", description: "Forum diskusi", href: "#" },
      ],
    },
  ],
};

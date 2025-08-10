// src/components/siteMenu.ts
export type MenuItem = {
  title: string;
  desc?: string;
  href: string;
  icon?: string; // lucide icon key
};

export type MenuLead = {
  title: string; // mis. "Features"
  desc: string; // deskripsi singkat
  ctaText?: string; // mis. "All features"
  ctaHref?: string; // tautan CTA kecil di kiri bawah
};

export type SiteMenu = {
  label: string; // label tab di navbar
  lead: MenuLead; // konten kolom kiri
  items: MenuItem[]; // grid item kanan
};

export const MENUS: SiteMenu[] = [
  {
    label: "Features",
    lead: {
      title: "Features",
      desc: "Discover how Stockholm IMS simplifies inventory with features designed for ease and organization.",
      ctaText: "All features",
      ctaHref: "/features",
    },
    items: [
      {
        title: "Mobile App",
        href: "/features/mobile-app",
        desc: "Track inventory from any device, any location with our mobile app.",
        icon: "Smartphone",
      },
      {
        title: "QR Coding",
        href: "/features/qr-coding",
        desc: "Save time with built‑in QR code scanning & labeling.",
        icon: "QrCode",
      },
      {
        title: "Alerts",
        href: "/features/alerts",
        desc: "Simplify reordering with low stock & date‑based alerts.",
        icon: "Bell",
      },
      {
        title: "Barcoding",
        href: "/features/barcoding",
        desc: "Built‑in barcode scanning & labeling.",
        icon: "Barcode",
      },
      {
        title: "Integrations",
        href: "/features/integrations",
        desc: "Integrate with your favorite platforms.",
        icon: "Link2",
      },
      {
        title: "Reporting",
        href: "/features/reporting",
        desc: "Generate powerful, data‑driven insights.",
        icon: "BarChart3",
      },
    ],
  },
  {
    label: "Solutions",
    lead: {
      title: "Solutions",
      desc: "No matter what you need to track, Stockholm IMS has you covered.",
      ctaText: "See all solutions",
      ctaHref: "/solutions",
    },
    items: [
      {
        title: "Inventory Management",
        href: "/solutions/inventory-management",
        desc: "Manage and track all your business inventory.",
        icon: "Boxes",
      },
      {
        title: "Supplies Tracking",
        href: "/solutions/supplies-tracking",
        desc: "Track supplies, materials, and parts.",
        icon: "PackageSearch",
      },
      {
        title: "Asset Tracking",
        href: "/solutions/asset-tracking",
        desc: "Track tools, equipment, and high‑value assets.",
        icon: "PackageCheck",
      },
      {
        title: "Construction",
        href: "/solutions/construction",
        desc: "Manage tools across job sites.",
        icon: "HardHat",
      },
      {
        title: "Medical",
        href: "/solutions/medical",
        desc: "Manage medical supplies & equipment.",
        icon: "Stethoscope",
      },
      {
        title: "Warehouse",
        href: "/solutions/warehouse",
        desc: "Simplify warehouse operations.",
        icon: "Warehouse",
      },
    ],
  },
  {
    label: "Learn",
    lead: {
      title: "Learn",
      desc: "Stay ahead with resources and insights from Stockholm IMS.",
      ctaText: "Browse resources",
      ctaHref: "/learn",
    },
    items: [
      {
        title: "Insights",
        href: "/learn/insights",
        desc: "Tips and best practices.",
        icon: "BookOpen",
      },
      {
        title: "Case Studies",
        href: "/learn/case-studies",
        desc: "See how teams succeed.",
        icon: "Users",
      },
      {
        title: "Stockholm vs Spreadsheets",
        href: "/learn/vs-spreadsheets",
        desc: "Why IMS beats spreadsheets.",
        icon: "Table",
      },
      {
        title: "Comparisons",
        href: "/learn/comparisons",
        desc: "Compare with other tools.",
        icon: "GitCompare",
      },
      {
        title: "Testimonials",
        href: "/learn/testimonials",
        desc: "What customers say.",
        icon: "MessageSquareQuote",
      },
      {
        title: "University / Tutorials",
        href: "/learn/university",
        desc: "Step‑by‑step tutorials.",
        icon: "GraduationCap",
      },
    ],
  },
];

// components/menus.ts
import {
  Smartphone,
  QrCode,
  Bell,
  Barcode,
  Link2,
  BarChart3,
  HardHat,
  Stethoscope,
  Warehouse,
  Zap,
  BookOpen,
  Users,
  DollarSign,
  HelpCircle,
  BookText,
} from "lucide-react";
import type { AllMenuGroups } from "../types/menus";

export const MENU_GROUPS: AllMenuGroups = {
  features: {
    name: "Features",
    desc: "Discover how Stockholm IMS simplifies inventory.",
    items: [
      {
        icon: Smartphone,
        label: "Mobile App",
        desc: "Track inventory from any device.",
        href: "/features/mobile-app",
      },
      {
        icon: QrCode,
        label: "QR Coding",
        desc: "Built-in QR code scanning & labeling.",
        href: "/features/qr-coding",
      },
      {
        icon: Bell,
        label: "Alerts",
        desc: "Low stock and date-based alerts.",
        href: "/features/alerts",
      },
      {
        icon: Barcode,
        label: "Barcoding",
        desc: "Barcode scanning & labeling.",
        href: "/features/barcoding",
      },
      {
        icon: Link2,
        label: "Integrations",
        desc: "Integrate with other platforms.",
        href: "/features/integrations",
      },
      {
        icon: BarChart3,
        label: "Reporting",
        desc: "Powerful inventory reporting.",
        href: "/features/reporting",
      },
    ],
  },
  solutions: {
    name: "Solutions",
    desc: "Find the right solution for your business.",
    items: [
      {
        icon: HardHat,
        label: "Construction",
        desc: "Track tools and materials.",
        href: "/solutions/construction",
      },
      {
        icon: Stethoscope,
        label: "Healthcare",
        desc: "Manage medical inventory.",
        href: "/solutions/healthcare",
      },
      {
        icon: Warehouse,
        label: "Warehouse",
        desc: "Streamline warehouse ops.",
        href: "/solutions/warehouse",
      },
      {
        icon: Zap,
        label: "Small Business",
        desc: "Easy inventory for SMB.",
        href: "/solutions/small-business",
      },
    ],
  },
  learn: {
    name: "Learn",
    desc: "Resources, help, and guides.",
    items: [
      {
        icon: BookOpen,
        label: "Guides",
        desc: "Get started and best practice.",
        href: "/learn/guides",
      },
      {
        icon: Users,
        label: "Community",
        desc: "Join discussions and get help.",
        href: "/learn/community",
      },
      {
        icon: DollarSign,
        label: "Pricing FAQ",
        desc: "All about pricing and billing.",
        href: "/learn/pricing-faq",
      },
      {
        icon: HelpCircle,
        label: "Support",
        desc: "Contact support and docs.",
        href: "/learn/support",
      },
      {
        icon: BookText,
        label: "Blog",
        desc: "News and case studies.",
        href: "/learn/blog",
      },
    ],
  },
};

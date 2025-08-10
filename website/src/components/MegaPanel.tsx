"use client";

import Link from "next/link";
import { MENUS, type SiteMenu } from "./siteMenu";
import type { ComponentType } from "react";
import {
  Smartphone,
  QrCode,
  Bell,
  Barcode,
  Link2,
  BarChart3,
  Boxes,
  PackageSearch,
  PackageCheck,
  HardHat,
  Stethoscope,
  Warehouse,
  BookOpen,
  Users,
  Table,
  GitCompare,
  MessageSquareQuote,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const ICONS: Record<
  string,
  ComponentType<{ size?: number; className?: string }>
> = {
  Smartphone,
  QrCode,
  Bell,
  Barcode,
  Link2,
  BarChart3,
  Boxes,
  PackageSearch,
  PackageCheck,
  HardHat,
  Stethoscope,
  Warehouse,
  BookOpen,
  Users,
  Table,
  GitCompare,
  MessageSquareQuote,
  GraduationCap,
};

export function MegaPanel({ menu }: { menu: SiteMenu }) {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl w-full gap-12 px-10 py-10">
        {/* Left column */}
        <div className="w-1/3 pr-6">
          <div className="flex items-center gap-2 text-xl font-semibold">
            {menu.lead.title}{" "}
            <ArrowRight size={18} className="text-foreground/60" />
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {menu.lead.desc}
          </p>
          {menu.lead.ctaHref && (
            <Link
              href={menu.lead.ctaHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-rose-600 hover:underline"
            >
              {menu.lead.ctaText} <ArrowRight size={16} />
            </Link>
          )}
        </div>

        {/* Right column - items grid */}
        <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-8">
          {menu.items.map((it) => {
            const Icon = it.icon ? ICONS[it.icon] : undefined;
            return (
              <Link
                key={it.title}
                href={it.href}
                className="group flex items-start gap-4"
              >
                {Icon && (
                  <span className="rounded-md border border-rose-200 bg-rose-50 p-2 text-rose-500 flex-shrink-0">
                    <Icon size={22} />
                  </span>
                )}
                <div>
                  <div className="font-semibold text-sm">{it.title}</div>
                  {it.desc && (
                    <p className="mt-1 text-xs text-muted-foreground leading-snug">
                      {it.desc}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

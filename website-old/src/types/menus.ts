import type { ComponentType } from "react";

export type MenuItem = {
  label: string;
  desc: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export type MenuGroup = {
  name: string;
  desc: string;
  items: MenuItem[];
};

export type AllMenuGroups = Record<string, MenuGroup>;

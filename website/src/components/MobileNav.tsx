"use client";

import { useState } from "react";
import Link from "next/link";
import { MENUS } from "@/components/siteMenu";

// shadcn/ui
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Icons (harus sinkron dengan kunci icon di MENUS)
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
  Menu as MenuIcon,
  X as XIcon,
  ChevronRight,
} from "lucide-react";

const ICONS = {
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

type Props = {
  // path CTA opsional
  signupHref?: string;
  loginHref?: string;
};

export default function MobileNav({
  signupHref = "/signup",
  loginHref = "/login",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border"
      >
        <MenuIcon className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent
        side="top"
        // full-screen drawer
        className="p-0 h-screen w-screen md:hidden"
      >
        {/* Judul dan deskripsi untuk aksesibilitas (disembunyikan secara visual) */}
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Navigation Menu</SheetTitle>
          <SheetDescription>
            A list of main navigation links for the site, including Features,
            Solutions, and Learn.
          </SheetDescription>
        </SheetHeader>
        {/* Header with CTAs */}
        <div className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
            <Button asChild className="flex-1 bg-rose-600 hover:bg-rose-700">
              <Link href={signupHref} onClick={() => setOpen(false)}>
                Start Free Trial
              </Link>
            </Button>

            <Button asChild variant="outline" className="flex-1">
              <Link href={loginHref} onClick={() => setOpen(false)}>
                Login
              </Link>
            </Button>

            <SheetClose
              aria-label="Close"
              className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border"
            >
              <XIcon className="h-5 w-5" />
            </SheetClose>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-4 pb-20">
          {/* Accordion: default buka "Features" */}
          <Accordion
            type="single"
            collapsible
            defaultValue="Features"
            className="w-full"
          >
            {MENUS.map((group) => (
              <AccordionItem
                key={group.label}
                value={group.label}
                className="border-b"
              >
                <AccordionTrigger className="py-5 text-lg font-medium">
                  {group.label}
                </AccordionTrigger>

                {/* Content */}
                <AccordionContent className="pb-6">
                  {/* Lead title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">
                      {group.lead.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {group.lead.desc}
                    </p>
                  </div>

                  {/* List items */}
                  <ul className="space-y-4">
                    {group.items.map((it) => {
                      const Icon =
                        ICONS[it.icon as keyof typeof ICONS] ?? ChevronRight;
                      return (
                        <li key={it.title}>
                          <Link
                            href={it.href}
                            onClick={() => setOpen(false)}
                            className="flex items-start gap-3 rounded-md p-2 hover:bg-muted/60"
                          >
                            <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-md bg-rose-50 text-rose-600">
                              <Icon className="h-4 w-4" />
                            </span>
                            <div className="flex-1">
                              <div className="font-medium">{it.title}</div>
                              {it.desc && (
                                <p className="text-sm text-muted-foreground">
                                  {it.desc}
                                </p>
                              )}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA kecil kanan bawah (opsional) */}
                  {group.lead.ctaHref && (
                    <div className="mt-4">
                      <Link
                        href={group.lead.ctaHref}
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center gap-1 text-sm font-medium text-rose-600 hover:text-rose-700"
                      >
                        {group.lead.ctaText ?? "See more"}{" "}
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}

            {/* Link standalone (Enterprise / Pricing) kalau kamu mau tetap sebagai item terpisah */}
            <AccordionItem value="Enterprise" className="border-b">
              <AccordionTrigger className="py-5 text-lg font-medium">
                Enterprise
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="text-sm text-muted-foreground">
                  Tailor-made features and support for larger teams.
                </div>
                <div className="mt-4">
                  <Link
                    href="/enterprise"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1 text-sm font-medium text-rose-600 hover:text-rose-700"
                  >
                    Explore Enterprise <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="Pricing" className="border-b">
              <AccordionTrigger className="py-5 text-lg font-medium">
                Pricing
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="text-sm text-muted-foreground">
                  Flexible plans for individuals and companies.
                </div>
                <div className="mt-4">
                  <Link
                    href="/pricing"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1 text-sm font-medium text-rose-600 hover:text-rose-700"
                  >
                    View Pricing <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}

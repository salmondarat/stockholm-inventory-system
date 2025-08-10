"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MENUS } from "./siteMenu";
import { MegaPanel } from "./MegaPanel";
import { LogIn } from "lucide-react";
import MobileNav from "@/components/MobileNav";

/** md+ breakpoint detector */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

export default function Navbar() {
  const isDesktop = useIsDesktop();

  /** Simpan tinggi header ke CSS var untuk posisi panel */
  const headerRef = React.useRef<HTMLElement | null>(null);
  React.useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setVar = () => {
      const h = el.getBoundingClientRect().height || 64;
      document.documentElement.style.setProperty("--nav-top", `${h}px`);
    };
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /** Controlled active menu */
  const [active, setActive] = React.useState("");

  /** Hover intent (desktop) */
  const openTimer = React.useRef<number | null>(null);
  const closeTimer = React.useRef<number | null>(null);
  const OPEN_DELAY = 80;
  const CLOSE_DELAY = 220;
  const clearTimers = () => {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleOpen = (val: string) => {
    if (!isDesktop) return;
    clearTimers();
    openTimer.current = window.setTimeout(() => setActive(val), OPEN_DELAY);
  };
  const scheduleClose = () => {
    if (!isDesktop) return;
    clearTimers();
    closeTimer.current = window.setTimeout(() => setActive(""), CLOSE_DELAY);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="shrink-0 text-xl font-semibold text-rose-600">
          Stockholm
        </Link>

        {/* CENTER NAV (desktop) */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu
            value={active}
            onValueChange={setActive}
            viewport={false} // matikan viewport box default shadcn
            className="nav-full" // hook ke CSS override
          >
            <NavigationMenuList className="relative">
              {MENUS.map((m) => {
                const val = m.label;
                return (
                  <NavigationMenuItem
                    key={val}
                    value={val}
                    className="relative after:absolute after:left-0 after:right-0 after:top-full after:h-3 after:content-['']"
                    onMouseEnter={() => scheduleOpen(val)}
                    onMouseLeave={scheduleClose}
                  >
                    <NavigationMenuTrigger>{m.label}</NavigationMenuTrigger>

                    {/* Panel full-width */}
                    <NavigationMenuContent
                      onMouseEnter={() => scheduleOpen(val)}
                      onMouseLeave={scheduleClose}
                      className="nm-content hidden md:block"
                    >
                      <div className="mx-auto max-w-7xl px-6">
                        <MegaPanel menu={m} />
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}

              {/* Inline links */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/enterprise">Enterprise</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/pricing">Pricing</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* RIGHT (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-1 text-sm hover:text-blue-600"
          >
            <LogIn size={16} /> Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700"
          >
            Start Free Trial
          </Link>
        </div>

        {/* MOBILE trigger -> MobileNav (drawer full screen) */}
        <div className="md:hidden">
          <MobileNav signupHref="/signup" loginHref="/login" />
        </div>
      </div>
    </header>
  );
}

// components/Navbar.tsx
import React, { useState } from "react";
import { MENU_GROUPS } from "./menus";
import { MegaMenu } from "./MegaMenu";

const NAV_KEYS = [
  { key: "features", label: "Features" },
  { key: "solutions", label: "Solutions" },
  { key: "learn", label: "Learn" },
];

export const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle hover open (desktop) and click (mobile)
  const handleOpen = (key: string) => {
    if (window.innerWidth >= 768) setOpenMenu(key);
    else setOpenMenu(key === openMenu ? null : key);
  };

  return (
    <nav className="relative z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/" className="font-bold text-xl text-blue-700 tracking-wide">
          Stockholm IMS
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_KEYS.map((nav) => (
            <div
              key={nav.key}
              className="relative"
              onMouseEnter={() => handleOpen(nav.key)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="font-medium text-gray-700 hover:text-blue-600 py-2 px-4 transition"
                onClick={() => handleOpen(nav.key)}
              >
                {nav.label}
              </button>
              {/* MegaMenu */}
              <MegaMenu
                groupKey={nav.key as keyof typeof MENU_GROUPS}
                open={openMenu === nav.key}
                onClose={() => setOpenMenu(null)}
              />
            </div>
          ))}
        </div>
        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/login"
            className="py-2 px-4 rounded-xl text-blue-700 font-semibold hover:bg-blue-50"
          >
            Login
          </a>
          <a
            href="/signup"
            className="py-2 px-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Sign Up
          </a>
        </div>
        {/* Hamburger (mobile) */}
        <button className="md:hidden" onClick={() => setMobileOpen((o) => !o)}>
          <span className="block w-6 h-1 bg-blue-700 my-1 rounded"></span>
          <span className="block w-6 h-1 bg-blue-700 my-1 rounded"></span>
          <span className="block w-6 h-1 bg-blue-700 my-1 rounded"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-white shadow-2xl p-6">
          {NAV_KEYS.map((nav) => (
            <div key={nav.key} className="mb-2">
              <button
                className="w-full text-left py-2 px-2 font-bold text-blue-700"
                onClick={() =>
                  setOpenMenu(openMenu === nav.key ? null : nav.key)
                }
              >
                {nav.label}
              </button>
              {openMenu === nav.key && (
                <div className="mt-1 border-l-2 border-blue-100 pl-3">
                  {MENU_GROUPS[nav.key as keyof typeof MENU_GROUPS].items.map(
                    (item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-2 py-2"
                      >
                        <item.icon className="w-5 h-5 text-blue-600" />
                        <span>{item.label}</span>
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
          {/* Mobile actions */}
          <div className="mt-4 flex gap-2">
            <a
              href="/login"
              className="w-1/2 py-2 px-4 rounded-xl text-blue-700 font-semibold text-center border border-blue-100"
            >
              Login
            </a>
            <a
              href="/signup"
              className="w-1/2 py-2 px-4 rounded-xl bg-blue-600 text-white font-semibold text-center"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

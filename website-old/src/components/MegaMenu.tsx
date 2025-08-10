import React from "react";
import { MENU_GROUPS } from "./menus";

type Props = {
  groupKey: keyof typeof MENU_GROUPS;
  open: boolean;
  onClose: () => void;
};

export const MegaMenu: React.FC<Props> = ({ groupKey, open, onClose }) => {
  const group = MENU_GROUPS[groupKey];

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed z-40 inset-0 bg-black/40 md:bg-transparent md:absolute md:left-0 md:right-0 md:top-full"
      onClick={onClose}
    >
      <div
        className="w-full mx-auto bg-white shadow-2xl flex flex-col md:flex-row md:rounded-b-2xl md:mt-0 md:max-w-5xl md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Info Sidebar */}
        <div className="hidden md:flex flex-col gap-2 w-1/3 min-w-[250px] px-8 py-6 border-r">
          <span className="font-bold text-2xl mb-2">{group.name}</span>
          <span className="text-gray-600">{group.desc}</span>
        </div>
        {/* Items */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-2 p-6">
          {group.items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all cursor-pointer"
            >
              <item.icon className="w-7 h-7 text-blue-600 flex-shrink-0" />
              <div>
                <div className="font-semibold text-base">{item.label}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

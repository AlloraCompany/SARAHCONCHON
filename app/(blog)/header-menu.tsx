"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function HeaderMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <div className="lg:hidden flex items-center relative">
      <button onClick={handleToggleMenu} className="ml-3">
        <Menu className="stroke-dark-green" size={32} />
      </button>
      {open && (
        <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm bg-black/10 overflow-hidden transition-[width]"></div>
      )}
      <aside
        style={{
          width: open ? "70vw" : 0,
          // minWidth: open ? "220px" : "",
        }}
        ref={menuRef}
        className="fixed shadow-md  overflow-hidden shadow-dark-green/10 top-0 right-0 z-20 h-screen w-[80vw] bg-white transition-[width] duration-300"
      >
        <div className="w-full px-10 h-20 sm:h-24 flex items-center justify-end">
          <button onClick={handleToggleMenu} className=" cont">
            <X className="stroke-dark-green" size={32} />
          </button>
        </div>
        <nav className="flex flex-col gap-[4vw] px-[4vw] h-1/4 justify-between text-[clamp(0.85rem,0.8rem+1.75vw,1.5rem)] [&_a:hover]:underline text-dark-green font-semibold">
          <Link onClick={handleToggleMenu} href="/#sobre">
            Sobre
          </Link>
          <Link onClick={handleToggleMenu} href="/#especialidades">
            Especialidades
          </Link>
          <Link onClick={handleToggleMenu} href="/consultas">
            Consultas
          </Link>
          <Link onClick={handleToggleMenu} href="/blog">
            Blog
          </Link>
        </nav>
      </aside>
    </div>
  );
}

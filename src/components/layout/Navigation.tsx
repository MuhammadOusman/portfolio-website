"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/components/ui/core";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tech", href: "#tech" },
  { name: "Drops", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Dock() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] hidden md:block">
      <div className="flex items-center gap-2 p-2 glass-morphism rounded-full px-6 shadow-2xl">
        {navItems.map((item, i) => (
          <Link
            key={item.name}
            href={item.href}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-cobalt"
          >
            {hovered === i && (
              <motion.div
                layoutId="dock-hover"
                className="absolute inset-0 bg-cobalt/10 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-[110] p-4 glass-morphism rounded-2xl shadow-xl"
      >
        <div className={cn("w-6 h-0.5 bg-jet transition-all duration-300", isOpen ? "rotate-45 translate-y-2" : "mb-1.5")} />
        <div className={cn("w-6 h-0.5 bg-jet transition-opacity duration-300", isOpen ? "opacity-0" : "mb-1.5")} />
        <div className={cn("w-4 h-0.5 bg-jet transition-all duration-300", isOpen ? "-rotate-45 translate-y-0 w-6" : "")} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[105] bg-newsprint/80 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
        >
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-5xl font-bold uppercase tracking-tighter hover:text-cobalt transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          <div className="absolute bottom-12 font-mono text-[10px] uppercase opacity-40">
             © 2024 MUHAMMAD OUSMAN SOHAIL
          </div>
        </motion.div>
      )}
    </div>
  );
}

export function StickyCVCTA() {
  return (
    <div className="fixed top-6 right-6 z-[100]">
      <a
        href="/assets/downloads/Muhammad-Ousman.pdf"
        target="_blank"
        className="block bg-cobalt text-white px-8 py-3 rounded-full font-heading font-bold text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1),0_0_20px_rgba(0,45,255,0.4)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase tracking-widest"
      >
        DOWNLOAD CV
      </a>
    </div>
  );
}

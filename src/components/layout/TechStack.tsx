"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/core";
import { portfolioData } from "@/data/portfolio";
import React from "react";

const techLogos: Record<string, string> = {
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
};

function MagneticIcon({ name, url }: { name: string; url: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center justify-center p-4 gap-2"
    >
      <div className="w-16 h-16 relative">
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img src={url} alt={name} className="w-full h-full object-contain filter drop-shadow-lg" />
      </div>
      <span className="font-mono text-[10px] uppercase font-bold text-jet/60">{name}</span>
    </motion.div>
  );
}

export default function TechStack() {
  const allTech = [...portfolioData.skills.frameworks.slice(0, 4), ...portfolioData.skills.programming.slice(0, 4)];

  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-heading text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-4">
              WEAPONS <br />
              <span className="text-cobalt">OF CHOICE</span>
            </h2>
            <p className="font-mono text-sm uppercase max-w-md">Mastering the digital battlefield with a specialized arsenal of modern frameworks and languages.</p>
          </div>
          <div className="hidden md:block">
             <div className="w-40 h-40 border-2 border-jet rounded-full flex items-center justify-center animate-spin-slow">
                <span className="font-heading font-bold text-xs">TECH STACK // TECH STACK // </span>
             </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
          <GlassCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between group">
             <h3 className="font-heading text-4xl font-bold uppercase">Frontend Mastery</h3>
             <div className="grid grid-cols-3 gap-8">
                {["Flutter", "React.js", "Next.js", "TypeScript"].map(t => (
                  <MagneticIcon key={t} name={t} url={techLogos[t] || `https://placehold.co/60x60?text=${t}`} />
                ))}
             </div>
             <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-cobalt text-white px-2 py-1 text-[10px] font-bold">READY TO DEPLOY</span>
             </div>
          </GlassCard>

          <GlassCard className="md:col-span-2 bg-cobalt text-white border-cobalt flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
             </div>
             <div className="text-center z-10">
                <span className="font-mono text-xs uppercase mb-2 block">Automation & AI</span>
                <p className="font-heading text-3xl font-bold uppercase leading-none">n8n // Copilot // Cursor</p>
             </div>
          </GlassCard>

          <GlassCard className="md:col-span-1 flex flex-col items-center justify-center">
             <span className="font-heading text-5xl font-bold text-cobalt">8+</span>
             <span className="font-mono text-[10px] uppercase font-bold text-jet/60 mt-2">Programming Languages</span>
          </GlassCard>

          <GlassCard className="md:col-span-1 flex flex-col items-center justify-center bg-jet text-white">
             <span className="font-heading text-5xl font-bold text-newsprint">5+</span>
             <span className="font-mono text-[10px] uppercase font-bold text-newsprint/60 mt-2">Hackathon Wins</span>
          </GlassCard>

          <GlassCard className="md:col-span-2 md:row-span-1 flex items-center gap-12 overflow-x-auto scrollbar-hide">
              {["Node.js", "MongoDB", "Firebase", "Python"].map(t => (
                <MagneticIcon key={t} name={t} url={techLogos[t] || `https://placehold.co/60x60?text=${t}`} />
              ))}
          </GlassCard>
        </div>

        {/* Mobile Swipe Carousel hint */}
        <div className="md:hidden mt-8 text-center">
           <span className="font-mono text-[10px] uppercase text-jet/40 animate-pulse">Swipe to explore weapons →</span>
        </div>
      </div>
    </section>
  );
}

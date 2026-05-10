"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/core";
import { useState } from "react";

export function YTMusicWidget() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
      initial={{ x: -100, y: 100, opacity: 0 }}
      animate={{ x: 20, y: -20, opacity: 1 }}
      className="fixed bottom-24 left-8 z-[90] hidden lg:block cursor-move"
    >
      <GlassCard className="w-80 p-0 overflow-hidden shadow-2xl border-white/20">
        <div className="bg-cobalt/20 p-2 flex justify-between items-center px-4 border-b border-white/10">
           <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-jet/60">YT MUSIC PLAYER // Lofi Beats</span>
           <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
           </div>
        </div>
        <div className="aspect-video relative">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=0&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function VisitorCounter() {
  const [count] = useState("001452");

  return (
    <div className="py-12 flex justify-center bg-newsprint border-t-2 border-jet">
      <div className="flex flex-col items-center gap-4">
        <span className="font-mono text-[10px] uppercase font-bold tracking-[0.2em] text-jet/40">Access Log Counter</span>
        <div className="flex gap-1">
          {count.split("").map((digit, i) => (
            <div key={i} className="w-8 h-12 bg-jet text-newsprint flex items-center justify-center font-heading text-2xl font-bold rounded-sm border-b-4 border-cobalt">
              {digit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

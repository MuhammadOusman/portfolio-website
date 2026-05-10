"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/core";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function SocialsAndGitHub() {
  // Mock contribution data
  const weeks = Array.from({ length: 20 }, (_, i) =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 4))
  );

  return (
    <section className="py-24 bg-newsprint overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* GitHub Section */}
          <div className="order-2 lg:order-1">
            <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-none">
              EAT. SLEEP. <br />
              <span className="text-cobalt">COMMIT.</span>
            </h2>

            <GlassCard className="bg-white/60 border-jet/5 p-8 overflow-hidden relative">
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-jet/40">GitHub Activity // 2024</span>
                <a href={portfolioData.personal.socials.github} target="_blank" className="font-mono text-[10px] text-cobalt hover:underline">VIEW PROFILE →</a>
              </div>

              <div className="flex gap-1 overflow-x-auto pb-4 scrollbar-hide">
                {weeks.map((week, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    {week.map((level, j) => (
                      <div
                        key={j}
                        className={`w-3 h-3 rounded-sm ${
                          level === 0 ? 'bg-jet/5' :
                          level === 1 ? 'bg-cobalt/20' :
                          level === 2 ? 'bg-cobalt/50' :
                          'bg-cobalt'
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-end">
                <div className="font-mono text-[10px] text-jet/40">
                   <p>TOTAL CONTRIBUTIONS</p>
                   <p className="text-xl font-bold text-jet">1,452</p>
                </div>
                <div className="flex items-center gap-1">
                   <span className="font-mono text-[8px] text-jet/40 mr-2 uppercase">Less</span>
                   <div className="w-2 h-2 bg-jet/5" />
                   <div className="w-2 h-2 bg-cobalt/20" />
                   <div className="w-2 h-2 bg-cobalt/50" />
                   <div className="w-2 h-2 bg-cobalt" />
                   <span className="font-mono text-[8px] text-jet/40 ml-2 uppercase">More</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Socials / Polaroid Section */}
          <div className="order-1 lg:order-2 relative h-[500px]">
             <motion.div
                initial={{ rotate: -5, x: -20, opacity: 0 }}
                whileInView={{ rotate: -8, x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-64 p-4 bg-white shadow-2xl border-2 border-jet/5"
             >
                <div className="relative aspect-square grayscale mb-4">
                   <Image src="https://picsum.photos/seed/ousman1/400/400" alt="Social" fill className="object-cover" />
                </div>
                <p className="font-mono text-[10px] text-center uppercase font-bold text-jet/40">OUSMAN_01.JPG</p>
             </motion.div>

             <motion.div
                initial={{ rotate: 5, x: 20, opacity: 0 }}
                whileInView={{ rotate: 12, x: 40, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute top-20 right-0 w-64 p-4 bg-white shadow-2xl border-2 border-jet/5 z-10"
             >
                <div className="relative aspect-square mb-4">
                   <Image src="https://picsum.photos/seed/ousman2/400/400" alt="Social" fill className="object-cover" />
                </div>
                <p className="font-mono text-[10px] text-center uppercase font-bold text-jet/40">COFFEE_CODE.JPG</p>
             </motion.div>

             <div className="absolute bottom-10 left-1/4 z-20 flex flex-col gap-4">
                <a href={portfolioData.personal.socials.linkedin} target="_blank">
                  <GlassCard className="flex items-center gap-4 py-3 px-6 hover:bg-cobalt hover:text-white transition-all cursor-pointer group">
                     <span className="font-heading text-xl font-bold uppercase tracking-tighter">LinkedIn</span>
                     <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </GlassCard>
                </a>
                <a href={portfolioData.personal.socials.website} target="_blank">
                  <GlassCard className="flex items-center gap-4 py-3 px-6 hover:bg-jet hover:text-white transition-all cursor-pointer group">
                     <span className="font-heading text-xl font-bold uppercase tracking-tighter">Twitter</span>
                     <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </GlassCard>
                </a>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

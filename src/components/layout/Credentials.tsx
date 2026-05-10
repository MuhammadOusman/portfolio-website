"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 bg-newsprint relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-6xl md:text-8xl font-bold uppercase tracking-tighter text-jet mb-16 text-center">
          TESTED IN THE <br />
          <span className="text-cobalt">TRENCHES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {portfolioData.achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ rotate: i % 2 === 0 ? -2 : 2, y: 20, opacity: 0 }}
              whileInView={{ rotate: i % 2 === 0 ? -1 : 1, y: 0, opacity: 1 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-jet text-newsprint p-8 border-2 border-jet flex flex-col md:flex-row gap-6 relative overflow-hidden">
                <div className="hidden md:flex flex-col justify-around absolute left-0 top-0 bottom-0 w-4 bg-newsprint" style={{ clipPath: "polygon(100% 0%, 0% 10%, 100% 20%, 0% 30%, 100% 40%, 0% 50%, 100% 60%, 0% 70%, 100% 80%, 0% 90%, 100% 100%)" }} />

                <div className="flex-1 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-cobalt text-white px-2 py-1 font-mono text-[10px] font-bold">1ST PLACE</span>
                    <span className="font-mono text-[10px] opacity-40">#{1024 + i}</span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tighter leading-none">
                    {ach.title}
                  </h3>
                  <p className="font-body text-xs opacity-60">
                    {ach.organization} {"//"} KARACHI, PK
                  </p>
                  <p className="font-body text-sm leading-tight text-newsprint/80 pt-4 border-t border-newsprint/10">
                    {ach.description}
                  </p>
                </div>

                <div className="md:w-24 flex flex-col justify-between items-center md:border-l border-dashed border-newsprint/20 md:pl-6 pt-6 md:pt-0">
                   <div className="w-16 h-16 bg-white flex items-center justify-center p-1 rounded-sm">
                      <svg width="40" height="40" viewBox="0 0 40 40" className="text-jet">
                        <rect x="2" y="5" width="2" height="30" fill="currentColor" />
                        <rect x="6" y="5" width="4" height="30" fill="currentColor" />
                        <rect x="12" y="5" width="1" height="30" fill="currentColor" />
                        <rect x="15" y="5" width="3" height="30" fill="currentColor" />
                        <rect x="20" y="5" width="2" height="30" fill="currentColor" />
                        <rect x="24" y="5" width="5" height="30" fill="currentColor" />
                        <rect x="31" y="5" width="2" height="30" fill="currentColor" />
                        <rect x="35" y="5" width="3" height="30" fill="currentColor" />
                      </svg>
                   </div>
                   <span className="font-mono text-[8px] mt-4 rotate-0 md:rotate-90 origin-center whitespace-nowrap opacity-40 uppercase tracking-widest">
                      ADMIT ONE {"//"} HACKER
                   </span>
                </div>
              </div>

              <div className="absolute inset-0 bg-cobalt/20 -z-10 translate-x-4 translate-y-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-heading text-5xl md:text-8xl font-bold uppercase tracking-tighter text-jet text-center">
            PAPERWORK <br />
            <span className="text-cobalt">SORTED</span>
          </h2>
          <div className="w-24 h-2 bg-cobalt mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="bg-newsprint p-8 border-2 border-jet shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group h-full flex flex-col">
                <div className="font-mono text-[10px] text-center border-b-2 border-dashed border-jet pb-4 mb-6">
                  <p className="font-bold">OUSMAN CERTIFICATION BUREAU</p>
                  <p>TERMINAL: 04 {"//"} REF: {12345 + i}</p>
                  <p>{new Date().toLocaleDateString()}</p>
                </div>

                <div className="relative aspect-video mb-6 border border-jet grayscale group-hover:grayscale-0 transition-all overflow-hidden">
                   <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                   />
                   <div className="absolute inset-0 bg-cobalt/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                </div>

                <div className="flex-1">
                  <h3 className="font-mono text-sm font-bold uppercase leading-tight mb-2">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-[10px] opacity-60 uppercase mb-4">
                    Issued by: {cert.org}
                  </p>
                  {cert.description && (
                    <p className="font-mono text-[10px] leading-relaxed border-t border-dashed border-jet pt-4 italic">
                      {cert.description}
                    </p>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t-2 border-dashed border-jet text-center">
                   <span className="inline-block border-2 border-cobalt text-cobalt px-4 py-1 rounded-full font-heading font-bold text-xs rotate-[-5deg]">
                      VERIFIED ✓
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

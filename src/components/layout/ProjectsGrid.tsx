"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/core";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ProjectsGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-jet text-newsprint relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="font-heading text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none mb-4">
              THE <br />
              <span className="text-cobalt">DROPS</span>
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-newsprint/40">
              Limited Edition // High Performance // Digital Artifacts
            </p>
          </div>
          <div className="hidden md:block font-mono text-[10px] text-newsprint/20 text-right">
             <p>SCANNING REPOSITORY...</p>
             <p>FOUND {portfolioData.projects.length} ARTIFACTS</p>
             <p>READY TO DEPLOY</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {portfolioData.projects.map((project, index) => {
            // Create an asymmetrical layout pattern
            const isLarge = index % 5 === 0 || index % 5 === 3;
            const colSpan = isLarge ? "md:col-span-7" : "md:col-span-5";

            return (
              <motion.div
                key={project.id}
                className={colSpan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link href={`/projects/${project.id}`}>
                  <GlassCard className="h-full group relative p-0 border-white/10 hover:border-cobalt/50 transition-colors duration-500">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* Background Image/Video Placeholder */}
                      <div className={hoveredId === project.id ? "opacity-0 transition-opacity duration-700" : "opacity-100 transition-opacity duration-700"}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        />
                      </div>

                      {/* Video Hover Placeholder */}
                      {hoveredId === project.id && (
                        <div className="absolute inset-0 bg-cobalt/20">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          >
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                          </video>
                          <div className="absolute inset-0 bg-cobalt/40 mix-blend-multiply" />
                        </div>
                      )}

                      {/* Glass Overlay that "clears" on hover */}
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500" />

                      {/* Label */}
                      <div className="absolute top-4 left-4 bg-newsprint text-jet px-3 py-1 font-mono text-[10px] font-bold uppercase">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-heading text-3xl font-bold uppercase tracking-tighter group-hover:text-cobalt transition-colors">
                          {project.title}
                        </h3>
                        <span className="font-mono text-xs text-newsprint/40">[{index + 1}]</span>
                      </div>

                      <p className="font-body text-sm text-newsprint/60 line-clamp-2 mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className="px-2 py-1 border border-newsprint/10 text-[10px] font-mono uppercase text-newsprint/40">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Industrial details */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Grunge elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cobalt/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 blur-[150px] -z-10" />
    </section>
  );
}

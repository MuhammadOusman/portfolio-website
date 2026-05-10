"use client";

import Marquee from "react-fast-marquee";
import { portfolioData } from "@/data/portfolio";

export default function Manifesto() {
  return (
    <section id="about" className="relative py-24 bg-newsprint overflow-hidden">
      <div className="border-y-2 border-jet py-6 mb-20 rotate-[-1deg] bg-white w-[120%] -left-[10%] relative">
        <Marquee speed={100} gradient={false} className="overflow-hidden">
          {["FULL STACK", "FLUTTER", "NEXT.JS", "MERN", "AUTOMATION", "AI"].map((tech) => (
            <span key={tech} className="font-heading text-6xl font-bold uppercase mx-12 flex items-center">
              {tech} <span className="ml-12 text-cobalt">{"//"}</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="relative">
          <h2 className="font-heading text-6xl md:text-8xl font-bold uppercase leading-[0.85] tracking-tighter text-cobalt mb-8">
            NAHI G, HUM SIRF <br />
            <span className="text-jet">CODE LIKHTAY HAIN.</span>
          </h2>
          <div className="absolute -top-10 -left-10 w-32 h-32 opacity-10 pointer-events-none">
             <svg viewBox="0 0 100 100" className="animate-spin-slow">
                <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
             </svg>
          </div>
        </div>

        <div className="relative group">
          <div className="bg-white p-8 border-2 border-jet shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transform group-hover:-rotate-1 transition-transform duration-500">
            <div className="font-mono text-[10px] mb-4 border-b border-dashed border-jet pb-2">
              <p>ORDER #001 - MANIFESTO.TSX</p>
              <p>DATE: {new Date().toLocaleDateString()}</p>
            </div>

            <p className="font-body text-lg leading-relaxed mb-6">
              {portfolioData.personal.bio}
            </p>

            <div className="font-mono text-xs space-y-2 border-t border-dashed border-jet pt-4">
              <div className="flex justify-between">
                <span>PASSION.EXE</span>
                <span>100%</span>
              </div>
              <div className="flex justify-between">
                <span>ESPRESSO.C</span>
                <span>CRITICAL</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-jet">
                <span>TOTAL VALUE</span>
                <span className="text-cobalt">PRICELESS</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-2 bg-newsprint" style={{ clipPath: "polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)" }} />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4">
             <div className="p-4 border-2 border-jet bg-cobalt text-white font-bold text-center uppercase tracking-tighter">
                {portfolioData.personal.location}
             </div>
             <div className="p-4 border-2 border-jet bg-white text-jet font-bold text-center uppercase tracking-tighter">
                {portfolioData.personal.email.split('@')[0]}
             </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none bg-[length:40px_40px] border-black"
           style={{ backgroundImage: "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)" }}
      />
    </section>
  );
}

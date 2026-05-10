"use client";

import { motion } from "framer-motion";
import { BrutalistButton } from "@/components/ui/core";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-cobalt/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-cobalt/20 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80 mb-12"
        >
          {/* Halftone Image Placeholder */}
          <div className="relative w-full h-full halftone grayscale hover:grayscale-0 transition-all duration-500 transform hover:rotate-3 shadow-2xl">
            <Image
              src="/assets/profile/my-picture.jpg"
              alt="Muhammad Ousman Sohail"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>

          {/* Floating Stamps */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-cobalt rounded-full flex items-center justify-center text-white font-heading font-bold text-xs md:text-sm p-4 text-center border-2 border-jet shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20"
          >
            FLUTTER EXPERT
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-6 -left-6 w-20 h-20 md:w-28 md:h-28 bg-newsprint rounded-lg flex items-center justify-center text-jet font-heading font-bold text-[10px] md:text-xs p-2 text-center border-2 border-jet shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20"
          >
            MERN STACK
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading text-xl md:text-2xl font-bold tracking-[0.2em] text-cobalt mb-4 uppercase"
        >
          PILOT EPISODE
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading text-6xl md:text-9xl font-bold uppercase leading-[0.85] tracking-tighter mb-8 max-w-5xl"
        >
          NOT YOUR <br />
          AVERAGE <span className="text-cobalt">CODE MONKEY.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <BrutalistButton variant="primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            VIEW THE DROPS
          </BrutalistButton>
          <a href="/assets/downloads/Muhammad-Ousman.pdf" target="_blank">
            <BrutalistButton variant="outline">
              GRAB MY RESUME
            </BrutalistButton>
          </a>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 z-[-1] opacity-[0.05] pointer-events-none"
           style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />
    </section>
  );
}

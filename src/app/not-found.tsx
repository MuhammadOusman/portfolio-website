"use client";

import { motion } from "framer-motion";
import { BrutalistButton } from "@/components/ui/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cobalt text-white flex flex-col items-center justify-center p-6 font-mono overflow-hidden">
      <div className="max-w-3xl w-full">
        <div className="bg-white text-cobalt px-4 py-1 mb-8 inline-block font-bold">
          ERROR_CODE: 404_PAGE_NOT_FOUND
        </div>

        <h1 className="font-heading text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none mb-8">
          BRUH. <br />
          <span className="text-newsprint opacity-50 text-4xl md:text-7xl">THIS PAGE DOESN&apos;T EXIST.</span>
        </h1>

        <div className="space-y-4 mb-12 opacity-80">
          <p>A problem has been detected and the navigation has been terminated to prevent damage to your experience.</p>
          <p>If this is the first time you&apos;ve seen this Stop error screen, restart your brain. If this screen appears again, follow these steps:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Check to make sure you didn&apos;t typo the URL like a code monkey.</li>
            <li>If this is a new page, make sure it is actually deployed.</li>
            <li>If problems continue, disable or remove any newly installed curiosity.</li>
          </ul>
        </div>

        <div className="border-2 border-white/20 p-6 mb-12">
          <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Technical Information:</p>
          <p className="text-xs">*** STOP: 0x000000404 (0x00000000, 0x00000000, 0x00000000, 0x00000000)</p>
          <p className="text-xs mt-2">CPUTIN: OUSMAN_CORE_v14.1.0</p>
        </div>

        <Link href="/">
          <BrutalistButton className="bg-white text-cobalt border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)]">
            BACK TO SAFE MODE
          </BrutalistButton>
        </Link>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.05] noise" />
      <motion.div
        animate={{ y: [0, 1000] }}
        transition={{ duration: 0.1, repeat: Infinity }}
        className="fixed inset-0 pointer-events-none z-[101] bg-white/5 h-1 w-full"
      />
    </div>
  );
}

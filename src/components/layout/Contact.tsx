"use client";

import { motion } from "framer-motion";
import { GlassCard, BrutalistButton } from "@/components/ui/core";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setTerminalOutput(["INITIATING SECURE HANDSHAKE...", "ENCRYPTING PAYLOAD...", "DISPATCHING TO CLOUD..."]);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(portfolioData.contact.endpoint, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setTerminalOutput(prev => [...prev, "✓ DISPATCH SUCCESSFUL.", "CONNECTION TERMINATED."]);
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
      setTerminalOutput(prev => [...prev, "❌ DISPATCH FAILED.", "RETRYING MANUALLY ADVISED."]);
    }
  };

  return (
    <section id="contact" className="py-24 bg-newsprint relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
         <h2 className="font-heading text-[20vw] font-bold uppercase leading-none text-jet">
            HOTLINE
         </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-8">
              ENOUGH SCROLLING. <br />
              <span className="text-cobalt">LET&apos;S BUILD.</span>
            </h2>
            <p className="font-mono text-sm uppercase opacity-40 max-w-md">
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>
          </div>

          <GlassCard className="bg-white/40 border-jet/5 p-8 shadow-2xl relative">
            {status === "idle" || status === "loading" ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase font-bold text-jet/40">Your Name</label>
                    <input name="name" required className="w-full bg-white/50 border-2 border-jet/10 p-3 font-body focus:border-cobalt outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase font-bold text-jet/40">Email Address</label>
                    <input type="email" name="email" required className="w-full bg-white/50 border-2 border-jet/10 p-3 font-body focus:border-cobalt outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase font-bold text-jet/40">Message</label>
                  <textarea name="message" required rows={4} className="w-full bg-white/50 border-2 border-jet/10 p-3 font-body focus:border-cobalt outline-none transition-colors" />
                </div>

                <BrutalistButton
                  type="submit"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "TRANSMITTING..." : "OPEN THE CONNECTION"}
                </BrutalistButton>
              </form>
            ) : (
              <div className="py-12 flex flex-col items-center text-center">
                 <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${status === "success" ? 'bg-green-500' : 'bg-red-500'} text-white text-4xl`}>
                    {status === "success" ? "✓" : "!"}
                 </div>
                 <h3 className="font-heading text-3xl font-bold uppercase mb-2">
                    {status === "success" ? "Message Received" : "System Error"}
                 </h3>
                 <p className="font-body opacity-60 mb-8">
                    {status === "success"
                      ? "I'll get back to you faster than a git push."
                      : "Something went wrong. Please try again or email me directly."}
                 </p>
                 <BrutalistButton variant="outline" onClick={() => setStatus("idle")}>
                    SEND ANOTHER
                 </BrutalistButton>
              </div>
            )}

            {status === "loading" && (
              <div className="absolute inset-0 bg-jet p-8 flex flex-col font-mono text-[10px] text-green-500 z-20">
                 <div className="flex justify-between border-b border-green-500/20 pb-2 mb-4">
                    <span>TERMINAL_V1.0.4</span>
                    <span className="animate-pulse">● LIVE</span>
                 </div>
                 <div className="flex-1 space-y-1">
                    {terminalOutput.map((line, i) => (
                      <p key={i} className="flex gap-2">
                        <span className="opacity-40">[{i}]</span>
                        <span>{line}</span>
                      </p>
                    ))}
                    <div className="w-2 h-4 bg-green-500 animate-pulse inline-block" />
                 </div>
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

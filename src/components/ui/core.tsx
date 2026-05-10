import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export function BrutalistButton({
  variant = "primary",
  children,
  className,
  ...props
}: BrutalistButtonProps) {
  return (
    <button
      className={cn(
        "px-8 py-4 font-heading font-bold uppercase tracking-tighter transition-all duration-300 transform active:scale-95",
        variant === "primary"
          ? "bg-cobalt text-white hover:bg-white hover:text-cobalt border-2 border-cobalt shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          : "bg-transparent text-jet border-2 border-jet hover:bg-jet hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

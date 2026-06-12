"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function BackgroundGlow() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="cyber-grid absolute inset-0 opacity-60" />
      <div
        className={`glow-orb absolute -left-[15%] -top-[15%] h-[650px] w-[650px] rounded-full bg-cyan-600 ${reducedMotion ? "opacity-15" : "animate-pulse-glow"}`}
      />
      <div
        className={`glow-orb absolute -bottom-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-violet-700 ${reducedMotion ? "opacity-15" : "animate-pulse-glow"}`}
      />
      {!reducedMotion && (
        <div className="glow-orb absolute left-[40%] top-[30%] h-[450px] w-[450px] rounded-full bg-fuchsia-600 opacity-15 max-md:hidden" />
      )}
    </div>
  );
}

"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: `${(i * 17 + 5) % 98}%`,
  y: `${(i * 23 + 3) % 95}%`,
  size: 2 + (i % 2),
  delay: `${i * 0.4}s`,
  duration: `${5 + (i % 3)}s`,
  color: i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#a78bfa" : "#e879f9",
}));

export function FloatingParticles() {
  const reducedMotion = usePrefersReducedMotion();
  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden max-sm:hidden" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle-dot absolute rounded-full opacity-30"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

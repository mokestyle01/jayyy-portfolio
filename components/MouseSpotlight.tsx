"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function MouseSpotlight() {
  const reducedMotion = usePrefersReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.4 });

  useEffect(() => {
    if (reducedMotion) return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY, reducedMotion]);

  if (reducedMotion) return null;

  const primary = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(34, 211, 238, 0.14), transparent 70%)`;
  const secondary = useMotionTemplate`radial-gradient(350px circle at ${springX}px ${springY}px, rgba(167, 139, 250, 0.1), transparent 65%)`;
  const cursor = useMotionTemplate`radial-gradient(120px circle at ${springX}px ${springY}px, rgba(34, 211, 238, 0.25), transparent 70%)`;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden max-md:hidden" aria-hidden>
      <motion.div className="absolute inset-0" style={{ background: primary }} />
      <motion.div className="absolute inset-0" style={{ background: secondary }} />
      <motion.div className="absolute inset-0 mix-blend-screen" style={{ background: cursor }} />
    </div>
  );
}

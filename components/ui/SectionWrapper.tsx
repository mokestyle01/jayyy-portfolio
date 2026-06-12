"use client";

import { motion } from "framer-motion";
import { revealBlur, staggerContainer } from "@/lib/motion";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className={`section-pad section-lazy scroll-mt-nav relative z-10 border-t border-cyan-400/5 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.section>
  );
}

export function SectionChild({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={revealBlur}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

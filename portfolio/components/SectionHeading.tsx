"use client";

import { motion } from "framer-motion";
import { revealBlur } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <motion.div
      variants={revealBlur}
      transition={{ duration: 0.7 }}
      className={`max-w-2xl ${alignClass}`}
    >
      <motion.p
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400/70"
      >
        {eyebrow}
      </motion.p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        <span className="gradient-text-animated">{title}</span>
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`mt-4 h-px w-24 origin-left bg-gradient-to-r from-cyan-400 via-violet-400 to-transparent ${align === "center" ? "mx-auto origin-center" : ""}`}
      />
      {description && (
        <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

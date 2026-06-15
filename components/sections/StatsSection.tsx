"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionChild, SectionWrapper } from "@/components/ui/SectionWrapper";
import { stats } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function StatsSection() {
  return (
    <SectionWrapper className="!py-16 md:!py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group relative"
          >
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,211,238,0.25), transparent, rgba(167,139,250,0.2))",
              }}
              aria-hidden
            />
            <div className="glass cyber-border-glow gradient-border relative overflow-hidden rounded-2xl p-6 text-center transition duration-500 group-hover:shadow-[0_0_48px_rgba(34,211,238,0.1)]">
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20"
                aria-hidden
              />
              <span className="text-2xl" aria-hidden>
                {stat.icon}
              </span>
              <p className="mt-3 text-4xl font-black gradient-text md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-400">{stat.label}</p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="mx-auto mt-4 h-px w-12 origin-center bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

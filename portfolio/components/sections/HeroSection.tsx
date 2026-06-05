"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { images, site } from "@/lib/data";
import { ease } from "@/lib/motion";

const headlineWords = ["Transform", "your", "business", "with", "technology."];

export function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-nav relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <FloatingParticles />

      <div className="section-pad relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400/70"
          >
            Digital Solutions Builder
          </motion.p>

          <h1 className="mt-5 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.12 + i * 0.09, duration: 0.65, ease }}
                className={`mr-[0.25em] inline-block ${
                  i === 0 || i === 4 ? "gradient-text-animated" : "text-white"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6, ease }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400"
          >
            {site.tagline} I help organizations grow through modern websites, intelligent
            automation, Excel business systems, and data-driven dashboards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6, ease }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <MagneticButton href="#services" variant="primary">
              Explore solutions
            </MagneticButton>
            <MagneticButton href="#contact" variant="cyber">
              Book a consultation
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["Automation", "Growth", "Efficiency", "Data Insights"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + i * 0.08 }}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300/80"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88, rotateY: -12 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          style={{ perspective: 1000 }}
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass cyber-border-glow gradient-border relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_0_80px_rgba(34,211,238,0.12)]"
          >
            <Image
              src={images.hero}
              alt={`${site.name} — Digital Solutions Builder`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020208] via-transparent to-cyan-400/5" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_50%,rgba(167,139,250,0.08))]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="glass cyber-border-glow absolute -bottom-4 -left-4 rounded-2xl px-5 py-4 md:-left-8"
          >
            <p className="text-2xl font-bold gradient-text">40+</p>
            <p className="text-xs text-zinc-400">Solutions delivered</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="glass cyber-border-glow absolute -right-2 top-8 rounded-2xl px-4 py-3 md:-right-6"
          >
            <p className="text-sm font-medium text-white">Strategy-led delivery</p>
            <p className="text-xs text-cyan-400">● Accepting new clients</p>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

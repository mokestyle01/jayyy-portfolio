"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { images, site } from "@/lib/data";
import { ease } from "@/lib/motion";

const headlineWords = ["Building", "AI-Powered", "Digital", "Experiences"];

export function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-nav relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -right-32 top-1/3 h-[600px] w-[600px] rounded-full bg-violet-600/12 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[100px]"
        />
      </div>

      <FloatingParticles />

      {/* Hero content glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-cyan-400/8 via-transparent to-transparent blur-3xl"
        aria-hidden
      />

      <div className="section-pad relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400/80"
          >
            {site.name} · Creative Developer
          </motion.p>

          <h1 className="mt-5 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.12 + i * 0.09, duration: 0.65, ease }}
                className={`mr-[0.25em] inline-block ${
                  i === 0 || i === 2 ? "gradient-text-animated" : "text-white"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6, ease }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400 md:text-xl"
          >
            {site.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6, ease }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <MagneticButton href="#projects" variant="primary">
              View my work
            </MagneticButton>
            <MagneticButton href="#contact" variant="cyber">
              Get In Touch
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["AI Websites", "Dashboards", "Automation", "Premium UX"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.08 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(34,211,238,0.4)" }}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300/90 backdrop-blur-sm"
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
          <div
            className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-fuchsia-500/20 blur-2xl"
            aria-hidden
          />

          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass cyber-border-glow gradient-border relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_0_80px_rgba(34,211,238,0.15)]"
          >
            <Image
              src={images.hero}
              alt={`${site.name} — Creative Developer Portfolio`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020208] via-transparent to-cyan-400/5" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.1),transparent_50%,rgba(167,139,250,0.1))]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="glass cyber-border-glow absolute -bottom-4 -left-4 rounded-2xl px-5 py-4 md:-left-8"
          >
            <p className="text-2xl font-bold gradient-text">20+</p>
            <p className="text-xs text-zinc-400">Projects delivered</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="glass cyber-border-glow absolute -right-2 top-8 rounded-2xl px-4 py-3 md:-right-6"
          >
            <p className="text-sm font-medium text-white">Available for hire</p>
            <p className="text-xs text-cyan-400">● Open to projects</p>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

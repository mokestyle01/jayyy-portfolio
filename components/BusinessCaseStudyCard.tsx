"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { BusinessCaseStudy } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

type BusinessCaseStudyCardProps = {
  study: BusinessCaseStudy;
  index?: number;
};

export function BusinessCaseStudyCard({
  study,
  index = 0,
}: BusinessCaseStudyCardProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.12, duration: 0.65 }}
      whileHover={reducedMotion ? undefined : { y: -8 }}
      className="group relative"
    >
      <div
        className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${study.accent}44, transparent 50%, ${study.accent}22)`,
        }}
        aria-hidden
      />

      <div className="glass cyber-border-glow gradient-border relative overflow-hidden rounded-2xl">
        <div className="relative aspect-[21/9] overflow-hidden sm:aspect-[2/1]">
          <Image
            src={study.image}
            alt={`${study.title} dashboard preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-105"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020208] via-[#020208]/50 to-transparent" />
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `linear-gradient(135deg, ${study.accent}15, transparent 60%)`,
            }}
          />

          <div className="absolute left-4 top-4 flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl text-lg text-white shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${study.accent}, ${study.accent}99)`,
                boxShadow: `0 0 20px ${study.accent}44`,
              }}
              aria-hidden
            >
              {study.icon}
            </span>
            <span
              className="rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md"
              style={{
                borderColor: `${study.accent}55`,
                background: `${study.accent}22`,
                color: study.accent,
              }}
            >
              {study.outcome}
            </span>
          </div>

          <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 font-mono text-xs text-zinc-400 backdrop-blur-md">
            {study.year}
          </span>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            {study.categoryTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-200/80"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mt-4 text-2xl font-bold text-white transition group-hover:text-cyan-100">
            {study.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
            {study.description}
          </p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              What this delivers
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {study.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 text-sm text-zinc-300"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{
                      background: study.accent,
                      boxShadow: `0 0 6px ${study.accent}88`,
                    }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <ul
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Solution focus areas"
          >
            {study.techBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400 transition group-hover:border-white/20 group-hover:text-zinc-200"
              >
                {badge}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <MagneticButton href="#contact" variant="cyber" className="!px-6 !py-3 !text-xs">
              Explore this approach
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

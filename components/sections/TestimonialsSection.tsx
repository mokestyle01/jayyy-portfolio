"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionChild, SectionWrapper } from "@/components/ui/SectionWrapper";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { testimonialStats, testimonials } from "@/lib/data";
import { ease } from "@/lib/motion";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`text-sm ${i < rating ? "text-amber-400" : "text-zinc-600"}`}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

const AUTOPLAY_MS = 6000;

export function TestimonialsSection() {
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = testimonials.length;
  const current = testimonials[active];

  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActive((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (reducedMotion || paused) return;
    const timer = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [next, paused, reducedMotion]);

  return (
    <SectionWrapper id="testimonials">
      <SectionChild>
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by clients worldwide"
          description="Real feedback from business owners, founders, and platform clients who chose premium digital solutions."
          align="center"
        />
      </SectionChild>

      <SectionChild className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass cyber-border-glow gradient-border mx-auto grid max-w-3xl grid-cols-2 gap-4 rounded-2xl p-5 md:grid-cols-4 md:gap-6 md:p-6"
        >
          {[
            { label: "Average rating", value: `${testimonialStats.averageRating} / 5`, accent: "text-amber-400" },
            { label: "Reviews", value: `${testimonialStats.totalReviews}+`, accent: "text-cyan-300" },
            { label: "Verified", value: String(testimonialStats.verifiedPlatformReviews), accent: "text-emerald-300" },
            { label: "Repeat clients", value: testimonialStats.repeatClients, accent: "text-violet-300" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className={`text-xl font-bold md:text-2xl ${s.accent}`}>{s.value}</p>
              <p className="mt-1 text-[11px] text-zinc-500 md:text-xs">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </SectionChild>

      <div
        className="relative mx-auto mt-14 max-w-3xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current.id}
            initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -40, filter: "blur(4px)" }}
            transition={{ duration: 0.5, ease }}
            className="glass cyber-border-glow gradient-border relative overflow-hidden rounded-3xl p-8 md:p-10"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl"
              aria-hidden
            />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                {current.rating !== undefined && <StarRating rating={current.rating} />}
                {current.verified && current.source === "Fiverr" && (
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                    Verified on Fiverr
                  </span>
                )}
              </div>

              <span className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-zinc-400">
                {current.service}
              </span>

              <p className="mt-6 text-lg leading-relaxed text-zinc-200 md:text-xl">
                &ldquo;{current.quote}&rdquo;
              </p>

              <footer className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-cyan-400/40">
                  <Image src={current.image} alt={current.author} fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <cite className="not-italic text-base font-semibold text-white">{current.author}</cite>
                  <p className="text-sm text-zinc-500">{current.role}</p>
                  {current.date && <p className="mt-0.5 text-xs text-zinc-600">{current.date}</p>}
                </div>
              </footer>
            </div>
          </motion.blockquote>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <motion.button
            type="button"
            onClick={prev}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full glass border border-white/10 text-zinc-300 transition hover:border-cyan-400/30 hover:text-white"
          >
            ←
          </motion.button>

          <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonial ${i + 1} from ${t.author}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-gradient-to-r from-cyan-400 to-violet-400"
                    : "w-2 bg-zinc-600 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>

          <motion.button
            type="button"
            onClick={next}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full glass border border-white/10 text-zinc-300 transition hover:border-cyan-400/30 hover:text-white"
          >
            →
          </motion.button>
        </div>
      </div>
    </SectionWrapper>
  );
}

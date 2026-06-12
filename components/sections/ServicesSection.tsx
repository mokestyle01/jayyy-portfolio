"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionChild, SectionWrapper } from "@/components/ui/SectionWrapper";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { services } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ServicesSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <SectionWrapper id="services">
      <SectionChild>
        <SectionHeading
          eyebrow="Services"
          title="Solutions tailored to your business"
          description="From digital presence and AI automation to Excel systems and executive reporting — every service is designed to help you work smarter, grow faster, and stay in control."
          align="center"
        />
      </SectionChild>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-6 md:grid-cols-2"
      >
        {services.map((service) => (
          <motion.article
            key={service.id}
            variants={fadeUp}
            whileHover={reducedMotion ? undefined : { y: -10 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="group relative"
          >
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, ${service.accent}44, transparent, ${service.accent}22)`,
              }}
              aria-hidden
            />

            <div className="glass cyber-border-glow gradient-border relative h-full overflow-hidden rounded-2xl p-6 md:p-8 transition duration-500 group-hover:shadow-[0_0_48px_rgba(34,211,238,0.1)]">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: service.accent }}
                aria-hidden
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={reducedMotion ? undefined : { scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-2xl text-white shadow-lg`}
                  style={{ boxShadow: `0 0 28px ${service.accent}33` }}
                  aria-hidden
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-100 md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {service.tagline}
                </p>

                <ul className="mt-5 space-y-2.5" aria-label={`${service.title} offerings`}>
                  {service.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      whileHover={reducedMotion ? undefined : { x: 5 }}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{
                          background: service.accent,
                          boxShadow: `0 0 8px ${service.accent}88`,
                        }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <SectionChild className="mt-14 text-center">
        <p className="text-zinc-400">
          Not sure which solution fits? Let&apos;s map your challenges to the right approach — with clarity on outcomes, timeline, and ROI.
        </p>
        <div className="mt-6 flex justify-center">
          <MagneticButton href="#contact" variant="cyber">
            Schedule a consultation
          </MagneticButton>
        </div>
      </SectionChild>
    </SectionWrapper>
  );
}

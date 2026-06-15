"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionChild, SectionWrapper } from "@/components/ui/SectionWrapper";
import { contactContent, site } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

const socialLabels: Record<keyof typeof site.social, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  dribbble: "Dribbble",
  twitter: "X / Twitter",
};

const infoCards = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: "✉",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    label: "Availability",
    value: site.location,
    icon: "◎",
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    label: "Response",
    value: contactContent.responseTime,
    icon: "◷",
    accent: "from-emerald-400 to-teal-500",
  },
] as const;

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="border-b border-white/5">
      <SectionChild>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="glass cyber-border-glow gradient-border relative overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400/70">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              <span className="gradient-text">{contactContent.headline}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
              {contactContent.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href={`mailto:${site.email}`} variant="primary">
                {contactContent.ctaLabel}
              </MagneticButton>
              <CopyEmailButton />
              <MagneticButton href="#contact-form" variant="cyber">
                Send a message
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </SectionChild>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          {infoCards.map((card) => (
            <motion.div
              key={card.label}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="group relative"
            >
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, rgba(34,211,238,0.2), transparent, rgba(167,139,250,0.15))`,
                }}
                aria-hidden
              />
              <div className="glass cyber-border-glow gradient-border relative overflow-hidden rounded-2xl p-6 transition duration-500 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent} text-lg text-white shadow-lg`}
                  aria-hidden
                >
                  {card.icon}
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  {card.label}
                </p>
                {"href" in card && card.href ? (
                  <a
                    href={card.href}
                    className="mt-2 block text-lg font-medium text-white transition hover:text-cyan-300"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-2 text-base leading-relaxed text-zinc-300">{card.value}</p>
                )}
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="glass cyber-border-glow gradient-border rounded-2xl p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Social</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {(Object.entries(site.social) as [keyof typeof site.social, string][]).map(
                ([key, href]) => (
                  <motion.a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400/30 hover:text-white"
                  >
                    {socialLabels[key]}
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="glass gradient-border rounded-2xl border border-cyan-400/10 p-6"
          >
            <p className="text-sm text-zinc-400">
              Prefer email? Reach out directly at{" "}
              <Link
                href={`mailto:${site.email}`}
                className="font-medium text-cyan-300 transition hover:text-white"
              >
                {site.email}
              </Link>
            </p>
          </motion.div>
        </motion.div>

        <div id="contact-form" className="scroll-mt-nav">
          <SectionChild>
            <ContactForm />
          </SectionChild>
        </div>
      </div>
    </SectionWrapper>
  );
}

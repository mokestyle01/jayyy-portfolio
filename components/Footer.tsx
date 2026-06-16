"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { contactContent, navLinks, site } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";

const socialIcons: Record<keyof typeof site.social, string> = {
  github: "GH",
  linkedin: "in",
  dribbble: "Dr",
  twitter: "X",
};

export function Footer() {
  const year = new Date().getFullYear();

  function scrollTo(id: string) {
    scrollToSection(id);
  }

  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/90">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-400/5 via-transparent to-transparent" aria-hidden />

      <div className="section-pad relative mx-auto max-w-6xl pb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-4"
        >
          <motion.div variants={fadeUp} className="md:col-span-2">
            <p className="text-3xl font-black gradient-text">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
              {site.subheadline}
            </p>
            <div className="mt-6 flex gap-3">
              {(Object.entries(site.social) as [keyof typeof site.social, string][]).map(
                ([key, href]) => (
                  <motion.a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={key}
                    className="flex h-11 w-11 items-center justify-center rounded-full glass border border-white/10 text-xs font-bold text-zinc-300 transition hover:border-cyan-400/30 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                  >
                    {socialIcons[key]}
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-zinc-400 transition hover:text-cyan-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Get in touch
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block text-sm font-medium text-zinc-300 transition hover:text-cyan-300"
            >
              {site.email}
            </a>
            <p className="mt-2 text-sm text-zinc-500">{site.location}</p>
            <div className="mt-5">
              <MagneticButton href={`mailto:${site.email}`} variant="primary" className="!text-xs !px-5 !py-2.5">
                {contactContent.ctaLabel}
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/5 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="text-xs uppercase tracking-[0.25em]">
            AI · Web · Dashboards · Digital Experiences
          </p>
        </div>
      </div>
    </footer>
  );
}

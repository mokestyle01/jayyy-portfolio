"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, site } from "@/lib/data";

const socialIcons: Record<keyof typeof site.social, string> = {
  github: "GH",
  linkedin: "in",
  dribbble: "Dr",
  twitter: "X",
};

export function Footer() {
  const year = new Date().getFullYear();

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `/#${id}`);
  }

  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/80">
      <div className="section-pad mx-auto max-w-6xl pb-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-2xl font-bold gradient-text">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
              {site.description}
            </p>
            <div className="mt-5 flex gap-3">
              {(Object.entries(site.social) as [keyof typeof site.social, string][]).map(
                ([key, href]) => (
                  <motion.a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    aria-label={key}
                    className="flex h-10 w-10 items-center justify-center rounded-full glass text-xs font-bold text-zinc-300 transition hover:text-white"
                  >
                    {socialIcons[key]}
                  </motion.a>
                ),
              )}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-zinc-300 transition hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Get in touch
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block text-sm text-zinc-300 transition hover:text-white"
            >
              {site.email}
            </a>
            <p className="mt-2 text-sm text-zinc-500">{site.location}</p>
            <Link
              href="/#contact"
              className="mt-4 inline-block rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/5"
            >
              Book a consultation
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/5 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. Built for business impact.</p>
          <p className="text-xs uppercase tracking-widest">Grow · Automate · Optimize</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { navLinks, site } from "@/lib/data";
import { ease } from "@/lib/motion";

const navItemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.05, duration: 0.45, ease },
  }),
};

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
    if (latest < 80) {
      setHidden(false);
      return;
    }
    setHidden(latest > prev && latest > 120);
  });

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: 0 },
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/" || !window.location.hash) return;
    const id = window.location.hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    setOpen(false);
    if (pathname !== "/") return;
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `/#${id}`);
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 30, delay: 0.1 }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-6 md:pt-5"
      >
        <nav
          aria-label="Main navigation"
          className={`nav-glass nav-float pointer-events-auto w-full max-w-5xl overflow-hidden rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "nav-float-scrolled border-cyan-400/25 bg-white/[0.08]"
              : "border-white/10 bg-white/[0.04]"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/[0.04] via-transparent to-violet-500/[0.04]" />

          <div className="relative flex h-[3.75rem] items-center justify-between px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease }}
            >
              <Link
                href="/#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="group relative inline-flex items-center gap-2"
              >
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-xl font-black tracking-tight gradient-text md:text-2xl"
                >
                  {site.name}
                </motion.span>
                <span className="hidden h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] sm:inline-block" />
              </Link>
            </motion.div>

            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link, i) => {
                const active = activeSection === link.id;
                return (
                  <motion.li
                    key={link.id}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={navItemVariants}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`group relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                        active ? "text-white" : "text-zinc-400 hover:text-zinc-100"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-violet-500/15 to-fuchsia-500/10 ring-1 ring-cyan-400/25"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      <motion.span
                        className="relative z-10"
                        whileHover={{ y: -1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        {link.label}
                      </motion.span>
                      <span
                        className={`absolute bottom-1 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-300 ${
                          active
                            ? "w-3/5 opacity-80"
                            : "w-0 opacity-0 group-hover:w-2/5 group-hover:opacity-60"
                        }`}
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/10 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="flex w-5 flex-col items-center justify-center gap-1.5">
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full origin-center rounded-full bg-white"
                />
                <motion.span
                  animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  className="block h-0.5 w-full rounded-full bg-white"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full origin-center rounded-full bg-white"
                />
              </div>
            </motion.button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden border-t border-white/10 lg:hidden"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-violet-500/5" />
                <ul className="relative flex flex-col gap-1 px-4 py-4">
                  {navLinks.map((link, i) => {
                    const active = activeSection === link.id;
                    return (
                      <motion.li
                        key={link.id}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.id)}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition ${
                            active
                              ? "bg-gradient-to-r from-cyan-400/15 to-violet-500/10 text-white ring-1 ring-cyan-400/20"
                              : "text-zinc-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {link.label}
                          {active && (
                            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>
    </>
  );
}

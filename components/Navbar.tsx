"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { navLinks, site } from "@/lib/data";
import { ease } from "@/lib/motion";
import { scrollToSection, unlockPageScroll } from "@/lib/scroll";

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
  const router = useRouter();
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
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      unlockPageScroll();
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      unlockPageScroll();
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/" || !window.location.hash) return;
    const id = window.location.hash.slice(1);
    const timer = window.setTimeout(() => scrollToSection(id), 150);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const navigateToSection = useCallback(
    (id: string) => {
      const menuWasOpen = open;
      setOpen(false);
      unlockPageScroll();

      const go = () => {
        if (pathname === "/") {
          scrollToSection(id, menuWasOpen ? 100 : 0);
          return;
        }
        router.push(`/#${id}`);
      };

      if (menuWasOpen) {
        window.setTimeout(go, 100);
      } else {
        go();
      }
    },
    [open, pathname, router],
  );

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden && !open ? -120 : 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 30, delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-6 md:pt-5"
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden
            />
          )}
        </AnimatePresence>

        <nav
          aria-label="Main navigation"
          className={`nav-glass nav-float relative z-50 w-full max-w-5xl rounded-2xl border transition-all duration-500 ${
            open ? "overflow-visible" : "overflow-hidden"
          } ${
            scrolled || open
              ? "nav-float-scrolled border-cyan-400/25 bg-white/[0.08]"
              : "border-white/10 bg-white/[0.04]"
          }`}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/[0.04] via-transparent to-violet-500/[0.04]"
            aria-hidden
          />

          <div className="relative z-10 flex h-[3.75rem] items-center justify-between px-4 md:px-6">
            <button
              type="button"
              onClick={() => navigateToSection("home")}
              className="group relative inline-flex touch-manipulation items-center gap-2 border-0 bg-transparent p-0 text-left"
            >
              <span className="text-xl font-black tracking-tight gradient-text md:text-2xl">
                {site.name}
              </span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] sm:inline-block" />
            </button>

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
                    <button
                      type="button"
                      onClick={() => navigateToSection(link.id)}
                      className={`group relative block touch-manipulation rounded-full border-0 bg-transparent px-3.5 py-2 text-sm font-medium transition-colors ${
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
                      <span className="relative z-10">{link.label}</span>
                    </button>
                  </motion.li>
                );
              })}
              <li>
                <button
                  type="button"
                  onClick={() => navigateToSection("contact")}
                  className="ml-2 touch-manipulation rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
                >
                  Get In Touch
                </button>
              </li>
            </ul>

            <button
              type="button"
              className="relative z-20 flex h-10 w-10 touch-manipulation items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/10 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="flex w-5 flex-col items-center justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-full origin-center rounded-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full bg-white transition ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-full origin-center rounded-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-50 border-t border-white/10 lg:hidden"
              >
                <ul className="flex flex-col gap-1 px-4 py-4">
                  {navLinks.map((link) => {
                    const active = activeSection === link.id;
                    return (
                      <li key={link.id}>
                        <button
                          type="button"
                          onClick={() => navigateToSection(link.id)}
                          className={`flex w-full touch-manipulation items-center justify-between rounded-xl border-0 px-4 py-3 text-left text-base font-medium transition ${
                            active
                              ? "bg-gradient-to-r from-cyan-400/15 to-violet-500/10 text-white ring-1 ring-cyan-400/20"
                              : "bg-transparent text-zinc-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {link.label}
                          {active && (
                            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                  <li className="pt-2">
                    <button
                      type="button"
                      onClick={() => navigateToSection("contact")}
                      className="block w-full touch-manipulation rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black"
                    >
                      Get In Touch
                    </button>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}

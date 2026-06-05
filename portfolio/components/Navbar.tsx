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

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
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
      { rootMargin: "-40% 0px -50% 0px" },
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

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    setOpen(false);
    if (pathname !== "/") return;
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `/#${id}`);
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -110 : 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-6 md:pt-5"
    >
      <nav
        aria-label="Main navigation"
        className={`nav-glass w-full max-w-5xl rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "border-cyan-400/20 bg-white/[0.07] shadow-[0_8px_40px_rgba(34,211,238,0.08)]"
            : "border-cyan-400/10 bg-white/[0.04]"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-4 md:px-6">
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-lg font-bold tracking-tight gradient-text"
          >
            {site.name}
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                      active ? "text-white" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="ml-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
              >
                Book consultation
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 w-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-full bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/10 lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-4 py-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="block rounded-xl px-3 py-2.5 text-base font-medium text-zinc-200 transition hover:bg-white/5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/#contact"
                    onClick={(e) => handleNavClick(e, "contact")}
                    className="mt-1 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
                  >
                    Book consultation
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

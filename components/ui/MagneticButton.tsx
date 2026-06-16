"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { getHashId, isHashHref, isSpecialHref, scrollToSection } from "@/lib/scroll";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost" | "cyber";
  external?: boolean;
  fullWidth?: boolean;
};

const spring = { stiffness: 260, damping: 22, mass: 0.6 };

export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  external = false,
  fullWidth = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  const variants = {
    primary:
      "bg-white text-black shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]",
    ghost:
      "border border-cyan-400/30 text-white hover:border-cyan-400/60 hover:bg-cyan-400/5",
    cyber: "cyber-btn text-white",
  };

  const wrapClass = fullWidth ? "block flex-1" : "inline-block";

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.28);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  function handleHashClick(e: React.MouseEvent, targetHref: string) {
    const id = getHashId(targetHref);
    if (!id) return;

    if (pathname === "/") {
      e.preventDefault();
      scrollToSection(id);
      return;
    }

    e.preventDefault();
    router.push(`/#${id}`);
  }

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileTap={{ scale: 0.96 }}
      className={`flex w-full cursor-pointer items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (external || isSpecialHref(href)) {
      return (
        <a href={href} className={wrapClass}>
          {inner}
        </a>
      );
    }

    if (isHashHref(href)) {
      return (
        <a
          href={href.startsWith("#") ? `/${href}` : href}
          onClick={(e) => handleHashClick(e, href)}
          className={wrapClass}
        >
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} className={wrapClass}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer border-0 bg-transparent p-0 ${wrapClass}`}
    >
      {inner}
    </button>
  );
}

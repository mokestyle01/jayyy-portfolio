"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      aria-label="Scroll to about section"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition hover:text-white"
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
      >
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3], y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1 rounded-full bg-white"
        />
      </motion.div>
    </motion.a>
  );
}

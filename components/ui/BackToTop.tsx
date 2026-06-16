"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";

export function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > 600));

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.replaceState(null, "", "/");
          }}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full glass text-white shadow-[0_0_30px_rgba(167,139,250,0.2)] transition hover:shadow-[0_0_40px_rgba(167,139,250,0.35)]"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

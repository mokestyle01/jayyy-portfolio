"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/lib/data";

export function CopyEmailButton({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition hover:border-cyan-400/30 hover:text-white ${className}`}
    >
      {copied ? (
        <>
          <span className="text-emerald-400">✓</span>
          Copied!
        </>
      ) : (
        <>
          <span aria-hidden>⎘</span>
          Copy email
        </>
      )}
    </motion.button>
  );
}

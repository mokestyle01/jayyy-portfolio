"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionChild, SectionWrapper } from "@/components/ui/SectionWrapper";
import { skillCategories } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionChild>
        <SectionHeading
          eyebrow="Capabilities"
          title="How I create business impact"
          description="Every solution is designed to improve efficiency, strengthen operations, and unlock smarter decisions — across digital, automated, and data-driven environments."
          align="center"
        />
      </SectionChild>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="glass cyber-border-glow gradient-border group rounded-2xl p-6 transition hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]"
          >
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.5 }}
              className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-2xl text-white shadow-[0_0_24px_rgba(34,211,238,0.2)]`}
            >
              {cat.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-white">{cat.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {cat.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 6, color: "#e0f2fe" }}
                  className="flex items-center gap-2.5 text-sm text-zinc-400 transition"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

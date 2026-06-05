"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionChild, SectionWrapper } from "@/components/ui/SectionWrapper";
import { experience } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionChild>
        <SectionHeading
          eyebrow="Track Record"
          title="A history of business impact"
          description="Years of partnering with organizations to modernize operations, automate workflows, and build systems that support sustainable growth."
        />
      </SectionChild>

      <div className="relative mt-14">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/70 via-violet-500/50 to-transparent md:left-1/2 md:-translate-x-px"
          aria-hidden
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-10"
        >
          {experience.map((item, i) => (
            <motion.li
              key={item.period}
              variants={fadeUp}
              className={`relative flex flex-col gap-4 md:w-1/2 ${
                i % 2 === 0 ? "md:ml-0 md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              <span
                className={`absolute top-1 h-3.5 w-3.5 rounded-full border-2 border-cyan-400 bg-black shadow-[0_0_14px_rgba(34,211,238,0.7)] md:top-2 ${
                  i % 2 === 0
                    ? "left-0 md:left-auto md:right-[-7px]"
                    : "left-0 md:left-[-7px]"
                }`}
                aria-hidden
              />

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass cyber-border-glow gradient-border ml-8 rounded-2xl p-6 md:ml-0"
              >
                <p className="text-sm font-medium text-cyan-300">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {item.role}
                </h3>
                <p className="text-sm text-zinc-500">{item.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {item.detail}
                </p>
                <ul className="mt-4 space-y-1">
                  {item.achievements.map((a) => (
                    <li key={a} className="text-xs text-zinc-500">
                      <span className="text-cyan-400">▸</span> {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </SectionWrapper>
  );
}

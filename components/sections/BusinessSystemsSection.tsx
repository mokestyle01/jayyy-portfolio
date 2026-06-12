"use client";

import { motion } from "framer-motion";
import { BusinessCaseStudyCard } from "@/components/BusinessCaseStudyCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionChild, SectionWrapper } from "@/components/ui/SectionWrapper";
import { businessCaseStudies } from "@/lib/data";
import { staggerContainer } from "@/lib/motion";

const highlightTags = [
  "Excel Solutions",
  "Business Systems",
  "Data Analytics",
] as const;

export function BusinessSystemsSection() {
  return (
    <SectionWrapper id="business-systems">
      <SectionChild>
        <SectionHeading
          eyebrow="Business Systems & Data Solutions"
          title="Operational systems that drive control and clarity"
          description="Purpose-built Excel solutions that organize your people, finances, and processes — giving leadership the visibility to act faster and manage with confidence."
          align="center"
        />
      </SectionChild>

      <SectionChild className="mt-8 flex flex-wrap justify-center gap-2">
        {highlightTags.map((tag) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-full border border-emerald-400/25 bg-emerald-400/5 px-4 py-1.5 text-xs font-semibold text-emerald-200/90"
          >
            {tag}
          </motion.span>
        ))}
      </SectionChild>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10"
      >
        {businessCaseStudies.map((study, i) => (
          <BusinessCaseStudyCard key={study.slug} study={study} index={i} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionChild, SectionWrapper } from "@/components/ui/SectionWrapper";
import type { ProjectCategory } from "@/lib/data";
import { projects } from "@/lib/data";
import { staggerFast } from "@/lib/motion";

const categories: ProjectCategory[] = [
  "All",
  "SaaS",
  "AI",
  "Web",
  "Creative",
  "Business",
];

export function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <SectionWrapper id="projects">
      <SectionChild>
        <SectionHeading
          eyebrow="Solutions"
          title="Results that move businesses forward"
          description="A curated collection of digital solutions — each built to solve real operational challenges, improve decision-making, and deliver measurable business outcomes."
        />
      </SectionChild>

      <SectionChild className="mt-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
              active === cat
                ? "text-black"
                : "border border-cyan-400/15 text-zinc-400 hover:border-cyan-400/35 hover:text-white"
            }`}
          >
            {active === cat && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 shadow-[0_0_24px_rgba(34,211,238,0.35)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </motion.button>
        ))}
      </SectionChild>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={staggerFast}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -12 }}
          className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} priority={i < 3} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}

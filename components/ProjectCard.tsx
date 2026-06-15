"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type { Project } from "@/lib/data";
import { cardReveal, easeOut } from "@/lib/motion";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  index?: number;
};

export function ProjectCard({
  project,
  priority = false,
  index = 0,
}: ProjectCardProps) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 200, damping: 22 });

  const glowX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), { stiffness: 150, damping: 20 });
  const glowY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), { stiffness: 150, damping: 20 });
  const glowBg = useMotionTemplate`radial-gradient(300px circle at ${glowX}% ${glowY}%, ${project.accent}44, transparent 70%)`;

  function onMouseMove(e: React.MouseEvent) {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function onMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.article
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, ease: easeOut }}
      whileHover={reducedMotion ? undefined : { y: -12 }}
      className="group relative"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={
          reducedMotion
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="relative"
      >
        <div
          className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${project.accent}66, transparent, ${project.accent}44)`,
          }}
          aria-hidden
        />

        <div className="glass cyber-border-glow gradient-border relative overflow-hidden rounded-2xl">
          {!reducedMotion && (
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: glowBg }}
              aria-hidden
            />
          )}

          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} — ${project.category}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-110"
              priority={priority}
              loading={priority ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020208] via-[#020208]/50 to-transparent" />

            {/* Hover overlay with quick actions */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <MagneticButton
                href={project.demoUrl}
                variant="primary"
                external
                className="!px-4 !py-2 !text-xs"
              >
                View Live
              </MagneticButton>
              <MagneticButton
                href={project.githubUrl}
                variant="ghost"
                external
                className="!px-4 !py-2 !text-xs !bg-white/10"
              >
                View Code
              </MagneticButton>
            </div>

            <span
              className="absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md"
              style={{
                borderColor: `${project.accent}44`,
                background: `${project.accent}18`,
                color: project.accent,
              }}
            >
              {project.category}
            </span>
            <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md">
              {project.outcome}
            </span>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-200">
                {project.title}
              </h3>
              <span className="shrink-0 font-mono text-xs text-zinc-500">{project.year}</span>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-zinc-400 line-clamp-2">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-2.5 py-1 text-[11px] font-medium text-cyan-200/80 transition group-hover:border-cyan-400/30"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex gap-3 lg:hidden">
              <MagneticButton
                href={project.demoUrl}
                variant="primary"
                external
                fullWidth
                className="!px-4 !py-2.5 !text-xs"
              >
                View Live
              </MagneticButton>
              <MagneticButton
                href={project.githubUrl}
                variant="ghost"
                external
                fullWidth
                className="!px-4 !py-2.5 !text-xs"
              >
                View Code
              </MagneticButton>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

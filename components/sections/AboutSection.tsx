"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionChild, SectionWrapper } from "@/components/ui/SectionWrapper";
import { aboutStory, images, site, skills, stats } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <SectionChild>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="glass gradient-border relative aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <Image
              src={images.about}
              alt={`About ${site.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </SectionChild>

        <div>
          <SectionHeading eyebrow="About" title={aboutStory.headline} />
          <SectionChild className="mt-6 space-y-4">
            {aboutStory.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="leading-relaxed text-zinc-400">
                {p}
              </p>
            ))}
          </SectionChild>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {skills.slice(0, 4).map((s) => (
              <motion.li
                key={s.name}
                variants={fadeUp}
                className="glass rounded-full px-4 py-2 text-sm text-zinc-300"
              >
                {s.name}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="glass gradient-border rounded-2xl p-6 text-center"
          >
            <p className="text-4xl font-bold gradient-text">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

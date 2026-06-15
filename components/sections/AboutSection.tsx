"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionChild, SectionWrapper } from "@/components/ui/SectionWrapper";
import { aboutStory, images, site, skills } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <SectionChild>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="glass gradient-border relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_0_60px_rgba(34,211,238,0.08)]"
          >
            <Image
              src={images.about}
              alt={`About ${site.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020208]/80 via-transparent to-cyan-400/5" />
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
                whileHover={{ scale: 1.05, y: -2 }}
                className="glass rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400/30"
              >
                {s.name}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

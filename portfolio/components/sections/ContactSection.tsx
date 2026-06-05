"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionChild, SectionWrapper } from "@/components/ui/SectionWrapper";
import { site } from "@/lib/data";

const socialLabels: Record<keyof typeof site.social, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  dribbble: "Dribbble",
  twitter: "X / Twitter",
};

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="border-b border-white/5">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's solve your next business challenge"
              description="Tell me what's slowing your team down or holding your growth back. I'll respond within 48 hours with a clear path forward."
            />

          <SectionChild className="mt-10 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block text-lg text-white transition hover:text-cyan-300"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Location</p>
              <p className="mt-1 text-lg text-zinc-300">{site.location}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Social</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {(Object.entries(site.social) as [keyof typeof site.social, string][]).map(
                  ([key, href]) => (
                    <motion.a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="glass rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:text-white"
                    >
                      {socialLabels[key]}
                    </motion.a>
                  ),
                )}
              </div>
            </div>
          </SectionChild>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass gradient-border mt-10 rounded-2xl p-6"
          >
            <p className="text-sm text-zinc-400">
              Prefer a direct conversation?{" "}
              <Link href={`mailto:${site.email}`} className="font-medium text-cyan-300 hover:text-white">
                Email me directly
              </Link>{" "}
              — I&apos;m happy to discuss your goals and challenges.
            </p>
          </motion.div>
        </div>

        <SectionChild>
          <ContactForm />
        </SectionChild>
      </div>
    </SectionWrapper>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionChild, SectionWrapper } from "@/components/ui/SectionWrapper";
import { testimonialStats, testimonials } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "xs" }) {
  const starClass = size === "xs" ? "text-[10px]" : "text-sm";

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`${starClass} ${i < rating ? "text-amber-400" : "text-zinc-600"}`}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

const statItems = [
  {
    label: "Average client rating",
    value: `${testimonialStats.averageRating.toFixed(1)} / 5`,
    accent: "text-amber-400",
  },
  {
    label: "Client reviews",
    value: `${testimonialStats.totalReviews}+`,
    accent: "text-cyan-300",
  },
  {
    label: "Verified platform reviews",
    value: String(testimonialStats.verifiedPlatformReviews),
    accent: "text-emerald-300",
  },
  {
    label: "Repeat & referral clients",
    value: testimonialStats.repeatClients,
    accent: "text-violet-300",
  },
] as const;

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials">
      <SectionChild>
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by leaders who value results"
          description="Real feedback from business owners, operators, and platform clients — spanning Excel systems, automation, websites, and data solutions."
          align="center"
        />
      </SectionChild>

      <SectionChild className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass cyber-border-glow gradient-border mx-auto grid max-w-4xl grid-cols-2 gap-4 rounded-2xl p-5 md:grid-cols-4 md:gap-6 md:p-6"
        >
          {statItems.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className={`text-2xl font-bold md:text-3xl ${stat.accent}`}>{stat.value}</p>
              <p className="mt-1 text-[11px] leading-snug text-zinc-500 md:text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </SectionChild>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((t) => (
          <motion.blockquote
            key={t.id}
            variants={fadeUp}
            whileHover={{ y: -8, boxShadow: "0 0 40px rgba(34,211,238,0.1)" }}
            className={`glass cyber-border-glow gradient-border flex flex-col rounded-2xl p-6 ${
              t.featured
                ? "ring-1 ring-emerald-400/30 shadow-[0_0_40px_rgba(52,211,153,0.08)] lg:col-span-1"
                : ""
            }`}
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              {t.rating !== undefined ? (
                <StarRating rating={t.rating} />
              ) : (
                <span className="h-5" aria-hidden />
              )}
              <div className="flex flex-wrap items-center gap-2">
                {t.verified && t.source === "Fiverr" && (
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                    Verified on Fiverr
                  </span>
                )}
                {t.featured && (
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                    Featured
                  </span>
                )}
              </div>
            </div>

            <span className="mb-3 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-zinc-400">
              {t.service}
            </span>

            <p className="flex-1 text-sm leading-relaxed text-zinc-300">
              &ldquo;{t.quote}&rdquo;
            </p>

            {t.ratingDetails && (
              <ul
                className="mt-4 space-y-1 border-t border-white/5 pt-4"
                aria-label="Review ratings"
              >
                <li className="flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Seller communication</span>
                  <StarRating rating={t.ratingDetails.communication} size="xs" />
                </li>
                <li className="flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Quality of delivery</span>
                  <StarRating rating={t.ratingDetails.quality} size="xs" />
                </li>
                <li className="flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Value of delivery</span>
                  <StarRating rating={t.ratingDetails.value} size="xs" />
                </li>
              </ul>
            )}

            <footer className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
              <div
                className={`relative h-11 w-11 overflow-hidden rounded-full ring-2 ${
                  t.featured ? "ring-emerald-400/50" : "ring-cyan-400/40"
                }`}
              >
                <Image src={t.image} alt={t.author} fill sizes="44px" className="object-cover" />
              </div>
              <div>
                <cite className="not-italic text-sm font-semibold text-white">{t.author}</cite>
                <p className="text-xs text-zinc-500">{t.role}</p>
                {t.date && <p className="mt-0.5 text-[10px] text-zinc-600">{t.date}</p>}
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

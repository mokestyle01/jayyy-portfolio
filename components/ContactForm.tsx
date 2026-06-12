"use client";

import { motion } from "framer-motion";
import { useCallback, useId, useState } from "react";
import {
  hasValidationErrors,
  submitContactForm,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/contact";
import { site } from "@/lib/data";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialData: ContactFormData = { name: "", email: "", message: "" };

const inputClass =
  "mt-2 w-full rounded-xl border bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:ring-2 focus:ring-cyan-400/20";

function fieldBorder(hasError: boolean) {
  return hasError
    ? "border-red-400/50 focus:border-red-400/60"
    : "border-white/10 focus:border-cyan-400/50";
}

export function ContactForm() {
  const formId = useId();
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitError, setSubmitError] = useState("");

  const applyFieldValidation = useCallback(
    (field: keyof ContactFormData, nextData: ContactFormData) => {
      const fieldErrors = validateContactForm(nextData);
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    },
    [],
  );

  function handleChange(field: keyof ContactFormData, value: string) {
    setData((prev) => {
      const next = { ...prev, [field]: value };
      if (touched[field]) applyFieldValidation(field, next);
      return next;
    });
    if (status === "error") setStatus("idle");
  }

  function handleBlur(field: keyof ContactFormData) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setData((prev) => {
      applyFieldValidation(field, prev);
      return prev;
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const validation = validateContactForm(data);
    setErrors(validation);
    if (hasValidationErrors(validation)) return;

    setStatus("submitting");
    setSubmitError("");

    try {
      const result = await submitContactForm(data);
      if (!result.ok) {
        setStatus("error");
        setSubmitError(result.error);
        return;
      }
      setStatus("success");
      setData(initialData);
      setTouched({});
      setErrors({});
    } catch {
      setStatus("error");
      setSubmitError("Something went wrong. Please try again or email directly.");
    }
  }

  const nameErrorId = `${formId}-name-error`;
  const emailErrorId = `${formId}-email-error`;
  const messageErrorId = `${formId}-message-error`;
  const statusId = `${formId}-status`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass cyber-border-glow gradient-border rounded-2xl p-6 md:p-8"
    >
      {status === "success" && (
        <div
          id={statusId}
          role="status"
          aria-live="polite"
          className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4"
        >
          <p className="font-semibold text-emerald-300">Your inquiry is on its way!</p>
          <p className="mt-1 text-sm text-emerald-200/80">
            Thank you — I&apos;ll review your message and respond within 48 hours with next steps.
          </p>
        </div>
      )}

      {status === "error" && submitError && (
        <div
          id={statusId}
          role="alert"
          aria-live="assertive"
          className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4"
        >
          <p className="text-sm text-red-300">{submitError}</p>
          <p className="mt-2 text-sm text-zinc-400">
            Or email directly:{" "}
            <a href={`mailto:${site.email}`} className="text-cyan-300 underline">
              {site.email}
            </a>
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        aria-describedby={status !== "idle" ? statusId : undefined}
        className="space-y-5"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor={`${formId}-name`} className="block text-sm font-medium text-zinc-300">
              Name <span className="text-cyan-400" aria-hidden>*</span>
            </label>
            <input
              id={`${formId}-name`}
              name="name"
              type="text"
              required
              autoComplete="name"
              value={data.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? nameErrorId : undefined}
              className={`${inputClass} ${fieldBorder(Boolean(errors.name))}`}
              placeholder="Your name"
            />
            {errors.name && (
              <p id={nameErrorId} role="alert" className="mt-1.5 text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-zinc-300">
              Email <span className="text-cyan-400" aria-hidden>*</span>
            </label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? emailErrorId : undefined}
              className={`${inputClass} ${fieldBorder(Boolean(errors.email))}`}
              placeholder="you@email.com"
            />
            {errors.email && (
              <p id={emailErrorId} role="alert" className="mt-1.5 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor={`${formId}-message`} className="block text-sm font-medium text-zinc-300">
            Message <span className="text-cyan-400" aria-hidden>*</span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            required
            rows={5}
            value={data.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? messageErrorId : undefined}
            className={`${inputClass} resize-y min-h-[140px] ${fieldBorder(Boolean(errors.message))}`}
            placeholder="Describe your business challenge, current workflow, and what success looks like..."
          />
          {errors.message && (
            <p id={messageErrorId} role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={status === "submitting"}
          whileHover={status !== "submitting" ? { scale: 1.02 } : undefined}
          whileTap={status !== "submitting" ? { scale: 0.98 } : undefined}
          className="w-full rounded-full bg-white py-4 text-sm font-semibold text-black transition hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto md:px-10"
        >
          {status === "submitting" ? "Sending…" : "Start the conversation"}
        </motion.button>
      </form>
    </motion.div>
  );
}

import { site } from "@/lib/data";

export type FormProvider = "formspree" | "emailjs" | "mailto";

export const contactConfig = {
  provider: (process.env.NEXT_PUBLIC_FORM_PROVIDER ?? "mailto") as FormProvider,
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "",
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
  },
} as const;

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = data.name.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  if (!name) errors.name = "Name is required.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";

  if (!email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address.";

  if (!message) errors.message = "Message is required.";
  else if (message.length < 10)
    errors.message = "Message must be at least 10 characters.";

  return errors;
}

export function hasValidationErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

type SubmitResult =
  | { ok: true; method: "formspree" | "emailjs" | "mailto" }
  | { ok: false; error: string };

export async function submitContactForm(
  data: ContactFormData,
): Promise<SubmitResult> {
  const { provider } = contactConfig;

  if (provider === "formspree") {
    if (!contactConfig.formspreeEndpoint) {
      return {
        ok: false,
        error: "Formspree is not configured. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT.",
      };
    }

    const response = await fetch(contactConfig.formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim(),
        _subject: `Business inquiry from ${data.name.trim()}`,
      }),
    });

    if (!response.ok) {
      return { ok: false, error: "Unable to send your message. Please try again." };
    }

    return { ok: true, method: "formspree" };
  }

  if (provider === "emailjs") {
    const { serviceId, templateId, publicKey } = contactConfig.emailjs;
    if (!serviceId || !templateId || !publicKey) {
      return {
        ok: false,
        error: "EmailJS is not configured. Set EmailJS environment variables.",
      };
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: data.name.trim(),
          reply_to: data.email.trim(),
          user_email: data.email.trim(),
          message: data.message.trim(),
          to_name: site.name,
        },
      }),
    });

    if (!response.ok) {
      return { ok: false, error: "Unable to send your message. Please try again." };
    }

    return { ok: true, method: "emailjs" };
  }

  const body = encodeURIComponent(
    `Hi ${site.name},\n\n${data.message.trim()}\n\n— ${data.name.trim()} (${data.email.trim()})`,
  );
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Business inquiry — Jayyy")}&body=${body}`;

  return { ok: true, method: "mailto" };
}

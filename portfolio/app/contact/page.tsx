import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { contactPageMetadata } from "@/lib/seo";

export const metadata: Metadata = contactPageMetadata;

export default function ContactPage() {
  redirect("/#contact");
}

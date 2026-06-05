import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { aboutPageMetadata } from "@/lib/seo";

export const metadata: Metadata = aboutPageMetadata;

export default function AboutPage() {
  redirect("/#about");
}

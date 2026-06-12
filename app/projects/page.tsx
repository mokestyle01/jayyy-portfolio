import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { projectsPageMetadata } from "@/lib/seo";

export const metadata: Metadata = projectsPageMetadata;

export default function ProjectsPage() {
  redirect("/#projects");
}

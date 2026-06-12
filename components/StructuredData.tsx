import { getStructuredData } from "@/lib/seo";

export function StructuredData() {
  const data = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

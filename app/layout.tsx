import type { Metadata } from "next";
import { BackToTop } from "@/components/ui/BackToTop";
import { SkipLink } from "@/components/ui/SkipLink";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { StructuredData } from "@/components/StructuredData";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="relative min-h-full flex flex-col bg-black text-white">
        <SkipLink />
        <StructuredData />
        <Navbar />
        <div className="relative z-10 flex-1">{children}</div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}

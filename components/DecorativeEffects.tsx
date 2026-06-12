"use client";

import dynamic from "next/dynamic";

const BackgroundGlow = dynamic(
  () => import("@/components/BackgroundGlow").then((m) => m.BackgroundGlow),
  { ssr: false },
);

const MouseSpotlight = dynamic(
  () => import("@/components/MouseSpotlight").then((m) => m.MouseSpotlight),
  { ssr: false },
);

export function DecorativeEffects() {
  return (
    <>
      <BackgroundGlow />
      <MouseSpotlight />
    </>
  );
}

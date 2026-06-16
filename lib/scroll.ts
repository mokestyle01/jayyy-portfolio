/** Smooth-scroll to a section by id on the homepage. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `/#${id}`);
  return true;
}

/** Extract hash id from href like "#contact", "/#contact", or "/#contact-form". */
export function getHashId(href: string): string | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  const id = href.slice(hashIndex + 1);
  return id || null;
}

export function isHashHref(href: string): boolean {
  return href.startsWith("#") || href.includes("/#");
}

export function isSpecialHref(href: string): boolean {
  return (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  );
}

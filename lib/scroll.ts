/** Offset for fixed navbar (matches scroll-mt-nav / scroll-padding-top). */
export const NAV_SCROLL_OFFSET = 112;

/** Restore page scroll after mobile menu lock. */
export function unlockPageScroll() {
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  document.documentElement.style.overflow = "";
}

/** Smooth-scroll to a section by id on the homepage. */
export function scrollToSection(id: string, delay = 0) {
  const execute = () => {
    unlockPageScroll();

    const el = document.getElementById(id);
    if (!el) return false;

    const runScroll = () => {
      const top =
        el.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      window.history.replaceState(null, "", `/#${id}`);
    };

    requestAnimationFrame(() => requestAnimationFrame(runScroll));
    return true;
  };

  if (delay > 0) {
    window.setTimeout(execute, delay);
    return true;
  }

  execute();
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

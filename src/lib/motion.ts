export const easeOut = [0.16, 1, 0.3, 1] as const;

export const cardReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: easeOut },
} as const;

export const pillTransition = {
  type: "spring",
  stiffness: 500,
  damping: 36,
} as const;

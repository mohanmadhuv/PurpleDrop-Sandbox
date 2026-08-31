import { cardSizes, type CardSize } from "@/lib/card-size-scale";

/**
 * Which of the 5 card-height templates (lib/card-size-scale.ts) each project
 * uses on the work grid's 2-column round-robin split.
 *
 * Lexhub, Bird, Msasa, LiveFlow, Pratilipi appear with their aspect
 * matching (or, for Visionplanner/SuperTrash, closest to) their real
 * screenshot/video so those aren't cropped much by object-cover/-contain.
 */
export const cardSizeByClient: Record<string, CardSize> = {
  Lexhub: "wide",
  "Bird (YC S16)": "tall",
  Visionplanner: "square",
  SuperTrash: "tall-almostSquare",
  Pratilipi: "tall",

  Msasa: "wide",
  "LiveFlow (YC W21)": "square",
  Swydo: "square",
  "Exact Centaur": "wide-almostSquare",
};

/** Looks up a project's card size, falling back to its default `aspect` if unassigned. */
export function getCardAspect(client: string, fallbackAspect: number): number {
  const size = cardSizeByClient[client];
  return size ? cardSizes[size] : fallbackAspect;
}

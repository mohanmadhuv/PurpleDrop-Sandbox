import { cardSizes, type CardSize } from "@/lib/card-sizes";

/**
 * Which of the 5 card-height templates (lib/card-sizes.ts) each project
 * uses on concept1a's grid. Invoke a size per project here rather than
 * setting one-off aspect ratios — keeps the fluid-width grid to a
 * consistent, deliberate set of card proportions.
 *
 * Lexhub, Msasa, LiveFlow, Pratilipi, Ford appear with their aspect
 * closest to (or, for LiveFlow/Pratilipi, matching) their real
 * screenshot/video so those aren't cropped much by object-cover/-contain.
 */
export const concept1aCardSize: Record<string, CardSize> = {
  Lexhub: "wide",
  MessageBird: "tall",
  Visionplanner: "square",
  Philips: "wide-almostSquare",
  SuperTrash: "tall-almostSquare",
  Pratilipi: "tall",

  Msasa: "tall-almostSquare",
  "LiveFlow (YC W21)": "wide",
  Swydo: "square",
  "Exact Centaur": "wide-almostSquare",
  Adidas: "wide",
  Ford: "tall",
};

/** Looks up a project's concept1a card size, falling back to its default `aspect` if unassigned. */
export function getConcept1aAspect(client: string, fallbackAspect: number): number {
  const size = concept1aCardSize[client];
  return size ? cardSizes[size] : fallbackAspect;
}

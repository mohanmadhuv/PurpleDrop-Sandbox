import { cardSizes, type CardSize } from "@/lib/card-sizes";

/**
 * Which of the 5 card-height templates (lib/card-sizes.ts) each project
 * uses on concept3b's grid. Same 2-column round-robin split as
 * concept1a (so the same client lands in the same column here), and
 * kept as its own mapping — independent of concept1a's — so either can
 * be retuned without affecting the other.
 *
 * Lexhub, Msasa, LiveFlow, Pratilipi, Ford appear with their aspect
 * closest to (or, for LiveFlow/Pratilipi, matching) their real
 * screenshot/video so those aren't cropped much by object-cover/-contain.
 */
export const concept3bCardSize: Record<string, CardSize> = {
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

/** Looks up a project's concept3b card size, falling back to its default `aspect` if unassigned. */
export function getConcept3bAspect(client: string, fallbackAspect: number): number {
  const size = concept3bCardSize[client];
  return size ? cardSizes[size] : fallbackAspect;
}

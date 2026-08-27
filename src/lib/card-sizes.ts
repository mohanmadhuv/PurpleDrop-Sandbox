/**
 * Design-system card-height scale: 5 named aspect ratios (width:height,
 * against a 684px reference width — matching the existing convention in
 * lib/projects.ts) that a project card can be assigned to. Card width is
 * fluid (it fills its grid column), so "height" here means the ratio that
 * produces it — this keeps a fluid grid to a small, deliberate set of
 * proportions instead of one-off ratios per project.
 *
 * This scale is tuned for concept1a's 2-column grid. A concept with a
 * different column count/width (and so a different rhythm) should define
 * its own scale the same way rather than reusing these exact numbers.
 */
export const cardSizes = {
  wide: 684 / 520,
  "wide-almostSquare": 684 / 620,
  square: 684 / 720,
  "tall-almostSquare": 684 / 820,
  tall: 684 / 960,
} as const;

export type CardSize = keyof typeof cardSizes;

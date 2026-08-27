export type Project = {
  client: string;
  service: string;
  year: string;
  aspect: number;
  /** Path under /public (e.g. "/work/lexhub/hero.jpg"). Omit to show the placeholder block. */
  image?: string;
  /** Path under /public to a product-demo clip. Takes priority over `image`; plays on hover, static otherwise. */
  video?: string;
  /** Path under /public to a static frame shown for `video` before hover (falls back to the video's own first frame if omitted). */
  poster?: string;
};

/**
 * Single source of truth for case-study/project data. Add, edit, or
 * reorder projects here and every concept that renders a project grid
 * picks up the change — each concept only decides how many columns to
 * split this list into via `distributeColumns`.
 */
export const projects: Project[] = [
  { client: "Lexhub", service: "Design System", year: "2026", aspect: 684 / 520 },
  {
    client: "Msasa",
    service: "User Interface Design, Prototyping",
    year: "2026",
    aspect: 684 / 576,
  },
  { client: "MessageBird", service: "Product Design", year: "2025", aspect: 684 / 960 },
  {
    client: "LiveFlow (YC W21)",
    service: "Product Design, Design System",
    year: "2025",
    aspect: 684 / 520,
    image: "/work/liveflow/hero.png",
  },
  { client: "Visionplanner", service: "Product Design", year: "2024", aspect: 684 / 576 },
  {
    client: "Swydo",
    service: "User Research, Product Design",
    year: "2024",
    aspect: 684 / 720,
  },
  { client: "Philips", service: "Product Design", year: "2023", aspect: 684 / 720 },
  {
    client: "Exact Centaur",
    service: "User Research, Product Design",
    year: "2023",
    aspect: 684 / 520,
  },
  { client: "SuperTrash", service: "Product Design", year: "2022", aspect: 684 / 520 },
  { client: "Adidas", service: "Product Design", year: "2022", aspect: 684 / 520 },
  {
    client: "Pratilipi",
    service: "Product Design",
    year: "2021",
    aspect: 866 / 1278,
    image: "/work/pratilipi/hero.png",
  },
  { client: "Ford", service: "Product Design", year: "2021", aspect: 684 / 960 },
];

/**
 * Splits a list into `columns` groups round-robin (item i goes to
 * column i % columns), so a masonry grid can go from N to M columns
 * by changing one number instead of re-authoring the project list.
 */
export function distributeColumns<T>(items: T[], columns: number): T[][] {
  const result: T[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, index) => {
    result[index % columns].push(item);
  });
  return result;
}

/**
 * The full client roster used by concept2's editorial list — a
 * superset of `projects`' clients (includes Porsche, which has no
 * case-study card yet) since that layout only needs names, not
 * service/year detail.
 */
export const clientRoster: string[] = [
  "LexHub",
  "Exact Centaur",
  "Pratilipi",
  "LiveFlow (YC W21)",
  "Msasa",
  "MessageBird",
  "Swydo",
  "Visionplanner",
  "Philips",
  "Adidas",
  "Ford",
  "SuperTrash",
  "Porsche",
];

/**
 * Looks up a project's image by client name for UIs (like concept2's
 * hover panel) that only have a name from `clientRoster`, not the full
 * `Project` record. Case-insensitive since the roster and project list
 * don't always agree on capitalization (e.g. "LexHub" vs "Lexhub").
 */
export function getProjectImage(clientName: string): string | undefined {
  return projects.find((p) => p.client.toLowerCase() === clientName.toLowerCase())?.image;
}

/** Same as `getProjectImage`, but for a project's product-demo video. */
export function getProjectVideo(clientName: string): string | undefined {
  return projects.find((p) => p.client.toLowerCase() === clientName.toLowerCase())?.video;
}

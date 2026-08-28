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
 * The project ledger — the single source of truth for every project,
 * oldest to newest. This is the only place project data is authored;
 * add, edit, or correct a project here and every concept picks up the
 * change. Don't keep a second list of clients/years/services anywhere
 * else — derive what a concept needs (a different order, a subset,
 * just names) from this array instead.
 */
export const projects: Project[] = [
  {
    client: "Pratilipi",
    service: "Product Design",
    year: "2021",
    aspect: 866 / 1278,
    image: "/work/pratilipi/hero.png",
  },
  { client: "SuperTrash", service: "Product Design", year: "2022", aspect: 684 / 520 },
  {
    client: "Exact Centaur",
    service: "User Research, Product Design",
    year: "2023",
    aspect: 684 / 520,
  },
  {
    client: "Swydo",
    service: "User Research, Product Design",
    year: "2024",
    aspect: 684 / 720,
  },
  { client: "Visionplanner", service: "Product Design", year: "2024", aspect: 684 / 576 },
  {
    client: "LiveFlow (YC W21)",
    service: "Product Design, Design System",
    year: "2025",
    aspect: 684 / 520,
    image: "/work/liveflow/hero.png",
  },
  { client: "Bird (YC S16)", service: "Product Design", year: "2025", aspect: 684 / 960 },
  {
    client: "Msasa",
    service: "User Interface Design, Prototyping",
    year: "2026",
    aspect: 684 / 576,
  },
  {
    client: "Lexhub",
    service: "Design System",
    year: "2026",
    aspect: 684 / 520,
    image: "/work/lexhub/hero-2.png",
  },
];

/**
 * Today's site-wide display order (newest first) — the work grid
 * renders this, not `projects` directly. Change this export (not the
 * ledger itself) to change what order projects are displayed in; keep
 * the ledger in true chronological order regardless.
 */
export const displayProjects: Project[] = [...projects].reverse();

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

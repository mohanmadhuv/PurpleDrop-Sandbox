export type Project = {
  client: string;
  service: string;
  year: string;
  aspect: number;
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
    client: "LiveFlow",
    service: "Product Design, Design System",
    year: "2025",
    aspect: 684 / 520,
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
  { client: "Pratilipi", service: "Product Design", year: "2021", aspect: 684 / 720 },
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
  "LiveFlow",
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

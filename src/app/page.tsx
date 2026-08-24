import Link from "next/link";

const concepts = [
  { href: "/concept1", label: "Concept 1" },
  { href: "/concept2", label: "Concept 2" },
  { href: "/concept3", label: "Concept 3" },
  { href: "/concept4", label: "Concept 4" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <h1 className="text-2xl font-medium tracking-[-0.02em] text-black">
        PurpleDrop — Concepts
      </h1>
      <nav className="mt-8 flex flex-col gap-3">
        {concepts.map((concept) => (
          <Link
            key={concept.href}
            href={concept.href}
            className="rounded-md border border-border px-6 py-3 text-center text-lg font-medium text-black transition-colors hover:bg-muted"
          >
            {concept.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

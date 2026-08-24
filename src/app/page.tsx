import Link from "next/link";

const concepts = [
  { href: "/concept1a", label: "Concept 1a" },
  { href: "/concept1b", label: "Concept 1b" },
  { href: "/concept2a", label: "Concept 2a" },
  { href: "/concept2b", label: "Concept 2b" },
  { href: "/concept3a", label: "Concept 3a" },
  { href: "/concept3b", label: "Concept 3b" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <h1 className="text-2xl font-medium tracking-tight text-black">
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

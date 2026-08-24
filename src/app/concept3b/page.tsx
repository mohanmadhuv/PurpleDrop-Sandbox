import Link from "next/link";

export default function Concept3BPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-2xl font-medium tracking-tight text-black">
        Concept 3b — coming soon.
      </p>
      <Link
        href="/"
        className="mt-6 text-sm font-medium text-muted-text transition-colors hover:text-black"
      >
        ← Back to concepts
      </Link>
    </div>
  );
}

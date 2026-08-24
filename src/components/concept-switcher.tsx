"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import { pillTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

const concepts = [
  { href: "/concept1", label: "Concept 1" },
  { href: "/concept2", label: "Concept 2" },
  { href: "/concept3", label: "Concept 3" },
  { href: "/concept4", label: "Concept 4" },
];

export function ConceptSwitcher() {
  const pathname = usePathname();
  const activeHref = concepts.find((c) => pathname.startsWith(c.href))?.href;

  return (
    <nav
      aria-label="Switch concept"
      className="fixed right-6 bottom-6 z-50 flex items-center gap-1 rounded-full border border-black/10 bg-white/90 p-1 shadow-lg backdrop-blur-sm"
    >
      {concepts.map((concept) => {
        const isActive = concept.href === activeHref;
        return (
          <Link
            key={concept.href}
            href={concept.href}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
              isActive ? "text-white" : "text-black/60 hover:text-black"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="concept-switcher-pill"
                className="absolute inset-0 rounded-full bg-brand"
                transition={pillTransition}
              />
            )}
            <span className="relative z-10">{concept.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Ellipsis } from "lucide-react";

import { pillTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

const concepts = [
  { href: "/concept1a", label: "Concept 1a" },
  { href: "/concept1b", label: "Concept 1b" },
  { href: "/concept2a", label: "Concept 2a" },
  { href: "/concept2b", label: "Concept 2b" },
  { href: "/concept3a", label: "Concept 3a" },
  { href: "/concept3b", label: "Concept 3b" },
];

const expandTransition = { type: "spring", stiffness: 420, damping: 34, bounce: 0 } as const;

function useNaturalWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState<number>();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setWidth(el.getBoundingClientRect().width));
    observer.observe(el);
    setWidth(el.getBoundingClientRect().width);
    return () => observer.disconnect();
  }, []);

  return [ref, width] as const;
}

// The tabs row is absolutely positioned (so its natural width can be measured
// unconstrained), which means it sits outside nav's own border+padding box.
// This measures that inset once so it can be added back on both sides,
// keeping the right gutter equal to the left instead of getting clipped.
function useEdgeInset<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inset, setInset] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const style = getComputedStyle(el);
    setInset(parseFloat(style.borderLeftWidth) + parseFloat(style.paddingLeft));
  }, []);

  return [ref, inset] as const;
}

export function ConceptSwitcher() {
  const pathname = usePathname();
  const activeHref = concepts.find((c) => pathname.startsWith(c.href))?.href;
  const [isOpen, setIsOpen] = useState(false);

  const [navRef, edgeInset] = useEdgeInset<HTMLElement>();
  const [dotsRef, dotsWidth] = useNaturalWidth<HTMLDivElement>();
  const [tabsRef, tabsWidth] = useNaturalWidth<HTMLDivElement>();
  const width = isOpen ? (tabsWidth !== undefined ? tabsWidth + edgeInset * 2 : undefined) : dotsWidth;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-6">
      <motion.nav
        ref={navRef}
        aria-label="Switch concept"
        animate={width ? { width } : undefined}
        transition={expandTransition}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="pointer-events-auto relative flex items-center overflow-hidden rounded-full border border-black/10 bg-white/90 p-1 shadow-lg backdrop-blur-sm"
      >
        <div
          ref={dotsRef}
          className={cn(
            "flex shrink-0 items-center justify-center px-4 py-2 transition-opacity duration-150",
            isOpen ? "pointer-events-none opacity-0" : "opacity-100"
          )}
        >
          <Ellipsis className="size-4 text-black/60" aria-hidden />
          <span className="sr-only">Switch concept</span>
        </div>

        <div
          ref={tabsRef}
          className={cn(
            "absolute inset-y-1 left-1 flex shrink-0 items-center gap-1 transition-opacity duration-150",
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          )}
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
        </div>
      </motion.nav>
    </div>
  );
}

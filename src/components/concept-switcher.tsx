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

function useNaturalSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<{ width: number; height: number }>();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    measure();
    return () => observer.disconnect();
  }, []);

  return [ref, size] as const;
}

// The dots/tabs rows are absolutely positioned (so their natural size can be
// measured unconstrained), which means they sit outside nav's own
// border+padding box. This measures that inset once so it can be added back
// on every side when sizing nav, instead of only being honored on the side
// the content happens to be anchored to.
function useEdgeInset<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inset, setInset] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const style = getComputedStyle(el);
    setInset({
      x: parseFloat(style.borderLeftWidth) + parseFloat(style.paddingLeft),
      y: parseFloat(style.borderTopWidth) + parseFloat(style.paddingTop),
    });
  }, []);

  return [ref, inset] as const;
}

export function ConceptSwitcher() {
  const pathname = usePathname();
  const activeHref = concepts.find((c) => pathname.startsWith(c.href))?.href;
  const [isOpen, setIsOpen] = useState(false);

  const [navRef, edgeInset] = useEdgeInset<HTMLElement>();
  const [dotsRef, dotsSize] = useNaturalSize<HTMLDivElement>();
  const [tabsRef, tabsSize] = useNaturalSize<HTMLDivElement>();

  const activeSize = isOpen ? tabsSize : dotsSize;
  const width = activeSize ? activeSize.width + edgeInset.x * 2 : undefined;
  const height = dotsSize && tabsSize ? Math.max(dotsSize.height, tabsSize.height) + edgeInset.y * 2 : undefined;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-6">
      <motion.nav
        ref={navRef}
        aria-label="Switch concept"
        animate={width && height ? { width, height } : undefined}
        transition={expandTransition}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="pointer-events-auto relative overflow-hidden rounded-full border border-black/10 bg-white/90 p-1 shadow-lg backdrop-blur-sm"
      >
        {/* Centered (not left-anchored) so the visible content stays centered
            in nav's box for the entire width transition, not just at rest. */}
        <div
          ref={dotsRef}
          className={cn(
            "absolute top-1/2 left-1/2 flex shrink-0 -translate-x-1/2 -translate-y-1/2 items-center justify-center px-4 py-2 transition-opacity duration-150",
            isOpen ? "pointer-events-none opacity-0" : "opacity-100"
          )}
        >
          <Ellipsis className="size-4 text-black/60" aria-hidden />
          <span className="sr-only">Switch concept</span>
        </div>

        <div
          ref={tabsRef}
          className={cn(
            "absolute top-1/2 left-1/2 flex shrink-0 -translate-x-1/2 -translate-y-1/2 items-center gap-1 transition-opacity duration-150",
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

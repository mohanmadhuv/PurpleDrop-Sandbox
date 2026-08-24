"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { clientRoster as clients } from "@/lib/projects";
import { cn } from "@/lib/utils";

import { SiteHeader } from "./site-header";

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeClient = activeIndex !== null ? clients[activeIndex] : null;

  return (
    <div className="page-px-wide flex w-full flex-col gap-16 py-16 lg:flex-row lg:items-start lg:justify-between">
      <div className="flex w-full flex-col lg:max-w-[720px] lg:shrink-0">
        <SiteHeader />

        <p className="mt-30 max-w-[720px] text-[32px] leading-tight font-light tracking-tight text-black">
          Strategic product design agency for startups looking to raise
          their series A / B funding
        </p>

        <ul
          id="work"
          className="mt-16 flex flex-col text-base font-normal tracking-tight"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {clients.map((client, index) => (
            <li key={client} className="leading-golden">
              <button
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
                className={cn(
                  "text-left transition-colors",
                  index === activeIndex
                    ? "text-black"
                    : "text-muted-text hover:text-black"
                )}
              >
                {client}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="placeholder-block relative aspect-[3/4] w-full overflow-hidden lg:max-w-[480px]">
        <AnimatePresence>
          {activeClient && (
            <motion.span
              key={activeClient}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-6 left-6 text-lg font-normal tracking-tight text-black/40"
            >
              {activeClient}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

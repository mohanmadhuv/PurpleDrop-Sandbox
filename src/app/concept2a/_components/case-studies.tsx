"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { clientRoster as clients } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { MobileWorkList } from "@/components/mobile-work-list";

import { SiteHeader } from "./site-header";

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeClient = activeIndex !== null ? clients[activeIndex] : null;

  return (
    <div className="relative min-h-screen w-full">
      {/* Panel spans from 32px past the content container's right edge
          (160px page-px-wide margin + 660px content width + 32px gap)
          to the viewport's right edge, full height. Keep left-[852px]
          in sync if any of those values change. */}
      <AnimatePresence>
        {activeClient && (
          <motion.div
            key={activeClient}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="placeholder-block fixed top-0 right-0 bottom-0 left-[852px] z-0 hidden lg:block"
          />
        )}
      </AnimatePresence>

      <div className="page-px-wide relative z-10 flex w-full flex-col py-16">
        <SiteHeader />

        <p className="mt-30 max-w-[660px] text-[32px] leading-tight font-light tracking-tight text-black">
          Strategic product design agency for startups looking to raise
          their series A / B funding
        </p>
      </div>

      <div id="work">
        <ul
          className="fixed bottom-16 left-40 z-10 hidden flex-col text-base font-normal tracking-tight lg:flex"
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

        <MobileWorkList />
      </div>
    </div>
  );
}

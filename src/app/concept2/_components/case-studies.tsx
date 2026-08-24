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
    <div className="relative min-h-screen w-full">
      <AnimatePresence>
        {activeClient && (
          <motion.div
            key={activeClient}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="placeholder-block fixed inset-0 z-0"
          />
        )}
      </AnimatePresence>

      <div className="page-px-wide relative z-10 flex w-full flex-col py-16">
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

      <AnimatePresence>
        {activeClient && (
          <motion.span
            key={activeClient}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-16 left-40 z-10 text-lg font-normal tracking-tight text-black/40"
          >
            {activeClient}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

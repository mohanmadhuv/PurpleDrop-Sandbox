"use client";

import { motion } from "motion/react";

import { cardReveal } from "@/lib/motion";
import { projects } from "@/lib/projects";

/**
 * Shared mobile (below lg) project list, used by concepts whose
 * desktop layout has no equivalent single-column card list of its
 * own (concept2a/2b's hover-driven editorial view). Matches
 * concept1a/1b's card markup exactly so every concept's mobile PWA
 * view is identical: nav, title, then this — one project card per
 * row, image on top, client/service/year stacked below it.
 */
export function MobileWorkList() {
  return (
    <div className="flex w-full flex-col gap-6 px-6 pt-20 pb-16 lg:hidden">
      {projects.map(({ client, service, year, aspect }) => (
        <motion.div key={client} className="flex w-full flex-col gap-2" {...cardReveal}>
          <div className="placeholder-block w-full" style={{ aspectRatio: aspect }} />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-base leading-tight tracking-tight">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-normal text-muted-text">{client}</span>
              <span className="font-normal text-black">{service}</span>
            </div>
            <span className="shrink-0 font-normal text-muted-text">{year}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

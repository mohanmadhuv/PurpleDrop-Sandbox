"use client";

import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

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
      {projects.map((project) => (
        <ProjectCard key={project.client} {...project} />
      ))}
    </div>
  );
}

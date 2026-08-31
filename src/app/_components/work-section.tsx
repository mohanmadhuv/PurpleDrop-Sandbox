"use client";

import { displayProjects, distributeColumns } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

import { getCardAspect } from "../_lib/card-size-assignments";

const sizedProjects = displayProjects.map((project) => ({
  ...project,
  aspect: getCardAspect(project.client, project.aspect),
}));

const [columnOne, columnTwo] = distributeColumns(sizedProjects, 2);

export function WorkSection() {
  return (
    <section id="work" className="page-px-wide w-full pt-20 pb-16">
      {/* Below md: one stacked list in true document order (item 1, 2, 3…)
          since a single column can't show two masonry stacks side by
          side anyway. At md+: the same order split round-robin into two
          independently packed columns (1 left, 2 right, 3 left…) so each
          column keeps its own card's natural height instead of every row
          stretching to match its tallest card — a CSS grid can't do that
          without reflowing the DOM order, which is why these are two
          separate blocks toggled by breakpoint rather than one grid. */}
      <div className="flex flex-col gap-6 md:hidden">
        {sizedProjects.map((project, index) => (
          <ProjectCard key={project.client} {...project} delay={(index % 6) * 0.08} />
        ))}
      </div>
      <div className="hidden md:grid md:grid-cols-2 md:gap-6">
        <div className="flex flex-col gap-6">
          {columnOne.map((project, index) => (
            <ProjectCard key={project.client} {...project} delay={(index % 3) * 0.08} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {columnTwo.map((project, index) => (
            <ProjectCard key={project.client} {...project} delay={(index % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

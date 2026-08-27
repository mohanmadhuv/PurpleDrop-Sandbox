"use client";

import { distributeColumns, projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

import { getConcept3bAspect } from "../_lib/card-sizes";

const sizedProjects = projects.map((project) => ({
  ...project,
  aspect: getConcept3bAspect(project.client, project.aspect),
}));

const [columnOne, columnTwo] = distributeColumns(sizedProjects, 2);

export function WorkSection() {
  return (
    <section id="work" className="page-px-wide w-full pt-20 pb-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          {columnOne.map((project) => (
            <ProjectCard key={project.client} {...project} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {columnTwo.map((project) => (
            <ProjectCard key={project.client} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

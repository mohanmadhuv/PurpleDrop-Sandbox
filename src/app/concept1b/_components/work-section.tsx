"use client";

import { displayProjects, distributeColumns } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

const [columnOne, columnTwo, columnThree] = distributeColumns(displayProjects, 3);

export function WorkSection() {
  return (
    <section id="work" className="w-full px-6 pt-20 pb-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="flex flex-col gap-6">
          {columnThree.map((project) => (
            <ProjectCard key={project.client} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

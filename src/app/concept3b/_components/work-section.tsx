"use client";

import { motion } from "motion/react";

import { cardReveal } from "@/lib/motion";
import { distributeColumns, projects, type Project } from "@/lib/projects";

const [columnOne, columnTwo] = distributeColumns(projects, 2);

function ProjectCard({ client, service, year, aspect }: Project) {
  return (
    <motion.div className="flex w-full flex-col gap-2" {...cardReveal}>
      <div
        className="placeholder-block w-full"
        style={{ aspectRatio: aspect }}
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-base leading-tight tracking-tight">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-normal text-muted-text">{client}</span>
          <span className="font-normal text-black">{service}</span>
        </div>
        <span className="shrink-0 font-normal text-muted-text">{year}</span>
      </div>
    </motion.div>
  );
}

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

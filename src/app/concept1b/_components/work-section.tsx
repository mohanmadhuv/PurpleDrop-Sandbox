"use client";

import { motion } from "motion/react";

import { cardReveal } from "@/lib/motion";
import { distributeColumns, projects, type Project } from "@/lib/projects";

const [columnOne, columnTwo, columnThree] = distributeColumns(projects, 3);

function ProjectCard({ client, service, year, aspect }: Project) {
  return (
    <motion.div className="flex w-full flex-col gap-2" {...cardReveal}>
      <div
        className="placeholder-block w-full"
        style={{ aspectRatio: aspect }}
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-base leading-tight tracking-tight">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-medium text-muted-text">{client}</span>
          <span className="font-normal text-black">{service}</span>
        </div>
        <span className="shrink-0 font-medium text-muted-text">{year}</span>
      </div>
    </motion.div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="w-full px-6 py-16 lg:pt-20">
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

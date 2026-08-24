"use client";

import { motion } from "motion/react";

type Project = {
  client: string;
  service: string;
  year: string;
  aspect: number;
};

const columnOne: Project[] = [
  { client: "Lexhub", service: "Design System", year: "2026", aspect: 684 / 520 },
  {
    client: "LiveFlow",
    service: "Product Design, Design System",
    year: "2025",
    aspect: 684 / 520,
  },
  { client: "Philips", service: "Product Design", year: "2023", aspect: 684 / 720 },
  { client: "Adidas", service: "Product Design", year: "2022", aspect: 684 / 520 },
];

const columnTwo: Project[] = [
  {
    client: "Msasa",
    service: "User Interface Design, Prototyping",
    year: "2026",
    aspect: 684 / 576,
  },
  { client: "Visionplanner", service: "Product Design", year: "2024", aspect: 684 / 576 },
  {
    client: "Exact Centaur",
    service: "User Research, Product Design",
    year: "2023",
    aspect: 684 / 520,
  },
  { client: "Pratilipi", service: "Product Design", year: "2021", aspect: 684 / 720 },
];

const columnThree: Project[] = [
  { client: "MessageBird", service: "Product Design", year: "2025", aspect: 684 / 960 },
  {
    client: "Swydo",
    service: "User Research, Product Design",
    year: "2024",
    aspect: 684 / 720,
  },
  { client: "SuperTrash", service: "Product Design", year: "2022", aspect: 684 / 520 },
  { client: "Ford", service: "Product Design", year: "2021", aspect: 684 / 960 },
];

function ProjectCard({ client, service, year, aspect }: Project) {
  return (
    <motion.div
      className="flex w-full flex-col gap-2"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="w-full rounded-sm bg-[#d9d9d9]"
        style={{ aspectRatio: aspect }}
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-base leading-[1.2] tracking-[-0.02em] sm:text-lg md:text-xl lg:text-2xl lg:tracking-[-0.04em]">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-medium text-[#adadad]">{client}</span>
          <span className="font-normal text-black">{service}</span>
        </div>
        <span className="shrink-0 font-medium text-[#adadad]">{year}</span>
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

"use client";

import { motion } from "motion/react";

import { cardReveal } from "@/lib/motion";

const values = [
  {
    title: "Find the Right Direction",
    description: "Turn ambiguity into clear, evidence-backed product decisions.",
  },
  {
    title: "De-Risk What Gets Built",
    description:
      "Resolve assumptions and usability problems before they become expensive engineering problems.",
  },
  {
    title: "Ship Better, Faster",
    description: "Reduce the friction between product, design and engineering from idea through release.",
  },
  {
    title: "Build Product Coherence",
    description: "Turn disconnected features and flows into one intentional product experience.",
  },
  {
    title: "Scale Without Design Debt",
    description: "Create systems that make every new feature easier and more consistent to ship.",
  },
  {
    title: "Build Lasting Product Capability",
    description:
      "Leave your team with stronger systems, shared context and ways of working long after we’re gone.",
  },
];

export function ValuesSection() {
  return (
    <section className="page-px-wide w-full pt-20 pb-24">
      <h2 className="text-hero-statement max-w-[800px]">Our Work Helps Product Teams</h2>
      <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            className="border-t border-border pt-6"
            {...cardReveal}
            transition={{ ...cardReveal.transition, delay: index * 0.08 }}
          >
            <h3 className="p1-black">{value.title}</h3>
            <p className="p1-gray mt-2">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

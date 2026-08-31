import type { Metadata } from "next";

import { SiteHeader } from "../_components/site-header";

import { ValuesSection } from "./_components/values-section";

export const metadata: Metadata = {
  title: "About — PurpleDrop",
};

// TODO: placeholder stats — swap in real numbers and copy.
const stats = [
  { number: "80", description: "products launched" },
  { number: "11", description: "years in business" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <section className="page-px-wide w-full">
        <p className="text-hero-statement mt-30 max-w-[800px]">
          We strive to craft tasteful and irresistible digital experiences.
        </p>
      </section>
      <section className="page-px-wide mt-16 w-full lg:mt-20">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          {stats.map((stat) => (
            <div key={stat.number} className="flex flex-col">
              <span className="text-hero-statement">{stat.number}</span>
              <span className="p1-gray mt-2">{stat.description}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="page-px-wide mt-16 w-full lg:mt-20">
        <div className="placeholder-block aspect-[21/9] w-full" />
      </section>
      <ValuesSection />
    </div>
  );
}

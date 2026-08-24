"use client";

import { useEffect, useRef, useState } from "react";

import { clientRoster as clients } from "@/lib/projects";

import { SiteHeader } from "./site-header";

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-49% 0px -49% 0px", threshold: 0 }
    );

    imageRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-x-16">
      <div className="page-px-wide flex flex-col pt-6 md:pt-10 lg:sticky lg:top-0 lg:h-screen lg:justify-between lg:py-16">
        <div>
          <SiteHeader />

          <p className="mt-8 max-w-[720px] text-[32px] leading-tight font-light tracking-tight text-black">
            Strategic product design agency for startups looking to raise
            their series A / B funding
          </p>
        </div>

        <ul className="mt-10 flex flex-col text-base font-normal tracking-tight lg:mt-0">
          {clients.map((client, index) => (
            <li key={client} className="leading-golden">
              <span
                className={
                  index === activeIndex
                    ? "text-black transition-colors"
                    : "text-muted-text transition-colors hover:text-black"
                }
              >
                {client}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        id="work"
        className="flex flex-col gap-6 px-6 py-16 md:px-20 lg:pr-20 lg:pl-0 lg:py-24"
      >
        {clients.map((client, index) => (
          <div key={client} className="flex flex-col gap-2">
            <div
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className="placeholder-block aspect-[4/3] w-full lg:aspect-video"
            />
            <span className="text-base font-normal tracking-tight text-muted-text lg:hidden">
              {client}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

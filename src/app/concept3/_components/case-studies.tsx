"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const clients = [
  "LexHub",
  "Exact Centaur",
  "Pratilipi",
  "LiveFlow",
  "Msasa",
  "MessageBird",
  "Swydo",
  "Visionplanner",
  "Philips",
  "Adidas",
  "Ford",
  "SuperTrash",
  "Porsche",
];

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
      <div className="page-px-wide flex flex-col pt-6 md:pt-10 lg:sticky lg:top-0 lg:h-screen lg:justify-between lg:py-10">
        <div>
          <Link href="/concept3" className="flex w-fit shrink-0 items-center gap-3">
            <Image
              src="/logo.svg"
              alt="PurpleDrop"
              width={54}
              height={29}
              className="h-[29px] w-[54px]"
              priority
            />
            <span className="text-2xl leading-none tracking-tight text-brand">
              <span className="font-bold">Purple</span>
              <span className="font-light">Drop</span>
            </span>
          </Link>

          <p className="mt-10 max-w-[420px] text-2xl leading-tight font-normal tracking-tight text-black sm:text-3xl lg:tracking-tighter">
            Strategic product design agency for startups looking to raise
            their series A / B funding
          </p>
        </div>

        <ul className="mt-10 flex flex-col text-2xl font-medium tracking-tighter lg:mt-0">
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
            <span className="text-lg font-medium tracking-tight text-muted-text lg:hidden">
              {client}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

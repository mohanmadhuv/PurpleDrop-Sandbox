"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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

export function ClientList() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="work"
      className="grid w-full grid-cols-1 gap-x-16 gap-y-10 px-6 py-16 md:px-20 lg:grid-cols-[auto_1fr] lg:px-40 lg:py-24"
    >
      <ul
        className="flex flex-col text-2xl font-medium tracking-[-0.04em]"
        onMouseLeave={() => setActiveIndex(0)}
      >
        {clients.map((client, index) => (
          <li key={client}>
            <button
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`py-2 text-left leading-[1.618] transition-colors ${
                index === activeIndex ? "text-black" : "text-[#adadad]"
              }`}
            >
              {client}
            </button>
          </li>
        ))}
      </ul>

      <div className="relative aspect-[684/576] w-full overflow-hidden rounded-sm bg-[#d9d9d9] lg:sticky lg:top-24">
        <AnimatePresence mode="wait">
          <motion.span
            key={clients[activeIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-6 left-6 text-lg font-medium tracking-[-0.02em] text-black/40"
          >
            {clients[activeIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import Typewriter from "typewriter-effect";
import { useReducedMotion } from "motion/react";

const phrases = ["crafting agentic design systems", "easing operation-heavy workflows", "accelerating zero to launch"];

/** Cycles through `phrases` with a typewriter effect; holds on the first phrase under prefers-reduced-motion. */
export function TypewriterPhrases() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span>{phrases[0]}</span>;
  }

  return (
    <Typewriter
      component="span"
      options={{
        strings: phrases,
        autoStart: true,
        loop: true,
        delay: 64,
        deleteSpeed: 32,
        cursorClassName: "typewriter-cursor",
        skipAddStyles: true,
      }}
    />
  );
}

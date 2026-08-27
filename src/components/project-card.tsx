"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { cardReveal } from "@/lib/motion";
import type { Project } from "@/lib/projects";

/**
 * Shared project card markup (media + client/service/year row), used by
 * every concept's desktop work grid and the shared mobile list so a real
 * screenshot or demo clip dropped into /public/work and wired up in
 * lib/projects.ts shows up everywhere at once. Renders the placeholder
 * block until a project has an `image` or `video`.
 */
export function ProjectCard({ client, service, year, aspect, image, video, poster }: Project) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    videoRef.current?.play();
  };

  const resetVideo = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  return (
    <motion.div className="flex w-full flex-col gap-2" {...cardReveal}>
      {video ? (
        <div
          className="placeholder-block relative w-full overflow-hidden"
          style={{ aspectRatio: aspect }}
          onMouseEnter={playVideo}
          onMouseLeave={resetVideo}
        >
          <div className="absolute inset-8 flex items-center justify-center md:inset-12">
            <video
              ref={videoRef}
              src={video}
              poster={poster}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full rounded-sm object-contain"
            />
          </div>
        </div>
      ) : image ? (
        <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: aspect }}>
          <Image
            src={image}
            alt={`${client} — ${service}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
      ) : (
        <div className="placeholder-block w-full" style={{ aspectRatio: aspect }} />
      )}
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

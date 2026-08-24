import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About — PurpleDrop",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <section className="mx-auto w-full max-w-[1392px] px-6">
        <p className="mt-10 max-w-[800px] text-2xl leading-[1.2] font-normal tracking-[-0.02em] text-black sm:text-3xl md:text-4xl lg:mt-[120px] lg:text-[40px] lg:tracking-[-0.04em]">
          About page coming soon.
        </p>
      </section>
    </div>
  );
}

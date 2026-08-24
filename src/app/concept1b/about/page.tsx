import type { Metadata } from "next";

import { SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "About — PurpleDrop",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <section className="w-full px-6">
        <p className="mt-6 max-w-[800px] text-base leading-tight font-light tracking-tight text-black sm:text-xl md:text-2xl lg:text-[32px]">
          About page coming soon.
        </p>
      </section>
    </div>
  );
}

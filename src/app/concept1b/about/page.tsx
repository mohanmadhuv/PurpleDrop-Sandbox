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
        <p className="mt-6 max-w-[800px] text-2xl leading-tight font-normal tracking-tight text-black sm:text-3xl md:text-4xl lg:text-[40px] lg:tracking-tighter">
          About page coming soon.
        </p>
      </section>
    </div>
  );
}

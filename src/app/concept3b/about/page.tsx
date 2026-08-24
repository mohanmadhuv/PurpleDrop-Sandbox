import type { Metadata } from "next";

import { SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "About — PurpleDrop",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <section className="page-px-wide w-full">
        <p className="mt-6 max-w-[540px] text-base leading-tight font-normal tracking-tight text-black">
          About page coming soon.
        </p>
      </section>
    </div>
  );
}

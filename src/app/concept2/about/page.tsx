import type { Metadata } from "next";

import { SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "About — PurpleDrop",
};

export default function AboutPage() {
  return (
    <div className="page-px-wide flex flex-1 flex-col bg-white pt-6 md:pt-10 lg:py-16">
      <SiteHeader />
      <p className="mt-8 max-w-[720px] text-[32px] leading-tight font-light tracking-tight text-black">
        About page coming soon.
      </p>
    </div>
  );
}

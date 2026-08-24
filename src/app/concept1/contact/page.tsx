import type { Metadata } from "next";

import { SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "Contact — PurpleDrop",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <section className="w-full px-6">
        <p className="mt-6 max-w-[800px] text-2xl leading-[1.2] font-normal tracking-[-0.02em] text-black sm:text-3xl md:text-4xl lg:text-[40px] lg:tracking-[-0.04em]">
          Contact page coming soon.
        </p>
      </section>
    </div>
  );
}

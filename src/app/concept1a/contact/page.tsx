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
        <p className="mt-6 max-w-[800px] text-base leading-tight font-light tracking-tight text-black sm:text-2xl md:text-4xl lg:text-[48px]">
          Contact page coming soon.
        </p>
      </section>
    </div>
  );
}

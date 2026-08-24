import type { Metadata } from "next";

import { SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "Contact — PurpleDrop",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <section className="page-px-wide w-full">
        <p className="mt-6 max-w-[540px] text-2xl leading-tight font-normal tracking-tight text-black sm:text-3xl lg:tracking-tighter">
          Contact page coming soon.
        </p>
      </section>
    </div>
  );
}

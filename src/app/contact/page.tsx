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
        <p className="text-hero-statement mt-6 max-w-[720px]">
          Contact page coming soon.
        </p>
      </section>
    </div>
  );
}

import { SiteHeader } from "@/components/site-header";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />

      <section className="w-full px-6">
        <p className="mt-6 max-w-[800px] text-2xl leading-[1.2] font-normal tracking-[-0.02em] text-black sm:text-3xl md:text-4xl lg:text-[40px] lg:tracking-[-0.04em]">
          Strategic product design agency for startups looking to raise their
          series A / B funding
        </p>
      </section>

      <WorkSection />
    </div>
  );
}

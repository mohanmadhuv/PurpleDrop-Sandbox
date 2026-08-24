import { SiteHeader } from "./_components/site-header";
import { WorkSection } from "./_components/work-section";

export default function Concept4Page() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />

      <section className="w-full px-6 md:px-20 lg:px-40">
        <p className="mt-30 max-w-[540px] text-2xl leading-[1.2] font-normal tracking-[-0.02em] text-black sm:text-3xl lg:tracking-[-0.04em]">
          Strategic product design agency for startups looking to raise their
          series A / B funding
        </p>
      </section>

      <WorkSection />
    </div>
  );
}

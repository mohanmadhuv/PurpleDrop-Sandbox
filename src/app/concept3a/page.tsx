import { SiteHeader } from "./_components/site-header";
import { WorkSection } from "./_components/work-section";

export default function Concept3APage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />

      <section className="page-px-wide w-full">
        <p className="mt-30 max-w-[540px] text-base leading-tight font-light tracking-tight text-black sm:text-2xl md:text-4xl lg:text-[48px]">
          Strategic product design agency for startups looking to raise their
          series A / B funding
        </p>
      </section>

      <WorkSection />
    </div>
  );
}

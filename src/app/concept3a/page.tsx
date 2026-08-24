import { SiteHeader } from "./_components/site-header";
import { WorkSection } from "./_components/work-section";

export default function Concept3APage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />

      <section className="page-px-wide w-full">
        <p className="mt-30 max-w-[720px] text-base leading-tight font-light tracking-tight text-black sm:text-xl md:text-2xl lg:text-[32px]">
          Strategic product design agency for startups looking to raise their
          series A / B funding
        </p>
      </section>

      <WorkSection />
    </div>
  );
}

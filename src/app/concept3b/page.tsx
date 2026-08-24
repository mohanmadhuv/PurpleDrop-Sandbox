import { SiteHeader } from "./_components/site-header";
import { WorkSection } from "./_components/work-section";

export default function Concept3BPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />

      <section className="page-px-wide w-full">
        <p className="mt-30 max-w-[540px] text-2xl leading-tight font-normal tracking-tight text-black sm:text-3xl lg:tracking-tighter">
          Strategic product design agency for startups looking to raise their
          series A / B funding
        </p>
      </section>

      <WorkSection />
    </div>
  );
}

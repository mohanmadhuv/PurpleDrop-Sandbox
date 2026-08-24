import { SiteHeader } from "./_components/site-header";
import { WorkSection } from "./_components/work-section";

export default function Concept1APage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />

      <section className="w-full px-6">
        <p className="mt-30 max-w-[800px] text-base leading-tight font-normal tracking-tight text-black">
          Strategic product design agency for startups looking to raise their
          series A / B funding
        </p>
      </section>

      <WorkSection />
    </div>
  );
}

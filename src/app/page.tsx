import { SiteHeader } from "./_components/site-header";
import { WorkSection } from "./_components/work-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />

      <section className="page-px-wide w-full">
        <p className="mt-30 max-w-[800px] text-[32px] leading-tight font-light tracking-tight text-black">
          Purpledrop is a product design partner for startups.
          We specialize in operational interfaces and design systems for AI-native products.
        </p>
      </section>

      <WorkSection />
    </div>
  );
}

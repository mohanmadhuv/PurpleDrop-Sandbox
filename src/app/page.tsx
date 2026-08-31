import { SiteHeader } from "./_components/site-header";
import { TypewriterPhrases } from "./_components/typewriter-phrases";
import { WorkSection } from "./_components/work-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />

      <section className="page-px-wide w-full">
        <p className="text-hero-statement mt-30 max-w-[800px]">
          Purpledrop, a design partner for AI-native experiences, specialized in{" "}
          <TypewriterPhrases />
        </p>
      </section>

      <WorkSection />
    </div>
  );
}

import { SiteHeader } from "./_components/site-header";
import { TypewriterPhrases } from "./_components/typewriter-phrases";
import { WorkSection } from "./_components/work-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />

      <section className="page-px-wide w-full">
        <p className="mt-30 max-w-[800px] text-[32px] leading-tight font-light tracking-tight text-black">
          Purpledrop, a design partner for AI-native experiences and specialized in{" "}
          <TypewriterPhrases />
        </p>
      </section>

      <WorkSection />
    </div>
  );
}

import { AboutSection } from "@/components/about/about-section";
import { ContactSection } from "@/components/contact/contact-section";
import { SiteFooter } from "@/components/footer/site-footer";
import { Hero } from "@/components/hero/hero";
import { JsonLd } from "@/components/seo/json-ld";
import { AiSection } from "@/components/sections/ai-section";
import { BuildSection } from "@/components/sections/build-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Ledger } from "@/components/sections/ledger";
import { Marquee } from "@/components/sections/marquee";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorkSection } from "@/components/work/work-section";
import { marqueeSummary } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <main>
        <Hero />
        <Ledger />
        <Marquee />
        <p className="sr">{marqueeSummary}</p>
        <BuildSection />
        <AiSection />
        <WorkSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

import { EmotionalHookSection } from "@/components/full-moon-retreat/EmotionalHookSection";
import { ExperienceSection } from "@/components/full-moon-retreat/ExperienceSection";
import { FaqSection } from "@/components/full-moon-retreat/FaqSection";
import { FinalCtaSection } from "@/components/full-moon-retreat/FinalCtaSection";
import { FullMoonBeltaneSection } from "@/components/full-moon-retreat/FullMoonBeltaneSection";
import { HeroSection } from "@/components/full-moon-retreat/HeroSection";
import { HostSection } from "@/components/full-moon-retreat/HostSection";
import { OutcomesSection } from "@/components/full-moon-retreat/OutcomesSection";
import { StickyMobileCta } from "@/components/full-moon-retreat/StickyMobileCta";
import { TestimonialsSection } from "@/components/full-moon-retreat/TestimonialsSection";
import { ValueStackSection } from "@/components/full-moon-retreat/ValueStackSection";
import { WhatHappensAfterReserveSection } from "@/components/full-moon-retreat/WhatHappensAfterReserveSection";

export default function FullMoonRetreatPage() {
  return (
    <main className="bg-[#F2EDE2] pb-24 text-[#9B4D32] md:pb-0">
      <HeroSection />
      <EmotionalHookSection />
      <OutcomesSection />
      <FullMoonBeltaneSection />
      <ExperienceSection />
      <ValueStackSection />
      <HostSection />
      <TestimonialsSection />
      <FaqSection />
      <WhatHappensAfterReserveSection />
      <FinalCtaSection />
      <StickyMobileCta />
    </main>
  );
}

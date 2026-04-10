import HeroSection from "@/components/full-moon-retreat/HeroSection";
import EmotionalHookSection from "@/components/full-moon-retreat/EmotionalHookSection";
import OutcomesSection from "@/components/full-moon-retreat/OutcomesSection";
import FullMoonBeltaneSection from "@/components/full-moon-retreat/FullMoonBeltaneSection";
import ExperienceSection from "@/components/full-moon-retreat/ExperienceSection";
import ValueStackSection from "@/components/full-moon-retreat/ValueStackSection";
import HostSection from "@/components/full-moon-retreat/HostSection";
import TestimonialsSection from "@/components/full-moon-retreat/TestimonialsSection";
import FaqSection from "@/components/full-moon-retreat/FaqSection";
import FinalCtaSection from "@/components/full-moon-retreat/FinalCtaSection";
import StickyMobileCta from "@/components/full-moon-retreat/StickyMobileCta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EmotionalHookSection />
      <OutcomesSection />
      <FullMoonBeltaneSection />
      <ExperienceSection />
      <ValueStackSection />
      <HostSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <StickyMobileCta />
    </main>
  );
}

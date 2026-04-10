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

export const metadata = {
  title: "Reconnecting to You: A Full Moon Retreat",
  description:
    "A 4-hour Full Moon retreat to help you regulate your nervous system, clear emotional weight, and reconnect with your inner clarity — guided by Anna Brooke.",
};

export default function FullMoonRetreatPage() {
  return (
    <main
      className="min-h-screen pb-16 md:pb-0"
      style={{ backgroundColor: "#F2EDE2", color: "#9B4D32" }}
    >
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

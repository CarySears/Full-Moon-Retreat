import Script from "next/script";
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
    <>
      <main className="bg-[#F2EDE2] pb-24 text-[#9B4D32] md:pb-0">
        <HeroSection />
        <EmotionalHookSection />
        <OutcomesSection />
        <FullMoonBeltaneSection />
        <HostSection />
        <TestimonialsSection />
        <ExperienceSection />
        <ValueStackSection />
        <FaqSection />
        <WhatHappensAfterReserveSection />
        <FinalCtaSection />
        <StickyMobileCta />
      </main>
      <Script id="payment-success-redirect" strategy="afterInteractive">{`
        (function () {
          var paymentFormId = "zbmQVs1NdzYD1ZOO2RNm";
          var thankYouPath = "/thank-you";

          function redirectToThankYou() {
            if (window.location.pathname === thankYouPath) return;
            window.location.assign(thankYouPath);
          }

          window.addEventListener("message", function (event) {
            if (event.origin !== "https://links.annabrookehealing.com") return;
            if (!Array.isArray(event.data) || event.data[0] !== "set-sticky-contacts") return;

            var userDataKey = typeof event.data[1] === "string" ? event.data[1] : "";
            var iframeId = typeof event.data[2] === "string" ? event.data[2] : "";
            if (!iframeId || userDataKey !== "embedded_iframe_" + iframeId) return;

            var iframe = document.getElementById(iframeId);
            if (!(iframe instanceof HTMLIFrameElement)) return;
            if (iframe.dataset.formId !== paymentFormId) return;
            if (iframe.contentWindow !== event.source) return;

            redirectToThankYou();
          });
        })();
      `}</Script>
    </>
  );
}

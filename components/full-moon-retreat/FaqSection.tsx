"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need any experience with breathwork or somatic practices?",
    answer: "No experience is needed. You’ll be guided every step of the way.",
  },
  {
    question: "Will this still feel powerful if it’s online?",
    answer:
      "Yes. This is a live guided online experience designed to help you feel supported, connected, and fully present from the comfort of your home.",
  },
  {
    question: "Do I have to share during the retreat?",
    answer:
      "No. All sharing is optional. You are welcome to participate in the way that feels safest and most supportive for you.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Most participants leave feeling lighter, calmer, clearer, and more connected to themselves.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#F2EDE2] py-14 md:py-20">
      <div className="mx-auto w-full max-w-[900px] px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-[#9B4D32] md:text-4xl">FAQs</h2>
        <div className="mt-10 divide-y" style={{ borderColor: "rgba(226,119,86,0.4)" }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div key={faq.question} className="py-2">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-lg text-[#9B4D32]"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-2xl leading-none" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-base text-[#9B4D32] md:text-lg">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-base text-[#9B4D32] md:text-lg">
          No pressure. No expectations. Just space to show up as you are.
        </p>
      </div>
    </section>
  );
}

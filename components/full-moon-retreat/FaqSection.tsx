"use client";

import { useState } from "react";

const faqs = [
  {
    question:
      "Do I need any experience with breathwork or somatic practices?",
    answer:
      "No experience is needed. You'll be guided every step of the way.",
  },
  {
    question: "Will this still feel powerful if it's online?",
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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-warm-cream py-14 md:py-20">
      <div className="mx-auto max-w-[780px] px-6">
        <h2 className="mb-12 text-center font-serif text-3xl text-dark-clay md:text-4xl">
          FAQs
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-coral/15 bg-blush/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-sans text-lg font-medium text-dark-clay transition-colors hover:bg-blush/50"
                >
                  <span>{faq.question}</span>
                  <span
                    className="ml-4 flex-shrink-0 text-2xl text-coral transition-transform duration-200"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 font-sans text-base leading-relaxed text-dark-clay/85">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

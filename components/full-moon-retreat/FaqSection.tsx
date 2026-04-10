"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need any experience with breathwork or somatic practices?",
    answer: "No experience is needed. You'll be guided every step of the way.",
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

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: "#F2EDE2" }}
    >
      <div className="max-w-[800px] mx-auto px-6">
        <h2
          className="font-serif text-3xl md:text-4xl text-center mb-12"
          style={{ color: "#9B4D32" }}
        >
          FAQs
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                border: "1px solid rgba(226,119,86,0.25)",
                backgroundColor: "#F3D9D0",
              }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2"
                style={{ color: "#9B4D32" }}
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-button-${index}`}
              >
                <span className="font-semibold text-base md:text-lg leading-snug">
                  {faq.question}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200"
                  style={{
                    backgroundColor: "#CE8F29",
                    transform:
                      openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 2V12M2 7H12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? "300px" : "0px",
                }}
              >
                <p
                  className="px-6 pb-6 text-base leading-relaxed"
                  style={{ color: "#9B4D32" }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

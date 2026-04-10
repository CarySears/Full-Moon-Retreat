const items = [
  "Gentle somatic movement",
  "A guided breathwork session",
  "Self-inquiry exercises",
  "Optional sharing in a safe, supported space",
  "Guided prompts to help you move forward with intention",
  "Personalized affirmations for continued integration",
];

export default function ExperienceSection() {
  return (
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: "#F2EDE2" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className="font-serif text-3xl md:text-4xl mb-4"
          style={{ color: "#9B4D32" }}
        >
          What You&apos;ll Experience
        </h2>

        <div
          className="w-12 h-0.5 mb-12"
          style={{ backgroundColor: "#E27756" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-4">
              <span
                className="mt-1 flex-shrink-0 text-lg leading-none"
                style={{ color: "#CE8F29" }}
              >
                ✦
              </span>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#9B4D32" }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

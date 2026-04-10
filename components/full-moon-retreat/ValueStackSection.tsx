const items = [
  "4-hour live guided experience",
  "Breathwork session ($50+ value)",
  "Somatic + emotional practices",
  "Real-time facilitation (not pre-recorded)",
  "Tools you can reuse after the retreat",
];

export default function ValueStackSection() {
  return (
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: "#F3D9D0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className="font-serif text-3xl md:text-4xl text-center mb-4"
          style={{ color: "#9B4D32" }}
        >
          What&apos;s Included
        </h2>

        <p
          className="text-center text-lg mb-12"
          style={{ color: "#9B4D32" }}
        >
          In this 4-hour experience, you&apos;ll receive:
        </p>

        <div className="max-w-2xl mx-auto space-y-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-5 rounded-xl px-6 py-5 shadow-sm"
              style={{
                backgroundColor: "#F2EDE2",
                boxShadow: "0 2px 12px rgba(155,77,50,0.07)",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#CE8F29" }}
              >
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <p
                className="text-base md:text-lg font-medium"
                style={{ color: "#9B4D32" }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-center text-base md:text-lg italic mt-12 max-w-xl mx-auto leading-relaxed"
          style={{ color: "#9B4D32" }}
        >
          A supportive, thoughtfully guided experience designed to create real
          internal shifts.
        </p>
      </div>
    </section>
  );
}

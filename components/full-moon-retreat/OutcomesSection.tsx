const outcomes = [
  "Feel calmer and more grounded",
  "Release emotional tension",
  "Gain clarity on your next steps",
  "Reconnect with your inner voice",

];

export default function OutcomesSection() {
  return (
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: "#F3D9D0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className="font-serif text-3xl md:text-4xl text-center mb-14"
          style={{ color: "#9B4D32" }}
        >
          By the end of this experience, you&apos;ll:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-2xl px-6 py-8 shadow-sm text-center"
              style={{
                backgroundColor: "#F2EDE2",
                boxShadow: "0 2px 16px rgba(155,77,50,0.08)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#A3B6E5" }}
              >
                <span className="text-white text-lg font-bold">✦</span>
              </div>
              <p
                className="text-base md:text-lg leading-snug font-medium"
                style={{ color: "#9B4D32" }}
              >
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

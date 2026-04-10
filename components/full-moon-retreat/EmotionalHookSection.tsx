export default function EmotionalHookSection() {
  return (
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: "#F2EDE2" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <div className="flex-1">
            <h2
              className="font-serif text-3xl md:text-4xl leading-snug mb-6"
              style={{ color: "#9B4D32" }}
            >
              Wherever you are in life&apos;s transitions… this is a space to come
              back to yourself.
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#9B4D32" }}
            >
              You&apos;ve been holding a lot. The noise. The pressure. The quiet
              knowing something needs to shift.
            </p>
          </div>

          <div className="flex-shrink-0 md:w-80 lg:w-96">
            <div
              className="rounded-2xl p-8 shadow-sm"
              style={{
                backgroundColor: "#F3D9D0",
                borderLeft: "4px solid #E27756",
              }}
            >
              <ul className="space-y-4">
                {["Slow down", "Listen inward", "Reconnect with what\u2019s true"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-lg font-medium"
                      style={{ color: "#9B4D32" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#E27756" }}
                      />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="mt-14 pt-10 border-t"
          style={{ borderColor: "rgba(226,119,86,0.3)" }}
        >
          <p
            className="font-serif text-2xl md:text-3xl text-center italic"
            style={{ color: "#9B4D32" }}
          >
            This is where you tell yourself the truth — faster.
          </p>
        </div>
      </div>
    </section>
  );
}

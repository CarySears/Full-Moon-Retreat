const outcomes = [
  "Feel calmer and more grounded",
  "Release emotional tension",
  "Gain clarity on your next steps",
  "Reconnect with your inner voice",
];

export default function OutcomesSection() {
  return (
    <section className="bg-blush py-14 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <h2 className="mb-12 text-center font-serif text-3xl text-dark-clay md:text-4xl">
          By the end of this experience, you&rsquo;ll:
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-xl bg-warm-cream px-6 py-8 text-center shadow-sm"
            >
              <p className="font-serif text-lg text-dark-clay">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const inclusions = [
  "4-hour live guided experience",
  "Breathwork session ($50+ value)",
  "Somatic + emotional practices",
  "Real-time facilitation (not pre-recorded)",
  "Tools you can reuse after the retreat",
];

export default function ValueStackSection() {
  return (
    <section className="bg-blush py-14 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <h2 className="mb-4 text-center font-serif text-3xl text-dark-clay md:text-4xl">
          What&rsquo;s Included
        </h2>
        <p className="mb-10 text-center font-sans text-lg text-dark-clay/85">
          In this 4-hour experience, you&rsquo;ll receive:
        </p>
        <div className="mx-auto max-w-[640px] space-y-4">
          {inclusions.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-lg bg-warm-cream px-6 py-4 shadow-sm"
            >
              <span className="mt-1.5 block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gold" />
              <p className="font-sans text-lg text-dark-clay">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center font-serif text-lg italic text-dark-clay/80">
          A supportive, thoughtfully guided experience designed to create real
          internal shifts.
        </p>
      </div>
    </section>
  );
}

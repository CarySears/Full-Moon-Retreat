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
    <section className="bg-warm-cream py-14 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <h2 className="mb-10 font-serif text-3xl text-dark-clay md:text-4xl">
          What You&rsquo;ll Experience
        </h2>
        <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-2 block h-2 w-2 flex-shrink-0 rounded-full bg-coral" />
              <p className="font-sans text-lg leading-relaxed text-dark-clay/90">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

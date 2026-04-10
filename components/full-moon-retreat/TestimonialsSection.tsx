const testimonials = [
  {
    quote:
      "Anna brings incredible warmth and clarity. I felt lighter in just hours.",
    name: "Client testimonial",
  },
  {
    quote:
      "Her guidance helped me reconnect with myself in a way that felt both grounding and transformative.",
    name: "Client testimonial",
  },
  {
    quote:
      "I left feeling calmer, clearer, and more connected to what I truly needed.",
    name: "Client testimonial",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-blush py-14 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <h2 className="mb-12 text-center font-serif text-3xl text-dark-clay md:text-4xl">
          What People Are Saying
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-xl bg-warm-cream px-8 py-8 shadow-sm"
            >
              <p className="mb-6 font-serif text-lg leading-relaxed text-dark-clay">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="font-sans text-sm text-dark-clay/70">
                — {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: "#F3D9D0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className="font-serif text-3xl md:text-4xl text-center mb-14"
          style={{ color: "#9B4D32" }}
        >
          What People Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl px-7 py-8 shadow-sm flex flex-col"
              style={{
                backgroundColor: "#F2EDE2",
                boxShadow: "0 2px 16px rgba(155,77,50,0.07)",
              }}
            >
              <span
                className="font-serif text-5xl leading-none mb-4 block"
                style={{ color: "#CE8F29", opacity: 0.6 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className="text-base md:text-lg leading-relaxed flex-1 italic mb-6"
                style={{ color: "#9B4D32" }}
              >
                {t.quote}
              </p>
              <p
                className="text-sm font-semibold tracking-wide uppercase"
                style={{ color: "#E27756" }}
              >
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

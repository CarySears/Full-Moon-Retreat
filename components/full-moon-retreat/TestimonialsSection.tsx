const testimonials = [
  {
    quote: "Anna brings incredible warmth and clarity. I felt lighter in just hours.",
    name: "Client testimonial",
  },
  {
    quote:
      "Her guidance helped me reconnect with myself in a way that felt both grounding and transformative.",
    name: "Client testimonial",
  },
  {
    quote: "I left feeling calmer, clearer, and more connected to what I truly needed.",
    name: "Client testimonial",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#F3D9D0] py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-[#9B4D32] md:text-4xl">
          What People Are Saying
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.quote}
              className="rounded-2xl bg-[#F2EDE2] p-7"
              style={{ boxShadow: "0 10px 24px rgba(155,77,50,0.1)" }}
            >
              <p className="text-lg text-[#9B4D32]">“{testimonial.quote}”</p>
              <footer className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#9B4D32]">
                {testimonial.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

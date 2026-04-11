const testimonials = [
  {
    headline: "“I didn’t expect such a deep shift in just a few hours.”",
    body: "I left feeling lighter, clearer, and more like myself again.",
    name: "Client Name",
  },
  {
    headline:
      "“Anna creates a space where you feel completely safe to be honest with yourself.”",
    body: "That alone is transformative.",
    name: "Client Name",
  },
  {
    headline: "“I left feeling calmer, clearer, and more connected to what I truly needed.”",
    body: "This experience stayed with me long after it ended.",
    name: "Client Name",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#F3D9D0] py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-[#9B4D32] md:text-4xl">
          This work stays with you.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.headline}
              className="rounded-2xl bg-[#F2EDE2] p-7"
              style={{ boxShadow: "0 10px 24px rgba(155,77,50,0.1)" }}
            >
              <p className="text-lg font-semibold text-[#9B4D32]">{testimonial.headline}</p>
              <p className="mt-4 text-lg text-[#9B4D32]">{testimonial.body}</p>
              <footer className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#9B4D32]">
                {testimonial.name}
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-8 text-center text-lg text-[#9B4D32]">
          Join others who have experienced deep clarity, emotional release, and reconnection
          through Anna’s work.
        </p>
      </div>
    </section>
  );
}

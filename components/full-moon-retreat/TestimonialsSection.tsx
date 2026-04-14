const testimonials = [
  {
    body: "Anna is wonderful! I had an amazing experience during a breath class. Truly transformative and felt supported by Anna throughout the process. She really offers a safe, compassionate space to experience whatever it is you need to in that moment.",
    headline: "Anna is wonderful!",
    name: "Emery M",
  },
  {
    body: "I was carrying around stress for years. Between family challenges, moving, and Covid, I couldn’t quite get my bearings around removing stress-particularly the kind behind your eyes that lingers as a constant weight. After working with Anna, I was cleared of that stress. It is unbelievable! I have done everything from therapy to meditation, cutting out sugar, alcohol, caffeine, adding exercise - you name it, and I tried it. Anna’s work provided a breakthrough I could only dream of. Run, don’t walk, to make an appointment with her!",
    headline: "I was carrying around stress for years.",
    name: "Katherine M.",
  },
  {
    body: "Anna is the best! She always brings so much positive, warm energy to the room and truly loves what she does. I would recommend her to anyone. Such an inspiration.",
    headline: "Anna is the best!",
    name: "Christina B",
  },
  {
    body: "I finally felt calm for the first time in months. I left with clarity on what I needed to do next.",
    headline: "I finally felt calm for the first time in months.",
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
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.name ?? `testimonial-${index}`}
              className="rounded-2xl bg-[#F2EDE2] p-7"
              style={{ boxShadow: "0 10px 24px rgba(155,77,50,0.1)" }}
            >
              <p className="text-base font-semibold tracking-[0.08em] text-[#CE8F29]">★★★★★</p>
              <p className="mt-4 text-lg font-semibold text-[#9B4D32]">{testimonial.headline}</p>
              <p className="mt-3 text-lg text-[#9B4D32]">{testimonial.body}</p>
              {testimonial.name ? (
                <footer className="mt-5 text-sm font-semibold text-[#9B4D32]">{testimonial.name}</footer>
              ) : null}
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

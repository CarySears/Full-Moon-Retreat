const outcomes = [
  "Feel your body settle and your mind quiet",
  "Release emotional tension your body has been holding onto",
  "Know what your next step actually is — and trust it",
  "Reconnect with your inner voice",
];

export function OutcomesSection() {
  return (
    <section className="bg-[#F3D9D0] py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-[#9B4D32] md:text-4xl">
          By the end of this experience, you’ll:
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <article
              key={outcome}
              className="rounded-2xl bg-[#F2EDE2] p-6"
              style={{ boxShadow: "0 10px 24px rgba(155,77,50,0.1)" }}
            >
              <p className="text-lg text-[#9B4D32]">{outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const includedItems = [
  "4-hour live guided experience",
  "Breathwork session ($50+ value)",
  "Somatic + emotional practices",
  "Real-time facilitation (not pre-recorded)",
  "Tools you can reuse after the retreat",
];

export function ValueStackSection() {
  return (
    <section className="bg-[#F3D9D0] py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <h2 className="font-serif text-3xl text-[#9B4D32] md:text-4xl">What’s Included</h2>
        <p className="mt-4 text-lg text-[#9B4D32]">In this 4-hour experience, you’ll receive:</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {includedItems.map((item) => (
            <article
              key={item}
              className="rounded-xl bg-[#F2EDE2] px-5 py-4 text-lg text-[#9B4D32]"
              style={{ boxShadow: "0 10px 24px rgba(155,77,50,0.1)" }}
            >
              {item}
            </article>
          ))}
        </div>
        <p className="mt-8 text-lg text-[#9B4D32]">
          A supportive, thoughtfully guided experience designed to create real internal shifts.
        </p>
      </div>
    </section>
  );
}

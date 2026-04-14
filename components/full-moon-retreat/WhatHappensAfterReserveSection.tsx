const reserveChecklist = [
  "✔ Instant confirmation email",
  "✔ Zoom link sent before the event",
  "✔ Simple instructions to prepare",
  "✔ Optional reminders so you don’t miss it",
];

export function WhatHappensAfterReserveSection() {
  return (
    <section className="bg-[#F2EDE2] pb-14 pt-4 md:pb-20 md:pt-4">
      <div className="mx-auto w-full max-w-[900px] px-6 text-center md:px-10">
        <p className="text-base font-semibold text-[#9B4D32] md:text-lg">
          Spots are intentionally limited to keep this experience intimate.
        </p>
        <h2 className="mt-6 font-serif text-3xl text-[#9B4D32] md:text-4xl">
          What Happens After You Reserve
        </h2>
        <p className="mt-6 text-lg text-[#9B4D32]">
          Once you reserve your spot, everything is designed to feel simple and supportive.
        </p>
        <ul className="mx-auto mt-8 w-full max-w-[640px] space-y-3 text-left text-lg text-[#9B4D32]">
          {reserveChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-8 text-lg text-[#9B4D32]">
          You’ll know exactly what to expect, so you can arrive feeling ready.
        </p>
        <p className="mt-3 text-lg text-[#9B4D32]">No tech stress. No guesswork.</p>
      </div>
    </section>
  );
}

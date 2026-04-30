export function ThisIsForYouSection() {
  return (
    <section className="bg-[#F2EDE2] py-14 md:py-20">
      <div className="mx-auto w-full max-w-[900px] px-6 md:px-10">
        <div className="rounded-2xl bg-[#F3D9D0] px-8 py-10 md:px-12 md:py-12" style={{ boxShadow: "0 10px 30px rgba(155,77,50,0.08)" }}>
          <h2 className="font-serif text-2xl leading-snug text-[#9B4D32] md:text-3xl">
            This is for you if:
          </h2>
          <ul className="mt-6 space-y-4">
            <li className="flex gap-3 text-lg text-[#9B4D32]">
              <span className="mt-[3px] shrink-0 text-[#CE8F29]">•</span>
              <span>You've been holding a lot and haven't had space to process it</span>
            </li>
            <li className="flex gap-3 text-lg text-[#9B4D32]">
              <span className="mt-[3px] shrink-0 text-[#CE8F29]">•</span>
              <span>You're in a transition and need clarity</span>
            </li>
            <li className="flex gap-3 text-lg text-[#9B4D32]">
              <span className="mt-[3px] shrink-0 text-[#CE8F29]">•</span>
              <span>You've tried things, but nothing has fully landed</span>
            </li>
            <li className="flex gap-3 text-lg text-[#9B4D32]">
              <span className="mt-[3px] shrink-0 text-[#CE8F29]">•</span>
              <span>You want support without pressure or performance</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

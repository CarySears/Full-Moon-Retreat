export function FinalCtaSection() {
  return (
    <section id="reserve" className="bg-[#F3D9D0] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[900px] px-6 text-center md:px-10">
        <h2 className="font-serif text-3xl leading-tight text-[#9B4D32] md:text-5xl">
          You don’t need to figure everything out. You just need space to listen.
        </h2>
        <p className="mt-6 text-lg text-[#9B4D32] md:text-xl">
          Join us for this powerful Full Moon experience and give yourself the space to reset,
          reconnect, and move forward with clarity.
        </p>
        <p className="mt-8 text-xl font-semibold text-[#9B4D32] md:text-2xl">
          $125 — Live, Guided Online Experience
        </p>
        <a
          href="#reserve"
          className="mt-8 inline-flex rounded-xl bg-[#CE8F29] px-8 py-4 text-base font-semibold text-[#9B4D32] transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B4D32] md:text-lg"
          style={{ boxShadow: "0 12px 26px rgba(155,77,50,0.16)" }}
        >
          Reserve Your Spot — $125
        </a>
        <p className="mt-5 text-base text-[#9B4D32]">Limited spots available</p>
      </div>
    </section>
  );
}

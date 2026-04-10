import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[88vh] w-full items-center overflow-hidden">
      <Image
        src="/images/full-moon-hero.jpg"
        alt="Woman in a moonlit forest clearing holding a candle."
        fill
        priority
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(155,77,50,0.68) 0%, rgba(226,119,86,0.52) 45%, rgba(243,217,208,0.48) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-20 text-center md:px-10">
        <div className="mx-auto max-w-[850px]">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#F2EDE2] md:text-base">
            Live Online Full Moon Retreat
          </p>
          <h1 className="font-serif text-4xl leading-tight text-[#F2EDE2] md:text-6xl">
            Release What You’ve Been Holding — and Return to Your Truth
          </h1>
          <p className="mt-6 text-lg text-[#F2EDE2] md:text-xl">
            A 4-hour Full Moon retreat to help you regulate your nervous system, clear emotional
            weight, and reconnect with your inner clarity — guided by Anna Brooke.
          </p>
          <p className="mt-6 text-base text-[#F2EDE2] md:text-lg">
            20+ years guiding people through life transitions, healing, and self-reconnection
          </p>
          <p className="mt-8 text-xl font-semibold text-[#F2EDE2] md:text-2xl">
            $125 — Live, Guided Online Experience
          </p>
          <a
            href="#reserve"
            className="mt-8 inline-flex rounded-xl bg-[#CE8F29] px-8 py-4 text-base font-semibold text-[#9B4D32] transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2EDE2] md:text-lg"
            style={{ boxShadow: "0 12px 26px rgba(155,77,50,0.2)" }}
          >
            Reserve Your Spot for the Full Moon Retreat
          </a>
          <p className="mt-5 text-sm text-[#F2EDE2] md:text-base">
            ✨ Live guided experience   ✨ Join from home   ✨ Limited spots
          </p>
        </div>
      </div>
    </section>
  );
}

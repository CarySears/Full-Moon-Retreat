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
          <Image
            src="https://assets.cdn.filesafe.space/jNqy5QsBJRJ9cjslwRNp/media/69c538d7bfec12bbe62784d2.jpg"
            alt="Retreat logo"
            width={192}
            height={192}
            className="mx-auto mb-8 h-auto w-40 md:w-48"
          />
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#F2EDE2] md:text-base">
            Live Online Full Moon Retreat
          </p>
          <h1 className="font-serif text-4xl leading-tight text-[#F2EDE2] md:text-6xl">
            <span className="block">You’ve Been Holding a Lot.</span>
            <span className="mt-1 block">This Is Where You Let It Go.</span>
          </h1>
          <p className="mt-8 text-lg text-[#F2EDE2] md:text-xl">
            A live, guided 4-hour experience to release emotional weight and reconnect with
            yourself.
          </p>
          <p className="mt-8 text-base text-[#F2EDE2] md:text-lg">
            <span className="block">Join us live (one-time event):</span>
            <span className="block">Sat, May 2 • 11am–3pm EDT • Online</span>
          </p>
          <p className="mt-8 text-xl font-semibold text-[#F2EDE2] md:text-2xl">
            $125 — Live Guided Experience
          </p>
          <a
            href="#reserve"
            className="mt-10 inline-flex w-full justify-center rounded-xl bg-[#CE8F29] px-8 py-5 text-base font-semibold text-[#9B4D32] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2EDE2] sm:w-auto md:text-lg"
            style={{ boxShadow: "0 14px 30px rgba(155,77,50,0.22)" }}
          >
            Reserve My Spot — $125
          </a>
          <p className="mt-4 text-sm text-[#F2EDE2] md:text-base">
            Takes 60 seconds to reserve your spot
          </p>
        </div>
      </div>
    </section>
  );
}

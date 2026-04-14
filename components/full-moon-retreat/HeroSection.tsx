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
      <div className="absolute left-8 top-8 z-20 flex items-center gap-2 md:z-0 md:gap-3">
        <Image
          src="/images/retreat-logo.png"
          alt="Retreat logo"
          width={56}
          height={56}
          className="w-[44px] opacity-95 md:w-[56px]"
        />
        <span className="font-sans text-[13px] font-medium leading-none tracking-tight text-[#F2EDE2] opacity-90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] md:text-base">
          Anna Brooke Healing
        </span>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-20 pt-28 text-center md:px-10 md:py-20">
        <div className="mx-auto max-w-[850px]">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#F2EDE2] md:text-base">
            Live Online Full Moon Retreat
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#F2EDE2] [text-shadow:0_5px_20px_rgba(0,0,0,0.58),0_1px_2px_rgba(0,0,0,0.45)] md:text-6xl">
            You’ve Been Holding a Lot. This Is Where You Let It Go.
          </h1>
          <p className="mt-8 text-lg font-medium text-[#F2EDE2] [text-shadow:0_2px_10px_rgba(0,0,0,0.45)] md:text-xl">
            A live, guided 4-hour experience to release emotional weight and reconnect with yourself.
          </p>
          <p className="mt-8 text-base font-semibold text-[#F2EDE2] [text-shadow:0_2px_9px_rgba(0,0,0,0.45)] md:text-lg">
            May 2 • 11am–3pm EDT
          </p>
          <p className="mt-8 text-base font-medium text-[#F2EDE2] [text-shadow:0_2px_10px_rgba(0,0,0,0.45)] md:text-lg">
            <span className="block">Guided by Anna Brooke, 20+ years supporting life transitions</span>
            <span className="block">Featured in Huffington Post, BuzzFeed, and Page Six</span>
          </p>
          <p className="mt-8 text-xl font-semibold text-[#F2EDE2] [text-shadow:0_3px_12px_rgba(0,0,0,0.5)] md:text-2xl">
            Spots are intentionally limited...
          </p>
          <a
            href="#reserve"
            className="mt-10 inline-flex w-full justify-center rounded-xl bg-[#CE8F29] px-8 py-5 text-base font-semibold text-[#9B4D32] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2EDE2] sm:w-auto md:text-lg"
            style={{ boxShadow: "0 14px 30px rgba(155,77,50,0.22)" }}
          >
            Save My Spot →
          </a>
          <p className="mt-4 text-sm text-[#F2EDE2] md:text-base">
            Takes 60 seconds • Instant confirmation
          </p>
        </div>
      </div>
    </section>
  );
}

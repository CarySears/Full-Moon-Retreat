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
            LIVE ONLINE FULL MOON RETREAT
          </p>
          <h1 className="mx-auto flex flex-col items-center text-center font-serif text-3xl font-semibold leading-tight text-[#F2EDE2] [text-shadow:0_5px_20px_rgba(0,0,0,0.58),0_1px_2px_rgba(0,0,0,0.45)] sm:text-4xl md:text-6xl">
            <span className="block text-center">You’ve Been Holding a Lot.</span>
            <span className="block text-center">This Is Where You Safely Let It Go</span>
          </h1>
          <p className="mt-8 text-lg font-medium text-[#F2EDE2] [text-shadow:0_2px_10px_rgba(0,0,0,0.45)] md:text-xl">
            A live, guided 4-hour experience to release emotional weight and reconnect with yourself.
          </p>
          <p className="mt-8 text-base font-semibold text-[#F2EDE2] [text-shadow:0_2px_9px_rgba(0,0,0,0.45)] md:text-lg">
            May 2 • 11am–3pm EDT
          </p>
          <div className="relative mt-10 inline-flex w-full sm:w-auto">
            <a
              href="#reserve"
              className="inline-flex w-full justify-center rounded-xl bg-[#CE8F29] px-9 py-[1.375rem] text-base font-semibold text-[#9B4D32] shadow-[0_14px_30px_rgba(155,77,50,0.22)] transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_18px_34px_rgba(155,77,50,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2EDE2] sm:w-auto md:text-lg"
            >
              Save My Spot →
            </a>
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-0">
              <iframe
                src="https://links.annabrookehealing.com/widget/form/zbmQVs1NdzYD1ZOO2RNm"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
                id="inline-zbmQVs1NdzYD1ZOO2RNm-hero"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Full Moon Retreat"
                data-height="959"
                data-layout-iframe-id="inline-zbmQVs1NdzYD1ZOO2RNm-hero"
                data-form-id="zbmQVs1NdzYD1ZOO2RNm"
                title="Full Moon Retreat"
              />
            </div>
          </div>
          <p className="mt-4 text-sm text-[#F2EDE2] md:text-base">
            Takes 60 seconds • Instant confirmation
          </p>
          <p className="mt-8 text-base font-medium text-[#F2EDE2] [text-shadow:0_2px_10px_rgba(0,0,0,0.45)] md:text-lg">
            <span className="block">Guided by Anna Brooke, 20+ years supporting life transitions</span>
            <span className="block">Featured in Huffington Post, BuzzFeed, and Page Six</span>
          </p>
          <p className="mt-8 text-xl font-semibold text-[#F2EDE2] [text-shadow:0_3px_12px_rgba(0,0,0,0.5)] md:text-2xl">
            Spots are intentionally limited to keep this experience intimate.
          </p>
        </div>
      </div>
    </section>
  );
}

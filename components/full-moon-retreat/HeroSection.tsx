import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/full-moon-hero.jpg"
        alt="A calm night scene under a luminous full moon"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-clay/70 via-dark-clay/50 to-dark-clay/70" />
      <div className="relative z-10 mx-auto max-w-[850px] px-6 py-20 text-center">
        <p className="mb-4 font-sans text-sm uppercase tracking-[0.2em] text-warm-cream/90">
          Live Online Full Moon Retreat
        </p>
        <h1 className="mb-6 font-serif text-4xl leading-tight text-warm-cream md:text-5xl lg:text-6xl">
          Release What You&rsquo;ve Been Holding — and Return to Your Truth
        </h1>
        <p className="mx-auto mb-6 max-w-[680px] font-sans text-lg leading-relaxed text-warm-cream/90 md:text-xl">
          A 4-hour Full Moon retreat to help you regulate your nervous system,
          clear emotional weight, and reconnect with your inner clarity — guided
          by Anna Brooke.
        </p>
        <p className="mb-4 font-sans text-sm text-warm-cream/80">
          20+ years guiding people through life transitions, healing, and
          self-reconnection
        </p>
        <p className="mb-8 font-serif text-xl text-gold md:text-2xl">
          $125 — Live, Guided Online Experience
        </p>
        <a
          href="#reserve"
          className="inline-block rounded-lg bg-gold px-8 py-4 font-sans text-lg font-semibold text-white shadow-md transition-all duration-200 hover:brightness-90"
        >
          Reserve Your Spot for the Full Moon Retreat
        </a>
        <p className="mt-6 font-sans text-sm text-warm-cream/80">
          ✨ Live guided experience &nbsp;&nbsp; ✨ Join from home &nbsp;&nbsp;
          ✨ Limited spots
        </p>
      </div>
    </section>
  );
}

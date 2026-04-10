import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/full-moon-hero.jpg"
          alt="A woman standing in a forest clearing under a full moon, holding a glowing candle"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(155,77,50,0.55) 0%, rgba(206,143,41,0.35) 40%, rgba(155,77,50,0.70) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[850px] mx-auto px-6 py-20 text-center">
        <p
          className="text-sm font-semibold tracking-[0.2em] uppercase mb-6"
          style={{ color: "#F3D9D0" }}
        >
          Live Online Full Moon Retreat
        </p>

        <h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
          style={{ color: "#F2EDE2" }}
        >
          Release What You&apos;ve Been Holding — and Return to Your Truth
        </h1>

        <p
          className="text-lg md:text-xl leading-relaxed mb-5 max-w-2xl mx-auto"
          style={{ color: "#F3D9D0" }}
        >
          A 4-hour Full Moon retreat to help you regulate your nervous system,
          clear emotional weight, and reconnect with your inner clarity —
          guided by Anna Brooke.
        </p>

        <p
          className="text-sm md:text-base italic mb-8"
          style={{ color: "#A3B6E5" }}
        >
          20+ years guiding people through life transitions, healing, and
          self-reconnection
        </p>

        <p
          className="text-base font-semibold mb-8"
          style={{ color: "#F2EDE2" }}
        >
          $125 — Live, Guided Online Experience
        </p>

        <a
          href="#reserve"
          className="btn-gold inline-block px-8 py-4 rounded-xl text-base md:text-lg font-semibold"
          style={{
            color: "#F2EDE2",
            boxShadow: "0 4px 24px rgba(206,143,41,0.30)",
          }}
        >
          Reserve Your Spot for the Full Moon Retreat
        </a>

        <p
          className="mt-5 text-sm tracking-wide"
          style={{ color: "#F3D9D0" }}
        >
          ✨ Live guided experience &nbsp; ✨ Join from home &nbsp; ✨ Limited
          spots
        </p>
      </div>
    </section>
  );
}

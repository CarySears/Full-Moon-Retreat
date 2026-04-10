export default function FinalCtaSection() {
  return (
    <section id="reserve" className="bg-blush py-14 md:py-20">
      <div className="mx-auto max-w-[780px] px-6 text-center">
        <h2 className="mb-6 font-serif text-3xl leading-snug text-dark-clay md:text-4xl">
          You don&rsquo;t need to figure everything out. You just need space to
          listen.
        </h2>
        <p className="mb-6 font-sans text-lg leading-relaxed text-dark-clay/90">
          Join us for this powerful Full Moon experience and give yourself the
          space to reset, reconnect, and move forward with clarity.
        </p>
        <p className="mb-8 font-serif text-xl text-gold md:text-2xl">
          $125 — Live, Guided Online Experience
        </p>
        <a
          href="#reserve"
          className="inline-block rounded-lg bg-gold px-10 py-4 font-sans text-lg font-semibold text-white shadow-md transition-all duration-200 hover:brightness-90"
        >
          Reserve Your Spot — $125
        </a>
        <p className="mt-6 font-sans text-sm text-dark-clay/70">
          Limited spots available
        </p>
      </div>
    </section>
  );
}

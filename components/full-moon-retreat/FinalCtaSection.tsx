export default function FinalCtaSection() {
  return (
    <section
      id="reserve"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#F3D9D0" }}
    >
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-7"
          style={{ color: "#9B4D32" }}
        >
          You don&apos;t need to figure everything out. You just need space to
          listen.
        </h2>

        <p
          className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto"
          style={{ color: "#9B4D32" }}
        >
          Join us for this powerful Full Moon experience and give yourself the
          space to reset, reconnect, and move forward with clarity.
        </p>

        <p
          className="text-base font-semibold mb-8"
          style={{ color: "#9B4D32" }}
        >
          $125 — Live, Guided Online Experience
        </p>

        <a
          href="#reserve"
          className="btn-gold inline-block px-10 py-5 rounded-xl text-lg font-semibold mb-5"
          style={{
            color: "#F2EDE2",
            boxShadow: "0 4px 24px rgba(206,143,41,0.28)",
          }}
        >
          Reserve Your Spot — $125
        </a>

        <p
          className="block text-sm font-medium tracking-wide"
          style={{ color: "#E27756" }}
        >
          Limited spots available
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";

const trustBullets = [
  "20+ years of experience",
  "Author, speaker, and healing arts practitioner",
  "Trusted guide for life transitions, healing, and self-reconnection",
];

export default function HostSection() {
  return (
    <section className="bg-warm-cream py-14 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[400px] overflow-hidden rounded-2xl">
            <Image
              src="/images/anna-brooke.jpg"
              alt="Anna Brooke"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-6 font-serif text-3xl text-dark-clay md:text-4xl">
              Meet Anna Brooke
            </h2>
            <p className="mb-4 font-sans text-lg leading-relaxed text-dark-clay/90">
              Anna Brooke is an author, speaker, and healing arts practitioner
              with 20+ years of experience helping people navigate life
              transitions and reconnect with themselves.
            </p>
            <p className="mb-8 font-sans text-base font-medium text-gold">
              Her work has been featured in Huffington Post, BuzzFeed, and Page
              Six.
            </p>
            <ul className="space-y-3">
              {trustBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1.5 block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-coral" />
                  <span className="font-sans text-base text-dark-clay/90">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

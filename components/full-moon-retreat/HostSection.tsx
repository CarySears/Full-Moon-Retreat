import Image from "next/image";

const trustBullets = [
  "20+ years of experience",
  "Author, speaker, and healing arts practitioner",
  "Trusted guide for life transitions, healing, and self-reconnection",
];

export default function HostSection() {
  return (
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: "#F2EDE2" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <div className="flex-shrink-0 w-full md:w-72 lg:w-80">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/anna-brooke.jpg"
                alt="Portrait of Anna Brooke"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </div>

          <div className="flex-1">
            <h2
              className="font-serif text-3xl md:text-4xl mb-6"
              style={{ color: "#9B4D32" }}
            >
              Meet Anna Brooke
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed mb-5"
              style={{ color: "#9B4D32" }}
            >
              Anna Brooke is an author, speaker, and healing arts practitioner
              with 20+ years of experience helping people navigate life
              transitions and reconnect with themselves.
            </p>

            <p
              className="text-sm font-semibold tracking-wide uppercase mb-8"
              style={{ color: "#CE8F29" }}
            >
              Her work has been featured in Huffington Post, BuzzFeed, and Page
              Six.
            </p>

            <ul className="space-y-4">
              {trustBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-base md:text-lg"
                  style={{ color: "#9B4D32" }}
                >
                  <span
                    className="mt-1 flex-shrink-0"
                    style={{ color: "#E27756" }}
                  >
                    ✦
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const trustItems = [
  "20+ years of experience",
  "Author, speaker, and healing arts practitioner",
  "Trusted guide for life transitions, healing, and self-reconnection",
];

export function HostSection() {
  return (
    <section className="bg-[#F2EDE2] py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 md:grid-cols-2 md:items-center md:gap-14 md:px-10">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-3xl">
          <Image
            src="https://assets.cdn.filesafe.space/jNqy5QsBJRJ9cjslwRNp/media/684dd3a28bc25a3f9d44af4d.png"
            alt="Portrait of Anna Brooke"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl text-[#9B4D32] md:text-4xl">Meet Anna Brooke</h2>
          <p className="mt-4 text-lg text-[#9B4D32]">
            Trusted by clients navigating life transitions.
          </p>
          <p className="mt-6 text-lg text-[#9B4D32]">
            Anna Brooke has spent over 20 years guiding people through life’s most meaningful
            transitions, helping them reconnect with themselves, find clarity, and move forward
            with trust.
          </p>
          <p className="mt-5 text-lg text-[#9B4D32]">
            Her work has been featured in Huffington Post, BuzzFeed, and Page Six.
          </p>
          <ul className="mt-6 space-y-3 text-base text-[#9B4D32] md:text-lg">
            {trustItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2.5 w-2.5 flex-none rounded-full bg-[#E27756]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

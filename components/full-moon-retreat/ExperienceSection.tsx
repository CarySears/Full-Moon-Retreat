const experienceItems = [
  "Gently release stored tension from your body",
  "Experience guided breathwork in a safe, supported way",
  "Reflect through self-inquiry that brings hidden truths into focus",
  "Share only if it feels supportive — never because you have to",
  "Use guided prompts to move forward with more clarity and intention",
  "Leave with personalized affirmations that support continued integration",
];

export function ExperienceSection() {
  return (
    <section className="bg-[#F2EDE2] py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <h2 className="font-serif text-3xl text-[#9B4D32] md:text-4xl">What You’ll Experience</h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          {experienceItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl bg-[#F3D9D0] px-5 py-4 text-lg text-[#9B4D32]"
              style={{ boxShadow: "0 8px 20px rgba(155,77,50,0.08)" }}
            >
              <span className="mt-2 inline-block h-2.5 w-2.5 flex-none rounded-full bg-[#E27756]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

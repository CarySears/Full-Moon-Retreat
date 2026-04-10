export function EmotionalHookSection() {
  return (
    <section className="bg-[#F2EDE2] py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 md:grid-cols-2 md:items-start md:gap-14 md:px-10">
        <div>
          <h2 className="font-serif text-3xl leading-tight text-[#9B4D32] md:text-4xl">
            Wherever you are in life’s transitions… this is a space to come back to yourself.
          </h2>
          <p className="mt-6 text-lg text-[#9B4D32]">
            You’ve been holding a lot. The noise. The pressure. The quiet knowing something needs
            to shift.
          </p>
        </div>
        <aside
          className="rounded-2xl bg-[#F3D9D0] p-8"
          style={{ boxShadow: "0 12px 28px rgba(155,77,50,0.1)" }}
        >
          <ul className="space-y-4 text-lg text-[#9B4D32]">
            <li>• Slow down</li>
            <li>• Listen inward</li>
            <li>• Reconnect with what’s true</li>
          </ul>
        </aside>
      </div>
      <div className="mx-auto mt-10 w-full max-w-[1200px] px-6 md:mt-12 md:px-10">
        <p className="rounded-2xl bg-[#A3B6E5] px-6 py-5 text-center font-serif text-2xl leading-tight text-[#9B4D32] md:text-3xl">
          This is where you tell yourself the truth — faster.
        </p>
      </div>
    </section>
  );
}

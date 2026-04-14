export function EmotionalHookSection() {
  return (
    <section className="bg-[#F2EDE2] py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 md:grid-cols-2 md:items-start md:gap-14 md:px-10">
        <div>
          <h2 className="font-serif text-3xl leading-tight text-[#9B4D32] md:text-4xl">
            You’ve been carrying more than you let on.
          </h2>
          <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-[#9B4D32]">
            {`The noise.
The pressure.
The quiet knowing that something needs to shift.

This is a space to slow down, listen inward, and reconnect with what’s true.`}
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
    </section>
  );
}

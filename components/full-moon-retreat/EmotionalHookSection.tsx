export default function EmotionalHookSection() {
  return (
    <section className="bg-warm-cream py-14 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
          <div>
            <h2 className="mb-6 font-serif text-3xl leading-snug text-dark-clay md:text-4xl">
              Wherever you are in life&rsquo;s transitions… this is a space to
              come back to yourself.
            </h2>
            <p className="font-sans text-lg leading-relaxed text-dark-clay/85">
              You&rsquo;ve been holding a lot. The noise. The pressure. The
              quiet knowing something needs to shift.
            </p>
          </div>
          <div className="rounded-xl border border-coral/20 bg-blush/40 px-8 py-8">
            <ul className="space-y-5 font-serif text-xl text-dark-clay">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-coral" />
                Slow down
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-coral" />
                Listen inward
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-coral" />
                Reconnect with what&rsquo;s true
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-l-4 border-gold pl-6">
          <p className="font-serif text-xl italic text-dark-clay md:text-2xl">
            This is where you tell yourself the truth — faster.
          </p>
        </div>
      </div>
    </section>
  );
}

import Script from "next/script";

export default function FullMoonRetreatThankYouPage() {
  return (
    <main className="bg-[#F2EDE2] py-16 text-[#9B4D32] md:py-24">
      <div className="mx-auto w-full max-w-[900px] px-6 md:px-10">
        <section className="text-center">
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            You&apos;re In. Your Spot Is Reserved.
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            We&apos;ve sent your confirmation email with all the details.
          </p>
          <p className="mt-4 text-base md:text-lg">
            Check your inbox for your Zoom link and event info.
          </p>
          <p className="mt-3 text-base md:text-lg">
            If you don&apos;t see it, check spam or promotions.
          </p>
        </section>

        <section className="mt-12 md:mt-16">
          <h2 className="font-serif text-3xl md:text-4xl">Here&apos;s What Happens Next:</h2>
          <ul className="mt-6 space-y-3 text-lg">
            <li>• You&apos;ll receive a confirmation email immediately</li>
            <li>• Your Zoom link will be sent before the event</li>
            <li>• You&apos;ll get simple instructions to prepare</li>
            <li>• Optional reminders so you don&apos;t miss it</li>
          </ul>
          <p className="mt-6 text-lg">
            Everything is designed to feel simple, clear, and supportive.
          </p>
        </section>

        <section className="mt-12 md:mt-16">
          <div className="rounded-2xl bg-[#EDE7D9] px-7 py-8 shadow-sm md:px-9 md:py-10">
            <h2 className="font-serif text-3xl md:text-4xl">Want support integrating this experience?</h2>
            <p className="mt-7 text-lg md:text-xl">
              Many people find the real shift happens after the retreat, when you begin applying what
              came up.
            </p>
            <p className="mt-5 text-lg md:text-xl">
              Without support, it&apos;s easy to leave with powerful insights, but slip back into old
              patterns within days.
            </p>
            <p className="mt-5 text-lg md:text-xl">
              This private 1:1 integration session with Anna gives you space to slow down, process
              what surfaced, and begin turning it into something real in your life.
            </p>
            <hr className="mt-7 border-t border-[#9B4D32]/20" />
            <p className="mt-6 text-lg md:text-xl">In this session, you&apos;ll:</p>
            <ul className="mt-5 space-y-2 text-lg md:text-xl">
              <li>• Get clarity on what&apos;s actually coming up for you</li>
              <li>• Understand what it means and where it&apos;s pointing</li>
              <li>• Turn your insights into clear, grounded next steps</li>
              <li>• Receive personalized guidance and support</li>
            </ul>
            <p className="mt-6 text-lg md:text-xl">
              So instead of something that felt meaningful in the moment, you leave with something
              that actually changes how you move forward.
            </p>
            <p className="mt-5 text-base md:text-lg">Choose a time that works for you below.</p>
            <div className="mt-8 w-full">
              <iframe
                src="https://links.annabrookehealing.com/widget/booking/X2D2FVBjs3MkuUB5q8c0"
                style={{ width: "100%", height: "860px", border: "none", overflow: "hidden" }}
                scrolling="no"
                id="X2D2FVBjs3MkuUB5q8c0_1744145924097"
                title="Integration Support Booking"
              ></iframe>
            </div>
            <Script src="https://links.annabrookehealing.com/js/form_embed.js" strategy="afterInteractive" />
            <p className="mt-5 text-base md:text-lg">Spots are limited each week.</p>
          </div>
        </section>

        <section className="mt-12 md:mt-16">
          <h2 className="font-serif text-3xl md:text-4xl">Not ready yet? That&apos;s okay.</h2>
          <p className="mt-6 text-lg md:text-xl">
            You&apos;ll receive a follow-up email with more details about integration support and next
            steps.
          </p>
          <p className="mt-4 text-base md:text-lg">You can always come back and book later.</p>
        </section>

        <section className="mt-12 md:mt-16">
          <p className="text-lg md:text-xl">
            You&apos;ve already taken a powerful step by saying yes to this experience.
          </p>
          <p className="mt-4 text-lg md:text-xl">Give yourself permission to fully receive it.</p>
          <p className="mt-4 text-lg md:text-xl">We&apos;ll guide you the rest of the way.</p>
        </section>
      </div>
    </main>
  );
}

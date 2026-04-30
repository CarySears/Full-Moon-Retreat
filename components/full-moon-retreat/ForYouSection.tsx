export function ForYouSection() {
  return (
    <section className="bg-[#F2EDE2] py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div
          className="rounded-2xl bg-[#F3D9D0] p-8 md:p-10"
          style={{ boxShadow: "0 12px 28px rgba(155,77,50,0.1)" }}
        >
          <h2 className="font-serif text-3xl leading-tight text-[#9B4D32] md:text-4xl">This is for you if:</h2>
          <ul className="mt-6 space-y-3 text-lg leading-relaxed text-[#9B4D32]">
            <li>• You’ve been holding a lot and haven’t had space to process it</li>
            <li>• You’re in a transition and need clarity</li>
            <li>• You’ve tried things, but nothing has fully landed</li>
            <li>• You want support without pressure or performance</li>
          </ul>
        </div>

        <div
          className="mt-6 rounded-2xl bg-[#F2EDE2] p-7 md:p-8"
          style={{ boxShadow: "0 10px 24px rgba(155,77,50,0.09)", border: "1px solid rgba(155,77,50,0.14)" }}
        >
          <h3 className="font-serif text-2xl leading-tight text-[#9B4D32] md:text-3xl">You might be wondering:</h3>
          <ul className="mt-5 space-y-2 text-lg leading-relaxed text-[#9B4D32]">
            <li>No experience needed</li>
            <li>You can participate quietly, camera off</li>
            <li>This is designed to feel powerful even online</li>
            <li>No pressure to share anything you don’t want to</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

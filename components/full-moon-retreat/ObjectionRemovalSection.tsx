export function ObjectionRemovalSection() {
  return (
    <section className="bg-[#F2EDE2] pb-14 md:pb-20">
      <div className="mx-auto w-full max-w-[900px] px-6 md:px-10">
        <div className="rounded-2xl border border-[#9B4D32]/10 bg-[#F2EDE2] px-8 py-10 md:px-12 md:py-12" style={{ boxShadow: "0 6px 20px rgba(155,77,50,0.06)" }}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9B4D32]/60">
            You might be wondering:
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex gap-3 text-lg text-[#9B4D32]">
              <span className="mt-[3px] shrink-0 text-[#CE8F29]">✔</span>
              <span>No experience needed</span>
            </li>
            <li className="flex gap-3 text-lg text-[#9B4D32]">
              <span className="mt-[3px] shrink-0 text-[#CE8F29]">✔</span>
              <span>You can participate quietly, camera off</span>
            </li>
            <li className="flex gap-3 text-lg text-[#9B4D32]">
              <span className="mt-[3px] shrink-0 text-[#CE8F29]">✔</span>
              <span>This is designed to feel powerful even online</span>
            </li>
            <li className="flex gap-3 text-lg text-[#9B4D32]">
              <span className="mt-[3px] shrink-0 text-[#CE8F29]">✔</span>
              <span>No pressure to share anything you don't want to</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

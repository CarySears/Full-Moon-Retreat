export function StickyMobileCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t bg-[#F2EDE2] px-4 py-3 md:hidden"
      style={{
        borderColor: "rgba(226,119,86,0.45)",
        boxShadow: "0 -8px 20px rgba(155,77,50,0.12)",
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-2">
        <a
          href="#reserve"
          className="inline-flex w-full justify-center rounded-lg bg-[#CE8F29] px-[22px] py-[13px] text-sm font-semibold text-[#9B4D32] shadow-[0_10px_22px_rgba(155,77,50,0.14)] transition hover:-translate-y-[2px] hover:brightness-95 hover:shadow-[0_14px_28px_rgba(155,77,50,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B4D32]"
          aria-label="Save My Spot"
        >
          Save My Spot →
        </a>
        <p className="text-xs text-[#9B4D32]">Takes 60 seconds • Instant confirmation</p>
      </div>
    </div>
  );
}

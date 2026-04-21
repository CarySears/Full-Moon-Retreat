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
        <div className="relative w-full">
          <a
            href="#reserve"
            className="inline-flex w-full justify-center rounded-lg bg-[#CE8F29] px-[22px] py-[13px] text-sm font-semibold text-[#9B4D32] shadow-[0_10px_22px_rgba(155,77,50,0.14)] transition hover:-translate-y-[2px] hover:brightness-95 hover:shadow-[0_14px_28px_rgba(155,77,50,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B4D32]"
            aria-label="Save My Spot"
          >
            Save My Spot →
          </a>
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-0">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/zbmQVs1NdzYD1ZOO2RNm"
              loading="lazy"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
              id="inline-zbmQVs1NdzYD1ZOO2RNm-sticky"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Full Moon Retreat"
              data-height="959"
              data-layout-iframe-id="inline-zbmQVs1NdzYD1ZOO2RNm-sticky"
              data-form-id="zbmQVs1NdzYD1ZOO2RNm"
              title="Full Moon Retreat"
            />
          </div>
        </div>
        <p className="text-xs text-[#9B4D32]">Takes 60 seconds • Instant confirmation</p>
      </div>
    </div>
  );
}

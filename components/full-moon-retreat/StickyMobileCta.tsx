export default function StickyMobileCta() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-5 py-4 md:hidden"
      style={{
        backgroundColor: "#F2EDE2",
        borderTop: "1px solid rgba(226,119,86,0.3)",
        boxShadow: "0 -4px 20px rgba(155,77,50,0.10)",
      }}
    >
      <p
        className="text-sm font-semibold leading-tight"
        style={{ color: "#9B4D32" }}
      >
        $125 — Live Online
      </p>

      <a
        href="#reserve"
        className="btn-gold flex-shrink-0 px-5 py-3 rounded-lg text-sm font-semibold"
        style={{ color: "#F2EDE2" }}
        aria-label="Reserve your spot for the Full Moon Retreat — $125"
      >
        Reserve Now
      </a>
    </div>
  );
}

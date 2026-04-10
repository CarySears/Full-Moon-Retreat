export default function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-coral/15 bg-warm-cream px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:hidden">
      <div className="flex items-center justify-between gap-4">
        <span className="font-serif text-base font-medium text-dark-clay">
          $125 — Live Online
        </span>
        <a
          href="#reserve"
          className="inline-block rounded-lg bg-gold px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:brightness-90"
        >
          Reserve Now
        </a>
      </div>
    </div>
  );
}

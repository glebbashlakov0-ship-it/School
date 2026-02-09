import { useRef } from "react";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const step = 360;

  const scrollBy = (direction: "next" | "prev") => {
    if (!trackRef.current) return;
    const delta = direction === "next" ? step : -step;
    const track = trackRef.current;
    const nextLeft = track.scrollLeft + delta;
    if (nextLeft >= track.scrollWidth - track.clientWidth - 10) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (nextLeft <= 0) {
      track.scrollTo({
        left: track.scrollWidth - track.clientWidth,
        behavior: "smooth"
      });
      return;
    }
    track.scrollTo({ left: nextLeft, behavior: "smooth" });
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/50">
            Testimonials
          </div>
          <h2 className="mt-3 font-display text-3xl">
            Real learners, real outcomes.
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="ghost-button"
            onClick={() => scrollBy("prev")}
            type="button"
          >
            Prev
          </button>
          <button
            className="cta-button"
            onClick={() => scrollBy("next")}
            type="button"
          >
            Next
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        className="no-scrollbar mt-8 flex gap-6 overflow-x-auto scroll-smooth pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="glass-card min-w-[280px] snap-start rounded-3xl p-6 md:min-w-[320px]"
          >
            <p className="text-sm text-white/70">“{item.quote}”</p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-semibold">{item.name}</div>
                <div className="text-xs text-white/50">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

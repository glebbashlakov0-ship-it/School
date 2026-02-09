const items = [
  {
    title: "Structured levels",
    text: "Five levels with clear outcomes and measurable progress."
  },
  {
    title: "Market-ready skills",
    text: "Build practical routines for trading and portfolio decisions."
  },
  {
    title: "Trusted guidance",
    text: "Learn from mentors who focus on risk, not hype."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/50">
            Why Choose Us
          </div>
          <h2 className="mt-3 font-display text-3xl">
            Built for trust, clarity, and momentum.
          </h2>
        </div>
        <p className="max-w-xl text-white/60">
          Crypto School was designed to remove noise and replace it with a
          structured learning path that builds real confidence.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="glass-card rounded-3xl p-6">
            <div className="text-lg font-semibold">{item.title}</div>
            <p className="mt-2 text-sm text-white/60">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

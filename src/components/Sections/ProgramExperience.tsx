const pricing = [
  { title: "Level 1 — Crypto Starter", price: "$400", note: "Beginner" },
  { title: "Level 2 — Crypto Holder", price: "$900", note: "Intermediate" },
  { title: "Level 3 — Crypto Investor", price: "$1,300", note: "Advanced" },
  { title: "Level 4 — Crypto Strategist", price: "$1,800", note: "Expert" },
  {
    title: "Level 5 — Crypto Elite / Crypto Capital",
    price: "$2,500",
    note: "Pro"
  }
];

const perks = [
  "Live trading labs",
  "Mentor feedback",
  "Risk-first framework",
  "Weekly market briefs"
];

export default function ProgramExperience() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
            alt="Crypto learning workspace"
            className="h-64 w-full rounded-2xl object-cover"
          />
          <div className="mt-6">
            <div className="text-sm uppercase tracking-[0.3em] text-white/50">
              Experience
            </div>
            <h2 className="mt-3 font-display text-3xl">
              A modern crypto classroom.
            </h2>
            <p className="mt-3 text-sm text-white/60">
              Practice with real-market scenarios, gain feedback, and build a
              risk-first mindset. This is where clarity replaces noise.
            </p>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {perks.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <div className="text-sm uppercase tracking-[0.3em] text-white/50">
            Program Value
          </div>
          <h3 className="mt-3 font-display text-2xl">Pricing by level</h3>
          <p className="mt-3 text-sm text-white/60">
            Choose your track. Pricing reflects the depth and intensity of each
            level.
          </p>
          <div className="mt-6 grid gap-4">
            {pricing.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-ink/70 p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-xs text-white/50">{item.note}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white/40 line-through">
                      {item.price}
                    </div>
                    <div className="text-lg font-semibold text-accent">
                      Free 24 slots
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-ink/70 p-4 text-sm text-white/60">
            Free 24 slots available for the next cohort.
          </div>
        </div>
      </div>
    </section>
  );
}



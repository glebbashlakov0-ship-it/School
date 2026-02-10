const highlights = [
  {
    title: "Clarity first",
    text: "We filter noise and focus on actions that matter."
  },
  {
    title: "Practical structure",
    text: "Each level builds habits you can apply immediately."
  },
  {
    title: "Risk-aware mindset",
    text: "Decisions are grounded in process, not hype."
  }
];

const principles = [
  "Clear learning path from beginner to pro.",
  "Focused sessions with repeatable frameworks.",
  "Mentor feedback built into every level.",
  "Live practice with market scenarios.",
  "Accountability through cohort check-ins."
];

const facts = [
  "12k+ students trained across all levels.",
  "5-level roadmap with clear milestones.",
  "97% satisfaction from recent cohorts.",
  "Weekly market briefs and live labs.",
  "Risk-first decision frameworks.",
  "Real-time portfolio reviews.",
  "Community support between sessions."
];

export default function AboutUs() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/50">
            About Us
          </div>
          <h2 className="mt-3 font-display text-3xl">
            Built to turn curiosity into confident decisions.
          </h2>
          <p className="mt-4 text-white/60">
            Crypto School is a structured learning program that removes noise
            and replaces it with clear steps, strong habits, and real-world
            practice. Each level is designed to move you forward with focus.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="glass-card rounded-3xl p-5">
                <div className="text-sm font-semibold">{item.title}</div>
                <p className="mt-2 text-sm text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-white/10 bg-ink/60 p-5">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">
              Quick Facts
            </div>
            <ul className="mt-4 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
              {facts.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="glass-card rounded-3xl p-6">
          <div className="text-xs uppercase tracking-[0.3em] text-white/50">
            Our Focus
          </div>
          <h3 className="mt-3 text-xl font-semibold">What makes it work</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {principles.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


import { Link } from "react-router-dom";

export default function Hero() {
  const facts = [
    { value: "12k+", label: "Students trained" },
    { value: "5", label: "Level program" },
    { value: "97%", label: "Satisfaction" },
    { value: "Live", label: "trading labs" },
    { value: "1:1", label: "mentor feedback" },
    { value: "Risk-first", label: "framework" },
    { value: "Weekly", label: "market briefs" },
    { value: "Real-time", label: "portfolio reviews" },
    { value: "Tactical", label: "entry/exit plans" },
    { value: "Community", label: "peer support" }
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
      <div className="grid min-h-[75vh] gap-10 md:grid-cols-2 md:items-center lg:gap-12">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
            Limited Free Access - 24 Slots
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Crypto School that turns curiosity into confident decisions.
          </h1>
          <p className="mt-5 text-lg text-white/70">
            Five structured levels. Clear roadmap from beginner to pro. Apply now
            and claim free access while slots are open.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/apply" className="cta-button">
              Apply for Free Access
            </Link>
          </div>
        </div>
        <div className="rounded-3xl">
          <img
            src="/hero.png"
            alt="Crypto learning"
            className="h-[320px] w-full rounded-3xl object-contain sm:h-[420px] md:h-[520px] lg:h-[620px]"
          />
        </div>
      </div>
      <div className="mt-4 mb-8 text-sm text-white/70">
        <div className="marquee">
          <div className="marquee-track">
            {facts.concat(facts).map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="flex items-center gap-8"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-white">
                    {item.value}
                  </span>
                  <span>{item.label}</span>
                </div>
                <span className="text-white/30">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


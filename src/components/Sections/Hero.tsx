import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center">
      <div>
        <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
          Limited Free Access • 24 Slots
        </div>
        <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
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
          <Link to="/courses" className="ghost-button">
            View 5 Levels
          </Link>
        </div>
        <div className="mt-8 flex items-center gap-8 text-sm text-white/60">
          <div>
            <div className="text-xl font-semibold text-white">12k+</div>
            Students trained
          </div>
          <div>
            <div className="text-xl font-semibold text-white">5</div>
            Level program
          </div>
          <div>
            <div className="text-xl font-semibold text-white">97%</div>
            Satisfaction
          </div>
        </div>
      </div>
      <div className="rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1600&auto=format&fit=crop"
          alt="Crypto learning"
          className="h-[360px] w-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}

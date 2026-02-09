import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="glass-card rounded-3xl p-10 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-white/50">
              Apply Now
            </div>
            <h2 className="mt-3 font-display text-3xl">
              Secure your free seat in the next cohort.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/60">
              Applications are reviewed manually. Once approved, a manager will
              contact you with onboarding steps.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/apply" className="cta-button">
              Apply for Free Access
            </Link>
            <Link to="/courses" className="ghost-button">
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

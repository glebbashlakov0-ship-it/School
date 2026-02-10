import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function CTASection() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20">
      <div
        ref={cardRef}
        className={`glass-card rounded-3xl p-10 md:p-12 ${
          isActive ? "cta-animate" : ""
        }`}
      >
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
          </div>
        </div>
      </div>
    </section>
  );
}

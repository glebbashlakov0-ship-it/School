import { Link } from "react-router-dom";
import { useState } from "react";
import { courses } from "../data/courses";

export default function CoursesPage() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleOpen = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr,0.6fr]">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/50">
            Courses
          </div>
          <h1 className="mt-3 font-display text-4xl">Five levels. One path.</h1>
          <p className="mt-4 max-w-2xl text-white/60">
            Every level is designed to move you forward with clarity. Choose the
            level that matches your experience.
          </p>
          <div className="mt-10 grid gap-6">
            {courses.map((course) => (
              <div key={course.id} className="glass-card rounded-3xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {course.level}
                    </div>
                    <div className="mt-2 text-2xl font-semibold">
                      {course.title}
                    </div>
                    <p className="mt-2 text-sm text-white/60">
                      {course.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-white/70">
                      {course.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() => toggleOpen(course.id)}
                        className="group flex w-full items-center gap-4 text-left"
                      >
                        <span className="h-px flex-1 bg-white/10" />
                        <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                          Details
                        </span>
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full bg-accent text-ink transition-all duration-300 group-hover:shadow-glow ${
                            openIds[course.id]
                              ? "translate-y-[1px] shadow-glow"
                              : ""
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className={`h-4 w-4 transition-transform duration-300 ${
                              openIds[course.id] ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`mt-4 overflow-hidden transition-all duration-300 ease-out ${
                          openIds[course.id]
                            ? "max-h-[520px] translate-y-0 opacity-100"
                            : "max-h-0 -translate-y-2 opacity-0"
                        }`}
                      >
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                              Who it’s for
                            </div>
                            <ul className="mt-3 space-y-2 text-sm text-white/60">
                              {course.who.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                              What they learn
                            </div>
                            <ul className="mt-3 space-y-2 text-sm text-white/60">
                              {course.learns.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-[200px] rounded-2xl border border-white/10 bg-ink/60 p-4">
                    <div className="text-sm text-white/40 line-through">
                      {course.oldPrice}
                    </div>
                    <div className="text-2xl font-semibold text-accent">FREE</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-accent">
                      Free 24 slots available
                    </div>
                    <Link
                      to={`/apply?course=${encodeURIComponent(course.title)}`}
                      className="cta-button mt-4 w-full"
                    >
                      Get Free Access
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="glass-card h-fit rounded-3xl p-6">
          <div className="text-sm uppercase tracking-[0.3em] text-white/50">
            Free 24 Slots Available
          </div>
          <p className="mt-3 text-sm text-white/60">
            Slots are released for the next cohort. Apply now and our manager
            will confirm your access.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-ink/70 p-4">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">
              Enrollment status
            </div>
            <div className="mt-2 text-3xl font-semibold text-accent">
              OPEN
            </div>
            <div className="mt-2 text-sm text-white/50">
              Visual indicator only. Slots do not decrement.
            </div>
          </div>
          <Link to="/apply" className="ghost-button mt-6 w-full">
            Apply Now
          </Link>
        </aside>
      </div>
    </section>
  );
}

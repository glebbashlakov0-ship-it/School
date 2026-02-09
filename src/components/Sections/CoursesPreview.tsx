import { Link } from "react-router-dom";
import { courses } from "../../data/courses";

export default function CoursesPreview() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/50">
            5 Levels
          </div>
          <h2 className="mt-3 font-display text-3xl">Pick your starting line.</h2>
        </div>
        <Link to="/courses" className="text-sm font-semibold text-accent">
          View full details
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <div key={course.id} className="glass-card rounded-3xl p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">
              {course.level}
            </div>
            <div className="mt-3 text-xl font-semibold">{course.title}</div>
            <p className="mt-2 text-sm text-white/60">{course.description}</p>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <div className="text-sm text-white/40 line-through">
                  {course.oldPrice}
                </div>
                <div className="text-lg font-semibold text-accent">FREE</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent">
                  Free 24 slots available
                </div>
              </div>
              <Link to={`/apply?course=${encodeURIComponent(course.title)}`} className="ghost-button">
                Get Free Access
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

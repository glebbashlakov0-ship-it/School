import { useEffect, useMemo, useState } from "react";
import { formatDateTime } from "../lib/format";
import { courses } from "../data/courses";

type Application = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  course: string;
  created_at: string;
};

const ADMIN_USER = import.meta.env.VITE_ADMIN_USER as string | undefined;
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS as string | undefined;
const SESSION_KEY = "crypto-school-admin";

export default function AdminPage() {
  const [isAuthed, setIsAuthed] = useState(
    sessionStorage.getItem(SESSION_KEY) === "true"
  );
  const [login, setLogin] = useState({ user: "", pass: "" });
  const [error, setError] = useState("");
  const [items, setItems] = useState<Application[]>([]);
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");

  useEffect(() => {
    if (!isAuthed) return;
    const fetchApplications = async () => {
      try {
        const response = await fetch("/api/applications");
        if (!response.ok) {
          throw new Error("Failed to load");
        }
        const payload = await response.json();
        setItems(payload.data ?? []);
      } catch {
        setItems([]);
      }
    };
    fetchApplications();
  }, [isAuthed]);

  const filtered = useMemo(() => {
    return items
      .filter((item) => {
        const query = search.toLowerCase();
        const matchQuery =
          item.email.toLowerCase().includes(query) ||
          item.first_name.toLowerCase().includes(query);
        const matchCourse =
          courseFilter === "all" || item.course === courseFilter;
        return matchQuery && matchCourse;
      })
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
  }, [items, search, courseFilter]);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (!ADMIN_USER || !ADMIN_PASS) {
      setError("Admin credentials are missing in .env");
      return;
    }
    if (login.user === ADMIN_USER && login.pass === ADMIN_PASS) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setIsAuthed(true);
      setError("");
    } else {
      setError("Invalid login or password.");
    }
  };

  if (!isAuthed) {
    return (
      <section className="mx-auto w-full max-w-lg px-6 py-16">
        <div className="glass-card rounded-3xl p-8">
          <div className="text-sm uppercase tracking-[0.3em] text-white/50">
            Admin Access
          </div>
          <h1 className="mt-3 font-display text-3xl">Login</h1>
          <form className="mt-8 grid gap-5" onSubmit={handleLogin}>
            <input
              value={login.user}
              onChange={(e) => setLogin({ ...login, user: e.target.value })}
              placeholder="Admin login"
              className="w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3"
            />
            <input
              type="password"
              value={login.pass}
              onChange={(e) => setLogin({ ...login, pass: e.target.value })}
              placeholder="Password"
              className="w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3"
            />
            {error && <div className="text-sm text-ember">{error}</div>}
            <button type="submit" className="cta-button">
              Enter Admin Panel
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/50">
            Admin Panel
          </div>
          <h1 className="mt-2 font-display text-3xl">Applications</h1>
        </div>
        <button
          className="ghost-button"
          onClick={() => {
            sessionStorage.removeItem(SESSION_KEY);
            setIsAuthed(false);
          }}
        >
          Log Out
        </button>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by email or first name"
          className="w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 md:w-80"
        />
        <select
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
          className="rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white"
        >
          <option value="all">All courses</option>
          {courses.map((course) => (
            <option key={course.id} value={course.title}>
              {course.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-6 overflow-x-auto rounded-3xl border border-white/10">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-white/50">
            <tr>
              <th className="px-4 py-3">First Name</th>
              <th className="px-4 py-3">Last Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-t border-white/5">
                <td className="px-4 py-3">{item.first_name}</td>
                <td className="px-4 py-3">{item.last_name}</td>
                <td className="px-4 py-3">{item.email}</td>
                <td className="px-4 py-3">{item.phone}</td>
                <td className="px-4 py-3">{item.course}</td>
                <td className="px-4 py-3">
                  {formatDateTime(item.created_at)}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-white/60" colSpan={6}>
                  No applications yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { formatDateTime } from "../lib/format";
import { courses } from "../data/courses";

type Application = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  course: string;
  exchanges: string[];
  wallets: string[];
  created_at: string;
};

type Message = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  created_at: string;
};

const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER as string | undefined;
const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS as string | undefined;
const SESSION_KEY = "crypto-school-admin";

export default function AdminPage() {
  const [isAuthed, setIsAuthed] = useState(
    sessionStorage.getItem(SESSION_KEY) === "true"
  );
  const [login, setLogin] = useState({ user: "", pass: "" });
  const [error, setError] = useState("");
  const [items, setItems] = useState<Application[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");
  const [view, setView] = useState<"applications" | "messages">("applications");
  const [activeMessageId, setActiveMessageId] = useState<string | null>(null);
  const prevBodyClass = useRef<string | null>(null);

  useEffect(() => {
    const body = document.body;
    if (!isAuthed) {
      if (prevBodyClass.current === null) {
        prevBodyClass.current = body.className;
      }
      body.className = "";
    } else if (prevBodyClass.current !== null) {
      body.className = prevBodyClass.current;
    }
    return () => {
      if (prevBodyClass.current !== null) {
        body.className = prevBodyClass.current;
      }
    };
  }, [isAuthed]);

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

    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/messages");
        if (!response.ok) {
          throw new Error("Failed to load");
        }
        const payload = await response.json();
        setMessages(payload.data ?? []);
      } catch {
        setMessages([]);
      }
    };

    fetchApplications();
    fetchMessages();
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

  const activeMessage = messages.find((msg) => msg.id === activeMessageId);

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
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px"
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{ display: "grid", gap: "12px", width: "100%", maxWidth: "360px" }}
        >
          <div style={{ fontWeight: 600 }}>Admin Login</div>
          <label style={{ display: "grid", gap: "6px" }}>
            <span>Login</span>
            <input
              value={login.user}
              onChange={(e) => setLogin({ ...login, user: e.target.value })}
              placeholder="Admin login"
              required
            />
          </label>
          <label style={{ display: "grid", gap: "6px" }}>
            <span>Password</span>
            <input
              type="password"
              value={login.pass}
              onChange={(e) => setLogin({ ...login, pass: e.target.value })}
              placeholder="Password"
              required
            />
          </label>
          {error && <div>{error}</div>}
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/50">
            Admin Panel
          </div>
          <h1 className="mt-2 font-display text-3xl">
            {view === "applications" ? "Applications" : "Messages"}
          </h1>
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

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr,260px]">
        <div>
          {view === "applications" ? (
            <>
              <div className="flex flex-wrap gap-4">
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
                <table className="w-full min-w-[900px] text-left text-sm">
                  <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-white/50">
                    <tr>
                      <th className="px-4 py-3">First Name</th>
                      <th className="px-4 py-3">Last Name</th>
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3">Phone</th>
                      <th className="px-4 py-3">Course</th>
                      <th className="px-4 py-3">Exchanges</th>
                      <th className="px-4 py-3">Wallets</th>
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
                          {(item.exchanges ?? []).join(", ")}
                        </td>
                        <td className="px-4 py-3">
                          {(item.wallets ?? []).join(", ")}
                        </td>
                        <td className="px-4 py-3">
                          {formatDateTime(item.created_at)}
                        </td>
                      </tr>
                    ))}
                    {filtered.length === 0 && (
                      <tr>
                        <td className="px-4 py-6 text-white/60" colSpan={8}>
                          No applications yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-[1fr,1.1fr]">
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <button
                      key={msg.id}
                      type="button"
                      onClick={() => setActiveMessageId(msg.id)}
                      className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition ${
                        activeMessageId === msg.id
                          ? "border-accent/50 bg-accent/10 text-white"
                          : "border-white/10 bg-ink/70 text-white/70 hover:border-white/20"
                      }`}
                    >
                      <div className="font-semibold text-white">{msg.name}</div>
                      <div className="text-xs text-white/50">{msg.email}</div>
                      <div className="mt-2 text-xs text-white/60">
                        {msg.message}
                      </div>
                    </button>
                  ))}
                  {messages.length === 0 && (
                    <div className="rounded-2xl border border-white/10 bg-ink/70 p-4 text-sm text-white/60">
                      No messages yet.
                    </div>
                  )}
                </div>
                <div className="rounded-3xl border border-white/10 bg-ink/70 p-5">
                  {activeMessage ? (
                    <>
                      <div className="text-sm text-white/50">From</div>
                      <div className="mt-1 text-lg font-semibold">
                        {activeMessage.name}
                      </div>
                      <div className="mt-2 text-sm text-white/60">
                        {activeMessage.email}
                      </div>
                      {activeMessage.phone && (
                        <div className="mt-1 text-sm text-white/60">
                          {activeMessage.phone}
                        </div>
                      )}
                      <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
                        Message
                      </div>
                      <p className="mt-2 text-sm text-white/70">
                        {activeMessage.message}
                      </p>
                      <div className="mt-4 text-xs text-white/40">
                        {formatDateTime(activeMessage.created_at)}
                      </div>
                    </>
                  ) : (
                    <div className="text-sm text-white/60">
                      Select a message to read it.
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        <aside className="glass-card h-fit rounded-3xl p-5">
          <div className="text-xs uppercase tracking-[0.3em] text-white/50">
            Menu
          </div>
          <div className="mt-4 grid gap-3">
            <button
              type="button"
              onClick={() => setView("applications")}
              className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition ${
                view === "applications"
                  ? "bg-accent text-ink"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              Applications ({items.length})
            </button>
            <button
              type="button"
              onClick={() => setView("messages")}
              className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition ${
                view === "messages"
                  ? "bg-accent text-ink"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              Messages ({messages.length})
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}


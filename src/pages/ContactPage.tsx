"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("idle");
    setMessage("");
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      setMessage("Thanks! We will reply shortly.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setMessage("Failed to send. Please try again later.");
    }
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20">
      <div className="glass-card rounded-3xl p-8 md:p-12">
        <div className="text-sm uppercase tracking-[0.3em] text-white/50">
          Contact Us
        </div>
        <h1 className="mt-3 font-display text-4xl">Let’s talk</h1>
        <p className="mt-3 max-w-2xl text-white/60">
          Tell us what you need and we will get back to you shortly.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <form className="grid gap-5" onSubmit={onSubmit}>
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="text-sm text-white/70">Phone</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white"
                placeholder="+1 (555) 240-2424"
                type="tel"
                required
              />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white"
                placeholder="you@email.com"
                type="email"
                required
              />
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 min-h-[140px] w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white"
                placeholder="How can we help?"
                required
              />
            </div>
            <button type="submit" className="cta-button">
              Send message
            </button>
            {status !== "idle" && (
              <div
                className={`rounded-2xl px-4 py-3 text-sm ${
                  status === "success"
                    ? "border border-accent/40 bg-accent/10 text-accent"
                    : "border border-ember/40 bg-ember/10 text-ember"
                }`}
              >
                {message}
              </div>
            )}
          </form>

          <div className="rounded-3xl border border-white/10 bg-ink/60 p-6 text-sm text-white/70">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">
              Contact Info
            </div>
            <div className="mt-4">
              <div className="text-white/50">Email</div>
              <div className="mt-1 text-white">support@cryptoschool.io</div>
            </div>
            <div className="mt-4">
              <div className="text-white/50">Phone</div>
              <div className="mt-1 text-white">+1 (555) 240-2424</div>
            </div>
            <div className="mt-4">
              <div className="text-white/50">Hours</div>
              <div className="mt-1 text-white">Mon–Fri, 9:00–18:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



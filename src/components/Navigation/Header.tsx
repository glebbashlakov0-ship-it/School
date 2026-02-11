import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", href: "/#about" },
  { label: "Courses", href: "/#courses" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", to: "/contact" },
  { label: "Apply", href: "/#courses" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Nexora"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="font-display text-lg font-semibold tracking-tight md:hidden">
            Nexora
          </div>
          <div className="hidden font-display text-lg font-semibold tracking-tight md:block">
            Nexora Crypto Academy
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) =>
            item.href ? (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.to ?? item.label}
                to={item.to ?? "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? "text-accent" : "text-white/70 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>
        <div className="flex items-center gap-4">
          <a href="/#courses" className="cta-button">
            Get Free
          </a>
          <button
            type="button"
            className="relative z-30 inline-flex items-center justify-center p-2 text-accent drop-shadow-[0_0_8px_rgba(51,230,191,0.55)] transition hover:text-white md:hidden"
            aria-label="Open menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-9 w-9"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="border-t border-white/5 bg-ink/95 md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-6">
            {navItems.map((item) =>
              item.href ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/80 transition hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
            ) : (
              <NavLink
                key={item.to ?? item.label}
                to={item.to ?? "/"}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${
                      isActive ? "text-accent" : "text-white/80 hover:text-white"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              )
            )}
            <a
              href="/#courses"
              className="cta-button w-full"
              onClick={() => setIsOpen(false)}
            >
              Get Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

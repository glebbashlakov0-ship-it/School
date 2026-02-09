import { Link, NavLink } from "react-router-dom";
import SlotsBadge from "../UI/SlotsBadge";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Apply", to: "/apply" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-ink font-bold">
            CS
          </div>
          <div className="font-display text-lg font-semibold tracking-tight">
            Nexora Crypto Academy
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-accent" : "text-white/70 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <SlotsBadge />
          <Link to="/apply" className="cta-button hidden md:inline-flex">
            Get Free Access
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink/80">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-semibold">
            Nexora Crypto Academy
          </div>
          <p className="mt-2 text-sm text-white/60">
            Five-level crypto education with real-world structure. Free access
            for early applicants.
          </p>
        </div>
        <div className="text-sm text-white/60">
          <div className="font-semibold text-white">Contact</div>
          <div className="mt-2">support@cryptoschool.io</div>
          <div className="mt-1">+1 (555) 240-2424</div>
        </div>
        <div className="text-sm text-white/60">
          <div className="font-semibold text-white">Links</div>
          <div className="mt-2">Privacy Policy</div>
          <div className="mt-1">Terms & Conditions</div>
        </div>
      </div>
    </footer>
  );
}

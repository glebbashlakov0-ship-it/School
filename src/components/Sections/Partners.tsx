"use client";

export default function Partners() {
  return (
    <section className="w-full py-20 text-center">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="text-2xl font-semibold uppercase tracking-[0.35em] text-white">
          Partners
        </div>
        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-12">
        <div className="relative flex items-center justify-center px-12 py-0 transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
          <span className="absolute left-1/2 top-1/2 h-16 w-72 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white" />
          <img
            src="/ledger.png"
            alt="Ledger"
            className="relative z-10 h-[7rem] w-auto"
          />
        </div>
        <div className="relative flex items-center justify-center px-12 py-0 transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
          <span className="absolute left-1/2 top-1/2 h-16 w-72 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white" />
          <img
            src="/trezor.png"
            alt="Trezor"
            className="relative z-10 h-10 w-auto"
          />
        </div>
        </div>
      </div>
    </section>
  );
}

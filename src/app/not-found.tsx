import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-center justify-center px-6 text-center">
      <div className="text-sm uppercase tracking-[0.3em] text-white/50">
        404
      </div>
      <h1 className="mt-3 font-display text-4xl">Page not found</h1>
      <p className="mt-3 text-white/60">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="cta-button mt-6">
        Back to Home
      </Link>
    </section>
  );
}

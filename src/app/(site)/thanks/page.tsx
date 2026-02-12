export default function Page() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-20 text-center">
      <div className="flex items-center gap-3">
        <img
          src="/logo.jpg"
          alt="Nexora"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="font-display text-lg font-semibold tracking-tight">
          Nexora Crypto Academy
        </div>
      </div>
      <img
        src="/Done.png"
        alt="Thank you"
        className="mt-10 h-64 w-64 rounded-3xl object-contain md:h-80 md:w-80"
      />
      <h1 className="mt-8 font-display text-4xl">Thanks for your application</h1>
      <p className="mt-3 max-w-xl text-white/70">
        Your access details will be sent to your email shortly.
      </p>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background using your tokens */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--soft) 0%, #E6EFE7 100%)",
        }}
      />
      {/* soft shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full"
           style={{ background: "rgba(149,169,155,.25)", filter: "blur(48px)" }} />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full"
           style={{ background: "rgba(36,52,38,.20)", filter: "blur(48px)" }} />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl font-display">
          Fresh. Light. <span className="text-accent">Flexible.</span>
        </h1>

        <p className="mt-4 max-w-2xl text-ink opacity-80">
          We tuned the green system with CSS variables, kept contrast crisp, and added subtle motion that
          doesn’t get in the way.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="btn-white">Get Started</button>
          <button className="btn-outline-white">See Live Demo</button>
        </div>

        {/* Feature cards with gentle float */}
        <div className="mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {["Fast Setup", "Smooth Hover", "Clean Contrast"].map((t) => (
            <div key={t} className="card p-5 hover:-translate-y-1 transition-transform">
              <div className="h-10 w-10 rounded-xl bg-white/70 backdrop-blur flex items-center justify-center animate-float">
                <span className="sr-only">icon</span>
              </div>
              <h3 className="mt-3 font-semibold text-ink">{t}</h3>
              <p className="mt-1 text-sm text-muted">
                Subtle motion and token-based colors keep the UI feeling alive.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

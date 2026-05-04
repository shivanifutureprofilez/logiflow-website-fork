const steps = [
  { n: "01", t: "Share shipment details", d: "Tell us your pickup location, destination, and parcel requirements." },
  { n: "02", t: "Courier assignment", d: "We select the best courier partner based on speed, cost and serviceability." },
  { n: "03", t: "Pickup & delivery execution", d: "We manage the entire delivery journey end-to-end until it's delivered." },
];

export const HowItWorks = () => (
  <section id="how" className="bg-white py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">How it works</span>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
          Simple, Fast & <span className="text-gradient-teal">Hassle-Free</span> Process
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Three steps from a quick conversation to a delivered shipment.
        </p>
      </div>

      <div className="relative mt-20">
        {/* Connecting dashed flow line */}
        <svg
          aria-hidden="true"
          className="absolute left-0 right-0 top-10 hidden h-6 w-full lg:block"
          preserveAspectRatio="none"
          viewBox="0 0 1000 24"
          fill="none"
        >
          <path
            d="M 60 12 H 940"
            stroke="hsl(var(--teal))"
            strokeWidth="2"
            strokeDasharray="2 8"
            strokeLinecap="round"
            opacity="0.45"
          />
          <path d="M 935 6 L 945 12 L 935 18" stroke="hsl(var(--teal))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <div className="grid gap-10 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-border/60 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-center gap-4">
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-accent-gradient text-white shadow-glow">
                  <span className="font-display text-base font-extrabold">{s.n}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden flex-1 border-t-2 border-dashed border-teal/30 lg:block" />
                )}
              </div>
              <h3 className="mt-6 text-xl font-bold leading-tight tracking-tight text-navy">{s.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

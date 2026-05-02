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
        <div className="absolute left-8 right-8 top-9 hidden h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent lg:block" />
        <div className="grid gap-10 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border/60 bg-soft-gradient p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-accent-gradient text-white shadow-glow">
                <span className="font-display text-lg font-extrabold">{s.n}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">{s.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

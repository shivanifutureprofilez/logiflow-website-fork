const steps = [
  { n: "01", t: "Connect", d: "Integrate your store or upload orders in seconds." },
  { n: "02", t: "We choose the courier", d: "Smart engine picks the best partner per shipment." },
  { n: "03", t: "Pickup & dispatch", d: "Courier picks up from your location automatically." },
  { n: "04", t: "Delivered", d: "Track end-to-end with proactive customer updates." },
];

export const HowItWorks = () => (
  <section className="bg-soft-gradient py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">How it works</span>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl">
          Four steps. Zero friction.
        </h2>
      </div>

      <div className="relative mt-20">
        {/* connecting line */}
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent lg:block" />
        <div className="grid gap-12 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="flex items-center gap-4 lg:block">
                <div className="relative grid h-14 w-14 place-items-center rounded-full bg-background shadow-lift ring-1 ring-border">
                  <span className="text-sm font-black text-teal">{s.n}</span>
                </div>
                <h3 className="text-xl font-bold text-navy lg:mt-6">{s.t}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

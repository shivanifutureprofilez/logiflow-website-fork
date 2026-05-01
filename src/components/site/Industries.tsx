const items = [
  "E-commerce", "D2C Brands", "Fashion & Apparel", "Electronics",
  "Beauty & Wellness", "Home & Furniture", "FMCG", "Pharma & Healthcare",
  "Books & Stationery", "Food & Grocery", "Jewellery", "B2B Wholesale",
];

export const Industries = () => (
  <section className="bg-soft-gradient py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="grid items-end gap-8 md:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Industries we serve</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl">
            From a single seller to <span className="text-gradient-teal">national brands</span>.
          </h2>
        </div>
        <p className="text-muted-foreground md:text-right">
          Whatever you ship, wherever you ship — Logiflow has a partner for it.
        </p>
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        {items.map((i, idx) => (
          <span
            key={i}
            className="rounded-full border border-border bg-white/70 px-5 py-2.5 text-sm font-medium text-foreground/80 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-teal hover:text-navy hover:shadow-lift"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  </section>
);

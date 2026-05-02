import rider from "@/assets/rider.jpg";

const items = [
  "E-commerce", "D2C Brands", "Fashion & Apparel", "Electronics",
  "Beauty & Wellness", "Home & Furniture", "FMCG", "Pharma & Healthcare",
  "Books & Stationery", "Food & Grocery", "Jewellery", "B2B Wholesale",
];

export const Industries = () => (
  <section className="bg-white py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Industries we serve</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl">
            From a single seller to <span className="text-gradient-teal">national brands</span>.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Whatever you ship, wherever you ship — Logiflow has a partner for it.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-accent-gradient/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <img src={rider} alt="Logiflow delivery rider on an Indian street at sunrise" loading="lazy" width={1280} height={960} className="h-72 w-full object-cover sm:h-80" />
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        {items.map((i, idx) => (
          <span
            key={i}
            className="rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium text-foreground/80 shadow-soft transition hover:-translate-y-0.5 hover:border-teal hover:text-navy hover:shadow-lift"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  </section>
);

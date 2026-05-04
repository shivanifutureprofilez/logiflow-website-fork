import { MapPin, Network, Package, Building2, ShoppingCart, CalendarClock, ArrowUpRight } from "lucide-react";

const small = [
  { icon: Package, title: "Flexible Parcel Handling", desc: "From 100 grams to 100+ kilograms — handled safely." },
  { icon: Building2, title: "B2B · B2C · E-commerce", desc: "End-to-end support for every business model." },
  { icon: ShoppingCart, title: "Marketplace Deliveries", desc: "Amazon, Flipkart, Meesho, Blinkit & more." },
  { icon: CalendarClock, title: "Daily Dispatch Cycles", desc: "Structured pickups for consistent flow." },
];

export const Services = () => (
  <section id="services" className="bg-soft-gradient py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Services</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
            Our Core <span className="text-gradient-teal">Logistics Solutions</span>
          </h2>
        </div>
        <p className="max-w-md text-base text-muted-foreground">
          From last-mile e-commerce to bulk B2B cargo, one trusted team handles everything your business ships.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-teal/30 hover:shadow-lift"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-soft text-teal transition group-hover:bg-accent-gradient group-hover:text-white">
              <Icon className="h-6 w-6" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-navy">{title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{desc}</p>
            <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-teal/5 transition-transform duration-500 group-hover:scale-150" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

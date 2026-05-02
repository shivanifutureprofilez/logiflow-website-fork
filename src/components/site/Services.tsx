import { Truck, Package, Globe, Repeat, Warehouse, ShieldCheck } from "lucide-react";

const services = [
  { icon: Truck, title: "Domestic Express", desc: "Fast intra-city and inter-state deliveries via India's top courier partners." },
  { icon: Package, title: "Surface Cargo", desc: "Cost-effective bulk movement with full visibility, end to end." },
  { icon: Globe, title: "International Shipping", desc: "Cross-border deliveries to 200+ countries with customs handled." },
  { icon: Repeat, title: "Reverse Logistics", desc: "Hassle-free returns and pickups built into your customer experience." },
  { icon: Warehouse, title: "Warehousing & Fulfilment", desc: "Pan-India warehouses with picking, packing, and dispatch automation." },
  { icon: ShieldCheck, title: "COD & Remittance", desc: "Reliable cash collection and quick weekly remittance to your account." },
];

export const Services = () => (
  <section className="bg-white py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Services</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl">
            Built for every kind of <span className="text-gradient-teal">shipment</span>.
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          From last-mile to international cargo, one network handles everything your business ships.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-secondary/40 p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-soft text-teal transition group-hover:bg-accent-gradient group-hover:text-white">
              <Icon className="h-6 w-6" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-teal/5 transition-transform duration-500 group-hover:scale-150" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

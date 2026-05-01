import { Zap, IndianRupee, MapPin, Headphones, BarChart3, Lock } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fastest available route", desc: "Smart routing picks the quickest partner per pin code." },
  { icon: IndianRupee, title: "Lowest shipping cost", desc: "Compare partner rates instantly — save up to 30%." },
  { icon: MapPin, title: "27,000+ pin codes", desc: "Reach every corner of India through one integration." },
  { icon: Headphones, title: "Dedicated support", desc: "Real humans, not bots — when you need them." },
  { icon: BarChart3, title: "Unified tracking", desc: "Track every shipment in real time, on one screen." },
  { icon: Lock, title: "Secure & insured", desc: "Every parcel is covered, every transaction protected." },
];

export const WhyUs = () => (
  <section className="bg-soft-gradient py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Why Logiflow</span>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl">
          The advantages that move you forward.
        </h2>
      </div>

      <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-glow">
              <Icon className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

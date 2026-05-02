import { Zap, IndianRupee, MapPin, Headphones, BarChart3, Lock } from "lucide-react";
import trucks from "@/assets/trucks.jpg";

const reasons = [
  { icon: Zap, title: "Fastest available route", desc: "Smart routing picks the quickest partner per pin code." },
  { icon: IndianRupee, title: "Lowest shipping cost", desc: "Compare partner rates instantly — save up to 30%." },
  { icon: MapPin, title: "27,000+ pin codes", desc: "Reach every corner of India through one integration." },
  { icon: Headphones, title: "Dedicated support", desc: "Real humans, not bots — when you need them." },
  { icon: BarChart3, title: "Unified tracking", desc: "Track every shipment in real time, on one screen." },
  { icon: Lock, title: "Secure & insured", desc: "Every parcel is covered, every transaction protected." },
];

export const WhyUs = () => (
  <section className="relative isolate overflow-hidden bg-[hsl(var(--navy-deep))] py-28 text-white">
    <img
      src={trucks}
      alt="Fleet of cargo trucks at an Indian logistics hub at dusk"
      loading="lazy"
      width={1600}
      height={900}
      className="absolute inset-0 h-full w-full object-cover opacity-25"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_60%_6%)]/95 via-[hsl(218_60%_10%)]/90 to-[hsl(220_60%_6%)]/95" />
    <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-teal/15 blur-[120px]" />
    <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-teal-bright/10 blur-[120px]" />

    <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-bright">Why Logiflow</span>
        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          The advantages that <span className="text-gradient-teal">move you forward</span>.
        </h2>
      </div>

      <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-glow">
              <Icon className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/65">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-logistics.jpg";

export const Hero = () => (
  <section className="relative isolate overflow-hidden bg-[hsl(var(--navy-deep))] text-white">
    {/* Full-bleed minimal logistics image — subject anchored right */}
    <div className="pointer-events-none absolute inset-0">
      <img
        src={heroImg}
        alt="Minimal sleek delivery van on an open Indian highway at golden hour"
        className="absolute inset-0 h-full w-full object-cover object-right"
        fetchPriority="high"
      />
      {/* Soft left-to-right wash for text legibility — keep van visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220_60%_6%)] via-[hsl(220_55%_8%)]/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_60%_6%)]/70 via-transparent to-transparent" />
      <div className="absolute -left-40 top-1/3 h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-[120px]" />
    </div>

    <div className="relative mx-auto flex min-h-[100vh] max-w-7xl flex-col justify-center px-6 pb-24 pt-40 lg:px-12">
      <div className="max-w-2xl animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/85 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-bright animate-pulse" />
          India's smart logistics network
        </span>

        <h1 className="mt-7 max-w-[14ch] font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[4.5rem] xl:text-[5.25rem]">
          Smart Logistics.<br />
          <span className="text-gradient-teal">Seamless Deliveries</span><br />
          <span className="text-white/95">Across India.</span>
        </h1>

        <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/70 sm:text-lg">
          Logiflow connects ambitious businesses with 25+ courier partners — so every shipment
          moves on the fastest, cheapest, most reliable route. Automatically.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button size="lg" className="h-14 rounded-xl bg-accent-gradient px-8 text-base font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:opacity-95">
            Request Call Back <ArrowRight className="ml-1" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 rounded-xl border-white/25 bg-white/5 px-8 text-base font-medium text-white backdrop-blur hover:bg-white/15 hover:text-white">
            <MessageCircle /> WhatsApp
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-white/60">
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-bright" /> 25+ courier partners</div>
          <div className="hidden h-4 w-px bg-white/15 sm:block" />
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-bright" /> 27,000+ pin codes</div>
          <div className="hidden h-4 w-px bg-white/15 sm:block" />
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-bright" /> 99.2% delivery success</div>
        </div>
      </div>
    </div>

    {/* bottom fade into next section */}
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background/0" />
  </section>
);

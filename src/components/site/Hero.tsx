import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-network.jpg";

export const Hero = () => (
  <section className="relative isolate overflow-hidden bg-hero-gradient text-white">
    {/* Background network illustration — right side, low opacity, blurred edges */}
    <div className="pointer-events-none absolute inset-0">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute right-0 top-0 h-full w-full object-cover object-right opacity-40 mix-blend-screen md:w-[70%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220_60%_8%)] via-[hsl(220_60%_8%)]/80 to-transparent" />
      {/* glow orbs */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-teal/20 blur-3xl animate-pulse-glow" />
      <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-teal-bright/20 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
    </div>

    <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pb-24 pt-40 lg:px-12">
      <div className="max-w-3xl animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-bright animate-pulse" />
          India's smart logistics network
        </span>

        <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          Smart Logistics.<br />
          <span className="text-gradient-teal">Seamless Deliveries</span><br />
          Across India.
        </h1>

        <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-white/75 sm:text-xl">
          Logiflow connects businesses with multiple courier partners for reliable
          and cost-effective deliveries across India.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button size="lg" className="h-14 rounded-xl bg-accent-gradient px-8 text-base font-semibold text-white shadow-glow hover:opacity-95">
            Request Call Back <ArrowRight className="ml-1" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 rounded-xl border-white/25 bg-white/5 px-8 text-base font-medium text-white backdrop-blur hover:bg-white/15 hover:text-white">
            <MessageCircle /> WhatsApp
          </Button>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-white/60">
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-bright" /> 25+ courier partners</div>
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-bright" /> 27,000+ pin codes</div>
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-bright" /> 99.2% delivery success</div>
        </div>
      </div>
    </div>
  </section>
);

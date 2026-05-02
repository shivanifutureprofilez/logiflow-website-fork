import { Layers } from "lucide-react";
import parcels from "@/assets/parcels.jpg";

export const WhatIs = () => (
  <section className="relative bg-soft-gradient py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
      <div className="relative">
        <div className="absolute -left-6 -top-6 h-32 w-32 rounded-3xl bg-accent-gradient/20 blur-2xl" />
        <div className="relative overflow-hidden rounded-3xl shadow-lift">
          <img src={parcels} alt="Neatly packed Logiflow parcels ready for dispatch" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-navy/10 via-transparent to-transparent" />
        </div>
        <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-5 shadow-lift md:block">
          <div className="text-3xl font-extrabold text-navy">2.4M+</div>
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">parcels shipped</div>
        </div>
      </div>
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">What is Logiflow</span>
        <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl">
          One platform. <span className="text-gradient-teal">Every courier</span> you'll ever need.
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Logiflow is a <span className="font-semibold text-foreground">logistics aggregator</span> — we don't own vehicles.
            We intelligently route every shipment through the courier partner that fits best.
          </p>
          <p>
            Our engine picks the partner based on <span className="font-semibold text-foreground">speed, cost, and serviceability</span>.
            Faster deliveries for your customers. Healthier margins for you.
          </p>
        </div>
        <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-teal/20 bg-teal/5 px-5 py-2.5 text-sm font-medium text-teal">
          <Layers className="h-4 w-4" />
          Smart routing across 25+ partner networks
        </div>
      </div>
    </div>
  </section>
);

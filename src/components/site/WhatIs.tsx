import { Layers } from "lucide-react";

export const WhatIs = () => (
  <section className="bg-soft-gradient py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">What is Logiflow</span>
        <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-navy sm:text-5xl">
          One platform.<br />Every courier you'll ever need.
        </h2>
      </div>
      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          Logiflow is a <span className="font-semibold text-foreground">logistics aggregator</span> — we don't own
          vehicles. Instead, we intelligently route every shipment through the courier partner that fits best.
        </p>
        <p>
          For each order, our system picks the best partner based on <span className="font-semibold text-foreground">speed,
          cost, and serviceability</span> — so your customers get faster deliveries and you get healthier margins.
        </p>
        <div className="flex items-center gap-3 pt-2 text-sm font-medium text-teal">
          <Layers className="h-5 w-5" />
          Smart routing across 25+ partner networks
        </div>
      </div>
    </div>
  </section>
);

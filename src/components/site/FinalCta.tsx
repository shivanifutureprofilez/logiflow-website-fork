import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export const FinalCta = () => (
  <section id="contact" className="relative isolate overflow-hidden bg-cta-gradient py-28 text-white">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-teal-bright/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-teal/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
    </div>
    <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:px-12">
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-bright">Get Started</span>
        <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
          Let's Simplify Your <span className="text-gradient-teal">Logistics</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg font-light text-white/80">
          Focus on growing your business while Logiflow manages your shipping with speed,
          reliability and efficiency.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button size="lg" className="h-14 rounded-xl bg-white px-8 text-base font-semibold text-navy hover:bg-white/90">
            Request a Call Back <ArrowRight />
          </Button>
          <Button size="lg" variant="outline" className="h-14 rounded-xl border-white/25 bg-white/5 px-8 text-base font-medium text-white backdrop-blur hover:bg-white/15 hover:text-white">
            <MessageCircle /> WhatsApp us
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/60">Our team will contact you shortly to understand your requirements.</p>
      </div>
      <form className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-glow backdrop-blur-xl" onSubmit={(e) => e.preventDefault()}>
        <h3 className="text-xl font-bold">Quick enquiry</h3>
        <p className="mt-1 text-sm text-white/60">Two fields. We'll call you back.</p>
        <div className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-white/70" htmlFor="name">Name</label>
            <input id="name" type="text" required maxLength={100} className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-teal-bright focus:outline-none" placeholder="Your name" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-white/70" htmlFor="phone">Phone</label>
            <input id="phone" type="tel" required maxLength={15} className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-teal-bright focus:outline-none" placeholder="+91 90000 00000" />
          </div>
          <Button type="submit" size="lg" className="mt-2 h-12 w-full rounded-xl bg-accent-gradient font-semibold text-white shadow-glow hover:opacity-95">
            Request a Call Back <Phone className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  </section>
);

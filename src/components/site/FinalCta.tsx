import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export const FinalCta = () => (
  <section className="relative isolate overflow-hidden bg-cta-gradient py-28 text-white">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-teal-bright/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-teal/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
    </div>
    <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
      <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        Let's move your business <span className="text-gradient-teal">forward</span>.
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg font-light text-white/75">
        Talk to our team and discover how Logiflow can cut shipping costs and speed up deliveries — starting this week.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button size="lg" className="h-14 rounded-xl bg-white px-8 text-base font-semibold text-navy hover:bg-white/90">
          Request Call Back <ArrowRight />
        </Button>
        <Button size="lg" variant="outline" className="h-14 rounded-xl border-white/25 bg-white/5 px-8 text-base font-medium text-white backdrop-blur hover:bg-white/15 hover:text-white">
          <MessageCircle /> WhatsApp us
        </Button>
      </div>
    </div>
  </section>
);

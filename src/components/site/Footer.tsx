import logo from "@/assets/logiflow-logo.png";

export const Footer = () => (
  <footer className="bg-navy-deep py-16 text-white/70">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4 lg:px-12">
      <div className="md:col-span-1">
        <img src={logo} alt="Logiflow" className="h-10 w-auto" />
        <p className="mt-4 text-sm leading-relaxed text-white/60">
          India's smart logistics aggregator — connecting businesses with the best courier partners.
        </p>
      </div>
      {[
        { h: "Company", l: ["About", "Careers", "Press", "Contact"] },
        { h: "Services", l: ["Domestic", "International", "Warehousing", "Returns"] },
        { h: "Legal", l: ["Privacy", "Terms", "Refund Policy", "Compliance"] },
      ].map((c) => (
        <div key={c.h}>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">{c.h}</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {c.l.map((i) => <li key={i}><a href="#" className="hover:text-teal-bright">{i}</a></li>)}
          </ul>
        </div>
      ))}
    </div>
    <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-8 text-xs text-white/40 lg:px-12">
      © 2026 Logiflow Pvt. Ltd. All rights reserved.
    </div>
  </footer>
);

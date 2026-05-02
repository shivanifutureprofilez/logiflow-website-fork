import { Linkedin } from "lucide-react";
import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";

const founders = [
  { name: "Aarav Mehta", role: "Co-founder & CEO", bio: "12+ years in supply chain. Previously led ops at major Indian e-commerce brands.", img: founder1 },
  { name: "Priya Iyer", role: "Co-founder & COO", bio: "Built courier partnerships across India. Obsessed with on-time delivery rates.", img: founder2 },
];

export const Founders = () => (
  <section className="bg-soft-gradient py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Founders</span>
        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
          Built by operators who've <span className="text-gradient-teal">shipped at scale</span>.
        </h2>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {founders.map((f) => (
          <div key={f.name} className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-border/60 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lift sm:flex-row sm:items-center sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-accent-gradient opacity-0 transition group-hover:opacity-100" />
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl shadow-soft sm:h-36 sm:w-36">
              <img src={f.img} alt={`${f.name}, ${f.role} of Logiflow`} loading="lazy" width={800} height={1000} className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">{f.name}</h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal">{f.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-teal">
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

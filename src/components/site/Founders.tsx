import { Linkedin } from "lucide-react";

const founders = [
  { name: "Aarav Mehta", role: "Co-founder & CEO", bio: "12+ years in supply chain. Previously led ops at major Indian e-commerce brands." },
  { name: "Priya Iyer", role: "Co-founder & COO", bio: "Built courier partnerships across India. Obsessed with on-time delivery rates." },
];

export const Founders = () => (
  <section className="bg-background py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Founders</span>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl">
          Built by operators who've shipped at scale.
        </h2>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {founders.map((f) => (
          <div key={f.name} className="flex gap-6 rounded-2xl bg-soft-gradient p-8">
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-accent-gradient text-2xl font-black text-white shadow-glow">
              {f.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">{f.name}</h3>
              <p className="text-sm font-medium text-teal">{f.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-teal">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

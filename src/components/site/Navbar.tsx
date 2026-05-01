import { Button } from "@/components/ui/button";
import { Menu, Package } from "lucide-react";

const links = ["Services", "How it works", "Industries", "About", "Contact"];

export const Navbar = () => (
  <header className="absolute top-0 left-0 right-0 z-50">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
      <a href="#" className="flex items-center gap-2 text-white">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-gradient shadow-glow">
          <Package className="h-5 w-5 text-white" strokeWidth={2.5} />
        </span>
        <span className="text-xl font-bold tracking-tight">Logiflow</span>
      </a>
      <div className="hidden items-center gap-9 lg:flex">
        {links.map((l) => (
          <a key={l} href="#" className="text-sm font-medium text-white/80 transition hover:text-white">
            {l}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" className="hidden text-white hover:bg-white/10 hover:text-white md:inline-flex">
          Sign in
        </Button>
        <Button className="bg-white font-medium text-navy hover:bg-white/90">Get Started</Button>
        <button className="text-white lg:hidden"><Menu /></button>
      </div>
    </nav>
  </header>
);

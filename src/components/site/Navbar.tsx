import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from "@/assets/logiflow-logo.png";

const links = ["Services", "How it works", "Industries", "About", "Contact"];

export const Navbar = () => (
  <header className="absolute top-0 left-0 right-0 z-50">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
      <a href="#" className="flex items-center gap-2">
        <img src={logo} alt="Logiflow" className="h-12 w-auto" />
      </a>
      <div className="hidden items-center gap-9 lg:flex">
        {links.map((l) => (
          <a key={l} href="#" className="text-sm font-medium text-white/75 transition hover:text-white">
            {l}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" className="hidden text-white hover:bg-white/10 hover:text-white md:inline-flex">
          Sign in
        </Button>
        <Button className="bg-white font-semibold text-navy hover:bg-white/90">Get Started</Button>
        <button className="text-white lg:hidden" aria-label="Open menu"><Menu /></button>
      </div>
    </nav>
  </header>
);

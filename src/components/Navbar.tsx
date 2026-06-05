import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/zurich-fitness-logo.png.asset.json";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-background/90 border-b border-border/60 shadow-[0_2px_20px_rgba(0,0,0,0.4)]" : "bg-transparent border-b border-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-22 flex items-center justify-between py-2">
        {/* Logo + Brand */}
        <a href="#top" className="flex items-center gap-3 sm:gap-4 group order-1" aria-label="Zurich Fitness Rajajinagar home">
          <img
            src={logo.url}
            alt="Zurich Fitness Rajajinagar logo"
            className="h-16 sm:h-20 w-auto drop-shadow-[0_0_16px_oklch(0.64_0.22_32/0.6)] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_24px_oklch(0.64_0.22_32/0.9)]"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest italic whitespace-nowrap bg-gradient-to-b from-[oklch(0.82_0.22_42)] via-[oklch(0.70_0.24_34)] to-[oklch(0.50_0.22_26)] bg-clip-text text-transparent drop-shadow-[0_1px_8px_oklch(0.64_0.22_32/0.4)]">
              ZURICH FITNESS
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium mt-0.5">Rajajinagar</span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8 order-2">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full pb-0.5">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 order-3">
          <a href="tel:+918618889800" className="hidden sm:inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold shadow-glow hover:opacity-90 transition">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden border-t border-border bg-background overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
      >
        <ul className="px-4 py-4 space-y-1">
          {links.map((l, i) => (
            <li
              key={l.href}
              className={`transition-all duration-300 ease-out ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
            >
              <a onClick={() => setOpen(false)} href={l.href} className="block py-3 px-2 text-base text-foreground hover:text-primary border-b border-border/40">{l.label}</a>
            </li>
          ))}
          <li
            className={`pt-3 transition-all duration-300 ease-out ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            style={{ transitionDelay: open ? `${80 + links.length * 60}ms` : "0ms" }}
          >
            <a href="tel:+918618889800" className="flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold">
              <Phone className="h-4 w-4" /> Call +91 86188 89800
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

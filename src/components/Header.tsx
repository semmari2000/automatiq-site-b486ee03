import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import LangToggle from "@/components/LangToggle";
import logo from "@/assets/logo.png";

const Header = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="bg-secondary py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="AUTOMATIQ CLOUD LLC" className="h-10 rounded" />
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-muted hover:text-primary-foreground text-sm">
                {l.label}
              </a>
            ))}
          </nav>
          <LangToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-primary-foreground p-2"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden mt-4 flex flex-col gap-3 container mx-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-primary-foreground text-sm py-2 border-b border-navy-light"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";
import LangToggle from "@/components/LangToggle";
import logo from "@/assets/logo.png";

const Header = () => {
  const { t } = useLang();

  return (
    <header className="bg-secondary py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="AutomatiQ LLC" className="h-10 rounded" />
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-muted hover:text-primary-foreground text-sm">{t.nav.services}</a>
            <a href="#how-it-works" className="text-muted hover:text-primary-foreground text-sm">{t.nav.howItWorks}</a>
            <a href="#contact" className="text-muted hover:text-primary-foreground text-sm">{t.nav.contact}</a>
          </nav>
          <LangToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

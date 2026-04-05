import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-secondary py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary-foreground">
          Automati<span className="text-electric">Q</span> LLC
        </Link>
        <nav className="hidden md:flex gap-6">
          <a href="#services" className="text-muted hover:text-primary-foreground text-sm">Services</a>
          <a href="#how-it-works" className="text-muted hover:text-primary-foreground text-sm">How It Works</a>
          <a href="#contact" className="text-muted hover:text-primary-foreground text-sm">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

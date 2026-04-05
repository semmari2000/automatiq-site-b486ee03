import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © 2026 AutomatiQ LLC. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-muted hover:text-primary-foreground text-sm">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-muted hover:text-primary-foreground text-sm">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

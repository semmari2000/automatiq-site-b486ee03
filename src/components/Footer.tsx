import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-secondary py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">{t.footer.rights}</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-muted hover:text-primary-foreground text-sm">{t.footer.privacy}</Link>
          <Link to="/terms" className="text-muted hover:text-primary-foreground text-sm">{t.footer.terms}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

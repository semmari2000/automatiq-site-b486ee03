import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-secondary py-8 px-6">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          <p className="text-muted text-sm">{t.footer.rights}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-muted hover:text-primary-foreground text-sm">{t.footer.privacy}</Link>
            <Link to="/terms" className="text-muted hover:text-primary-foreground text-sm">{t.footer.terms}</Link>
          </div>
        </div>
        <div className="flex items-center gap-2 text-muted text-xs">
          <MapPin className="w-3 h-3" />
          <span>{t.footer.address}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

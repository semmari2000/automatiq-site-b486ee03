import { useLang } from "@/contexts/LangContext";
import logo from "@/assets/logo.png";

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="bg-secondary py-24 px-6">
      <div className="container mx-auto text-center max-w-3xl">
        <img src={logo} alt="AutomatiQ LLC" className="h-16 mx-auto mb-8 rounded-lg" />
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6 leading-tight">
          {t.hero.title1}<br />{t.hero.title2}
        </h1>
        <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>
        <a
          href="#contact"
          className="inline-block bg-electric hover:bg-electric-light text-primary-foreground font-semibold px-8 py-3 rounded-lg text-lg"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { useLang } from "@/contexts/LangContext";

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="bg-secondary py-24 px-6">
      <div className="container mx-auto text-center max-w-3xl">
        <p className="font-bold text-4xl md:text-6xl tracking-wide mb-6 text-white [text-shadow:_0_0_20px_rgba(255,255,255,0.8),_0_0_40px_rgba(255,255,255,0.5)]">AutomatiQ LLC</p>
        <h1 className="text-xl md:text-2xl font-bold text-secondary-foreground mb-6 leading-tight">
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

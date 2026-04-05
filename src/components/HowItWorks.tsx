import { useLang } from "@/contexts/LangContext";

const HowItWorks = () => {
  const { t } = useLang();

  return (
    <section id="how-it-works" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-secondary-foreground mb-12">{t.howItWorks.title}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-electric text-primary-foreground text-xl font-bold flex items-center justify-center mx-auto mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-secondary-foreground mb-2">{step.title}</h3>
              <p className="text-muted text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

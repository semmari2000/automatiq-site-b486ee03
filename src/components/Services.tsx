import { Bot, Bell, CheckCircle, Headphones } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const icons = [Bot, Bell, CheckCircle, Headphones];

const Services = () => {
  const { t } = useLang();

  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">{t.services.title}</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          {t.services.subtitle}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <Icon className="w-10 h-10 text-electric mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

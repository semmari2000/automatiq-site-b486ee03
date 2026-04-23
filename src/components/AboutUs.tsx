import { Building2, Globe, Mail, MapPin, Phone, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LangContext";

const icons = [Building2, Globe, Target];

const AboutUs = () => {
  const { t } = useLang();
  const companyDetails = [
    { icon: MapPin, label: t.about.addressLabel, value: t.about.address },
    { icon: Mail, label: t.about.emailLabel, value: "admin@automatiqllc.cloud", href: "mailto:admin@automatiqllc.cloud" },
    { icon: Phone, label: t.about.phoneLabel, value: "+1 (505) 209-7555", href: "tel:+15052097555" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/40">
      <div className="container mx-auto max-w-6xl space-y-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t.about.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.about.intro}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.about.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <article key={item.title} className="border border-border bg-card p-6 rounded-lg">
                <Icon className="w-10 h-10 text-electric mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="border border-border bg-background rounded-lg p-8 md:p-10 space-y-6">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-semibold text-foreground mb-2">{t.about.contactTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.about.contactDescription}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {companyDetails.map((detail) => {
              const Icon = detail.icon;

              return (
                <div key={detail.label} className="border border-border rounded-lg bg-card p-5 space-y-3">
                  <Icon className="w-5 h-5 text-electric" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="text-foreground hover:text-electric break-words">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-foreground break-words">{detail.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border border-border bg-background rounded-lg p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold text-foreground mb-3">{t.about.platformTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.about.platformDescription}</p>
          </div>

          <Button asChild size="lg" className="w-full md:w-auto">
            <a href="https://automatiq-app.lovable.app" target="_blank" rel="noreferrer">
              {t.about.platformCta}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
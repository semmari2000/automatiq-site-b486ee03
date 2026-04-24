import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLang } from "@/contexts/LangContext";

const Privacy = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-6 bg-background">
        <div className="container mx-auto max-w-3xl prose prose-sm">
          <h1 className="text-3xl font-bold text-foreground mb-8">{t.privacy.title}</h1>
          <p className="text-muted-foreground mb-4">{t.privacy.updated}</p>
          {t.privacy.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{section.title}</h2>
              {section.content.split("\n\n").map((para, j) => (
                <p key={j} className="text-muted-foreground mb-4 whitespace-pre-line">{para}</p>
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

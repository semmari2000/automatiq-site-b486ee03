import { useLang, langLabels, type Lang } from "@/contexts/LangContext";

const langs: Lang[] = ["en", "ar", "fr"];

const LangToggle = () => {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1 bg-navy-light rounded-lg p-0.5">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
            lang === l
              ? "bg-electric text-primary-foreground"
              : "text-muted hover:text-secondary-foreground"
          }`}
        >
          {langLabels[l]}
        </button>
      ))}
    </div>
  );
};

export default LangToggle;

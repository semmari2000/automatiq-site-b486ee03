import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ar" | "fr";

const translations = {
  en: {
    nav: { services: "Services", howItWorks: "How It Works", contact: "Contact" },
    hero: {
      title1: "Automate Your WhatsApp.",
      title2: "Grow Your Business.",
      subtitle: "We help e-commerce businesses in Algeria and the MENA region automate customer communication on WhatsApp — so you can sell more, respond faster, and scale effortlessly.",
      cta: "Get Started",
    },
    services: {
      title: "Our Services",
      subtitle: "Everything you need to automate your WhatsApp business communication.",
      items: [
        { title: "WhatsApp AI Chatbot", description: "Intelligent chatbots that handle customer inquiries 24/7, answer FAQs, and guide buyers through your product catalog." },
        { title: "Order Status Notifications", description: "Keep customers informed with automatic updates on shipping, delivery, and order progress via WhatsApp." },
        { title: "Order Confirmation", description: "Instant order confirmations sent directly to your customers' WhatsApp, building trust and reducing support tickets." },
        { title: "Customer Support Automation", description: "Automate repetitive support tasks — returns, exchanges, tracking — freeing your team for high-value interactions." },
      ],
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        { title: "Connect Your WhatsApp", description: "Link your WhatsApp Business account to our platform in minutes." },
        { title: "We Set Up Automation", description: "Our team configures AI chatbots, notifications, and workflows tailored to your business." },
        { title: "Customers Get Instant Replies", description: "Your customers receive fast, accurate responses — 24/7, without manual effort." },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to automate your WhatsApp? Reach out and we'll help you get started.",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      success: "Thank you for your message! We'll get back to you soon.",
    },
    footer: {
      rights: "© 2026 AutomatiQ LLC. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  ar: {
    nav: { services: "خدماتنا", howItWorks: "كيف يعمل", contact: "اتصل بنا" },
    hero: {
      title1: "أتمت واتساب الخاص بك.",
      title2: "نمِّ أعمالك.",
      subtitle: "نساعد شركات التجارة الإلكترونية في الجزائر ومنطقة الشرق الأوسط وشمال أفريقيا على أتمتة التواصل مع العملاء عبر واتساب — لتبيع أكثر وتستجيب أسرع وتتوسع بسهولة.",
      cta: "ابدأ الآن",
    },
    services: {
      title: "خدماتنا",
      subtitle: "كل ما تحتاجه لأتمتة اتصالات واتساب التجارية.",
      items: [
        { title: "روبوت واتساب الذكي", description: "روبوتات ذكية تتعامل مع استفسارات العملاء على مدار الساعة وتجيب على الأسئلة الشائعة وترشد المشترين." },
        { title: "إشعارات حالة الطلب", description: "أبقِ العملاء على اطلاع بتحديثات تلقائية عن الشحن والتوصيل وتقدم الطلب عبر واتساب." },
        { title: "تأكيد الطلب", description: "تأكيدات فورية للطلبات تُرسل مباشرة إلى واتساب عملائك، مما يبني الثقة ويقلل تذاكر الدعم." },
        { title: "أتمتة دعم العملاء", description: "أتمت المهام المتكررة — المرتجعات والتبادلات والتتبع — لتحرير فريقك للتفاعلات عالية القيمة." },
      ],
    },
    howItWorks: {
      title: "كيف يعمل",
      steps: [
        { title: "اربط واتساب الخاص بك", description: "اربط حساب واتساب للأعمال بمنصتنا في دقائق." },
        { title: "نقوم بإعداد الأتمتة", description: "يقوم فريقنا بتهيئة الروبوتات والإشعارات وسير العمل المخصص لعملك." },
        { title: "عملاؤك يحصلون على ردود فورية", description: "يتلقى عملاؤك ردوداً سريعة ودقيقة — على مدار الساعة، دون جهد يدوي." },
      ],
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "مستعد لأتمتة واتساب الخاص بك؟ تواصل معنا وسنساعدك على البدء.",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "رسالتك",
      send: "إرسال الرسالة",
      success: "شكراً لرسالتك! سنعود إليك قريباً.",
    },
    footer: {
      rights: "© 2026 AutomatiQ LLC. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
    },
  },
  fr: {
    nav: { services: "Services", howItWorks: "Comment ça marche", contact: "Contact" },
    hero: {
      title1: "Automatisez votre WhatsApp.",
      title2: "Développez votre business.",
      subtitle: "Nous aidons les entreprises e-commerce en Algérie et dans la région MENA à automatiser la communication client sur WhatsApp — pour vendre plus, répondre plus vite et évoluer sans effort.",
      cta: "Commencer",
    },
    services: {
      title: "Nos Services",
      subtitle: "Tout ce dont vous avez besoin pour automatiser votre communication WhatsApp.",
      items: [
        { title: "Chatbot IA WhatsApp", description: "Des chatbots intelligents qui gèrent les demandes clients 24h/24, répondent aux FAQ et guident les acheteurs." },
        { title: "Notifications de statut", description: "Tenez vos clients informés avec des mises à jour automatiques sur l'expédition, la livraison et l'avancement des commandes." },
        { title: "Confirmation de commande", description: "Confirmations instantanées envoyées directement sur le WhatsApp de vos clients, renforçant la confiance." },
        { title: "Automatisation du support", description: "Automatisez les tâches répétitives — retours, échanges, suivi — libérant votre équipe pour les interactions à forte valeur." },
      ],
    },
    howItWorks: {
      title: "Comment ça marche",
      steps: [
        { title: "Connectez votre WhatsApp", description: "Liez votre compte WhatsApp Business à notre plateforme en quelques minutes." },
        { title: "Nous configurons l'automatisation", description: "Notre équipe configure les chatbots IA, les notifications et les workflows adaptés à votre activité." },
        { title: "Vos clients reçoivent des réponses instantanées", description: "Vos clients reçoivent des réponses rapides et précises — 24h/24, sans effort manuel." },
      ],
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Prêt à automatiser votre WhatsApp ? Contactez-nous et nous vous aiderons à démarrer.",
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message",
      send: "Envoyer le message",
      success: "Merci pour votre message ! Nous vous répondrons bientôt.",
    },
    footer: {
      rights: "© 2026 AutomatiQ LLC. Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
  },
} as const;

type Translations = typeof translations.en;

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const LangContext = createContext<LangContextType | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang] as Translations;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LangContext.Provider value={{ lang, setLang, t, dir }}>
      <div dir={dir}>{children}</div>
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};

export const langLabels: Record<Lang, string> = {
  en: "EN",
  ar: "عربي",
  fr: "FR",
};

export type { Lang };

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
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: April 5, 2026",
      sections: [
        { title: "1. Information We Collect", content: 'AutomatiQ LLC ("we", "our", "us") collects personal information that you voluntarily provide when using our services, including your name, email address, phone number, WhatsApp Business account details, and any messages or data processed through our automation platform.' },
        { title: "2. How We Use Your Information", content: "We use the information we collect to provide and improve our WhatsApp automation services, communicate with you about your account, process transactions, send service-related notifications, and comply with legal obligations." },
        { title: "3. Third-Party Services", content: "Our services integrate with Meta Platforms, Inc. and the WhatsApp Business API. By using our services, your data may be processed in accordance with Meta's and WhatsApp's respective privacy policies. We recommend reviewing their privacy policies for details on how they handle your data." },
        { title: "4. Data Security", content: "We implement industry-standard security measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security." },
        { title: "5. Data Retention", content: "We retain your personal information only for as long as necessary to provide our services and fulfill the purposes described in this policy, unless a longer retention period is required by law." },
        { title: "6. Your Rights", content: "You have the right to access, correct, or delete your personal information. You may also request a copy of your data or withdraw consent for data processing at any time by contacting us." },
        { title: "7. Contact Us", content: "If you have questions about this Privacy Policy, please contact us at contact@automatiq.com." },
      ],
    },
    terms: {
      title: "Terms of Service",
      updated: "Last updated: April 5, 2026",
      sections: [
        { title: "1. Acceptance of Terms", content: "By accessing or using the services provided by AutomatiQ LLC, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services." },
        { title: "2. Description of Services", content: "AutomatiQ LLC provides WhatsApp automation services for e-commerce businesses, including but not limited to AI chatbots, order notifications, order confirmations, and customer support automation through the WhatsApp Business API." },
        { title: "3. Client Responsibilities", content: "You are responsible for maintaining the security of your WhatsApp Business account credentials, ensuring compliance with WhatsApp's and Meta's terms of service, providing accurate business and contact information, and using the service in accordance with applicable laws." },
        { title: "4. Limitations of Service", content: "Our services depend on the availability of the WhatsApp Business API and Meta's infrastructure. We do not guarantee uninterrupted service and are not liable for downtime or limitations imposed by third-party platforms." },
        { title: "5. Payment and Billing", content: "Service fees are outlined in your service agreement. Payment is due according to the terms specified in your contract. Late payments may result in suspension of services." },
        { title: "6. Limitation of Liability", content: "AutomatiQ LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, including lost profits, data loss, or business interruption." },
        { title: "7. Governing Law", content: "These Terms of Service shall be governed by and construed in accordance with the laws of the People's Democratic Republic of Algeria." },
        { title: "8. Contact", content: "For questions about these Terms, contact us at contact@automatiq.com." },
      ],
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

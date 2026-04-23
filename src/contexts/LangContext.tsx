import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ar" | "fr";

const translations = {
  en: {
    nav: { about: "About Us", services: "Services", howItWorks: "How It Works", contact: "Contact" },
    hero: {
      title1: "Automate Your WhatsApp.",
      title2: "Grow Your Business.",
      subtitle: "We help e-commerce businesses in Algeria and the MENA region automate customer communication on WhatsApp — so you can sell more, respond faster, and scale effortlessly.",
       cta: "Open Platform",
    },
    about: {
      title: "About Us",
      intro: "AutomatiQ Cloud LLC is a WhatsApp automation service that helps e-commerce businesses centralize conversations, automate repetitive customer interactions, and operate faster with a dedicated platform and managed implementation.",
      items: [
        { title: "What we are", description: "A specialized automation partner focused on WhatsApp-first customer operations, with tools and workflows designed for modern sales and support teams." },
        { title: "What we provide", description: "We provide chatbot setup, order notifications, confirmation flows, support automation, and access to our platform so businesses can manage communication at scale." },
        { title: "Who we target", description: "We serve e-commerce brands, online sellers, and growing businesses in Algeria and across the MENA region that want faster replies, better customer follow-up, and more efficient operations." },
      ],
      platformTitle: "Already ready to use the platform?",
      platformDescription: "This website introduces our company and services. To access the actual AutomatiQ platform, open the app and continue from there.",
      platformCta: "Open Platform",
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
    nav: { about: "من نحن", services: "خدماتنا", howItWorks: "كيف يعمل", contact: "اتصل بنا" },
    hero: {
      title1: "أتمت واتساب الخاص بك.",
      title2: "نمِّ أعمالك.",
      subtitle: "نساعد شركات التجارة الإلكترونية في الجزائر ومنطقة الشرق الأوسط وشمال أفريقيا على أتمتة التواصل مع العملاء عبر واتساب — لتبيع أكثر وتستجيب أسرع وتتوسع بسهولة.",
      cta: "ابدأ الآن",
    },
    about: {
      title: "من نحن",
      intro: "AutomatiQ Cloud LLC هي شركة متخصصة في أتمتة واتساب تساعد الشركات على تنظيم المحادثات، وأتمتة التفاعلات المتكررة مع العملاء، والعمل بكفاءة أعلى عبر منصة مخصصة وتنفيذ مُدار.",
      items: [
        { title: "ما هي الشركة", description: "نحن شريك متخصص في أتمتة العمليات المعتمدة على واتساب، مع أدوات وسير عمل مصمم لفرق المبيعات والدعم الحديثة." },
        { title: "ماذا نقدم", description: "نوفر إعداد روبوتات المحادثة، وإشعارات الطلبات، وتدفقات تأكيد الطلب، وأتمتة الدعم، بالإضافة إلى الوصول إلى منصتنا لإدارة التواصل على نطاق واسع." },
        { title: "من نستهدف", description: "نستهدف علامات التجارة الإلكترونية، والبائعين عبر الإنترنت، والشركات النامية في الجزائر ومنطقة الشرق الأوسط وشمال أفريقيا التي تريد ردوداً أسرع ومتابعة أفضل وكفاءة تشغيلية أعلى." },
      ],
      platformTitle: "جاهز للدخول إلى المنصة؟",
      platformDescription: "هذا الموقع يعرّف بشركتنا وخدماتنا فقط. للوصول إلى منصة AutomatiQ الفعلية، افتح التطبيق وأكمل من هناك.",
      platformCta: "فتح المنصة",
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
    privacy: {
      title: "سياسة الخصوصية",
      updated: "آخر تحديث: 5 أبريل 2026",
      sections: [
        { title: "1. المعلومات التي نجمعها", content: 'تقوم شركة AutomatiQ LLC ("نحن") بجمع المعلومات الشخصية التي تقدمها طوعاً عند استخدام خدماتنا، بما في ذلك اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وتفاصيل حساب واتساب للأعمال وأي رسائل أو بيانات تتم معالجتها عبر منصتنا.' },
        { title: "2. كيف نستخدم معلوماتك", content: "نستخدم المعلومات التي نجمعها لتقديم وتحسين خدمات أتمتة واتساب، والتواصل معك بشأن حسابك، ومعالجة المعاملات، وإرسال إشعارات الخدمة، والامتثال للالتزامات القانونية." },
        { title: "3. خدمات الطرف الثالث", content: "تتكامل خدماتنا مع شركة Meta Platforms, Inc. وواجهة برمجة تطبيقات واتساب للأعمال. باستخدام خدماتنا، قد تتم معالجة بياناتك وفقاً لسياسات الخصوصية الخاصة بـ Meta وWhatsApp." },
        { title: "4. أمن البيانات", content: "ننفذ إجراءات أمنية معيارية لحماية معلوماتك الشخصية. ومع ذلك، لا توجد طريقة نقل أو تخزين إلكتروني آمنة بنسبة 100%، ولا يمكننا ضمان الأمان المطلق." },
        { title: "5. الاحتفاظ بالبيانات", content: "نحتفظ بمعلوماتك الشخصية فقط طالما كان ذلك ضرورياً لتقديم خدماتنا وتحقيق الأغراض الموصوفة في هذه السياسة، ما لم يكن القانون يتطلب فترة احتفاظ أطول." },
        { title: "6. حقوقك", content: "لديك الحق في الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها. يمكنك أيضاً طلب نسخة من بياناتك أو سحب الموافقة على معالجة البيانات في أي وقت عن طريق الاتصال بنا." },
        { title: "7. اتصل بنا", content: "إذا كانت لديك أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على contact@automatiq.com." },
      ],
    },
    terms: {
      title: "شروط الخدمة",
      updated: "آخر تحديث: 5 أبريل 2026",
      sections: [
        { title: "1. قبول الشروط", content: "من خلال الوصول إلى الخدمات المقدمة من AutomatiQ LLC أو استخدامها، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا لم توافق على هذه الشروط، فلا يجوز لك استخدام خدماتنا." },
        { title: "2. وصف الخدمات", content: "توفر AutomatiQ LLC خدمات أتمتة واتساب لشركات التجارة الإلكترونية، بما في ذلك روبوتات الدردشة الذكية وإشعارات الطلبات وتأكيدات الطلبات وأتمتة دعم العملاء عبر واجهة برمجة تطبيقات واتساب للأعمال." },
        { title: "3. مسؤوليات العميل", content: "أنت مسؤول عن الحفاظ على أمان بيانات اعتماد حساب واتساب للأعمال الخاص بك، وضمان الامتثال لشروط خدمة واتساب وMeta، وتقديم معلومات دقيقة، واستخدام الخدمة وفقاً للقوانين المعمول بها." },
        { title: "4. قيود الخدمة", content: "تعتمد خدماتنا على توفر واجهة برمجة تطبيقات واتساب للأعمال والبنية التحتية لـ Meta. لا نضمن خدمة متواصلة ولسنا مسؤولين عن التوقف أو القيود المفروضة من منصات الطرف الثالث." },
        { title: "5. الدفع والفوترة", content: "يتم تحديد رسوم الخدمة في اتفاقية الخدمة الخاصة بك. يستحق الدفع وفقاً للشروط المحددة في عقدك. قد يؤدي التأخر في الدفع إلى تعليق الخدمات." },
        { title: "6. تحديد المسؤولية", content: "لن تكون AutomatiQ LLC مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدام خدماتنا، بما في ذلك الأرباح المفقودة أو فقدان البيانات أو انقطاع الأعمال." },
        { title: "7. القانون الحاكم", content: "تخضع شروط الخدمة هذه وتفسر وفقاً لقوانين الجمهورية الجزائرية الديمقراطية الشعبية." },
        { title: "8. الاتصال", content: "لأي أسئلة حول هذه الشروط، اتصل بنا على contact@automatiq.com." },
      ],
    },
    footer: {
      rights: "© 2026 AutomatiQ LLC. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
    },
  },
  fr: {
    nav: { about: "À propos", services: "Services", howItWorks: "Comment ça marche", contact: "Contact" },
    hero: {
      title1: "Automatisez votre WhatsApp.",
      title2: "Développez votre business.",
      subtitle: "Nous aidons les entreprises e-commerce en Algérie et dans la région MENA à automatiser la communication client sur WhatsApp — pour vendre plus, répondre plus vite et évoluer sans effort.",
      cta: "Commencer",
    },
    about: {
      title: "À propos",
      intro: "AutomatiQ Cloud LLC est une entreprise d'automatisation WhatsApp qui aide les sociétés à centraliser les conversations, automatiser les interactions clients répétitives et fonctionner plus vite grâce à une plateforme dédiée et un accompagnement opérationnel.",
      items: [
        { title: "Qui nous sommes", description: "Un partenaire spécialisé dans les opérations client orientées WhatsApp, avec des outils et des workflows pensés pour les équipes modernes de vente et de support." },
        { title: "Ce que nous proposons", description: "Nous mettons en place des chatbots, des notifications de commande, des flux de confirmation, l'automatisation du support et l'accès à notre plateforme pour gérer la communication à grande échelle." },
        { title: "À qui cela s'adresse", description: "Nous ciblons les marques e-commerce, les vendeurs en ligne et les entreprises en croissance en Algérie et dans la région MENA qui veulent répondre plus vite, mieux relancer leurs clients et gagner en efficacité." },
      ],
      platformTitle: "Prêt à accéder à la plateforme ?",
      platformDescription: "Ce site présente notre société et nos services. Pour accéder à la véritable plateforme AutomatiQ, ouvrez l'application et continuez depuis l'application.",
      platformCta: "Ouvrir la plateforme",
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
    privacy: {
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : 5 avril 2026",
      sections: [
        { title: "1. Informations que nous collectons", content: "AutomatiQ LLC (\"nous\") collecte les informations personnelles que vous fournissez volontairement lors de l'utilisation de nos services, y compris votre nom, adresse e-mail, numéro de téléphone, détails du compte WhatsApp Business et tout message ou donnée traité via notre plateforme." },
        { title: "2. Utilisation de vos informations", content: "Nous utilisons les informations collectées pour fournir et améliorer nos services d'automatisation WhatsApp, communiquer avec vous concernant votre compte, traiter les transactions, envoyer des notifications de service et respecter les obligations légales." },
        { title: "3. Services tiers", content: "Nos services s'intègrent avec Meta Platforms, Inc. et l'API WhatsApp Business. En utilisant nos services, vos données peuvent être traitées conformément aux politiques de confidentialité de Meta et WhatsApp." },
        { title: "4. Sécurité des données", content: "Nous mettons en œuvre des mesures de sécurité standard pour protéger vos informations personnelles. Cependant, aucune méthode de transmission ou de stockage électronique n'est sûre à 100%, et nous ne pouvons garantir une sécurité absolue." },
        { title: "5. Conservation des données", content: "Nous conservons vos informations personnelles uniquement aussi longtemps que nécessaire pour fournir nos services et remplir les objectifs décrits dans cette politique, sauf si la loi exige une période de conservation plus longue." },
        { title: "6. Vos droits", content: "Vous avez le droit d'accéder, de corriger ou de supprimer vos informations personnelles. Vous pouvez également demander une copie de vos données ou retirer votre consentement au traitement des données à tout moment en nous contactant." },
        { title: "7. Nous contacter", content: "Si vous avez des questions sur cette politique de confidentialité, veuillez nous contacter à contact@automatiq.com." },
      ],
    },
    terms: {
      title: "Conditions d'utilisation",
      updated: "Dernière mise à jour : 5 avril 2026",
      sections: [
        { title: "1. Acceptation des conditions", content: "En accédant ou en utilisant les services fournis par AutomatiQ LLC, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, vous ne pouvez pas utiliser nos services." },
        { title: "2. Description des services", content: "AutomatiQ LLC fournit des services d'automatisation WhatsApp pour les entreprises e-commerce, y compris les chatbots IA, les notifications de commandes, les confirmations de commandes et l'automatisation du support client via l'API WhatsApp Business." },
        { title: "3. Responsabilités du client", content: "Vous êtes responsable de la sécurité des identifiants de votre compte WhatsApp Business, du respect des conditions de service de WhatsApp et Meta, de la fourniture d'informations exactes et de l'utilisation du service conformément aux lois applicables." },
        { title: "4. Limitations du service", content: "Nos services dépendent de la disponibilité de l'API WhatsApp Business et de l'infrastructure de Meta. Nous ne garantissons pas un service ininterrompu et ne sommes pas responsables des interruptions ou limitations imposées par des plateformes tierces." },
        { title: "5. Paiement et facturation", content: "Les frais de service sont détaillés dans votre contrat de service. Le paiement est dû selon les termes spécifiés dans votre contrat. Les retards de paiement peuvent entraîner la suspension des services." },
        { title: "6. Limitation de responsabilité", content: "AutomatiQ LLC ne sera pas responsable des dommages indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation de nos services, y compris les pertes de profits, la perte de données ou l'interruption d'activité." },
        { title: "7. Loi applicable", content: "Ces conditions d'utilisation sont régies et interprétées conformément aux lois de la République Algérienne Démocratique et Populaire." },
        { title: "8. Contact", content: "Pour toute question concernant ces conditions, contactez-nous à contact@automatiq.com." },
      ],
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

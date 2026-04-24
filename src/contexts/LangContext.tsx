import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ar" | "fr";

const translations = {
  en: {
    nav: { about: "About Us", services: "Services", howItWorks: "How It Works", contact: "Contact" },
    hero: {
      title1: "Automate Your WhatsApp.",
      title2: "Grow Your E-Commerce.",
      subtitle: "We help e-commerce businesses in Algeria and the MENA region automate customer communication on WhatsApp — so you can sell more, respond faster, and scale effortlessly.",
       cta: "Open Platform",
    },
    about: {
      title: "About Us",
      intro: "AutomatiQ Cloud LLC is a WhatsApp automation service that helps e-commerce businesses centralize conversations, automate repetitive customer interactions, and operate faster with a dedicated platform and managed implementation.",
      items: [
        { title: "Who we are", description: "A specialized automation partner focused on WhatsApp-first customer operations, with tools and workflows designed for modern sales and support teams." },
        { title: "What we provide", description: "We provide chatbot setup, order notifications, confirmation flows, support automation, and access to our platform so e-commerce teams can manage communication at scale." },
        { title: "Who we target", description: "We serve e-commerce brands, online sellers, and growing businesses in Algeria and across the MENA region that want faster replies, better customer follow-up, and more efficient operations." },
      ],
      contactTitle: "Business Details",
      contactDescription: "AutomatiQ Cloud LLC operates as a U.S. company serving e-commerce brands with WhatsApp automation services and platform access.",
      addressLabel: "Address",
      address: "8206 Louisiana Blvd Ne, Ste A #9329, Albuquerque, New Mexico 87113 US",
      emailLabel: "Business Email",
      phoneLabel: "Business Phone",
      platformTitle: "Already ready to use the platform?",
      platformDescription: "This website introduces our company and services. To access the actual AutomatiQ platform, open the app and continue from there.",
      platformCta: "Open Platform",
    },
    services: {
      title: "Our Services",
      subtitle: "Everything you need to automate your e-commerce communication on WhatsApp.",
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
      subtitle: "Ready to automate your e-commerce WhatsApp operations? Reach out and we'll help you get started.",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      success: "Thank you for your message! We'll get back to you soon.",
    },
    privacy: {
      title: "AutomatiQ — Privacy Policy",
      updated: "AUTOMATIQ CLOUD LLC | Effective: April 2026",
      sections: [
        { title: "1. Overview", content: "AutomatiQ, operated by AUTOMATIQ CLOUD LLC, is committed to protecting the privacy of our clients and their customers. This Privacy Policy explains what data we collect, how we use it, and your rights regarding that data." },
        { title: "2. Data We Collect", content: "2.1 Client Business Data\n\nWhen you register and use our platform, we collect:\n\n• Business name, contact email, and phone number.\n• WhatsApp Business Account (WABA) credentials and access tokens provided via Meta's Embedded Signup.\n• Subscription and billing information.\n\n2.2 End-Customer Data (Your Customers)\n\nThrough our services, we process on your behalf:\n\n• Customer WhatsApp phone numbers.\n• Message content sent and received via WhatsApp.\n• Order details, cart information, and purchase history passed through your integration.\n• Opt-in records where provided by you.\n\n2.3 Technical Data\n\n• Webhook payloads received from Meta's WhatsApp Cloud API.\n• System logs, error reports, and API usage metrics." },
        { title: "3. How We Use Your Data", content: "We use collected data exclusively to:\n\n• Deliver and operate the automation services you have subscribed to.\n• Send WhatsApp messages on your behalf to your opted-in customers.\n• Process billing and manage your subscription.\n• Troubleshoot technical issues and improve service reliability.\n• Comply with legal obligations.\n\nWe do not sell, rent, or share your data or your customers' data with third parties for marketing purposes." },
        { title: "4. Third-Party Services", content: "Our platform integrates with the following third-party services to deliver functionality:\n\n• Meta (WhatsApp Cloud API) — message delivery and WABA management. Meta's Privacy Policy applies to all WhatsApp-transmitted data.\n• Supabase — secure cloud database for storing workflow and conversation data.\n• AI providers (e.g. OpenAI, Anthropic) — for processing customer support chatbot responses. Message content may be transmitted to these providers for inference purposes only." },
        { title: "5. Data Storage & Security", content: "All data is stored on secured cloud infrastructure. We implement industry-standard security measures including encryption at rest and in transit, access controls, and regular security reviews. However, no system is completely immune to breach. We will notify affected clients promptly in the event of a data incident." },
        { title: "6. Data Retention", content: "We retain client business data for the duration of the service relationship plus 90 days following termination. Conversation logs are retained for up to 12 months and may be deleted upon client request. Billing records are retained for 5 years as required for financial compliance." },
        { title: "7. Requesting Data Deletion", content: "All users, without exception, can request their data be deleted at any time by emailing admin@automatiqllc.cloud or by phone at +1 (505) 209-7555." },
        { title: "8. Your Rights", content: "As a client, you have the right to:\n\n• Access the data we hold about your business.\n• Request correction of inaccurate data.\n• Request deletion of your business data upon termination of services.\n• Withdraw consent for data processing (note: this may prevent us from delivering services).\n\nTo exercise any of these rights, contact us at admin@automatiqllc.cloud." },
        { title: "9. Your Customers' Rights", content: "As the data controller for your customers' information, you are responsible for honoring their privacy rights under applicable law (including GDPR where applicable). AutomatiQ acts as a data processor on your behalf. You must ensure your customers are informed that their WhatsApp messages may be processed by automated systems." },
        { title: "10. Cookies & Tracking", content: "Our web platform uses essential cookies for authentication and session management. We do not use advertising or tracking cookies. Analytics may be collected in aggregate, anonymized form to improve platform performance." },
        { title: "11. Children's Privacy", content: "Our services are not directed at individuals under the age of 18. We do not knowingly collect data from minors." },
        { title: "12. Changes to This Policy", content: "We may update this Privacy Policy from time to time. We will notify registered clients of material changes via email. Continued use of our services after notification constitutes acceptance of the updated policy." },
        { title: "13. Contact", content: "For privacy-related inquiries or to exercise your rights, contact us at:\n\nEmail: admin@automatiqllc.cloud\nWebsite: site.automatiqllc.cloud" },
      ],
    },
    terms: {
      title: "AutomatiQ — Terms of Use",
      updated: "AUTOMATIQ CLOUD LLC | Effective: April 2026",
      sections: [
        { title: "1. Introduction", content: 'These Terms of Use ("Terms") govern your access to and use of the services provided by AUTOMATIQ CLOUD LLC, operating under the brand name AutomatiQ ("we", "us", or "our"). By accessing or using our platform, you agree to be bound by these Terms.' },
        { title: "2. Services Offered", content: "AutomatiQ is a SaaS platform that provides WhatsApp Business automation services to e-commerce businesses in MENA, including but not limited to:\n\n• Order confirmation messaging — automated order confirmation notifications sent to customers via WhatsApp immediately following a purchase.\n• Order status update notifications — real-time shipping and delivery status updates sent to customers on behalf of your business.\n• Customer support AI chatbots — AI-powered automated response systems that handle customer inquiries and support requests via WhatsApp.\n• Abandoned cart retrieval — automated messages sent to customers who have initiated a purchase but did not complete checkout.\n• Customer retargeting — re-engagement messages directed at customers who have previously made a purchase from your business." },
        { title: "3. Eligibility", content: "You must be at least 18 years of age and operating a legally registered business to use our services. By using AutomatiQ, you represent that all information you provide is accurate, current, and complete." },
        { title: "4. Client Responsibilities", content: "4.1 Opt-In Compliance\n\nYou are solely responsible for ensuring that all WhatsApp message recipients have provided explicit consent (opt-in) to receive business communications from your business. AutomatiQ does not verify opt-in records on your behalf. You agree to maintain accurate records of all customer opt-ins.\n\n4.2 Content Responsibility\n\nYou are fully responsible for all message content sent through our platform, including templates submitted for Meta approval. AutomatiQ is not liable for content that violates applicable laws, regulations, or platform policies." },
        { title: "5. Prohibited Uses", content: "You agree not to use our services to:\n\n• Send unsolicited messages (spam) to individuals who have not opted in.\n• Transmit content that is misleading, fraudulent, defamatory, or illegal.\n• Impersonate any person, business, or entity.\n• Violate any applicable local, national, or international law or regulation.\n• Attempt to reverse-engineer, decompile, or otherwise access our proprietary systems." },
        { title: "6. WhatsApp API & Meta Compliance", content: "Our services operate on Meta's official WhatsApp Cloud API. AutomatiQ is a SaaS platform, we are not a WhatsApp Business Solution Provider (BSP) and do not guarantee specific API behaviors. All messaging activity must comply with Meta's current policies, which may change without notice." },
        { title: "7. Payment & Billing", content: "Clients are billed on a prepaid subscription basis. All fees must be paid in advance before services are rendered. WhatsApp conversation fees charged by Meta are passed through to the client and are separate from AutomatiQ's service fees. AutomatiQ reserves the right to suspend services in the event of non-payment." },
        { title: "8. Service Availability", content: "We strive to maintain consistent uptime but do not guarantee uninterrupted service. Downtime may result from Meta API outages, infrastructure maintenance, or factors beyond our control. AutomatiQ shall not be liable for any damages arising from service interruptions." },
        { title: "9. Intellectual Property", content: "All platform software, designs, workflows, and content created by AutomatiQ remain the exclusive property of AUTOMATIQ CLOUD LLC. You retain ownership of your business data and message content. By using our services, you grant us a limited license to process your data solely for the purpose of providing our services." },
        { title: "10. Termination", content: "Either party may terminate the service relationship with 7 days written notice. AutomatiQ reserves the right to immediately suspend or terminate access in cases of policy violations, abusive behavior, or non-payment." },
        { title: "11. Limitation of Liability", content: "To the maximum extent permitted by law, AUTOMATIQ CLOUD LLC shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of our services, including but not limited to lost profits, data loss, or business interruption." },
        { title: "12. Changes to Terms", content: "We reserve the right to modify these Terms at any time. Continued use of our services following notification of changes constitutes acceptance of the revised Terms." },
        { title: "13. Contact", content: "For questions regarding these Terms, contact us at: admin@automatiqllc.cloud\n\nWebsite: site.automatiqllc.cloud\nBusiness phone number: +1 (505) 209-7555" },
      ],
    },
     footer: {
       rights: "© 2026 AutomatiQ Cloud LLC. All rights reserved.",
       privacy: "Privacy Policy",
       terms: "Terms of Service",
     },
  },
  ar: {
    nav: { about: "من نحن", services: "خدماتنا", howItWorks: "كيف يعمل", contact: "اتصل بنا" },
    hero: {
      title1: "أتمت واتساب الخاص بك.",
      title2: "نمِّ تجارتك الإلكترونية.",
      subtitle: "نساعد شركات التجارة الإلكترونية في الجزائر ومنطقة الشرق الأوسط وشمال أفريقيا على أتمتة التواصل مع العملاء عبر واتساب — لتبيع أكثر وتستجيب أسرع وتتوسع بسهولة.",
      cta: "فتح المنصة",
    },
    about: {
      title: "من نحن",
      intro: "AutomatiQ Cloud LLC هي خدمة أتمتة واتساب تساعد شركات التجارة الإلكترونية على تنظيم المحادثات، وأتمتة التفاعلات المتكررة مع العملاء، والعمل بكفاءة أعلى عبر منصة مخصصة وتنفيذ مُدار.",
      items: [
        { title: "من نحن", description: "نحن شريك متخصص في أتمتة العمليات المعتمدة على واتساب، مع أدوات وسير عمل مصمم لفرق المبيعات والدعم الحديثة." },
        { title: "ماذا نقدم", description: "نوفر إعداد روبوتات المحادثة، وإشعارات الطلبات، وتدفقات تأكيد الطلب، وأتمتة الدعم، بالإضافة إلى الوصول إلى منصتنا لإدارة تواصل فرق التجارة الإلكترونية على نطاق واسع." },
        { title: "من نستهدف", description: "نستهدف علامات التجارة الإلكترونية، والبائعين عبر الإنترنت، والشركات النامية في الجزائر ومنطقة الشرق الأوسط وشمال أفريقيا التي تريد ردوداً أسرع ومتابعة أفضل وكفاءة تشغيلية أعلى." },
      ],
      contactTitle: "بيانات الشركة",
      contactDescription: "تعمل AutomatiQ Cloud LLC كشركة أمريكية تخدم علامات التجارة الإلكترونية عبر خدمات أتمتة واتساب والوصول إلى المنصة.",
      addressLabel: "العنوان",
      address: "8206 Louisiana Blvd Ne, Ste A #9329, Albuquerque, New Mexico 87113 US",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "هاتف الشركة",
      platformTitle: "جاهز للدخول إلى المنصة؟",
      platformDescription: "هذا الموقع يعرّف بشركتنا وخدماتنا فقط. للوصول إلى منصة AutomatiQ الفعلية، افتح التطبيق وأكمل من هناك.",
      platformCta: "فتح المنصة",
    },
    services: {
      title: "خدماتنا",
      subtitle: "كل ما تحتاجه لأتمتة تواصل التجارة الإلكترونية عبر واتساب.",
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
      subtitle: "مستعد لأتمتة عمليات التجارة الإلكترونية عبر واتساب؟ تواصل معنا وسنساعدك على البدء.",
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
         { title: "1. المعلومات التي نجمعها", content: 'تقوم شركة AutomatiQ Cloud LLC ("نحن") بجمع المعلومات الشخصية التي تقدمها طوعاً عند استخدام خدماتنا، بما في ذلك اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وتفاصيل حساب واتساب للأعمال وأي رسائل أو بيانات تتم معالجتها عبر منصتنا.' },
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
         { title: "1. قبول الشروط", content: "من خلال الوصول إلى الخدمات المقدمة من AutomatiQ Cloud LLC أو استخدامها، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا لم توافق على هذه الشروط، فلا يجوز لك استخدام خدماتنا." },
         { title: "2. وصف الخدمات", content: "توفر AutomatiQ Cloud LLC خدمات أتمتة واتساب لشركات التجارة الإلكترونية، بما في ذلك روبوتات الدردشة الذكية وإشعارات الطلبات وتأكيدات الطلبات وأتمتة دعم العملاء عبر واجهة برمجة تطبيقات واتساب للأعمال." },
        { title: "3. مسؤوليات العميل", content: "أنت مسؤول عن الحفاظ على أمان بيانات اعتماد حساب واتساب للأعمال الخاص بك، وضمان الامتثال لشروط خدمة واتساب وMeta، وتقديم معلومات دقيقة، واستخدام الخدمة وفقاً للقوانين المعمول بها." },
        { title: "4. قيود الخدمة", content: "تعتمد خدماتنا على توفر واجهة برمجة تطبيقات واتساب للأعمال والبنية التحتية لـ Meta. لا نضمن خدمة متواصلة ولسنا مسؤولين عن التوقف أو القيود المفروضة من منصات الطرف الثالث." },
        { title: "5. الدفع والفوترة", content: "يتم تحديد رسوم الخدمة في اتفاقية الخدمة الخاصة بك. يستحق الدفع وفقاً للشروط المحددة في عقدك. قد يؤدي التأخر في الدفع إلى تعليق الخدمات." },
         { title: "6. تحديد المسؤولية", content: "لن تكون AutomatiQ Cloud LLC مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدام خدماتنا، بما في ذلك الأرباح المفقودة أو فقدان البيانات أو انقطاع الأعمال." },
        { title: "7. القانون الحاكم", content: "تخضع شروط الخدمة هذه وتفسر وفقاً لقوانين الجمهورية الجزائرية الديمقراطية الشعبية." },
        { title: "8. الاتصال", content: "لأي أسئلة حول هذه الشروط، اتصل بنا على contact@automatiq.com." },
      ],
    },
     footer: {
       rights: "© 2026 AutomatiQ Cloud LLC. جميع الحقوق محفوظة.",
       privacy: "سياسة الخصوصية",
       terms: "شروط الخدمة",
     },
  },
  fr: {
    nav: { about: "À propos", services: "Services", howItWorks: "Comment ça marche", contact: "Contact" },
    hero: {
      title1: "Automatisez votre WhatsApp.",
      title2: "Développez votre e-commerce.",
      subtitle: "Nous aidons les entreprises e-commerce en Algérie et dans la région MENA à automatiser la communication client sur WhatsApp — pour vendre plus, répondre plus vite et évoluer sans effort.",
      cta: "Ouvrir la plateforme",
    },
    about: {
      title: "À propos",
      intro: "AutomatiQ Cloud LLC est un service d'automatisation WhatsApp qui aide les entreprises e-commerce à centraliser les conversations, automatiser les interactions clients répétitives et fonctionner plus vite grâce à une plateforme dédiée et un accompagnement opérationnel.",
      items: [
        { title: "Qui nous sommes", description: "Un partenaire spécialisé dans les opérations client orientées WhatsApp, avec des outils et des workflows pensés pour les équipes modernes de vente et de support." },
        { title: "Ce que nous proposons", description: "Nous mettons en place des chatbots, des notifications de commande, des flux de confirmation, l'automatisation du support et l'accès à notre plateforme pour aider les équipes e-commerce à gérer la communication à grande échelle." },
        { title: "À qui cela s'adresse", description: "Nous ciblons les marques e-commerce, les vendeurs en ligne et les entreprises en croissance en Algérie et dans la région MENA qui veulent répondre plus vite, mieux relancer leurs clients et gagner en efficacité." },
      ],
      contactTitle: "Informations de l'entreprise",
      contactDescription: "AutomatiQ Cloud LLC opère comme une société américaine au service des marques e-commerce avec des services d'automatisation WhatsApp et l'accès à la plateforme.",
      addressLabel: "Adresse",
      address: "8206 Louisiana Blvd Ne, Ste A #9329, Albuquerque, New Mexico 87113 US",
      emailLabel: "Email professionnel",
      phoneLabel: "Téléphone professionnel",
      platformTitle: "Prêt à accéder à la plateforme ?",
      platformDescription: "Ce site présente notre société et nos services. Pour accéder à la véritable plateforme AutomatiQ, ouvrez l'application et continuez depuis l'application.",
      platformCta: "Ouvrir la plateforme",
    },
    services: {
      title: "Nos Services",
      subtitle: "Tout ce dont vous avez besoin pour automatiser votre communication e-commerce sur WhatsApp.",
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
      subtitle: "Prêt à automatiser vos opérations e-commerce sur WhatsApp ? Contactez-nous et nous vous aiderons à démarrer.",
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
         { title: "1. Informations que nous collectons", content: "AutomatiQ Cloud LLC (\"nous\") collecte les informations personnelles que vous fournissez volontairement lors de l'utilisation de nos services, y compris votre nom, adresse e-mail, numéro de téléphone, détails du compte WhatsApp Business et tout message ou donnée traité via notre plateforme." },
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
         { title: "1. Acceptation des conditions", content: "En accédant ou en utilisant les services fournis par AutomatiQ Cloud LLC, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, vous ne pouvez pas utiliser nos services." },
         { title: "2. Description des services", content: "AutomatiQ Cloud LLC fournit des services d'automatisation WhatsApp pour les entreprises e-commerce, y compris les chatbots IA, les notifications de commandes, les confirmations de commandes et l'automatisation du support client via l'API WhatsApp Business." },
        { title: "3. Responsabilités du client", content: "Vous êtes responsable de la sécurité des identifiants de votre compte WhatsApp Business, du respect des conditions de service de WhatsApp et Meta, de la fourniture d'informations exactes et de l'utilisation du service conformément aux lois applicables." },
        { title: "4. Limitations du service", content: "Nos services dépendent de la disponibilité de l'API WhatsApp Business et de l'infrastructure de Meta. Nous ne garantissons pas un service ininterrompu et ne sommes pas responsables des interruptions ou limitations imposées par des plateformes tierces." },
        { title: "5. Paiement et facturation", content: "Les frais de service sont détaillés dans votre contrat de service. Le paiement est dû selon les termes spécifiés dans votre contrat. Les retards de paiement peuvent entraîner la suspension des services." },
         { title: "6. Limitation de responsabilité", content: "AutomatiQ Cloud LLC ne sera pas responsable des dommages indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation de nos services, y compris les pertes de profits, la perte de données ou l'interruption d'activité." },
        { title: "7. Loi applicable", content: "Ces conditions d'utilisation sont régies et interprétées conformément aux lois de la République Algérienne Démocratique et Populaire." },
        { title: "8. Contact", content: "Pour toute question concernant ces conditions, contactez-nous à contact@automatiq.com." },
      ],
    },
     footer: {
       rights: "© 2026 AutomatiQ Cloud LLC. Tous droits réservés.",
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

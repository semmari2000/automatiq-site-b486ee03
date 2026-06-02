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
      intro: "AUTOMATIQ CLOUD LLC is a WhatsApp automation service that helps e-commerce businesses centralize conversations, automate repetitive customer interactions, and operate faster with a dedicated platform and managed implementation.",
      items: [
        { title: "Who we are", description: "A specialized automation partner focused on WhatsApp-first customer operations, with tools and workflows designed for modern sales and support teams." },
        { title: "What we provide", description: "We provide chatbot setup, order notifications, confirmation flows, support automation, and access to our platform so e-commerce teams can manage communication at scale." },
        { title: "Who we target", description: "We serve e-commerce brands, online sellers, and growing businesses in Algeria and across the MENA region that want faster replies, better customer follow-up, and more efficient operations." },
      ],
      contactTitle: "Business Details",
      contactDescription: "AUTOMATIQ CLOUD LLC operates as a U.S. company serving e-commerce brands with WhatsApp automation services and platform access.",
      addressLabel: "Address",
      address: "8206 LOUISIANA BLVD NE, STE A #9329, ALBUQUERQUE, NM 87113",
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
        { title: "13. Contact", content: "For privacy-related inquiries or to exercise your rights, contact us at:\n\nEmail: admin@automatiqllc.cloud\nPhone: +1 (505) 209-7555\nAddress: 8206 LOUISIANA BLVD NE, STE A #9329, ALBUQUERQUE, NM 87113\nWebsite: site.automatiqllc.cloud" },
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
        { title: "13. Contact", content: "For questions regarding these Terms, contact us at: admin@automatiqllc.cloud\n\nPhone: +1 (505) 209-7555\nAddress: 8206 LOUISIANA BLVD NE, STE A #9329, ALBUQUERQUE, NM 87113\nWebsite: site.automatiqllc.cloud" },
      ],
    },
    footer: {
      rights: "© 2026 AUTOMATIQ CLOUD LLC. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      address: "8206 LOUISIANA BLVD NE, STE A #9329, ALBUQUERQUE, NM 87113",
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
      intro: "AUTOMATIQ CLOUD LLC هي خدمة أتمتة واتساب تساعد شركات التجارة الإلكترونية على تنظيم المحادثات، وأتمتة التفاعلات المتكررة مع العملاء، والعمل بكفاءة أعلى عبر منصة مخصصة وتنفيذ مُدار.",
      items: [
        { title: "من نحن", description: "نحن شريك متخصص في أتمتة العمليات المعتمدة على واتساب، مع أدوات وسير عمل مصمم لفرق المبيعات والدعم الحديثة." },
        { title: "ماذا نقدم", description: "نوفر إعداد روبوتات المحادثة، وإشعارات الطلبات، وتدفقات تأكيد الطلب، وأتمتة الدعم، بالإضافة إلى الوصول إلى منصتنا لإدارة تواصل فرق التجارة الإلكترونية على نطاق واسع." },
        { title: "من نستهدف", description: "نستهدف علامات التجارة الإلكترونية، والبائعين عبر الإنترنت، والشركات النامية في الجزائر ومنطقة الشرق الأوسط وشمال أفريقيا التي تريد ردوداً أسرع ومتابعة أفضل وكفاءة تشغيلية أعلى." },
      ],
      contactTitle: "بيانات الشركة",
      contactDescription: "تعمل AUTOMATIQ CLOUD LLC كشركة أمريكية تخدم علامات التجارة الإلكترونية عبر خدمات أتمتة واتساب والوصول إلى المنصة.",
      addressLabel: "العنوان",
      address: "8206 LOUISIANA BLVD NE, STE A #9329, ALBUQUERQUE, NM 87113",
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
        { title: "13. Contact", content: "For privacy-related inquiries or to exercise your rights, contact us at:\n\nEmail: admin@automatiqllc.cloud\nPhone: +1 (505) 209-7555\nAddress: 8206 LOUISIANA BLVD NE, STE A #9329, ALBUQUERQUE, NM 87113\nWebsite: site.automatiqllc.cloud" },
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
        { title: "13. Contact", content: "For questions regarding these Terms, contact us at: admin@automatiqllc.cloud\n\nPhone: +1 (505) 209-7555\nAddress: 8206 LOUISIANA BLVD NE, STE A #9329, ALBUQUERQUE, NM 87113\nWebsite: site.automatiqllc.cloud" },
      ],
    },
    footer: {
      rights: "© 2026 AUTOMATIQ CLOUD LLC. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      address: "8206 LOUISIANA BLVD NE, STE A #9329, ALBUQUERQUE, NM 87113",
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
      intro: "AUTOMATIQ CLOUD LLC est un service d'automatisation WhatsApp qui aide les entreprises e-commerce à centraliser les conversations, automatiser les interactions clients répétitives et fonctionner plus vite grâce à une plateforme dédiée et un accompagnement opérationnel.",
      items: [
        { title: "Qui nous sommes", description: "Un partenaire spécialisé dans les opérations client orientées WhatsApp, avec des outils et des workflows pensés pour les équipes modernes de vente et de support." },
        { title: "Ce que nous proposons", description: "Nous mettons en place des chatbots, des notifications de commande, des flux de confirmation, l'automatisation du support et l'accès à notre plateforme pour aider les équipes e-commerce à gérer la communication à grande échelle." },
        { title: "À qui cela s'adresse", description: "Nous ciblons les marques e-commerce, les vendeurs en ligne et les entreprises en croissance en Algérie et dans la région MENA qui veulent répondre plus vite, mieux relancer leurs clients et gagner en efficacité." },
      ],
      contactTitle: "Informations de l'entreprise",
      contactDescription: "AUTOMATIQ CLOUD LLC opère comme une société américaine au service des marques e-commerce avec des services d'automatisation WhatsApp et l'accès à la plateforme.",
      addressLabel: "Adresse",
      address: "8206 LOUISIANA BLVD NE, STE A #9329, ALBUQUERQUE, NM 87113",
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
        { title: "13. Contact", content: "For privacy-related inquiries or to exercise your rights, contact us at:\n\nEmail: admin@automatiqllc.cloud\nPhone: +1 (505) 209-7555\nAddress: 8206 LOUISIANA BLVD NE, STE A #9329, ALBUQUERQUE, NM 87113\nWebsite: site.automatiqllc.cloud" },
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
        { title: "13. Contact", content: "For questions regarding these Terms, contact us at: admin@automatiqllc.cloud\n\nPhone: +1 (505) 209-7555\nAddress: 8206 LOUISIANA BLVD NE, STE A #9329, ALBUQUERQUE, NM 87113\nWebsite: site.automatiqllc.cloud" },
      ],
    },
    footer: {
      rights: "© 2026 AUTOMATIQ CLOUD LLC. Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      address: "8206 LOUISIANA BLVD NE, STE A #9329, ALBUQUERQUE, NM 87113",
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

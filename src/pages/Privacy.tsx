import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-6 bg-background">
        <div className="container mx-auto max-w-3xl prose prose-sm">
          <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-4">Last updated: April 5, 2026</p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            AutomatiQ LLC ("we", "our", "us") collects personal information that you voluntarily provide when using our services, including your name, email address, phone number, WhatsApp Business account details, and any messages or data processed through our automation platform.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect to provide and improve our WhatsApp automation services, communicate with you about your account, process transactions, send service-related notifications, and comply with legal obligations.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Third-Party Services</h2>
          <p className="text-muted-foreground mb-4">
            Our services integrate with Meta Platforms, Inc. and the WhatsApp Business API. By using our services, your data may be processed in accordance with Meta's and WhatsApp's respective privacy policies. We recommend reviewing their privacy policies for details on how they handle your data.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement industry-standard security measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Data Retention</h2>
          <p className="text-muted-foreground mb-4">
            We retain your personal information only for as long as necessary to provide our services and fulfill the purposes described in this policy, unless a longer retention period is required by law.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            You have the right to access, correct, or delete your personal information. You may also request a copy of your data or withdraw consent for data processing at any time by contacting us.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:contact@automatiq.com" className="text-electric hover:underline">contact@automatiq.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

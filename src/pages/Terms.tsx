import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-6 bg-background">
        <div className="container mx-auto max-w-3xl prose prose-sm">
          <h1 className="text-3xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-4">Last updated: April 5, 2026</p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By accessing or using the services provided by AutomatiQ LLC, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Description of Services</h2>
          <p className="text-muted-foreground mb-4">
            AutomatiQ LLC provides WhatsApp automation services for e-commerce businesses, including but not limited to AI chatbots, order notifications, order confirmations, and customer support automation through the WhatsApp Business API.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Client Responsibilities</h2>
          <p className="text-muted-foreground mb-4">
            You are responsible for maintaining the security of your WhatsApp Business account credentials, ensuring compliance with WhatsApp's and Meta's terms of service, providing accurate business and contact information, and using the service in accordance with applicable laws.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Limitations of Service</h2>
          <p className="text-muted-foreground mb-4">
            Our services depend on the availability of the WhatsApp Business API and Meta's infrastructure. We do not guarantee uninterrupted service and are not liable for downtime or limitations imposed by third-party platforms.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Payment and Billing</h2>
          <p className="text-muted-foreground mb-4">
            Service fees are outlined in your service agreement. Payment is due according to the terms specified in your contract. Late payments may result in suspension of services.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            AutomatiQ LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, including lost profits, data loss, or business interruption.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Governing Law</h2>
          <p className="text-muted-foreground mb-4">
            These Terms of Service shall be governed by and construed in accordance with the laws of the People's Democratic Republic of Algeria.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">8. Contact</h2>
          <p className="text-muted-foreground mb-4">
            For questions about these Terms, contact us at{" "}
            <a href="mailto:contact@automatiq.com" className="text-electric hover:underline">contact@automatiq.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

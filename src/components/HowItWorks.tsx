const steps = [
  {
    number: "1",
    title: "Connect Your WhatsApp",
    description: "Link your WhatsApp Business account to our platform in minutes.",
  },
  {
    number: "2",
    title: "We Set Up Automation",
    description: "Our team configures AI chatbots, notifications, and workflows tailored to your business.",
  },
  {
    number: "3",
    title: "Customers Get Instant Replies",
    description: "Your customers receive fast, accurate responses — 24/7, without manual effort.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-secondary-foreground mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full bg-electric text-primary-foreground text-xl font-bold flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-secondary-foreground mb-2">{step.title}</h3>
              <p className="text-muted text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

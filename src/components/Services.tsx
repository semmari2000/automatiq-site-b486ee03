import { Bot, Bell, CheckCircle, Headphones } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "WhatsApp AI Chatbot",
    description: "Intelligent chatbots that handle customer inquiries 24/7, answer FAQs, and guide buyers through your product catalog.",
  },
  {
    icon: Bell,
    title: "Order Status Notifications",
    description: "Keep customers informed with automatic updates on shipping, delivery, and order progress via WhatsApp.",
  },
  {
    icon: CheckCircle,
    title: "Order Confirmation",
    description: "Instant order confirmations sent directly to your customers' WhatsApp, building trust and reducing support tickets.",
  },
  {
    icon: Headphones,
    title: "Customer Support Automation",
    description: "Automate repetitive support tasks — returns, exchanges, tracking — freeing your team for high-value interactions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">Our Services</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Everything you need to automate your WhatsApp business communication.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-card border border-border rounded-lg p-6">
              <service.icon className="w-10 h-10 text-electric mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

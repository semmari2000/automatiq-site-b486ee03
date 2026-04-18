import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const Contact = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.contact.success);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">{t.contact.title}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground mb-6">{t.contact.subtitle}</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-electric" />
                <a href="mailto:admin@automatiqllc.cloud" className="text-foreground hover:text-electric">admin@automatiqllc.cloud</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-electric" />
                <a href="tel:+15052097555" className="text-foreground hover:text-electric">+1 (505) 209-7555</a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder={t.contact.name} required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <input type="email" placeholder={t.contact.email} required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <textarea placeholder={t.contact.message} required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            <button type="submit" className="w-full bg-electric hover:bg-electric-light text-primary-foreground font-semibold py-3 rounded-lg">{t.contact.send}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

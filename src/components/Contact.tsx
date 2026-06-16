import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const Contact = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setSubmitting(true);
    try {
      const body = new URLSearchParams();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("message", formData.message);
      await fetch(
        "https://automatiq-n8n.dab5ak.easypanel.host/webhook/eddca987-8cb2-409c-8eed-ab5fdf571290",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body,
        }
      );
      alert(t.contact.success);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
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
                <span className="text-foreground">+1 (505) 209-7555</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-electric mt-0.5 shrink-0" />
                <span className="text-foreground whitespace-pre-line">{"8206 LOUISIANA BLVD NE STE A 9329\nALBUQUERQUE, NM 87113"}</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder={t.contact.name} required minLength={1} maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <input type="email" placeholder={t.contact.email} required maxLength={255} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <textarea placeholder={t.contact.message} required minLength={1} maxLength={2000} rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            <button type="submit" disabled={submitting} className="w-full bg-electric hover:bg-electric-light text-primary-foreground font-semibold py-3 rounded-lg disabled:opacity-60">{submitting ? "..." : t.contact.send}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

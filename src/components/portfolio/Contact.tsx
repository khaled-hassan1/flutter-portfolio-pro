import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Name must be at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setErrors({});
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const onChange = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl bg-secondary border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200 ${errors[field] ? "border-destructive" : "border-border"
    }`;

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="accent-line" />
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Ready to build something great together? Let's start a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="font-display font-bold text-foreground text-lg mb-5">Let's Connect</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Whether you have a project in mind, need technical consultation, or just want to
                say hello—my inbox is always open. I typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "khaled.ghaly303@gmail.com", href: "mailto:khaled.ghaly303@gmail.com" },
                  // { icon: MapPin, label: "Location", value: "Egypt", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{label}</div>
                      {href ? (
                        <a href={href} className="text-foreground text-sm hover:text-primary transition-colors">{value}</a>
                      ) : (
                        <span className="text-foreground text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Find me online</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/khaled-hassan1", label: "GitHub", color: "text-foreground" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/khaled-ghlay-b0a525251/", label: "LinkedIn", color: "text-blue-400" },
                  { icon: Mail, href: "mailto:khaled.ghaly303@gmail.com", label: "Email", color: "text-accent" },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-secondary hover:border-primary transition-all duration-200 text-sm font-medium"
                  >
                    <Icon size={15} className={color} />
                    <span className="text-foreground">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <CheckCircle size={48} className="text-accent" />
                <h3 className="font-display font-bold text-foreground text-xl">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button className="btn-outline text-sm py-2 px-5 mt-2" onClick={() => setSubmitted(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => onChange("name", e.target.value)}
                      className={inputClass("name")}
                      maxLength={100}
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(e) => onChange("email", e.target.value)}
                      className={inputClass("email")}
                      maxLength={255}
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => onChange("subject", e.target.value)}
                    className={inputClass("subject")}
                    maxLength={150}
                  />
                  {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    className={`${inputClass("message")} resize-none`}
                    maxLength={1000}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  <p className="text-xs text-muted-foreground mt-1 text-right">{form.message.length}/1000</p>
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

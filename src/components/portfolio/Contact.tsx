import { useState } from "react";
import { Mail, Send, CheckCircle, Loader } from "lucide-react";

// SVGs للأيقونات التي تم إلغاؤها من Lucide لضمان ثبات الكود
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Min 2 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Required";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Min 10 characters";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setErrors({});
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mzdajpkz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrors({ submit: "Failed to send." });
      }
    } catch (error) {
      setErrors({ submit: "Network error." });
    } finally {
      setLoading(false);
    }
  };

  const onChange = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl bg-secondary border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${errors[field] ? "border-destructive" : "border-border"
    }`;

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <span className="accent-line mx-auto" />
          <h2 className="section-heading mt-4">Ready to build something great together?</h2>
          <p className="section-subheading">Let's start a conversation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Info Side */}
          <div className="space-y-6">
            <div className="glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl">
              <h3 className="font-display font-bold text-foreground text-lg mb-5">Let's Connect</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Whether you have a project in mind or just want to say hello—my inbox is open.
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-muted-foreground">Email</div>
                  <a href="mailto:khaled.ghaly303@gmail.com" className="text-foreground text-sm hover:text-primary transition-colors truncate block">
                    khaled.ghaly303@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Cards */}
            <div className="glass-card p-5 md:p-6 rounded-2xl">
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Find me online</h4>
              <div className="flex flex-wrap gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/khaled-hassan1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-secondary hover:border-primary transition-all duration-200 text-sm font-medium group"
                >
                  <GithubIcon size={18} />
                  <span className="text-foreground">GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/khaled-ghlay-b0a525251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-secondary hover:border-primary transition-all duration-200 text-sm font-medium"
                >
                  <LinkedinIcon size={18} />
                  <span className="text-blue-400">LinkedIn</span>
                </a>

                {/* Email Button */}
                <a
                  href="mailto:khaled.ghaly303@gmail.com"
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-secondary hover:border-primary transition-all duration-200 text-sm font-medium"
                >
                  <Mail size={18} className="text-accent" />
                  <span className="text-foreground">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                <CheckCircle size={48} className="text-accent mb-4" />
                <h3 className="font-display font-bold text-xl">Message Sent!</h3>
                <button className="btn-outline mt-4" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" value={form.name} onChange={(e) => onChange("name", e.target.value)} className={inputClass("name")} />
                  <input type="email" placeholder="Email" value={form.email} onChange={(e) => onChange("email", e.target.value)} className={inputClass("email")} />
                </div>
                <input type="text" placeholder="Subject" value={form.subject} onChange={(e) => onChange("subject", e.target.value)} className={inputClass("subject")} />
                <textarea placeholder="Message..." rows={4} value={form.message} onChange={(e) => onChange("message", e.target.value)} className={`${inputClass("message")} resize-none`} />

                <button type="submit" className="btn-primary w-full justify-center py-3.5" disabled={loading}>
                  {loading ? <Loader size={18} className="animate-spin" /> : <><Send size={18} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
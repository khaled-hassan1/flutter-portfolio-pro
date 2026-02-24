import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "بتيتة سلك",
    role: "User of Questions on tajwid (certificate of appreciation) App",
    avatar: "PS",
    rating: 5,
    text: "The best program is literally wrong and learn from my mistake☺️",
    link: "https://play.google.com/store/apps/details?id=com.coding.quiz_app" // رابط التعليق أو التطبيق
  },
  {
    name: "TAMER KURDY",
    role: "User of Questions on tajwid (certificate of appreciation) App",
    avatar: "TK",
    rating: 5,
    text: "The program is very, very excellent, and I teach intonation easily",
    link: "https://play.google.com/store/apps/details?id=com.coding.quiz_app"
  },
  {
    name: "Moatz Hegap",
    role: "App User (Elragol El3nab Delivery App)",
    avatar: "MH",
    rating: 5,
    text: "Faster than the hard plane, you have to try. With a lot of discounts 💯♥️🔥",
    link: "https://play.google.com/store/apps/details?id=com.elragolel3nab.delivery"
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24" style={{ background: "hsl(var(--muted))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="accent-line mx-auto" />
          <h2 className="section-heading mt-4">Client Testimonials</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            What clients and users say about my work and the applications I've built.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Testimonial Slider */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-primary/10">
              <Quote size={80} fill="currentColor" />
            </div>
            <div className="glass-card p-8 relative min-h-[350px] flex flex-col justify-between border-primary/10">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                  {t.link && (
                    <a href={t.link} target="_blank" className="text-primary hover:text-primary/70 transition-colors flex items-center gap-1 text-[10px] font-bold">
                      VERIFY REVIEW <ExternalLink size={12} />
                    </a>
                  )}
                </div>
                <p className="text-foreground text-lg leading-relaxed italic mb-8 relative z-10">
                  "{t.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm border border-primary/20">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">{t.name}</div>
                  <div className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold">{t.role}</div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-6">
              <button onClick={prev} className="w-10 h-10 rounded-xl border border-border bg-background hover:border-primary text-muted-foreground hover:text-primary transition-all duration-200 flex items-center justify-center shadow-sm">
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2 flex-1 justify-center">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-border"}`} />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-xl border border-border bg-background hover:border-primary text-muted-foreground hover:text-primary transition-all duration-200 flex items-center justify-center shadow-sm">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Award, Quote, ExternalLink, Image as ImageIcon } from "lucide-react";

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

const certifications = [
  {
    name: " Flutter Advanced Course Bloc and MVVM Pattern [Arabic]",
    issuer: "Udemy / Tharwat Samy",
    year: "03/14/2024",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-38b868cd-57e1-4b2e-9960-56e4c6bffc6f.jpg?v=1710387382000", // استبدلها برابط صورة الشهادة
    link: "https://www.udemy.com/certificate/UC-38b868cd-57e1-4b2e-9960-56e4c6bffc6f/" // رابط التحقق من الشهادة
  },
  {
    name: "The Complete Dart Learning Guide",
    issuer: "Udemy / Hassan Fulaih",
    year: "01/19/2024",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-6da45de7-cd0c-490d-b6ee-85901fef34cc.jpg?v=1705688354000",
    link: "https://www.udemy.com/certificate/UC-6da45de7-cd0c-490d-b6ee-85901fef34cc/"
  },
  {
    name: "The Complete Flutter Development Guide",
    issuer: "Udemy / Hassan Fulaih",
    year: "01/19/2024",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-603826ac-88b7-4beb-a0f1-ed7a53bd3fcf.jpg?v=1705689051000",
    link: "https://www.udemy.com/certificate/UC-603826ac-88b7-4beb-a0f1-ed7a53bd3fcf/"
  },
  {
    name: "The Complete Dart Development Guide",
    issuer: "Udemy / Hassan Fulaih",
    year: "10/15/2023",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-fbb15dda-d2cf-40ea-81ae-ef9de1d72233.jpg?v=1697321046000",
    link: "https://www.udemy.com/certificate/UC-fbb15dda-d2cf-40ea-81ae-ef9de1d72233/"
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
          <h2 className="section-heading mt-4">Achievements & Testimonials</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            What clients and users say about my work, alongside the professional milestones I've achieved.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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

          {/* Certifications with Images */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-foreground text-xl mb-6 flex items-center gap-3">
              <Award size={24} className="text-primary" />
              Certifications
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 flex items-center gap-4 hover:border-primary/40 hover:bg-secondary/50 transition-all duration-300 group"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-border group-hover:border-primary/30">
                    <img src={cert.image} alt={cert.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <ImageIcon size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-foreground text-sm truncate">{cert.name}</div>
                    <div className="text-muted-foreground text-xs">{cert.issuer}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase tracking-wider">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mr-2" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
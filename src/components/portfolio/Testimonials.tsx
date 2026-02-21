import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Award, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Mahmoud",
    role: "Restaurant Owner (Elragol El3nab Client)",
    avatar: "AM",
    rating: 5,
    text: "Khaled delivered a comprehensive delivery system that completely transformed our restaurant's operations. The app is incredibly fast, and the integration with maps and real-time orders is flawless. A truly professional developer.",
  },
  {
    name: "Eng. Mohamed Ali",
    role: "Technical Project Manager",
    avatar: "MA",
    rating: 5,
    text: "I've collaborated with Khaled on multiple projects. What sets him apart is his Clean Code approach and his ability to solve complex technical challenges in Flutter. His apps always provide a superior user experience.",
  },
  {
    name: "Sarah Hassan",
    role: "App User (Qatrah Hayat Platform)",
    avatar: "SH",
    rating: 5,
    text: "The Qatrah Hayat app has saved many lives thanks to its ease of use and quick access to donors. The quality of the app rivals international standards. Thank you for such an amazing effort!",
  },
];

const certifications = [
  { name: "Flutter & Dart Full Development", issuer: "Udemy / London App Brewery", year: "2023" },
  { name: "Firebase for Flutter Professionals", issuer: "Google Developer Groups", year: "2023" },
  { name: "Clean Architecture in Flutter", issuer: "Reso Coder Academy", year: "2024" },
  { name: "Mobile UI/UX Principles", issuer: "Coursera", year: "2022" },
  { name: "Android App Publishing Expert", issuer: "Google Play Console Training", year: "2023" },
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

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Testimonial Slider */}
          <div className="relative">
             <div className="absolute -top-4 -left-4 text-primary/10">
                <Quote size={80} fill="currentColor" />
             </div>
            <div className="glass-card p-8 relative min-h-[300px] flex flex-col justify-between border-primary/10">
              {/* Quote */}
              <div>
                <div className="flex mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-accent fill-accent" />
                  ))}
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
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-border bg-background hover:border-primary text-muted-foreground hover:text-primary transition-all duration-200 flex items-center justify-center shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2 flex-1 justify-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-primary" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border border-border bg-background hover:border-primary text-muted-foreground hover:text-primary transition-all duration-200 flex items-center justify-center shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-foreground text-xl mb-6 flex items-center gap-3">
              <Award size={24} className="text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="glass-card p-4 flex items-center justify-between gap-4 hover:border-primary/40 hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award size={18} className="text-primary/70" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">{cert.name}</div>
                      <div className="text-muted-foreground text-xs">{cert.issuer}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg flex-shrink-0">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
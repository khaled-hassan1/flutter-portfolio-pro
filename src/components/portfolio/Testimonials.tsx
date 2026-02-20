import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Award } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, FinFlow Inc.",
    avatar: "SM",
    rating: 5,
    text: "Alex delivered an exceptional fintech app that exceeded our expectations. The BLoC architecture is clean, the performance is outstanding, and our users love the smooth animations. Highly recommended for any serious mobile project.",
  },
  {
    name: "Dr. James Okonkwo",
    role: "Founder, MediTrack",
    avatar: "JO",
    rating: 5,
    text: "Working with Alex was a pleasure from start to finish. He understood our complex HIPAA requirements immediately and built a secure, user-friendly healthcare app. The code quality and documentation are first-class.",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, ShopWave",
    avatar: "PS",
    rating: 5,
    text: "Alex is not just a great developer—he's a strategic partner. He proactively suggested performance improvements and UI tweaks that significantly boosted our conversion rate. The AR feature he built is a game-changer.",
  },
];

const certifications = [
  { name: "Google Associate Android Developer", issuer: "Google", year: "2023" },
  { name: "Flutter Development Bootcamp", issuer: "London App Brewery", year: "2022" },
  { name: "Firebase Fundamentals", issuer: "Google Cloud", year: "2022" },
  { name: "Agile / Scrum Practitioner", issuer: "Scrum Alliance", year: "2021" },
  { name: "Clean Architecture in Flutter", issuer: "Reso Coder Academy", year: "2023" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24" style={{ background: "hsl(var(--muted))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="accent-line" />
          <h2 className="section-heading">Achievements & Testimonials</h2>
          <p className="section-subheading">
            What clients say and milestones I've earned along the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Testimonial Slider */}
          <div>
            <div className="glass-card p-8 relative min-h-[280px] flex flex-col justify-between">
              {/* Quote */}
              <div>
                <div className="flex mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground text-base leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">{t.name}</div>
                  <div className="text-muted-foreground text-sm">{t.role}</div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-5">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-200 flex items-center justify-center"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2 flex-1 justify-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-primary" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-200 flex items-center justify-center"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display font-bold text-foreground text-lg mb-5 flex items-center gap-2">
              <Award size={18} className="text-primary" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="glass-card p-4 flex items-center justify-between gap-4 hover:border-primary/30 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Award size={14} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{cert.name}</div>
                      <div className="text-muted-foreground text-xs">{cert.issuer}</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full flex-shrink-0">
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

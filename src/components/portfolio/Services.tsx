import { Smartphone, Palette, Globe, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Android App Development",
    description:
      "Professional Android app development using Flutter. From core architecture and API integration to Google Play Store publishing and management.",
    features: [
      "Responsive UI for all screens",
      "Firebase & REST API integration",
      "State Management (BLoC / Provider)",
      "Play Store optimization & publishing"
    ],
    accent: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Transforming designs (Figma/Adobe XD) into pixel-perfect mobile interfaces with a focus on user experience and smooth navigation.",
    features: [
      "Material Design 3 standards",
      "Fluid animations & transitions",
      "Multilingual support (RTL/LTR)",
      "Adaptive Dark & Light modes"
    ],
    accent: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    featured: true,
  },
  {
    icon: Globe,
    title: "Specialized Niche Apps",
    description:
      "Unique expertise in building Islamic and Educational apps (Quran, Azkar, Quizzes) with advanced multimedia and large data handling.",
    features: [
      "Advanced audio streaming systems",
      "Automated PDF certificate generation",
      "Offline-first (SQLite) databases",
      "High-performance asset management"
    ],
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="accent-line mx-auto" />
          <h2 className="section-heading mt-4">Services I Offer</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            From concept to launch—I help you build premium mobile products that stand out in the competitive market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className={`glass-card p-8 relative hover:-translate-y-2 transition-all duration-300 ${
                s.featured ? "border-accent/40 ring-1 ring-accent/20 shadow-xl shadow-accent/5" : ""
              }`}
            >
              {s.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-accent text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`w-14 h-14 rounded-2xl ${s.bg} border ${s.border} flex items-center justify-center mb-6`}
              >
                <s.icon size={28} className={s.accent} />
              </div>

              <h3 className="font-display font-bold text-foreground text-xl mb-4">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 min-h-[80px]">
                {s.description}
              </p>

              <ul className="space-y-3">
                {s.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className={`mt-0.5 flex-shrink-0 ${s.accent}`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
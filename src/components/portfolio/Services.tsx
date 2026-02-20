import { Smartphone, Palette, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "End-to-end Flutter app development for iOS and Android. From architecture design and API integration to App Store deployment and ongoing maintenance.",
    features: ["Cross-platform (iOS & Android)", "Firebase & REST API integration", "BLoC / Riverpod architecture", "App Store submission"],
    accent: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Pixel-perfect mobile UI design following Material Design 3 and Cupertino guidelines. I bridge design and code to create interfaces that feel native on every platform.",
    features: ["Figma prototyping", "Material Design 3", "Cupertino (iOS) styling", "Smooth animations & transitions"],
    accent: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    featured: true,
  },
  {
    icon: MessageSquare,
    title: "Consultation",
    description:
      "Strategic advice on Flutter architecture, code reviews, performance optimization, and team mentoring. Ideal for startups and teams scaling their mobile development.",
    features: ["Architecture review", "Performance audits", "Team mentoring sessions", "Code quality assessment"],
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="accent-line" />
          <h2 className="section-heading">Services I Offer</h2>
          <p className="section-subheading">
            From idea to launch—I help you build mobile products that stand out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className={`glass-card p-8 relative hover:-translate-y-1 transition-all duration-300 ${
                s.featured ? "border-accent/40 ring-1 ring-accent/20" : ""
              }`}
            >
              {s.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-accent text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center mb-5`}
              >
                <s.icon size={22} className={s.accent} />
              </div>

              <h3 className="font-display font-bold text-foreground text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>

              <ul className="space-y-2">
                {s.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.bg} ${s.accent}`}
                      style={{ background: "currentColor" }} />
                    {feat}
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

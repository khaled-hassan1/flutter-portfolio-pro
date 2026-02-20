import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Flutter", level: 95, icon: "🦋" },
  { name: "Dart", level: 92, icon: "🎯" },
  { name: "Firebase", level: 88, icon: "🔥" },
  { name: "BLoC / Cubit", level: 90, icon: "🧱" },
  { name: "REST APIs & GraphQL", level: 85, icon: "🔗" },
  { name: "UI/UX Design", level: 80, icon: "🎨" },
  { name: "Git & CI/CD", level: 82, icon: "⚙️" },
  { name: "Testing & TDD", level: 78, icon: "🧪" },
];

const techBadges = [
  "Flutter", "Dart", "Firebase", "BLoC", "GetX", "Riverpod", "SQLite",
  "GraphQL", "REST", "GitHub Actions", "Fastlane", "Figma", "VS Code",
];

function SkillBar({ name, level, icon, animate }: { name: string; level: number; icon: string; animate: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-medium text-foreground text-sm">
          <span>{icon}</span>
          {name}
        </span>
        <span className="text-primary font-mono text-sm font-semibold">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: animate ? `${level}%` : "0%", transitionDelay: "0.1s" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="accent-line" />
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="section-subheading">
            Technologies I work with daily to build world-class mobile experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Skill bars */}
          <div className="glass-card p-8 space-y-6">
            <h3 className="font-display font-bold text-foreground mb-6">Proficiency Levels</h3>
            {skills.map((s) => (
              <SkillBar key={s.name} {...s} animate={animate} />
            ))}
          </div>

          {/* Tech stack */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="font-display font-bold text-foreground mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="glass-card p-8">
              <h3 className="font-display font-bold text-foreground mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "✅ iOS & Android with a single codebase",
                  "✅ MVVM + BLoC architecture enthusiast",
                  "✅ Published 8 apps to App Store & Play Store",
                  "✅ Open-source contributor (2K+ GitHub stars)",
                  "✅ Agile / Scrum certified practitioner",
                ].map((fact, i) => (
                  <li key={i} className="flex items-start gap-2">{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

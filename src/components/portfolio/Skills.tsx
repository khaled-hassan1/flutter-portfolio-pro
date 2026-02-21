import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Flutter Development", level: 98, icon: "🦋" },
  { name: "Dart Programming", level: 95, icon: "🎯" },
  { name: "Firebase (Auth, Firestore, Hosting)", level: 92, icon: "🔥" },
  { name: "State Management (BLoC, Provider)", level: 90, icon: "🧱" },
  { name: "API Integration & Backend", level: 88, icon: "🔗" },
  { name: "Audio Streaming & Multimedia", level: 85, icon: "🎧" },
  { name: "Database (SQLite & Hive)", level: 82, icon: "💾" },
  { name: "App Publishing & Store SEO", level: 95, icon: "🚀" },
];

const techBadges = [
  "Flutter", "Dart", "Firebase", "BLoC", "Provider", "GetX", "SQLite",
  "Google Play Console", "Maps API", "OneSignal", "Git", "GitHub", "Postman",
  "Responsive Design", "Local Notifications", "Audio Player", "PDF Generation"
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
        <div className="text-center mb-12">
          <span className="accent-line mx-auto" />
          <h2 className="section-heading mt-4">Skills & Expertise</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Technologies and methodologies I use to build robust, high-performance mobile applications that users love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Skill bars */}
          <div className="glass-card p-8 space-y-6 border-primary/10">
            <h3 className="font-display font-bold text-foreground mb-6 flex items-center gap-2">
               Technical Proficiency
            </h3>
            {skills.map((s) => (
              <SkillBar key={s.name} {...s} animate={animate} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="font-display font-bold text-foreground mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border text-foreground text-[11px] font-bold tracking-tight hover:border-primary hover:text-primary transition-all duration-200 cursor-default uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="glass-card p-8 border-accent/20">
              <h3 className="font-display font-bold text-foreground mb-4">Professional Facts</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {[
                  { icon: "🌍", text: "Developing full-featured Android apps with a single codebase." },
                  { icon: "📱", text: "Successfully published 20+ production apps on Google Play Store." },
                  { icon: "🎧", text: "Expertise in Audio Streaming integration and multimedia handling." },
                  { icon: "📈", text: "Specialized in local database management (Offline-first architecture)." },
                  { icon: "🛠️", text: "Committed to best practices (Clean Code & Scalable Architecture)." },
                ].map((fact, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-lg leading-none">{fact.icon}</span>
                    <span className="leading-relaxed">{fact.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
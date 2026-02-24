import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react"; // أيقونة بسيطة للتمكن من المهارة

const skills = [
  { name: "Flutter Development", icon: "🦋" },
  { name: "Dart Programming", icon: "🎯" },
  { name: "Firebase (Auth, Firestore, Hosting)", icon: "🔥" },
  { name: "State Management (BLoC, Provider)", icon: "🧱" },
  { name: "API Integration & Backend", icon: "🔗" },
  { name: "Audio Streaming & Multimedia", icon: "🎧" },
  { name: "Database (SQLite & Hive)", icon: "💾" },
  { name: "App Publishing & Store SEO", icon: "🚀" },
];

const techBadges = [
  "Flutter", "Dart", "Firebase", "BLoC", "Provider", "GetX", "SQLite",
  "Google Play Console", "Maps API", "Hive", "Git", "GitHub", "Postman",
  "Responsive Design", "Local Notifications", "Audio Player", "PDF Generation"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="accent-line mx-auto" />
          <h2 className="section-heading mt-4">Skills & Expertise</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Technologies and methodologies I use to build robust, high-performance mobile applications that users love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="glass-card p-6 flex items-center gap-4 border-primary/5 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-sm leading-tight">
                    {skill.name}
                  </h4>
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-primary font-bold uppercase tracking-wider">
                    <CheckCircle2 size={10} />
                    Expert
                  </div>
                </div>
              </div>
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
              <h3 className="font-display font-bold text-foreground mb-4">Achievements</h3>
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
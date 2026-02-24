import { CheckCircle2 } from "lucide-react";

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
    <section id="skills" className="py-20 md:py-28"> {/* ضبط بادنج القسم نفسه */}
      <div className="container mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <span className="accent-line mx-auto" />
          <h2 className="section-heading mt-6">Skills & Expertise</h2>
          <p className="section-subheading max-w-2xl mx-auto px-2">
            Technologies and methodologies I use to build robust, high-performance mobile applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
            {skills.map((skill) => (
              <div
                key={skill.name}
                // ضبط البادنج الداخلي للبطاقة p-4 للموبايل و p-5 للكمبيوتر
                className="glass-card p-4 md:p-5 flex items-center gap-4 border-primary/5 hover:border-primary/20 transition-all duration-300 group rounded-2xl"
              >
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-primary/5 flex items-center justify-center text-xl md:text-2xl group-hover:scale-110 transition-transform flex-shrink-0">
                  {skill.icon}
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-display font-bold text-foreground text-sm md:text-base leading-tight">
                    {skill.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-2 text-[10px] text-primary font-bold uppercase tracking-widest">
                    <CheckCircle2 size={12} />
                    Expert
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            {/* Tech Stack Container */}
            <div className="glass-card p-6 md:p-8 rounded-2xl md:rounded-[2rem]">
              <h3 className="font-display font-bold text-foreground mb-6 text-lg md:text-xl">Tech Stack</h3>
              <div className="flex flex-wrap gap-2.5">
                {techBadges.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-2 rounded-xl bg-secondary/40 border border-border/50 text-foreground text-[10px] md:text-[11px] font-bold tracking-tight hover:border-primary hover:text-primary transition-all duration-300 cursor-default uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Mastery Container */}
            <div className="glass-card p-6 md:p-8 border-accent/10 rounded-2xl md:rounded-[2rem]">
              <h3 className="font-display font-bold text-foreground mb-5 text-lg md:text-xl">Key Mastery</h3>
              <ul className="space-y-4 text-sm md:text-base text-muted-foreground">
                {[
                  { icon: "🌍", text: "Production-ready Android apps with clean architecture." },
                  { icon: "📱", text: "Published 20+ production apps on Google Play Store." },
                  { icon: "🎧", text: "Advanced Audio Streaming & Multimedia integration." },
                  { icon: "🛠️", text: "Committed to Scalable Architecture (Clean Code)." },
                ].map((fact, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-xl leading-none">{fact.icon}</span>
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
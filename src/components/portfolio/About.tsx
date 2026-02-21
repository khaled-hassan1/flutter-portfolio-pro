import { Code2, Smartphone, Users } from "lucide-react";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Apps Delivered" },
  { value: "15+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="accent-line block" />
            <h2 className="section-heading text-left">About Me</h2>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              I'm a passionate Flutter Developer with over 5 years of experience turning complex
              business problems into elegant mobile experiences. My journey started with native
              Android development, but Flutter's cross-platform power and beautiful UI primitives
              captured my full attention.
            </p>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              I specialize in building scalable, maintainable applications using the{" "}
              <span className="text-primary font-medium">BLoC architecture</span>, integrating
              real-time Firebase backends, and designing pixel-perfect interfaces that follow
              Material Design and Cupertino guidelines.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Outside of code, I contribute to open-source Flutter packages and mentor junior
              developers in the community. My goal is always the same: ship software that is{" "}
              <span className="text-accent font-medium">fast, reliable, and delightful</span>.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Flutter", "Dart", "Firebase", "BLoC", "GetX", "REST APIs", "CI/CD", "Git"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Stats + highlights */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass-card p-6 text-center">
                  <div className="font-display text-3xl font-bold text-gradient mb-1">{s.value}</div>
                  <div className="text-muted-foreground text-sm">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="glass-card p-6 space-y-4">
              {[
                {
                  icon: Smartphone,
                  title: "Cross-Platform Expert",
                  desc: "One codebase, native performance on iOS & Android.",
                },
                {
                  icon: Code2,
                  title: "Clean Architecture",
                  desc: "SOLID principles, BLoC pattern, testable codebases.",
                },
                {
                  icon: Users,
                  title: "Client-First Approach",
                  desc: "Clear communication, timely delivery, long-term partnerships.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground text-sm">{title}</div>
                    <div className="text-muted-foreground text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

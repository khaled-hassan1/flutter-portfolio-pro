import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FinFlow – Fintech Super App",
    description:
      "A comprehensive personal finance app with real-time expense tracking, budget planning, and investment portfolio monitoring. Built for 500K+ users with sub-200ms response times.",
    tags: ["Flutter", "Firebase", "BLoC", "Stripe", "Charts"],
    stars: "1.2k",
    github: "https://github.com",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "MediTrack – Healthcare Platform",
    description:
      "Patient-doctor communication platform with appointment scheduling, prescription management, and telemedicine video calls. HIPAA-compliant architecture.",
    tags: ["Flutter", "Firebase", "WebRTC", "GetX", "SQLite"],
    stars: "834",
    github: "https://github.com",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    title: "ShopWave – E-Commerce App",
    description:
      "Full-featured e-commerce mobile app with real-time inventory, push notifications, AR product preview, and seamless checkout powered by Stripe.",
    tags: ["Flutter", "Firebase", "AR", "Riverpod", "GraphQL"],
    stars: "956",
    github: "https://github.com",
    gradient: "from-violet-500/20 to-primary/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: "hsl(var(--muted))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="accent-line" />
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            A selection of production apps I've architected and shipped to millions of users.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`glass-card p-7 group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${project.gradient}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-lg">
                  📱
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <span>⭐</span>
                  <span>{project.stars}</span>
                </div>
              </div>

              <h3 className="font-display font-bold text-foreground text-lg mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-secondary border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm py-2 px-4 w-full justify-center group-hover:border-primary group-hover:text-primary"
              >
                <Github size={15} />
                View on GitHub
                <ExternalLink size={13} className="ml-auto" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

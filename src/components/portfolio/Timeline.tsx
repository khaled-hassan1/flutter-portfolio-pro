import { GraduationCap, Briefcase } from "lucide-react";

const timelineItems = [
  {
    type: "work",
    year: "2022 – Present",
    title: "Senior Flutter Developer",
    org: "TechVision Inc.",
    description:
      "Led a team of 4 developers to build a fintech super-app with 500K+ downloads. Architected BLoC-based state management and integrated Stripe & Firebase.",
  },
  {
    type: "work",
    year: "2020 – 2022",
    title: "Flutter Developer",
    org: "AppCraft Studio",
    description:
      "Delivered 12+ client apps across healthcare, e-commerce, and logistics verticals. Reduced build times by 40% through CI/CD pipeline optimization.",
  },
  {
    type: "education",
    year: "2019 – 2020",
    title: "Flutter & Dart Bootcamp",
    org: "London App Brewery (Online)",
    description:
      "Advanced certification covering Flutter, Firebase, REST APIs, and state management patterns.",
  },
  {
    type: "work",
    year: "2018 – 2020",
    title: "Junior Mobile Developer",
    org: "StartupHub",
    description:
      "Transitioned from React Native to Flutter. Built MVP products for 5 early-stage startups from ideation to App Store launch.",
  },
  {
    type: "education",
    year: "2014 – 2018",
    title: "B.Sc. Computer Science",
    org: "State University of Technology",
    description:
      "Graduated with Honors (GPA 3.8). Major in Software Engineering. Final project: real-time distributed chat application.",
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24" style={{ background: "hsl(var(--muted))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="accent-line" />
          <h2 className="section-heading">Education & Experience</h2>
          <p className="section-subheading">
            My journey from student to senior developer—each step shaping the engineer I am today.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-0">
          {timelineItems.map((item, i) => (
            <div key={i} className="flex gap-6 group">
              {/* Left: line and dot */}
              <div className="flex flex-col items-center pt-1">
                <div className="timeline-dot" />
                {i < timelineItems.length - 1 && (
                  <div className="timeline-line flex-1 my-1" style={{ minHeight: "48px" }} />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-10 flex-1">
                <div className="glass-card p-6 group-hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {item.type === "education" ? (
                          <GraduationCap size={15} className="text-accent" />
                        ) : (
                          <Briefcase size={15} className="text-primary" />
                        )}
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider ${
                            item.type === "education" ? "text-accent" : "text-primary"
                          }`}
                        >
                          {item.type === "education" ? "Education" : "Work Experience"}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-foreground text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm font-medium">{item.org}</p>
                    </div>
                    <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

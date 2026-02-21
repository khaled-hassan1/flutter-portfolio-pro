import { GraduationCap, Briefcase, Award } from "lucide-react";

const timelineItems = [
  {
    type: "work",
    year: "2021 – Present",
    title: "Freelance Flutter Developer",
    org: "Self-Employed (Google Play Store)",
    description:
      "Developing and publishing 20+ applications on the Google Play Store. Managing the full project lifecycle from UI/UX design and coding to Firebase integration, App Store Optimization (ASO), and deployment.",
  },
  {
    type: "work",
    year: "2020 – 2021",
    title: "Junior Flutter Developer",
    org: "Independent Projects",
    description:
      "Focused on building localized service apps (e.g., transport and delivery systems). Solved complex technical challenges involving real-time location services and live data synchronization.",
  },
  {
    type: "education",
    year: "2022",
    title: "Advanced Flutter & Firebase Bootcamp",
    org: "Udemy / Online Certification",
    description:
      "Advanced certification in building fintech applications, integrating payment gateways, and implementing complex State Management patterns.",
  },
  {
    type: "work",
    year: "2019 – 2020",
    title: "Mobile App Designer & Developer",
    org: "Contract Projects",
    description:
      "Started my mobile development journey by designing user interfaces (UI) and converting them into functional Android applications using Flutter.",
  },
  {
    type: "education",
    year: "2018 – 2022",
    title: "Bachelor's Degree in Computer Science",
    org: "Tanta University",
    description:
      "Studied Computer Science with a focus on Software Engineering and Databases. Final graduation project was a fully integrated mobile application.",
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24" style={{ background: "hsl(var(--muted))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="accent-line mx-auto" />
          <h2 className="section-heading mt-4">Education & Experience</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            My journey from a Computer Science student to a professional developer with dozens of successful apps on the store.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-0 relative">
          {/* Vertical central line for desktop */}
          <div className="absolute left-[17px] top-2 bottom-2 w-[2px] bg-primary/10 hidden md:block" />

          {timelineItems.map((item, i) => (
            <div key={i} className="flex gap-6 group relative">
              {/* Left: icon and dot */}
              <div className="flex flex-col items-center pt-1 relative z-10">
                <div className={`w-9 h-9 rounded-xl border-2 flex items-center justify-center bg-background transition-all duration-300 group-hover:scale-110 ${
                  item.type === "education" ? "border-accent text-accent" : "border-primary text-primary"
                }`}>
                  {item.type === "education" ? <GraduationCap size={18} /> : <Briefcase size={18} />}
                </div>
                {i < timelineItems.length - 1 && (
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-primary/20 to-transparent my-2" style={{ minHeight: "60px" }} />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-12 flex-1">
                <div className="glass-card p-6 group-hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${
                          item.type === "education" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                        }`}
                      >
                        {item.type === "education" ? "Education" : "Experience"}
                      </span>
                      <h3 className="font-display font-bold text-foreground text-lg mt-2">{item.title}</h3>
                      <p className="text-primary/80 text-sm font-medium">{item.org}</p>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
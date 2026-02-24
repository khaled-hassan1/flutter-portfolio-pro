import { GraduationCap, Briefcase, Award, MessageSquare } from "lucide-react";

const educationItems = [
  {
    year: "2015 – 2019",
    title: "Bachelor's Degree in Fundamentals of Religion and Dawah",
    org: "Al-Azhar University",
    description: "Studied Islamic theology, Quranic exegesis (Tafsir), and Hadith sciences. Developed strong communication and analytical skills.",
  },
];

const workItems = [
  {
    year: "2021 – Present",
    title: "Freelance Flutter Developer",
    org: "Self-Employed (Google Play Store)",
    description: "Successfully developed and published 20+ applications on the Google Play Store. Managing the full project lifecycle from design to deployment.",
  },
  {
    year: "2020 – 2021",
    title: "Junior Flutter Developer",
    org: "Independent Projects",
    description: "Built localized service applications, including transport and delivery systems with real-time data synchronization.",
  },
];

const trainingAndCerts = [
  {
    year: "2025 – 2026",
    title: "Professional Training Program in Mobile App Development",
    org: "National Telecommunication Institute (NTI)",
    description: "Intensive technical track specialized in Flutter, UI/UX best practices, and advanced state management.",
  },
  {
    year: "2024",
    title: "Advanced Flutter & Firebase Bootcamp",
    org: "Udemy / Online Certification",
    description: "Focusing on fintech applications, payment gateways, and complex architectural patterns.",
  },
];


const TimelineItem = ({ item, icon: Icon }: { item: any, icon: any }) => (
  <div className="flex gap-6 group relative">
    <div className="flex flex-col items-center pt-1 relative z-10">
      <div className="w-9 h-9 rounded-xl border-2 flex items-center justify-center bg-background border-primary text-primary transition-transform group-hover:scale-110">
        <Icon size={18} />
      </div>
      <div className="w-[2px] flex-1 bg-gradient-to-b from-primary/20 to-transparent my-2" style={{ minHeight: "50px" }} />
    </div>
    <div className="pb-10 flex-1">
      <div className="glass-card p-6 hover:border-primary/30 transition-all">
        <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
          <h3 className="font-display font-bold text-lg">{item.title}</h3>
          <span className="text-[11px] font-mono font-bold text-muted-foreground bg-secondary px-3 py-1 rounded-full border">
            {item.year}
          </span>
        </div>
        <p className="text-primary/80 text-sm font-medium mb-2">{item.org}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  </div>
);

export default function PortfolioSections() {
  return (
    <div className="space-y-24 py-20 bg-background">

      {/* 1. Work Experience Section */}
      <section id="experience" className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold flex items-center gap-3">
            <Briefcase className="text-primary" /> Work Experience
          </h2>
        </div>
        <div className="max-w-4xl">
          {workItems.map((item, i) => (
            <TimelineItem key={i} item={item} icon={Briefcase} />
          ))}
        </div>
      </section>

      {/* 2. Education Section */}
      <section id="education" className="container mx-auto px-6 py-16 bg-muted/30 rounded-3xl">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold flex items-center gap-3">
            <GraduationCap className="text-primary" /> Education
          </h2>
        </div>
        <div className="max-w-4xl">
          {educationItems.map((item, i) => (
            <TimelineItem key={i} item={item} icon={GraduationCap} />
          ))}
        </div>
      </section>

      {/* 3. Training & Certifications */}
      <section id="certifications" className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold flex items-center gap-3">
            <Award className="text-primary" /> Training & Certifications
          </h2>
        </div>
        <div className="max-w-4xl">
          {trainingAndCerts.map((item, i) => (
            <TimelineItem key={i} item={item} icon={Award} />
          ))}
        </div>
      </section>
    </div>
  );
}
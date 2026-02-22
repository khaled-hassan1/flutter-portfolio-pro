import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoImage from "@/assets/logo.jpeg";

const phrases = [
  "Flutter Developer",
  "Mobile Solutions Architect",
  "Dart Enthusiast",
  "Firebase Expert",
];

function useTypingAnimation(phrases: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      // سرعة الكتابة: تم تقليلها لـ 40ms لتصبح أسرع بضعفين
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 40);
    } else if (!deleting && charIndex === current.length) {
      // مدة الانتظار عند اكتمال الكلمة: 1.5 ثانية (بدلاً من ثانيتين)
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && charIndex > 0) {
      // سرعة المسح: سريعة جداً (20ms) لتعطي طابعاً تقنياً
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 20);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases]);

  return displayed;
}

const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Hero() {
  const typed = useTypingAnimation(phrases);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ background: "hsl(var(--primary))" }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] opacity-15"
        style={{ background: "hsl(var(--accent))" }} />

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left side - Text */}
          <div className="text-center md:text-left pt-20 md:pt-0">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-accent glow-pulse inline-block" />
              Available for new projects
            </div>

            {/* Name */}
            <h1 className="animate-fade-in-up animation-delay-100 font-display text-4xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient glow-text">Khaled Ghaly</span>
            </h1>

            {/* Typing animation */}
            <div className="animate-fade-in-up animation-delay-200 font-display text-xl md:text-3xl font-bold mb-6 md:mb-8 min-h-[1.5em] flex items-center justify-center md:justify-start">
              <span style={{ color: "hsl(var(--accent))" }}>{typed}</span>
              <span className="w-[3px] h-[1.2em] bg-accent ml-1 animate-pulse" />
            </div>

            {/* Bio intro */}
            <p className="animate-fade-in-up animation-delay-300 text-muted-foreground mb-8 md:mb-10 text-base md:text-lg max-w-xl">
              Crafting high-performance cross-platform mobile apps that users love.
              Specialized in Flutter with 4+ years of real-world production experience.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up animation-delay-400 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start mb-10 md:mb-12">
              <a
                href="#projects"
                onClick={(e) => handleAnchorClick(e, "projects")}
                className="btn-primary"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, "contact")}
                className="btn-outline"
              >
                Let's Talk
              </a>
            </div>

            {/* Social links */}
            <div className="animate-fade-in-up animation-delay-500 flex items-center justify-center md:justify-start gap-5">
              {[
                { icon: Github, href: "https://github.com/khaled-hassan1", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/khaled-ghlay-b0a525251/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:khaled.ghaly303@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200 hover:-translate-y-1 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center items-center">
            <div className="relative group">
              {/* Animated Rings */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />

              <div className="relative w-48 h-64 md:w-72 md:h-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl transform transition duration-500 group-hover:scale-[1.02]">
                <img
                  src={logoImage}
                  alt="Khaled Ghaly"
                  className="w-full h-full object-cover"
                />
                {/* تم حذف الـ div الخاص بالـ gradient من هنا لتبقى الصورة واضحة بالكامل */}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        onClick={(e) => handleAnchorClick(e, "about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-sm scroll-bounce"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ChevronDown size={20} className="text-primary" />
      </a>
    </section>
  );
}
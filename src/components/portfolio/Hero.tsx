import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases]);

  return displayed;
}

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
      <div className="absolute inset-0 bg-background/70" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ background: "hsl(var(--primary))" }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] opacity-15"
        style={{ background: "hsl(var(--accent))" }} />

      <div className="relative container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-accent glow-pulse inline-block" />
          Available for new projects
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up animation-delay-100 font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="text-gradient glow-text">Alex Carter</span>
        </h1>

        {/* Typing animation */}
        <div className="animate-fade-in-up animation-delay-200 font-display text-xl md:text-3xl text-muted-foreground font-medium mb-8 min-h-[2rem]">
          <span style={{ color: "hsl(var(--accent))" }}>{typed}</span>
          <span className="cursor-blink" />
        </div>

        {/* Bio intro */}
        <p className="animate-fade-in-up animation-delay-300 text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
          Crafting high-performance cross-platform mobile apps that users love.
          5+ years building production-grade Flutter applications.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animation-delay-400 flex flex-wrap gap-4 justify-center mb-12">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Let's Talk
          </a>
        </div>

        {/* Social links */}
        <div className="animate-fade-in-up animation-delay-500 flex items-center justify-center gap-5">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-sm scroll-bounce"
      >
        <ChevronDown size={20} />
      </a>
    </section>
  );
}

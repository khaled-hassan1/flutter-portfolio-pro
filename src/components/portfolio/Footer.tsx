import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display font-bold text-xl text-gradient">Khaled Ghaly</div>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart size={13} className="text-destructive fill-destructive" /> using Flutter-inspired design
          </p>

          <div className="flex items-center gap-4">
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
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 text-muted-foreground text-xs">
          © {new Date().getFullYear()} Khaled Ghal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import meImage from "@/assets/me.png";

export default function About() {
  return (
    // استخدام py-16 للمحمول و py-24 للديسكتوب لتقليل الفراغات الكبيرة في الشاشات الصغيرة
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* تغيير gap-10 للمحمول و gap-16 للديسكتوب */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text - ترتيب الظهور الأول في الموبايل */}
          <div className="order-2 lg:order-1">
            <span className="accent-line block" />
            <h2 className="section-heading text-left text-2xl md:text-3xl lg:text-4xl">About Me</h2>

            <div className="space-y-4 md:space-y-5">
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I'm a passionate Flutter Developer with over 4 years of experience turning complex
                business problems into elegant mobile experiences. My journey started with native
                Android development, but Flutter's cross-platform power and beautiful UI primitives
                captured my full attention.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I specialize in building scalable, maintainable applications using the{" "}
                <span className="text-primary font-medium">BLoC architecture</span>, integrating
                real-time Firebase backends, and designing pixel-perfect interfaces.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6 md:mb-8">
                My goal is always the same: ship software that is{" "}
                <span className="text-accent font-medium">fast, reliable, and delightful</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
              {["Flutter", "Dart", "Firebase", "BLoC", "GetX", "REST APIs", "CI/CD", "Git", "Google Console"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 md:px-3 md:py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs lg:text-sm font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Professional Photo Frame - يظهر في الأعلى في الموبايل ليعطي انطباع بصري أسرع */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Background Decorative Element - مخفية في الموبايل لتقليل التشتت */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2.5rem] blur-2xl hidden md:block" />

            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-none aspect-square lg:aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src={meImage}
                alt="Khaled Ghaly"
                className="w-full h-full object-contain p-0 md:p-8 transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

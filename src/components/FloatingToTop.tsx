import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={20} />
                </button>
            )}
        </>
    );
}

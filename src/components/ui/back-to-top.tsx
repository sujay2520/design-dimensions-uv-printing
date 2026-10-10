import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 320);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll to top"
      className={cn(
        "fixed z-30 flex size-10 sm:size-11 items-center justify-center rounded-full bg-surface text-fg border border-border/80 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-accent hover:text-accent-fg hover:border-accent active:scale-95",
        "bottom-20 sm:bottom-6 right-4 sm:right-6 animate-in fade-in zoom-in-90 duration-200"
      )}
    >
      <ChevronUp className="size-5" />
    </button>
  );
}

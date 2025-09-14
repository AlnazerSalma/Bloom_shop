import { useEffect, useRef, useState } from "react";

type ScrollRevealType = "up" | "down";

const useScrollReveal = (type: ScrollRevealType = "up") => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible, type };
};

export default useScrollReveal;


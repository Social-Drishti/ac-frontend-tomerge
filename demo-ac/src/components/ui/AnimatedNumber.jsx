import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({ value, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const number = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");

    let startTime = null;
    const duration = 1500;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const animate = (time) => {
          if (!startTime) startTime = time;
          const progress = Math.min((time - startTime) / duration, 1);

          // ease-out animation
          const eased = progress * (2 - progress);
          const current = Math.floor(eased * number);

          setDisplay(current.toLocaleString() + suffix);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({ value, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");
  const prevValueRef = useRef(value);

  useEffect(() => {
    const parseNumber = (val) => parseInt(val.replace(/\D/g, ""), 10) || 0;
    const getSuffix = (val) => val.replace(/[0-9]/g, "");

    const newNumber = parseNumber(value);
    const prevNumber = parseNumber(prevValueRef.current);
    const suffix = getSuffix(value);
    const duration = 1500;
    let startTime = null;

    // Animate from prevNumber to newNumber
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = progress * (2 - progress);
      const current = Math.round(prevNumber + (newNumber - prevNumber) * eased);
      setDisplay(current.toLocaleString() + suffix);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(newNumber.toLocaleString() + suffix);
      }
    };

    requestAnimationFrame(animate);
    prevValueRef.current = value;
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

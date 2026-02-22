import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function Typewriter({ text, className = "", speed = 50, delay = 0 }: TypewriterProps) {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);
  const isComplete = display.length >= text.length;

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (isComplete) return;

    const timer = setTimeout(() => {
      setDisplay(text.slice(0, display.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [started, display, text, speed, isComplete]);

  return (
    <span className={className}>
      {display}
      {started && <span className={`typewriter-cursor ${isComplete ? "typewriter-cursor-done" : ""}`}>|</span>}
    </span>
  );
}

import { useState, useEffect } from "react";

const SECTION_IDS = ["root", "experience", "project", "education", "awards", "skills", "contact"];

export function useScrollSpy() {
  const [activeId, setActiveId] = useState<string>("root");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id") || "root";
            setActiveId(id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
}

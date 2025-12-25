import React, { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
  delay?: number;
  color: string;
}

export default function SkillBar({ skill, level, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={skillRef} className="mb-6 group p-2 -mx-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:scale-[1.02]">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium transition-colors duration-300 group-hover:text-primary-500">{skill}</span>
        <span className="text-sm font-medium transition-colors duration-300 group-hover:text-primary-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_12px_rgba(var(--primary-500-rgb),0.6)]"
          style={{ width: isVisible ? `${level}%` : '0%' } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
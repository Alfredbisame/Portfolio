import React from 'react';
import SkillBar from './SkillBar';
import ExperienceCard from './ExperienceCard';
import { GraduationCap, Heart, Code } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface AboutSectionProps {
  isActive: boolean;
  skills: Skill[];
  experiences: Experience[];
  education?: Education[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ isActive, skills, experiences, education = [] }) => {
  return (
    <section
      className={`min-h-screen flex items-center justify-center p-8 transition-opacity duration-700 ease-in-out ${
        isActive ? 'opacity-100' : 'opacity-0 hidden'
      }`}
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r text-center from-primary-500 to-accent-500 text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="text-lg mb-12 leading-relaxed text-gray-700 dark:text-gray-300">
          I'm a passionate software engineer with over 8 years of experience in building modern, scalable applications.
          My expertise spans across full-stack development, cloud architecture, and team leadership. I thrive on solving complex technical challenges and mentoring fellow developers.
        </p>

        {/* Skills Section */}
        <h3 className="text-2xl font-semibold mb-6">Technical Expertise</h3>
        <div className="grid grid-cols-1 gap-4 mb-16">
          {skills.map((skill, index) => (
            <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                  delay={index * 100} color={''}            />
          ))}
        </div>

        {/* Experience Section */}
        <h3 className="text-2xl font-semibold mb-6">Professional Journey</h3>
        <div className="space-y-6 mb-16">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.company + exp.title}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              index={index}
            />
          ))}
        </div>

        {/* Education Section */}
        {education.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-accent-500" />
              Education
            </h3>
            <ul className="mb-16 space-y-4">
              {education.map((edu, idx) => (
                <li key={`${edu.institution}-${idx}`}>
                  <p className="font-medium text-lg">{edu.degree}</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.institution} &middot; {edu.year}
                  </p>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Values & Hobbies */}
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Heart className="w-6 h-6 text-pink-500" />
          What Drives Me
        </h3>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            I deeply value collaboration, creativity, and continuous learning. I believe great software is built by empowered teams who challenge each other to grow and innovate.
          </p>
          <p>
            Outside of coding, I enjoy hiking, playing guitar, and exploring indie games. I’m also an avid reader and love diving into sci-fi novels and productivity books.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

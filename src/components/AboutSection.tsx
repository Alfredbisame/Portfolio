import React from 'react';
import SkillBar from './SkillBar';
import ExperienceCard from './ExperienceCard';
import { GraduationCap, Heart } from 'lucide-react';
import RotatingText from './RotatingText';
import DecryptedText from './DecryptedText';

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
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-transparent bg-clip-text">About</span>
          <RotatingText
            texts={['Alfred', 'Fianyo']}
            mainClassName="overflow-hidden text-primary-500 dark:text-primary-400"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
          />
        </h2>
        <p className="text-lg mb-12 leading-relaxed text-gray-700 dark:text-gray-300">
          <DecryptedText
            text="Results-driven Software Engineer and Project Manager with 4 years of professional experience in full-stack development and project leadership. Expert in building scalable mobile applications (Flutter & React Native) and modern web applications. Proven ability to lead cross-functional teams, deliver high-quality products on time, and drive technical excellence. Seeking a software engineering role where I can contribute hands-on development and strategic leadership in a dynamic environment."
            animateOn="both"
            speed={120}
            maxIterations={25}
            revealDirection="start"
            className="text-gray-700 dark:text-gray-300"
            encryptedClassName="text-primary-500/50"
          />
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

// Portfolio Data - Modular and Reusable
export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  url?: string;
}

export interface Service {
  title: string;
  desc: string;
}

// Skills based on resume and expertise
export const skills: Skill[] = [
  { name: 'Flutter & Dart', level: 95 },
  { name: 'React & React Native', level: 95 },
  { name: 'Next.js', level: 92 },
  { name: 'TypeScript / JavaScript [ES6+]', level: 90 },
  { name: 'Node.js & Express.js', level: 88 },
  { name: 'NestJS', level: 85 },
  { name: 'Python', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'React.js', level: 95 },
  { name: 'Svelte', level: 75 },
  { name: 'jQuery & GSAP', level: 80 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Bootstrap', level: 88 },
  { name: 'NextUI & Material-UI', level: 90 },
  { name: 'Ant Design & Chakra UI', level: 85 },
  { name: 'Shadcn UI & Tailus', level: 88 },
  { name: 'MongoDB', level: 85 },
  { name: 'SQL/MySQL', level: 88 },
  { name: 'Git & GitHub', level: 90 },
  { name: 'Docker', level: 80 },
  { name: 'VS Code & IntelliJ IDEA', level: 92 },
  { name: 'Android Studio', level: 85 },
  { name: 'Project Management', level: 90 },
  { name: 'Team Leadership', level: 92 },
  { name: 'API Development & Integration', level: 90 },
  { name: 'System Design & Architecture', level: 88 },
];

// Professional Experience
export const experiences: Experience[] = [
  {
    title: 'Full-Stack Software Engineer & Project Manager',
    company: 'Bisame Digital Limited',
    period: 'Feb 2025 – Present',
    description: 'Serving as Project Manager and Engineer, overseeing the full project lifecycle, communicating technical progress to stakeholders, and completing delivery on time within 4 months. Single-handedly planned, architected, and developed a high-performance cross-platform mobile app using Flutter, implementing clean architecture and best engineering practices. Developed a high-performance web application using Next.js on the frontend and integrated a custom NestJS backend API from scratch.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Fleet-Labs GH',
    period: 'Feb 2022 – Present',
    description: 'Contributed to code reviews and debugging processes, enhancing code quality and efficiency. Developed a freelance website using React.js, focusing on improving its functionality and user interface. Enhanced the company\'s main existing website using React.js, resulting in improved user engagement and performance.',
  },
  {
    title: 'Full-Stack Software Developer',
    company: 'Msoft Ghana Limited',
    period: 'Jun 2023 – Dec 2024',
    description: 'Developed a full stack e-commerce website with an admin dashboard. Built a school admission website using React, implementing modern UI/UX practices and responsive design.',
  },
];

// Projects Portfolio
export const projects: Project[] = [
  {
    title: 'Bisame Mobile App(Android)',
    description: 'Single-handedly planned, architected, and developed a high-performance cross-platform mobile app using Flutter, implementing clean architecture and best engineering practices. Designed a modern, intuitive UI/UX that significantly increased app installs and user retention. Implemented state management with Flutter Bloc and oversaw full backend implementation and integration from scratch to deployment.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500',
    tech: ['Flutter', 'Dart', 'Flutter Bloc', 'REST API', 'Clean Architecture'],
    url: 'https://play.google.com/store/apps/details?id=com.bisame.bisame', 
  },
  {
    title: 'Bisame Mobile App(iOS)',
    description: 'Single-handedly planned, architected, and developed a high-performance cross-platform mobile app using Flutter, implementing clean architecture and best engineering practices. Designed a modern, intuitive UI/UX that significantly increased app installs and user retention. Implemented state management with Flutter Bloc and oversaw full backend implementation and integration from scratch to deployment.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500',
    tech: ['Flutter', 'Dart', 'Flutter Bloc', 'REST API', 'Clean Architecture'],
    url: 'https://apps.apple.com/us/app/bisame/id6459306016', 
  },
  {
    title: 'Bisame Web Application',
    description: 'Developed a high-performance web application using Next.js on the frontend and integrated a custom NestJS backend API from scratch. Implemented real-time features with Socket.io and secure social authentication (Google & Apple Sign-In) across both web and mobile platforms. Delivered a modern, responsive UI/UX that contributed to increased user engagement and retention.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500',
    tech: ['Next.js', 'NestJS', 'Socket.io', 'TypeScript', 'Social Auth'],
    url: 'https://bisame.com',
  },
  {
    title: 'Comprehensive School Management System',
    description: 'Developed a premium Management Information System (MIS) using Next.js and a MySQL database, streamlining operations for students, parents, teachers, and administrators. Key features included comprehensive management of student, parent, and teacher profiles, automated timetable generation, and real-time fee tracking, all supported by interactive dashboards for data visualization and detailed reporting.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500',
    tech: ['Next.js', 'MySQL', 'Next Auth', 'bcrypt', 'Data Visualization'],
    url: 'https://github.com', 
  },
  {
    title: 'Logistics Management System',
    description: 'Developed a comprehensive logistics management system featuring a public website for service viewing and shipment tracking, alongside an administrative dashboard for portfolio and service management, utilizing React.js and Node.js with Express.js. Implemented a secure backend API for data exchange and a robust user authentication system using bcrypt.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500',
    tech: ['React.js', 'Node.js', 'Express.js', 'bcrypt', 'REST API'],
    url: 'https://github.com',
  },
];

// Services Offered
export const services: Service[] = [
  {
    title: 'Full Stack Development',
    desc: 'End-to-end development of scalable web and mobile applications using modern technologies (React, Next.js, Flutter, NestJS) and best practices.',
  },
  {
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile applications with Flutter and React Native, featuring seamless user experience, native performance, and clean architecture.',
  },
  {
    title: 'Project Management',
    desc: 'Technical project leadership, overseeing full project lifecycle, stakeholder communication, and on-time delivery within budget constraints.',
  },
  {
    title: 'Technical Consultation',
    desc: 'Expert advice on technology stack selection, system design, architectural decisions, and development process optimization.',
  },
  {
    title: 'Team Leadership & Mentoring',
    desc: 'Technical team management, code reviews, mentoring junior developers, and establishing development processes and best practices.',
  },
  {
    title: 'API Development & Integration',
    desc: 'Design and implementation of robust RESTful APIs and GraphQL endpoints, with secure authentication and real-time features.',
  },
  {
    title: 'UI/UX Development',
    desc: 'Modern, responsive user interfaces using Tailwind CSS, Material-UI, NextUI, and other component libraries for optimal user experience.',
  },
  {
    title: 'Performance Optimization',
    desc: 'Optimization of web and mobile applications for maximum speed, efficiency, and scalability.',
  },
];


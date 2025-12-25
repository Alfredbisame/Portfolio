
interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
  technologies?: string[];
  achievements?: string[];
}

export default function ExperienceCard({ title, company, period, description, index }: ExperienceCardProps) {
  return (
    <div 
      className="relative pl-8 pb-8 border-l-2 border-primary-500 last:border-0"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-500" />
      <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl animate-slide-up transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl hover:shadow-primary-500/20">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>{company}</span>
          <span className="mx-2">•</span>
          <span>{period}</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
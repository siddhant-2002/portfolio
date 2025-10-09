import React from 'react';

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  image?: string;
  icon?: React.FC<{ className?: string }>;
  projectName?: string;
  achievements?: string[];
  projectLink?: string;
}

// Corrected experience data
const experiences: Experience[] = [
  {
    id: 1,
    role: "Packaged App Development Intern",
    company: "Accenture",
    duration: "April 2025 - July 2025 | Pune, Maharashtra",
    description:
      "Built a web app using React.js and Flask to predict Customer Lifetime Value (CLV) based on purchase history. Used the Lifetimes Python library with models like BG/NBD and Gamma-Gamma to calculate CLV.",
    skills: ["React.js", "Flask", "Python", "Data Analysis"],
    image: "accenture.png",
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "RN Web Brand Solutions",
    duration: "September 2023 - January 2024 | Pune, Maharashtra",
    description:
      "Built responsive UIs with React.js, creating 20+ reusable components, reducing development time by 30%. Improved responsiveness by 40% using third-party APIs and optimized state management. Transformed wireframes into features, collaborating cross-functionally to increase user engagement by 15%.",
    skills: ["React.js", "UI/UX", "State Management"],
    image: "rn.png",
  },
  
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="bg-black text-white w-full  flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 py-8 sm:px-8 md:px-12 flex flex-col items-start justify-center gap-8 font-['Inter',_sans-serif]">
        

        {/* Divider and title */}
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-2" aria-label="Experience Timeline">
            Experience <span className="inline-block text-gray-400 mx-1">Timeline</span>
          </h1>
          <div className="w-24 h-1 bg-gray-700 rounded-full mb-6" />
          <p className="text-gray-500 text-sm mb-6">Internships • Projects • Growth</p>
        </div>

        {/* Timeline */}
        <div className="relative w-full max-w-5xl mx-auto font-sans text-gray-300">
          {/* Vertical timeline line */}
          <div className="absolute left-3 top-2 h-full w-px bg-[#333]" />
          <div className="space-y-16">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex items-start">
                {/* Dot on the timeline */}
                <div className="absolute left-3 top-2 -translate-x-1/2 flex h-4 w-4 items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-black border-2 border-green-500"></div>
                </div>

                <div className="pl-10 w-full">
                  <div className="flex items-center gap-4 mb-2">
                    {exp.image && (
                      <img src={exp.image} alt={exp.company} className="w-8 h-8 rounded-md border border-gray-700" />
                    )}
                    <p className="text-sm font-medium text-gray-500">{exp.duration}</p>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-1">{exp.role}</h3>
                  <p className="text-md font-semibold text-green-400">{exp.company}</p>
                  <p className="mt-3 text-gray-400 leading-relaxed">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#222] text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-[#333]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

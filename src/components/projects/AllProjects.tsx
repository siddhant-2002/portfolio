import React from 'react';

/* ----------------------------- ICON COMPONENTS ----------------------------- */
interface IconProps {
  className?: string;
}

const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ExternalLinkIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

/* ----------------------------- TYPE DEFINITIONS ----------------------------- */
interface Project {
  title: string;
  imageSrc: string;
  description: string | string[];
  skills: string[];
  demo: string;
  source: string;
  category: string;
}

/* ----------------------------- PROJECT DATA ----------------------------- */
const PROJECTS: Project[] = [
  {
    title: "Pixen",
    imageSrc: "https://picsum.photos/seed/pixen/800/600",
    description: [
      "A freelancing service platform built to connect clients with professional developers and designers. Pixen enables project listing, bidding, real-time chat, and secure delivery workflows."
    ],
    skills: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    demo: "https://pixen.live/",
    source: "https://github.com/siddhant-2002/pixen",
    category: "full stack"
  },
  {
    title: "LabourHub",
    imageSrc: "https://picsum.photos/seed/labourhub/800/600",
    description: [
      "This platform is a game-changer for daily wage workers, connecting them to job providers seamlessly."
    ],
    skills: ["Node.js", "Express", "MongoDB", "Machine Learning"],
    demo: "https://laborhub.netlify.app/",
    source: "https://github.com/siddhant-2002/labourhub",
    category: "full stack"
  },
  {
    title: "Refer Me",
    imageSrc: "https://picsum.photos/seed/referme/800/600",
    description: "An online platform for engineering students with dashboards, project uploads, and secure logins.",
    skills: ["React", "Express", "Node", "MongoDB", "Tailwind CSS"],
    demo: "https://referme.netlify.app/",
    source: "https://github.com/siddhant-2002/referme",
    category: "full stack"
  },
  {
    title: "BeyondChat",
    imageSrc: "https://picsum.photos/seed/beyondchat/800/600",
    description: [
      "A user-friendly frontend interface integrating web scraping capabilities and a chatbot for seamless data extraction and user interaction."
    ],
    skills: ["React", "Google Auth", "Tailwind CSS"],
    demo: "https://beyondchat.netlify.app/",
    source: "https://github.com/siddhant-2002/beyondChat",
    category: "frontend"
  },
  {
    title: "DevLink-Connect",
    imageSrc: "https://picsum.photos/seed/devlink/800/600",
    description: "A developer connection platform to facilitate networking among coding professionals.",
    skills: ["React", "Express", "Node", "MongoDB"],
    demo: "https://devlink-connect.netlify.app/",
    source: "https://github.com/siddhant-2002/devlink",
    category: "full stack"
  },
  {
    title: "Random GIF Generator",
    imageSrc: "https://picsum.photos/seed/randomgif/800/600",
    description: [
      "A fun web app that fetches and displays random GIFs using the Giphy API."
    ],
    skills: ["React", "Giphy API"],
    demo: "https://randoom-gif.netlify.app/",
    source: "https://github.com/siddhant-2002/",
    category: "api fetch"
  },
  {
    title: "WEATHER APP",
    imageSrc: "https://picsum.photos/seed/weather/800/600",
    description: "A Node.js app fetching real-time weather data using OpenWeatherMap API and displaying it beautifully.",
    skills: ["React", "Express", "Node", "API"],
    demo: "https://www.example.com",
    source: "https://github.com/siddhant-2002/",
    category: "api fetch"
  },
  {
    title: "Profile-MD",
    imageSrc: "https://picsum.photos/seed/profilemd/800/600",
    description: [
      "A frontend for a profile management system that renders developer profiles from Markdown content."
    ],
    skills: ["React", "Tailwind CSS", "Netlify"],
    demo: "https://profile-md.netlify.app/",
    source: "https://github.com/siddhant-2002/profile-md",
    category: "frontend"
  },
  {
    title: "OSimulate",
    imageSrc: "https://picsum.photos/seed/osimulate/800/600",
    description: "Simulation of key operating system algorithms in C++ for educational use.",
    skills: ["C++", "Algorithms"],
    demo: "https://github.com/siddhant-2002/OSimulate",
    source: "https://github.com/siddhant-2002/OSimulate",
    category: "other"
  },
  {
    title: "Hotel Management System",
    imageSrc: "https://picsum.photos/seed/hotel/800/600",
    description: [
      "A command-line-based hotel management system written in Python. Supports booking, food ordering, and payments."
    ],
    skills: ["Python", "File Handling", "OOP"],
    demo: "",
    source: "https://github.com/siddhant-2002/hotel_management",
    category: "other"
  }
];

/* ----------------------------- GRID LAYOUT ----------------------------- */
const GRID_LAYOUT = [
  "md:col-span-3 md:row-span-2",
  "md:col-span-3 md:row-span-1",
  "md:col-span-3 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-3 md:row-span-1",
  "md:col-span-3 md:row-span-1",
  "md:col-span-3 md:row-span-1",
  "md:col-span-3 md:row-span-1"
];

/* ----------------------------- PROJECT CARD ----------------------------- */
interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const descriptionText = Array.isArray(project.description)
    ? project.description.join(' ')
    : project.description;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl bg-black/20 border border-gray-800 overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:border-gray-700 hover:scale-[1.02] hover:shadow-gray-800/20 ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
      </div>

      <div className="relative z-10 p-3 sm:p-4 flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg lg:text-xl font-light text-white transition-colors duration-300 group-hover:text-white/90">
              {project.title}
            </h3>
            <span className="flex-shrink-0 ml-2 px-2 py-0.5 bg-white/10 text-white/80 text-[10px] font-light rounded-full capitalize">
              {project.category}
            </span>
          </div>

          <p className="text-white/70 text-xs mb-2 leading-relaxed line-clamp-2 group-hover:line-clamp-none font-light">
            {descriptionText}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 bg-white/10 text-white/80 text-[10px] font-light rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2 border-t border-white/10">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors duration-300 text-xs font-light"
              >
                <ExternalLinkIcon className="w-3 h-3" />
                Live Demo
              </a>
            )}
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors duration-300 text-xs font-light"
              >
                <GithubIcon className="w-3 h-3" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------- MAIN COMPONENT ----------------------------- */
const AllProjects: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white">
            Project Showcase
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg font-light">
            A curated collection of my work, from full-stack applications to fun experiments, presented in a beautiful bento grid.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:auto-rows-[200px] lg:auto-rows-[250px]">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              className={GRID_LAYOUT[index]}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllProjects;

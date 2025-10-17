


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

const InfoIcon: React.FC<IconProps> = ({ className }) => (
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
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

/* ----------------------------- TYPE IMPORTS ----------------------------- */
import type { Project } from './AllProjects';

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
      onClick={(e) => {
        // Don't trigger card click if clicking on a button or link
        if ((e.target as HTMLElement).closest('a, button')) return;
        document.dispatchEvent(new CustomEvent('open-project-modal', { detail: project }));
      }}
      className={`group relative flex flex-col justify-between rounded-2xl bg-black/20 border border-gray-800 overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:border-gray-700 hover:scale-[1.02] hover:shadow-gray-800/20 cursor-pointer ${className}`}
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
            <span className="flex-shrink-0 ml-2 px-2 py-0.5 bg-white/10 text-white/80 text-[15px] font-light rounded-sm capitalize">
              {project.category}
            </span>
          </div>

          <p className="text-white/70 mb-2 leading-relaxed line-clamp-2 group-hover:line-clamp-none font-light">
            {descriptionText}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 bg-white/10 text-white/80 text-[15px] font-light rounded-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-white/90 hover:text-white rounded-md transition-all duration-300 text-sm font-light backdrop-blur-sm"
                >
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2 py-1 bg-gray-600/30 hover:bg-gray-600/50 text-white/90 hover:text-white rounded-md transition-all duration-300 text-sm font-light backdrop-blur-sm"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source</span>
                </a>
              )}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                document.dispatchEvent(new CustomEvent('open-project-modal', { detail: project }));
              }}
              className="flex items-center gap-1.5 px-2 py-1 bg-purple-600/30 hover:bg-purple-600/50 text-white/90 hover:text-white rounded-md transition-all duration-300 text-sm font-light backdrop-blur-sm"
            >
              <InfoIcon className="w-3.5 h-3.5" />
              <span>View Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
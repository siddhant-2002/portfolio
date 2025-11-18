


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
      className={`group relative flex flex-col justify-between rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/60 border border-gray-700/50 overflow-hidden shadow-xl transition-all duration-500 ease-out hover:border-gray-600/70 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer backdrop-blur-sm ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
      </div>

      <div className="relative z-10 p-4 sm:p-5 lg:p-6 flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-white transition-all duration-300 group-hover:text-white/95 leading-tight">
              {project.title}
            </h3>
            <span className="flex-shrink-0 ml-3 px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-white/80 text-xs sm:text-sm font-light rounded-full capitalize backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          <p className="text-white/70 mb-3 leading-relaxed line-clamp-3 group-hover:line-clamp-none font-light text-sm sm:text-base transition-all duration-300">
            {descriptionText}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white/80 text-xs sm:text-sm font-light rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600/20 to-blue-700/20 hover:from-blue-600/30 hover:to-blue-700/30 text-white/90 hover:text-white rounded-xl transition-all duration-300 text-sm font-light border border-blue-500/30 hover:border-blue-400/50 hover:scale-105 backdrop-blur-sm"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  <span>Demo</span>
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-gray-600/20 to-gray-700/20 hover:from-gray-600/30 hover:to-gray-700/30 text-white/90 hover:text-white rounded-xl transition-all duration-300 text-sm font-light border border-gray-500/30 hover:border-gray-400/50 hover:scale-105 backdrop-blur-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source</span>
                </a>
              )}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                document.dispatchEvent(new CustomEvent('open-project-modal', { detail: project }));
              }}
              className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-600/20 to-purple-700/20 hover:from-purple-600/30 hover:to-purple-700/30 text-white/90 hover:text-white rounded-xl transition-all duration-300 text-sm font-light border border-purple-500/30 hover:border-purple-400/50 hover:scale-105 backdrop-blur-sm"
            >
              <InfoIcon className="w-4 h-4" />
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
import React, { useRef, useState } from 'react';
import type { Project } from './AllProjects';

/* ----------------------------- ICONS ----------------------------- */
interface IconProps {
  className?: string;
}

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

/* ----------------------------- PROJECT CARD ----------------------------- */
interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const descriptionText = Array.isArray(project.description)
    ? project.description.join(' ')
    : project.description;

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('a, button')) return;
        document.dispatchEvent(new CustomEvent('open-project-modal', { detail: project }));
      }}
      className={`group relative h-full w-full overflow-hidden rounded-2xl bg-neutral-900 border-2 border-neutral-700 cursor-pointer transition-all duration-500 font-['Inter',_sans-serif] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-neutral-700/30 hover:border-neutral-600 ${className}`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-30"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />

      {/* Image Container */}
      <div className="absolute inset-0 h-full w-full overflow-hidden z-0">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-70 group-hover:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
      </div>

      {/* Floating Category Badge */}
      <div className="absolute top-4 right-4 z-20 translate-y-[-10px] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="inline-flex items-center rounded-full bg-neutral-800/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-md border border-neutral-600 shadow-lg shadow-black/50">
          {project.category}
        </span>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex h-full flex-col justify-end p-6 sm:p-8">
        <div className="transform transition-all duration-500 group-hover:-translate-y-2">
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
            {project.title}
          </h3>

          {/* Description (Hidden initially, reveals on hover) */}
          <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                {descriptionText}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-gray-200 bg-neutral-800/90 px-2.5 py-1 rounded-md border border-neutral-600 backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
                {project.skills.length > 4 && (
                  <span className="text-xs font-medium text-gray-400 px-1 py-1">
                    +{project.skills.length - 4}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors border border-neutral-600 shadow-lg shadow-black/20"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
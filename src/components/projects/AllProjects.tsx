import React from 'react';
import { motion } from 'framer-motion';
import PROJECTS from './allprojects.json';
import ProjectCard from './ProjectCard';

/* ----------------------------- TYPES ----------------------------- */
export interface Project {
  title: string;
  imageSrc: string;
  description: string | string[];
  skills: string[];
  demo: string;
  source?: string;
  category: string;
  live?: boolean;
}

/* ----------------------------- GRID LAYOUT ----------------------------- */
const getGridLayout = (index: number): string => {
  // User requested a 10-column grid.
  // "First 4 and 5" interpreted as:
  // Row 1: 4 cols + 6 cols (Total 10)
  // Row 2: 5 cols + 5 cols (Total 10)
  // Row 3: 6 cols + 4 cols (Total 10) - Variation
  const pattern = index % 6;
  
  switch(pattern) {
    case 0: return "md:col-span-9 md:row-span-1"; // 40%
    case 1: return "md:col-span-11 md:row-span-1"; // 60%
    case 2: return "md:col-span-10 md:row-span-1"; // 50%
    case 3: return "md:col-span-10 md:row-span-1"; // 50%
    case 4: return "md:col-span-11 md:row-span-1"; // 60%
    case 5: return "md:col-span-9 md:row-span-1"; // 40%
    default: return "md:col-span-5 md:row-span-1";
  }
};

/* ----------------------------- MODAL ----------------------------- */
interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isOpen: boolean;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isOpen }) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  if (!project || !isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[100] p-4 font-['Inter',_sans-serif]">
      <div 
        ref={modalRef}
        className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 custom-scrollbar"
      >
        <div className="relative h-64 sm:h-80 md:h-96">
          <img 
            src={project.imageSrc} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm border border-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="p-8 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">{project.title}</h2>
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center px-3 py-1 bg-neutral-800 border border-neutral-700 text-gray-300 rounded-md text-sm font-medium capitalize">
                  {project.category}
                </div>
                {project.live && (
                  <div className="inline-flex items-center px-3 py-1 bg-green-800 border border-green-700 text-green-300 rounded-md text-sm font-medium">
                    Live
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-gray-200 rounded-xl transition-all duration-300 text-sm font-bold"
                >
                  <span>Live Demo</span>
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-all duration-300 text-sm font-medium border border-neutral-700"
                >
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">About Project</h3>
                <div className="text-gray-400 space-y-4 leading-relaxed">
                  {Array.isArray(project.description) 
                    ? project.description.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))
                    : <p>{project.description}</p>
                  }
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-neutral-800 text-gray-300 text-sm font-medium rounded-md border border-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------- MAIN COMPONENT ----------------------------- */
const AllProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  
  const filteredProjects = React.useMemo(() => {
    if (!activeFilter) return PROJECTS;
    return PROJECTS.filter((project) => project.category.toLowerCase() === activeFilter.toLowerCase());
  }, [activeFilter]);
  
  React.useEffect(() => {
    const handleOpenProjectModal = (e: CustomEvent<Project>) => {
      setSelectedProject(e.detail);
    };
    
    document.addEventListener('open-project-modal', handleOpenProjectModal as EventListener);
    return () => {
      document.removeEventListener('open-project-modal', handleOpenProjectModal as EventListener);
    };
  }, []);

  const categories = ['full stack', 'frontend', 'api fetch', 'other'];

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-6 sm:px-8 md:px-12 font-['Inter',_sans-serif] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-200px,#3e3e3e2a,transparent)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                Selected Works
              </span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-xl text-lg leading-relaxed">
              A curated collection of projects pushing the boundaries of web development and design.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border ${
                activeFilter === null 
                  ? 'bg-white text-black border-white' 
                  : 'bg-neutral-900/50 text-gray-400 border-neutral-800 hover:border-neutral-600 hover:text-white backdrop-blur-sm'
              }`}
              onClick={() => setActiveFilter(null)}
            >
              All
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border capitalize ${
                  activeFilter === category 
                    ? 'bg-white text-black border-white' 
                    : 'bg-neutral-900/50 text-gray-400 border-neutral-800 hover:border-neutral-600 hover:text-white backdrop-blur-sm'
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-20 gap-6 auto-rows-[300px] grid-flow-dense">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={getGridLayout(index)}
            >
              <ProjectCard
                project={project}
                className="h-full w-full"
              />
            </motion.div>
          ))}
        </div>
        
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </main>
  );
};

export default AllProjects;

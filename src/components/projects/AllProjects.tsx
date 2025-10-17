import React from 'react';
import PROJECTS from './allprojects.json';
import ProjectCard from './ProjectCard';

/* ----------------------------- ICON COMPONENTS ----------------------------- */
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



/* ----------------------------- TYPE DEFINITIONS ----------------------------- */
export interface Project {
  title: string;
  imageSrc: string;
  description: string | string[];
  skills: string[];
  demo: string;
  source: string;
  category: string;
}


/* ----------------------------- DYNAMIC GRID LAYOUT GENERATOR ----------------------------- */
/**
 * This function generates grid layouts dynamically based on project index and category.
 * This allows the grid to adapt automatically when new projects are added.
 */
const getGridLayout = (index: number, category: string, totalInCategory: number): string => {
  // First project of each category should be featured (bigger size)
  if (index === 0) return "md:col-span-3 md:row-span-2";
  
  // Last project in a category with odd count gets special treatment
  if (index === totalInCategory - 1 && totalInCategory % 2 === 1) {
    return "md:col-span-3 md:row-span-1"; // Make last item wider if odd count
  }
  
  // Patterns based on position within the grid to create visual interest
  const position = index % 6; // Create a repeating pattern every 6 items
  
  // Use different patterns based on category for visual variety
  if (category === "full stack") {
    if (position === 1) return "md:col-span-3 md:row-span-1";
    if (position === 2) return "md:col-span-3 md:row-span-1";
    if (position === 3) return "md:col-span-3 md:row-span-1";
    if (position === 4) return "md:col-span-3 md:row-span-1";
    if (position === 5) return "md:col-span-3 md:row-span-1";
  } else if (category === "frontend") {
    if (position === 1) return "md:col-span-3 md:row-span-1";
    if (position === 2) return "md:col-span-3 md:row-span-1";
    if (position === 3) return "md:col-span-3 md:row-span-1";
    if (position === 4) return "md:col-span-3 md:row-span-1";
    if (position === 5) return "md:col-span-3 md:row-span-1";
  } else if (category === "api fetch" || category === "other") {
    if (position === 1) return "md:col-span-3 md:row-span-1";
    if (position === 2) return "md:col-span-3 md:row-span-1";
    if (position === 3) return "md:col-span-3 md:row-span-1";
    if (position === 4) return "md:col-span-3 md:row-span-1";
    if (position === 5) return "md:col-span-3 md:row-span-1";
  }
  
  // Use a balanced default pattern for other categories or positions
  // This ensures all added projects will get a sensible layout
  const defaultPatterns = [
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1", 
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1"
  ];
  
  return defaultPatterns[position] || "md:col-span-3 md:row-span-1";
};



/* ----------------------------- PROJECT MODAL COMPONENT ----------------------------- */
interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isOpen: boolean;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isOpen }) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  
  // Close modal when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  if (!project || !isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div 
        ref={modalRef}
        className="bg-gray-900 border border-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          <div className="h-56 sm:h-64 md:h-80 overflow-hidden">
            <img 
              src={project.imageSrc} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-light text-white mb-2">{project.title}</h2>
              <div className="inline-block px-3 py-1 bg-purple-600/30 text-white/90 rounded-md text-sm font-light capitalize">
                {project.category}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/30 hover:bg-blue-600/50 text-white rounded-md transition-all duration-300 text-sm font-light"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-600/30 hover:bg-gray-600/50 text-white rounded-md transition-all duration-300 text-sm font-light"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg text-white/90 mb-2 font-light">Description</h3>
            <div className="text-white/70 space-y-2 font-light">
              {Array.isArray(project.description) 
                ? project.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                : <p>{project.description}</p>
              }
            </div>
          </div>
          
          <div>
            <h3 className="text-lg text-white/90 mb-2 font-light">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white/10 text-white/80 text-sm font-light rounded-md"
                >
                  {skill}
                </span>
              ))}
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
  const [filteredProjects, setFilteredProjects] = React.useState(PROJECTS);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  
  // Filter projects when activeFilter changes
  React.useEffect(() => {
    if (!activeFilter) {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(
        PROJECTS.filter((project) => project.category.toLowerCase() === activeFilter.toLowerCase())
      );
    }
  }, [activeFilter]);
  
  // Handle the custom event to open project modal
  React.useEffect(() => {
    const handleOpenProjectModal = (e: CustomEvent<Project>) => {
      setSelectedProject(e.detail);
    };
    
    // TypeScript doesn't know about our custom event, so we need to cast
    document.addEventListener('open-project-modal', handleOpenProjectModal as EventListener);
    
    return () => {
      document.removeEventListener('open-project-modal', handleOpenProjectModal as EventListener);
    };
  }, []);
  
  // Handle filter button click
  const handleFilterClick = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };
  
  // Group projects by category to determine position within each category
  const projectsByCategory = filteredProjects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof filteredProjects>);

  // Map filtered projects to their dynamic grid layout positions
  const projectsWithLayout = filteredProjects.map((project) => {
    // Find the position of this project within its category group
    const categoryProjects = projectsByCategory[project.category];
    const categoryIndex = categoryProjects.findIndex(p => p.title === project.title);
    const totalInCategory = categoryProjects.length;
    
    return {
      ...project,
      layout: getGridLayout(categoryIndex, project.category, totalInCategory)
    };
  });

  return (
    <main className="min-h-screen bg-black text-white pt-12 pb-4 px-4 sm:pt-16 sm:pb-6 sm:px-6 md:pt-20 md:pb-8 md:px-8 lg:pt-24 lg:pb-12 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white">
            Project Showcase
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg font-light">
            A curated collection of my work, from full-stack applications to fun experiments, presented in a beautiful bento grid.
          </p>
        </header>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-12 px-4">
          <button 
            className={`category-btn text-lg sm:text-xl md:text-2xl font-light transition-all duration-300 focus:outline-none ${activeFilter === null ? 'text-white border-b border-white pb-1' : 'text-gray-400 hover:text-white hover:border-b hover:border-gray-400 hover:pb-1'}`}
            onClick={() => setActiveFilter(null)}
          >
            All
          </button>
          <span className="text-gray-600 text-xl">•</span>
          <button 
            className={`category-btn text-lg sm:text-xl md:text-2xl font-light transition-all duration-300 focus:outline-none ${activeFilter === 'full stack' ? 'text-white border-b border-white pb-1' : 'text-gray-400 hover:text-white hover:border-b hover:border-gray-400 hover:pb-1'}`}
            onClick={() => handleFilterClick('full stack')}
          >
            Full Stack
          </button>
          <span className="text-gray-600 text-xl">•</span>
          <button 
            className={`category-btn text-lg sm:text-xl md:text-2xl font-light transition-all duration-300 focus:outline-none ${activeFilter === 'frontend' ? 'text-white border-b border-white pb-1' : 'text-gray-400 hover:text-white hover:border-b hover:border-gray-400 hover:pb-1'}`}
            onClick={() => handleFilterClick('frontend')}
          >
            Frontend
          </button>
          <span className="text-gray-600 text-xl">•</span>
          <button 
            className={`category-btn text-lg sm:text-xl md:text-2xl font-light transition-all duration-300 focus:outline-none ${activeFilter === 'api fetch' ? 'text-white border-b border-white pb-1' : 'text-gray-400 hover:text-white hover:border-b hover:border-gray-400 hover:pb-1'}`}
            onClick={() => handleFilterClick('api fetch')}
          >
            API Fetch
          </button>
          <span className="text-gray-600 text-xl">•</span>
          <button 
            className={`category-btn text-lg sm:text-xl md:text-2xl font-light transition-all duration-300 focus:outline-none ${activeFilter === 'other' ? 'text-white border-b border-white pb-1' : 'text-gray-400 hover:text-white hover:border-b hover:border-gray-400 hover:pb-1'}`}
            onClick={() => handleFilterClick('other')}
          >
            Other
          </button>
        </div>

        
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 md:auto-rows-[200px] lg:auto-rows-[250px] transition-all duration-500">
          {projectsWithLayout.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              className={`transform transition-all duration-500 ${project.layout}`}
            />
          ))}
        </div>
        
        {/* Project Details Modal */}
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

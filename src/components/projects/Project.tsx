import { useEffect, useRef, useState } from 'react';

interface ProjectItemProps {
    title: string;
    imageSrc?: string;
    description: string | string[];
    smalldescription?: string;
    skills?: string[];
    demo?: string;
    source?: string;
    category?: string;
}

const projectData: ProjectItemProps[] = [
 {
    "title": "Pixen",
    "imageSrc": "pixen.png",
    "smalldescription": " A full-stack platform for a digital agency with CMS, blogs, and portfolio dashboard.",
    "description": "Pixen is a full-stack web platform built for a digital agency to manage and showcase its portfolio, blogs, and client testimonials through an integrated dashboard. The platform allows administrators to upload new projects, publish case studies, share blog content, and display client feedback — all dynamically rendered on the main website.",
    "skills": ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    "demo": "https://pixen.live/",
   
    "category": "full stack"
  },
  
  {
    "title": "Refer Me",
    "imageSrc": "referme.png",
        "smalldescription": " An online platform for engineering students to access study material.",
        "description": "An online learning platform for engineering students that provides access to study materials and resources, now enhanced with admin and student dashboards and payment integration for premium content. The platform supports 2,100+ active users.",
    "skills": ["React", "Express", "Node", "Mongo DB", "Firebase"],
    "demo": "https://referme.tech/",
    
    "category": "full stack"
  },
  {
    "title": "LabourHub",
    "imageSrc": "laborhub.png",
        "smalldescription": "A lightweight job-matching web app for daily wage workers.",
        "description": "A smart job-matching web platform built using the MERN stack that connects daily wage workers with nearby employers seamlessly. The system leverages machine learning (K-Nearest Neighbors) for intelligent worker-job matching and supports USSD integration to make the platform accessible even without internet connectivity.",
    "skills": ["Node.js", "Express", "MongoDB", "Machine Learning", "KNN", "Multilingual Support"],
    "demo": "https://laborhub.netlify.app/",
    
    "category": "full stack"
  }

];

const FeaturedProjectCard = ({ project, index }: { project: ProjectItemProps, index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const isEven = index % 2 === 0;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        const currentRef = cardRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div ref={cardRef} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Image */}
                <div className={`md:col-span-7 relative group ${isEven ? 'md:order-last' : ''}`}>
                    <div className="bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 p-4 sm:p-6 rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-black/20 flex items-center justify-center">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block">
                            <img 
                                src={project.imageSrc} 
                                alt={project.title} 
                                className="w-full h-40 md:h-80 object-cover rounded-2xl transition-all duration-500 group-hover:-translate-y-12 group-hover:shadow-2xl group-hover:z-30" 
                                style={{zIndex: 2, position: 'relative'}} 
                            />
                        </a>
                    </div>
                </div>

                {/* Text */}
                <div className={`md:col-span-5 relative z-10 ${isEven ? 'text-left md:text-left' : 'text-left md:text-right'}`}> 
                    <p className="text-sm font-semibold text-gray-400 mb-2">Featured Project</p>
                    <h3 className="text-3xl md:text-5xl font-light text-white mb-2">{project.title}</h3>
                    {project.smalldescription && (
                        <p className="text-gray-400 text-sm mb-4">{project.smalldescription}</p>
                    )}

                    <div className={`bg-neutral-800 p-6 rounded-xl shadow-inner border border-neutral-800 mb-4 md:max-w-6xl ${isEven ? 'md:-mr-32' : 'md:-ml-32'} z-30`}>
                        <p className="text-gray-300 text-sm leading-relaxed">{Array.isArray(project.description) ? project.description.join(' ') : project.description}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex flex-wrap gap-2">
                            {(project.skills || []).map((s) => (
                                <span key={s} className="text-xs px-2 py-1 bg-transparent border border-neutral-700 rounded-md text-gray-400">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xl font-bold text-white  hover:scale-105 transition">
                                <span>Live Demo</span>
                            </a>
                        )}

                        
                    </div>
                </div>
            </div>
        </div>
    );
};


const Projects = () => {
    return (
        <section className="bg-black text-white w-full min-h-screen flex items-center">
            <div className="w-full max-w-6xl mx-auto px-6 py-8 sm:px-8 md:px-12 flex flex-col items-start justify-center gap-8 font-['Inter',_sans-serif]">
                {/* Static Title & Intro */}
                

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold leading-tight tracking-tighter" aria-label="Project Portfolio">
                    Project <span className="inline-block text-gray-400 mx-1">Portfolio</span>
                    <div className='pt-2'><div className="w-24 h-1 bg-gray-700 rounded-full mb-2" /></div>
                    
                </h1>
                
                {/* Project Cards */}
                <div className="space-y-24">
                    {projectData.map((project, index) => (
                        <FeaturedProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* Bottom link */}
                <div className="mt-12 w-full pt-6 flex justify-end">
                    <a href="/projects" className="text-2xl font-light text-gray-300 hover:text-white hover:scale-105 transition">
                        View all projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

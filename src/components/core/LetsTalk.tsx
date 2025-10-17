import React from 'react';

// SVG Icon Components for better readability
const MailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

// const InstagramIcon: React.FC = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
//         <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//     </svg>
// );

const LinkedInIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);



// The main component, assuming it's placed in a container with a dark background.
const LetsTalk: React.FC = () => {
    return (
        <section className="bg-black text-white w-full min-h-[40vh] flex items-center">
            <div className="w-full max-w-6xl mx-auto px-6 py-12 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start font-['Inter',_sans-serif]">
                {/* Left: Let's Talk content */}
                <div className="flex flex-col items-start justify-center gap-8">
                    <div className="w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-2" aria-label="Let's Talk">
                            Let's <span className="inline-block text-gray-400 mx-1">Talk</span>
                        </h1>
                        <div className="w-24 h-1 bg-gray-700 rounded-full mb-4" />
                    </div>
                    <div className="flex items-center gap-4 w-full mb-6">
                        
                        <p className="text-gray-400 max-w-lg text-base sm:text-lg">
Got an idea, question, or project in mind? Feel free to reach out — I love building cool stuff and solving real-world problems with code.                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2">
                        {/* Email Button */}
                        <a
                            href="mailto:siddeshmukh711@gmail.com"
                            className="flex items-center gap-3 bg-neutral-900/30 border border-gray-700/60 text-gray-100 rounded-lg px-4 py-2.5 hover:bg-neutral-900/40 hover:scale-[1.02] transition-all duration-200"
                            aria-label="Email Siddhant"
                        >
                            <MailIcon />
                            <span className="text-sm font-medium truncate max-w-[18rem]">siddeshmukh711@gmail.com</span>
                        </a>
                        {/* Resume Button */}
                        <a
                            href="https://drive.google.com/drive/folders/1ceZ4Fe6iXk8Q0p3xWhRcD7nHfp67n9oo?usp=drive_link"
                            className="bg-neutral-900/30 border border-gray-700/60 text-gray-100 rounded-lg px-4 py-2.5 hover:bg-neutral-900/40 hover:scale-[1.02] transition-all duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="text-sm font-medium">Resume</span>
                        </a>
                        {/* Instagram Button */}
                        {/* <a href="#" className="bg-neutral-900/30 border border-gray-700/60 text-gray-100 rounded-lg p-3 hover:bg-neutral-900/40 transition-all duration-200" aria-label="Instagram">
                            <InstagramIcon />
                        </a> */}
                        {/* LinkedIn Button */}
                        <a href="https://www.linkedin.com/in/sid-deshmukh/" target='_blank' className="bg-neutral-900/30 border border-gray-700/60 text-gray-100 rounded-lg p-3 hover:bg-neutral-900/40 transition-all duration-200" aria-label="LinkedIn">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default LetsTalk;


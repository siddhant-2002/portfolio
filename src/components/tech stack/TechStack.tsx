import React from 'react';

// Technologies to show in the marquee
const TECH_STACK = [
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'Node',
  'MongoDB',
  'Git',
  'GitHub',
  'MySQL',
  'C++',
  'Java',
  'Linux',
  'Firebase',
  'Python',
];

// Map technology names to image files in public/skills
const TECH_ICONS: Record<string, string> = {
  HTML: '/skills/html.png',
  CSS: '/skills/css.png',
  Javascript: '/skills/javascript.png',
  React: '/skills/react.png',
  Node: '/skills/node.png',
  MongoDB: '/skills/mongodb.png',
  Git: '/skills/git.png',
  GitHub: '/skills/github.png',
  MySQL: '/skills/mysql.png',
  'C++': '/skills/cpp.png',
  Java: '/skills/java.png',
  Linux: '/skills/linux.png',
  Firebase: '/skills/firebase.png',
  Python: '/skills/python.png',
};

// Marquee wrapper component
const Marquee: React.FC<{
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speedInSeconds?: number;
}> = ({ children, direction = 'left', speedInSeconds = 40 }) => {
  const animation = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className="relative overflow-hidden whitespace-nowrap w-full">
      {/* left/right fade masks */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black/90 to-transparent" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black/90 to-transparent" />

      <div
        className={`flex gap-20 ${animation}`}
        style={{ animationDuration: `${speedInSeconds}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

// Chip-style tech card with icon
const CourseCard: React.FC<{ label: string; imgSrc?: string }> = ({ label, imgSrc }) => (
  <div className="flex items-center gap-3 px-6 py-3">
    {imgSrc && (
      <img src={imgSrc} alt={label} className="w-10 h-10 object-contain" />
    )}
    <div className="text-white font-medium text-xl select-none">{label}</div>
  </div>
);

// Main Coursework marquee component
const TechStack: React.FC = () => {
  return (
    <section className="bg-black text-white w-full  flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 py-8 sm:px-8 md:px-12 flex flex-col items-start justify-center gap-8 font-['Inter',_sans-serif]">
        

        {/* Divider and title */}
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-2" aria-label="Tech Stack">
            Tech <span className="inline-block text-gray-400 mx-1">Stack</span>
          </h1>
          <div className="w-24 h-1 bg-gray-700 rounded-full mb-6" />
          <p className="text-gray-500 text-sm mb-6">Frontend • Backend • Tools</p>
        </div>

        {/* Marquee */}
        <div className="w-full">
          <Marquee direction="left" speedInSeconds={50}>
            {TECH_STACK.map((tech, index) => (
              <CourseCard key={index} label={tech} imgSrc={TECH_ICONS[tech]} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

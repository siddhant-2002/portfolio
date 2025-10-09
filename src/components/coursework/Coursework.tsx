import React from 'react';

// Add your coursework topics here
const COURSEWORK = [
  'Data Structures & Algorithms',
  'Object Oriented Programming',
  'Discrete Mathematics',
  'Computer Graphics',
  'Programming & Problem Solving',
  'Database Management System',
  'Computer Networking and Security',
  'My SQL',
];

// Marquee wrapper component
const Marquee: React.FC<{
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speedInSeconds?: number;
}> = ({ children, direction = 'left', speedInSeconds = 40 }) => {
  const animation = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className="relative overflow-hidden whitespace-nowrap w-full">
      <div
        className={`flex gap-4 ${animation}`}
        style={{ animationDuration: `${speedInSeconds}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

// Chip-style coursework card
const CourseCard: React.FC<{ label: string }> = ({ label }) => (
  <div className="px-6 py-3 text-white bg-[#1E1E1E] rounded-xl border border-gray-700 shadow-md hover:shadow-indigo-500/20 text-sm sm:text-base">
    {label}
  </div>
);

// Main Coursework marquee component
const Coursework: React.FC = () => {
  return (
    <div className="bg-[#0B0B0F] py-16 text-center px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-wide">COURSEWORK</h2>

      <Marquee direction="left" speedInSeconds={50}>
        {COURSEWORK.map((course, index) => (
          <CourseCard key={index} label={course} />
        ))}
      </Marquee>
    </div>
  );
};

export default Coursework;

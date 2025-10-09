import React, { useState } from "react";

interface CommunityItem {
  role: string;
  organisation: string;
  startDate: string;
  endDate?: string;
  experiences: string[];
  imageSrc: string;
}

const COMMUNITY: CommunityItem[] = [
  {
    role: "Management Lead",
    organisation: "GOOGLE DSC SCOE ",
    startDate: "August 2023 - April 2024 | SCOE Pune",
    experiences: [
      "I led workshops and events on machine learning, web development, and cloud computing.",
      "I have collaborated with a development team to create full-stack web development projects.",
    ],
    imageSrc: "gdsc.png",
  },
  {
    role: "Electric guitarist",
    organisation: "SCOE ARTCIRCLE",
    startDate: "November 2022 - Present | SCOE Pune",
    experiences: [
      "Part of best music team in Firodiya Karandak 2022-23.",
      "Done 4 professional theater shows with the team of 33 people",
    ],
    imageSrc: "artcircle.jpg",
  },
  {
    role: "Prayas Volunteer",
    organisation: "Prayas Youth Forum",
    startDate: "Nov 2023 - present | SCOE Pune",
    experiences: [
      "During the annual camp organized by PYF, we visited a village to teach children about computer literacy, personality development, and women empowerment.",
    ],
    imageSrc: "prayas3.jpg",
  },
];

const ChevronLeftIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Community: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClasses, setAnimationClasses] = useState(
    "opacity-100 transform-none"
  );

  const handleNavigate = (direction: "next" | "prev") => {
    setAnimationClasses("opacity-0 transform scale-95");
    setTimeout(() => {
      if (direction === "next") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % COMMUNITY.length);
      } else {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + COMMUNITY.length) % COMMUNITY.length
        );
      }
      setTimeout(() => {
        setAnimationClasses("opacity-100 transform scale-100");
      }, 50);
    }, 500);
  };

  const item = COMMUNITY[currentIndex];

  return (
    <main className=" flex flex-col items-center justify-center font-sans p-8 bg-black text-white">
      {/* Header */}
      <div className="w-full max-w-5xl mx-auto mb-8 flex flex-col items-start">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold leading-tight tracking-tighter"
          aria-label="Project Portfolio"
        >
          Community{" "}
          <span className="inline-block text-gray-400 mx-1">Engagement</span>
          <div className="pt-2">
            <div className="w-24 h-1 bg-gray-700 rounded-full mb-2" />
          </div>
        </h1>
      </div>
      {/* Card Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto">
  <div className="relative w-full md:w-7/12 p-8 md:p-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 rounded-2xl -translate-x-4 -translate-y-4"></div>
          <div
            className={`relative transition-all duration-500 ease-in-out ${animationClasses}`}
          >
            <img
              src={item.imageSrc}
              alt={item.organisation}
              className="rounded-2xl shadow-2xl object-cover w-full h-96 md:h-[450px]"
              style={{maxWidth: '600px'}}
            />
          </div>
        </div>
        <div className="w-full md:w-3/5 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl shadow-2xl p-8 md:p-12 md:-ml-8 relative z-10">
          <div
            className={`transition-all duration-500 ease-in-out ${animationClasses}`}
          >
            <h2 className="text-2xl font-bold text-white">{item.role}</h2>
            <p className="text-blue-200 mt-1 font-semibold">
              {item.organisation}
            </p>
            <p className="text-blue-100 mt-1 text-sm">{item.startDate}</p>
            <ul className="list-disc ml-5 mt-4 text-white text-base">
              {item.experiences.map((exp, idx) => (
                <li key={idx}>{exp}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center mt-8">
            <button
              onClick={() => handleNavigate("prev")}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-blue-400 text-white hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous community"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={() => handleNavigate("next")}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-blue-400 text-white hover:bg-white/10 transition-colors duration-300 ml-4 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next community"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Community;

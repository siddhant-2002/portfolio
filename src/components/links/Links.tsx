const DesignContainer: React.FC<{ title: string; children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ title, children, className = 'bg-black text-white', style }) => (
  <div style={style} className={`w-full flex flex-col items-center justify-center py-12 px-6 ${className}`}>
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-2">{title} <span className="text-gray-400">&amp; Profiles</span></h1>
      <div className="w-24 h-1 bg-gray-700 rounded-full mb-8" />
      {children}
    </div>
  </div>
);
const Links = () => {
  return (
    <DesignContainer title="Links">
      <div className=" flex flex-col items-center justify-center p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl">
        {/* Left column (LinkedIn + Codeforces stacked) */}
        <div className="flex flex-col gap-4 md:col-span-1">
          <a
            href="https://www.linkedin.com/in/sid-deshmukh/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500/20 hover:bg-blue-500/30 rounded-xl flex items-center justify-center gap-3 h-16 sm:h-20 transition-all duration-300 hover:scale-105 w-full"
          >
            <img
              src="/links/linkdin.png"
              alt="LinkedIn"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 object-contain"
            />
            <span className="text-white font-semibold text-sm md:text-base">
              LinkedIn
            </span>
          </a>

          <a
            href="https://codeforces.com/profile/sid_2002"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500/20 hover:bg-red-500/30 rounded-xl flex items-center justify-center gap-3 h-16 sm:h-20 transition-all duration-300 hover:scale-105 w-full"
          >
            <img
              src="/links/codeforces.png"
              alt="CodeForces"
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
            <span className="text-white font-semibold text-sm md:text-base">
              CodeForces
            </span>
          </a>
        </div>

        {/* Middle section (3 smaller cards in grid) */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          <a
            href="https://leetcode.com/u/sid_711/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500/20 hover:bg-yellow-500/30 rounded-xl flex items-center justify-center gap-3 h-16 sm:h-20 transition-all duration-300 hover:scale-105 w-full"
          >
            <img
              src="/links/leetcode.png"
              alt="LeetCode"
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
            <span className="text-white font-semibold text-sm md:text-base">
              LeetCode
            </span>
          </a>

          <a
            href="https://www.codechef.com/users/bug_711"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500/20 hover:bg-gray-500/30 rounded-xl flex items-center justify-center gap-3 h-16 sm:h-20 transition-all duration-300 hover:scale-105 w-full"
          >
            <img
              src="/links/codechef.png"
              alt="CodeChef"
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
            <span className="text-white font-semibold text-sm md:text-base">
              CodeChef
            </span>
          </a>

          <a
            href="https://www.naukri.com/code360/profile/siddeshmukh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500/20 hover:bg-orange-500/30 rounded-xl flex items-center justify-center gap-3 h-16 sm:h-20 transition-all duration-300 hover:scale-105 col-span-2 w-full"
          >
            <img
              src="/links/codingninja.png"
              alt="Coding Ninjas"
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
            <span className="text-white font-semibold text-sm md:text-base">
              Coding Ninjas
            </span>
          </a>
        </div>

        {/* Right GitHub box */}
        <div className="md:col-span-1 flex items-stretch justify-center">
          <a
            href="https://github.com/siddhant-2002"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 rounded-xl flex flex-col items-center justify-center gap-3 h-16 sm:h-20 md:h-full w-full transition-all duration-300 hover:scale-105"
          >
            <img
              src="/links/github%20(2).png"
              alt="GitHub"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <span className="text-white font-semibold text-sm md:text-base">
              GitHub
            </span>
          </a>
        </div>
      </div>
        </div>
    </DesignContainer>
  );
};

export default Links;

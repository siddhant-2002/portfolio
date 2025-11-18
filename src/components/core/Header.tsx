import { useState, useEffect } from 'react';

const Header = () => {
  // progress from 0 (top) to 1 (scrolled to bottom)
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calcProgress = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
      );
      const winH = window.innerHeight || document.documentElement.clientHeight;
      const scrollable = Math.max(docHeight - winH, 0);
      const prog = scrollable === 0 ? 1 : Math.min(1, Math.max(0, scrollY / scrollable));
      setScrollProgress(prog);
    };

    const onScroll = () => calcProgress();
    const onResize = () => calcProgress();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    // set initial
    calcProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className=" text-white w-full max-w-6xl mx-auto px-6 py-8 sm:px-8 md:px-12 fixed top-0 left-0 right-0 z-50">
      <div className="w-full mx-auto flex items-center justify-between">
        {/* Left side: Name and growing line */}
        <div className="flex items-center w-full min-w-0">
          <h1 className="text-[150%] font-light whitespace-nowrap tracking-wide">
            <a href="/" className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
              Siddhant<span className="hidden sm:inline"> Deshmukh</span>
            </a>
          </h1>
          <div
            className="flex-grow h-0.5 ml-4 sm:ml-6 mr-4 sm:mr-6 bg-gray-500 transition-transform duration-200 ease-out"
            style={{
              transform: `scaleX(${scrollProgress})`,
              transformOrigin: 'right',
            }}
          />
        </div>
        
        {/* Right side: Navigation */}
        <nav className="flex-shrink-0 ">
          <ul className="flex items-center space-x-4 sm:space-x-6 lg:space-x-10 text-base sm:text-lg font-medium tracking-wide ">
            <li className="hidden sm:block">
              <a href="/projects" className="text-gray-300 hover:text-white transition-colors duration-300">
                Work
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                About
              </a>
            </li>
            <li className="flex items-start">
              <a href="https://drive.google.com/drive/folders/1ceZ4Fe6iXk8Q0p3xWhRcD7nHfp67n9oo?usp=drive_link" className="text-gray-300 hover:text-white font-light text-xl  -mt-1 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
               Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

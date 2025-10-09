
// Removed framer-motion for consistency



const About = () => (
  <section className="bg-black text-white w-full flex items-center">
    <div className="w-full max-w-6xl mx-auto px-4 py-6 sm:px-8 sm:py-5 md:px-12 md:py-12 flex flex-col items-start justify-center gap-6 font-['Inter',_sans-serif]">
      
      {/* Divider and title */}
      <div className="w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-2" aria-label="About Me">
          About <span className="inline-block text-gray-400 mx-1">Me</span>
        </h1>
        <div className="w-24 h-1 bg-gray-700 rounded-full mb-6" />
        <p className="text-gray-500 text-sm mb-6">Software Engineer • Web Architect</p>
      </div>

      {/* About text */}
      <div className="w-full">
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          I'm a passionate Software Engineer who loves exploring, building, and problem-solving. With experience across full-stack development, I've created projects that are both impactful and innovative, ranging from web platforms to dashboards and interactive applications. My expertise spans React, Node.js, and building scalable web solutions, and I enjoy crafting clean, efficient, and maintainable code.
        </p>
        


        <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-6">
          Beyond coding, I'm curious and driven—always exploring new ideas, learning cutting-edge technologies, and taking on challenges that push me to grow. From experimenting with new design patterns to building full-stack projects and optimizing user experiences, I thrive in environments where I can innovate and make a real impact. Collaboration, continuous learning, and creating meaningful products are at the heart of how I work.
        </p>
      </div>
    </div>
  </section>
);

export default About;
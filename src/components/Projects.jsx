import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLock } from 'react-icons/fa';
import projectData from '../data/ProjectData.js';
// 💀 Skeleton Loader Component
const ProjectSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {[1, 2, 3, 4].map((n) => (
        <div 
          key={n} 
          className="bg-[#121212] border border-slate-800 p-6 rounded-2xl animate-pulse flex flex-col justify-between h-[380px]"
        >
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="w-12 h-12 bg-slate-800/80 rounded-xl"></div>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-slate-800/80 rounded-full"></div>
                <div className="w-6 h-6 bg-slate-800/80 rounded-full"></div>
              </div>
            </div>
            <div className="h-7 bg-slate-800 rounded-md w-3/4 mb-3"></div>
            <div className="h-4 bg-slate-800/60 rounded-md w-full mb-2"></div>
            <div className="h-4 bg-slate-800/60 rounded-md w-5/6 mb-2"></div>
            <div className="h-4 bg-slate-800/60 rounded-md w-2/3 mb-6"></div>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-slate-800/60 pt-4">
            <div className="w-16 h-6 bg-slate-800/80 rounded-md"></div>
            <div className="w-20 h-6 bg-slate-800/80 rounded-md"></div>
            <div className="w-14 h-6 bg-slate-800/80 rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ✂️ Smart Description Truncate Component
const DescriptionText = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Agar description limit se chhoti hai toh direct show kar do
  if (text.length <= maxLength) {
    return <p className="text-slate-400 text-sm leading-relaxed mb-6">{text}</p>;
  }

  return (
    <div className="mb-6">
  <p className="text-slate-400 text-sm leading-relaxed inline">
    {isExpanded ? text : `${text.slice(0, maxLength)}... `}
  </p>
  <button
    onClick={() => setIsExpanded(!isExpanded)}
    className="text-xs font-mono text-blue-400 hover:text-blue-300 ml-1 underline focus:outline-none cursor-pointer"
  >
    {isExpanded ? 'Show Less' : 'Read More'}
  </button>
</div>
  );
};

// 💻 Main Projects Component
const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] text-white px-6 lg:px-20 border-t border-slate-800/60 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-mono tracking-[0.2em] mb-3 text-sm uppercase">My Work</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Featured <span>Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Dynamic Skeleton vs Cards */}
        {loading ? (
          <ProjectSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#121212] border border-slate-800/80 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Header Icons */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="p-3 bg-[#0a0a0a] rounded-xl border border-slate-800 text-blue-500 group-hover:scale-110 transition-transform">
                      <FaCode className="text-xl" />
                    </div>
                    
                    <div className="flex items-center gap-4 text-lg text-slate-400">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer" 
                          title="View GitHub Repository"
                          className="hover:text-white transition-colors"
                        >
                          <FaGithub />
                        </a>
                      )}

                      {project.link ? (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          title="Live Preview"
                          className="hover:text-blue-400 transition-colors"
                        >
                          <FaExternalLinkAlt className="text-base" />
                        </a>
                      ) : (
                        <span title="Coming Soon / In Development" className="text-slate-600 cursor-not-allowed">
                          <FaLock className="text-base" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* ✂️ Smart Description with Read More / Show Less */}
                  <DescriptionText text={project.description} maxLength={100} />
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60 mt-auto">
                  {project.tech.map((techItem, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
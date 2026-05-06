import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import ProjectData from "../data/ProjectData";
const Projects = () => {
  
  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] px-6 lg:px-20 border-t border-white/5">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono text-blue-500 tracking-[0.3em] uppercase mb-2 lg:text-center">Portfolio</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-white lg: text-center">FEATURED PROJECTS</h3>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectData.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#141414] border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-300"
            >
              <div>
                {/* Icons */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-blue-600/10 rounded-2xl text-blue-500">
                    <a href={project.github} target='_blank' rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                        <FiGithub size={24} />
                    </a>
                  </div>
                  <a href={project.link} target='_blank'rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                    <FiExternalLink size={24} />
                  </a>
                </div>

                {/* Project Title & Simple English Description */}
                <h4 className="text-2xl font-black text-white mb-4 italic leading-tight">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
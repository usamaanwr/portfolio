import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projectData = [
    {
      title: "Inventory Management System",
      description: "A professional system to manage stock, track items, and handle inventory logic efficiently.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      title: "Property Management Portal",
      description: "A full-stack solution for managing properties, including user authentication and real-time updates.",
      tech: ["Next.js", "Node.js", "Express", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "YouTube Backend System",
      description: "A robust backend project involving user registration, secure login, and video history tracking.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] px-6 lg:px-20 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-sm font-mono text-blue-500 tracking-[0.3em] uppercase mb-2 text-center lg:text-left">Portfolio</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-white italic text-center lg:text-left">FEATURED PROJECTS</h3>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#141414] border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-300"
            >
              <div>
                {/* Icons */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-blue-600/10 rounded-2xl text-blue-500">
                    <FiGithub size={24} />
                  </div>
                  <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
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
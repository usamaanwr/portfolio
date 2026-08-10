import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

export const Education = () => {
  const eduData = [
    { 
      degree: "BS Computer Science", 
      institute: "Virtual University of Pakistan", 
      year: "2026 - Present",
      status: "In Progress"
    },
    { 
      degree: "Full Stack MERN Development", 
      institute: "Saylani Mass IT Training (SMIT)", 
      year: "2026",
      status: "Completed"
    },
    { 
      degree: "Intermediate (Pre-Engineering)", 
      institute: "Ziauddin Examination Board", 
      year: "2023",
      status: "Completed"
    },
    { 
      degree: "Matriculation (Science)", 
      institute: "Board of Secondary Education Karachi", 
      year: "2018",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-24 bg-[#0a0a0a] text-white px-6 lg:px-20 border-t border-slate-800/60 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-mono tracking-[0.2em] mb-3 text-sm uppercase">Academic Background</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Education <span>& Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {eduData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#121212] border border-slate-800/80 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Bar: Icon + Year Badge */}
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-[#0a0a0a] rounded-xl border border-slate-800 text-blue-500 group-hover:scale-110 transition-transform">
                  <FaGraduationCap className="text-2xl" />
                </div>
                
                <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
                  item.status === "In Progress" 
                    ? "bg-blue-500/10 text-blue-400 border-blue-500/30 animate-pulse" 
                    : "bg-slate-800/50 text-slate-400 border-slate-700/60"
                }`}>
                  {item.year}
                </span>
              </div>

              {/* Title & Institute */}
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.degree}
                </h3>
                
                <p className="text-slate-400 text-sm mt-2 flex items-center gap-2">
                  <FaUniversity className="text-slate-500 text-xs flex-shrink-0" />
                  <span>{item.institute}</span>
                </p>
              </div>

              {/* Bottom Subtle Gradient Accent Line */}
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mt-6 group-hover:via-blue-500/60 transition-all"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
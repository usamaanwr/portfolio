import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // MERN Stack Skills with percentage
  const skillList = [
    { name: "HTML / CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React.js", level: "80%" },
    { name: "Next.js", level: "65%" },
    { name: "Node.js / Express", level: "75%" },
    { name: "MongoDB", level: "80%" },
    { name: "Tailwind CSS", level: "90%" },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] px-6 lg:px-20 border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-mono text-blue-500 tracking-[0.3em] uppercase mb-2">Expertise</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-white italic">TECHNICAL SKILLS</h3>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skillList.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white font-bold tracking-wide uppercase text-sm">{skill.name}</span>
                <span className="text-slate-500 font-mono text-xs">{skill.level}</span>
              </div>
              
              {/* Range Track */}
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                {/* Animated Fill */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Extra Info Box with Shadow Hover */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="mt-20 p-8 bg-[#141414] border border-white/5 rounded-[2rem] shadow-xl hover:shadow-blue-500/5 transition-all text-center"
        >
          <p className="text-slate-400">
            Specializing in building full-cycle applications with 
            <span className="text-white font-bold ml-1 text-nowrap">Centralized State Management (Redux)</span> 
            and <span className="text-white font-bold ml-1 text-nowrap">Scalable Backend Logic</span>.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
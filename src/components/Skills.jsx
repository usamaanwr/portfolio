import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiPrisma, 
  SiTailwindcss, 
  SiHtml5 
} from 'react-icons/si';

const Skills = () => {
  // Skill Categories with Icons and Progress Levels
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "JavaScript (ES6+)", level: "85%", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", level: "75%", icon: <SiTypescript className="text-blue-500" /> },
        { name: "React.js / Redux Toolkit", level: "85%", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", level: "70%", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS & HTML5", level: "90%", icon: <SiTailwindcss className="text-sky-400" /> },
      ]
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js / Express.js", level: "80%", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Prisma ORM", level: "80%", icon: <SiPrisma className="text-teal-300" /> },
        { name: "PostgreSQL", level: "75%", icon: <SiPostgresql className="text-blue-400" /> },
        { name: "MongoDB / Mongoose", level: "80%", icon: <SiMongodb className="text-emerald-500" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] text-white px-6 lg:px-20 border-t border-slate-800/60 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-mono tracking-[0.2em] mb-3 text-sm uppercase">Expertise</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Technical <span>Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {skillCategories.map((cat, catIndex) => (
            <div 
              key={catIndex} 
              className="bg-[#121212] border border-slate-800/80 p-8 rounded-2xl relative"
            >
              <h3 className="text-xl font-bold mb-8 text-white border-b border-slate-800/80 pb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                {cat.category}
              </h3>

              <div className="space-y-6">
                {cat.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-200 font-semibold tracking-wide flex items-center gap-2.5">
                        <span className="text-lg">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-blue-400 font-mono text-xs">{skill.level}</span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800/50">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Box */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="mt-12 p-8 bg-[#121212] border border-slate-800/80 rounded-2xl text-center max-w-4xl mx-auto hover:border-blue-500/40 transition-all duration-300"
        >
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Specializing in architecting full-stack applications with 
            <span className="text-white font-semibold mx-1">TypeScript</span>, 
            <span className="text-white font-semibold mx-1">Redux Toolkit</span> state management, and robust database layers using 
            <span className="text-white font-semibold mx-1">PostgreSQL + Prisma ORM</span> & 
            <span className="text-white font-semibold ml-1">MongoDB</span>.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
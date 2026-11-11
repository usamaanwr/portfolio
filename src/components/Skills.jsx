
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
  SiHtml5,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "React.js / Redux Toolkit", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS & HTML5", icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js / Express.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="text-teal-300" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
        { name: "MongoDB / Mongoose", icon: <SiMongodb className="text-emerald-500" /> },
      ],
    },
    {
      category: "Development Tools",
      skills: [
        {
          name: "Git",
          icon: <SiGit className="text-orange-500" />
        },
        {
          name: "GitHub",
          icon: <SiGithub className="text-white" />
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-orange-400" />
        },
      ],
    }
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#0a0a0a] text-white px-6 lg:px-20 border-t border-slate-800/60 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">

        <div className="text-center mb-16">
          <p className="text-blue-500 font-mono tracking-[0.2em] mb-3 text-sm uppercase">
            What I Work With
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Technical <span>Skills</span>
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#121212] border border-slate-800/80 p-6 rounded-2xl relative h-full hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300"            >
              <h3 className="text-xl font-bold mb-8 text-white border-b border-slate-800/80 pb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                {cat.category}
              </h3>

              <div className="space-y-6">
                {cat.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 min-h-[58px] rounded-lg bg-slate-900/40 border border-slate-800/50 hover:border-blue-500 hover:bg-blue-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-slate-200 font-semibold tracking-wide">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="mt-12 p-8 bg-[#121212] border border-slate-800/80 rounded-2xl text-center w-full mx-auto hover:border-blue-500/40 transition-all duration-300"        >
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Comfortable working across frontend and backend development,
            building responsive interfaces, REST APIs, authentication systems,
            and database-driven applications.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;

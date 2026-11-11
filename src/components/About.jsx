import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a] px-6 lg:px-20 border-t border-white/5">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        
        <p className="text-sm font-mono text-blue-500 tracking-[0.3em] uppercase mb-2">
          My Journey
        </p>

        <h3 className="text-4xl lg:text-5xl font-black text-white mb-8">
          MERN STACK DEVELOPER
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
      <p className="text-slate-400 text-lg leading-relaxed">
            I can work on both frontend and backend development, from creating
            responsive user interfaces to building REST APIs, handling
            authentication, and managing databases.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed">
            I have applied these skills in my own development projects,
            working on different features and connecting frontend interfaces
            with backend functionality. I focus on writing clean code,
            building responsive layouts, and making sure applications
            work as expected.
          </p>

           <p className="text-slate-400 text-lg leading-relaxed">
            I'm looking for opportunities where I can use my development
            skills, contribute to a team, and work on real-world web applications.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
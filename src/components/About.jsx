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
            I am a <span className="text-white font-bold">MERN Stack Developer</span> who has spent the last 15 months deeply focused on learning how to build modern web applications. My daily routine involves working with MongoDB, Express.js, React, and Node.js to understand the full lifecycle of a project.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed">
            Right now, my main goal is to transition into the professional industry. I have spent a lot of time practicing and sharpening my coding skills, and I am now ready to take on real-world challenges where I can contribute and keep growing as a developer.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
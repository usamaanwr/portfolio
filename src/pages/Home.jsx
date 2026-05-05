import React from 'react';
import { motion } from 'framer-motion';
import About from '../componenst/About';
import { Education } from '../componenst/Education';
import Skills from '../componenst/Skills';
import Projects from '../componenst/Projects';
import Contact from '../componenst/Contact';
import Footer from '../componenst/Footer';

const Hero = () => {
  return (
    <>
    <section id="home" className="min-h-screen flex items-center bg-[#0a0a0a] px-6 lg:px-20 relative overflow-hidden">
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Side: Compact & Clean Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 font-mono tracking-[0.2em] mb-4 text-sm">I AM OSAMA</p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
            MERN Stack <br /> 
            <span className="text-slate-500">Developer</span>
          </h1>
          <p className="text-slate-400 text-base max-w-sm mb-10 leading-relaxed">
            Aspiring developer focusing on full-stack web applications. Specializing in React, Node.js, and MongoDB.
          </p>

          <div className="flex items-center gap-5">
            <a 
              href="src\assets\Muhammad Osama.pdf" 
              download="Muhammad Osama.pdf"
              className="btn bg-white hover:bg-slate-200 text-black border-none px-10 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Side: Circle Image with Glow Border */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* The Outer Glow Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-white/20 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            
            {/* The Image Container */}
            <div className="relative w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-2 border-white/10">
              <img 
                src="src/assets/osama.png" // Apni pic ka link yahan lagayein
                alt="Osama"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>

            {/* Extra Glow Element behind the circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 blur-[80px] rounded-full -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
    <section id='about'>
<About/>
    </section>
    <section id='education'>
<Education/>
    </section>
   
    <section id='skills'>
<Skills/>
    </section>

    <section id='projects'>
<Projects/>
    </section>
    <section id='contact'>
<Contact/>
    </section>
    <section id='home'>
<Footer/>
    </section>
    </>
  );
};

export default Hero;
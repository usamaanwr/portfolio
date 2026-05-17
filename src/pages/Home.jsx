import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import { Education } from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Hero = () => {
  return (
    <>
      <section id="home" className="min-h-screen flex items-center bg-[#0a0a0a] px-6 lg:px-20 relative overflow-hidden">

<div className="container max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row gap-16 items-center justify-between z-10 w-full">
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
Full-Stack Web Developer building modern web applications, specializing in React, Next.js, Node.js, and MongoDB.            </p>

            <div className="flex items-center gap-4">
              <a
                href="/assets/Muhammad-Osama (2).pdf"
                download="Muhammad-Osama (2).pdf"
                className="btn bg-white hover:bg-slate-200 mb-10 text-black border-none px-10 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Side: Circle Image with Glow Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative flex items-center justify-center w-[300px] h-[300px] lg:w-[340px] lg:h-[340px]">

              {/* ── SVG Rings + Dots ── */}
              <svg
                className="absolute inset-0 w-full h-full overflow-visible"
                viewBox="0 0 300 300"
              >
                <defs>
                  <linearGradient id="ring1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="ring2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                  <clipPath id="circleClip">
                    <circle cx="150" cy="150" r="118" />
                  </clipPath>
                </defs>

                {/* Outer faint ring */}
                <circle cx="150" cy="150" r="138" fill="none" stroke="url(#ring2)" strokeWidth="1" />

                {/* Dashed ring */}
                <circle
                  cx="150" cy="150" r="128"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />

                {/* Main spinning arc */}
                <circle
                  cx="150" cy="150" r="122"
                  fill="none"
                  stroke="url(#ring1)"
                  strokeWidth="3"
                  strokeDasharray="220 999"
                  strokeLinecap="round"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 150 150"
                    to="360 150 150"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Secondary faint arc */}
                <circle
                  cx="150" cy="150" r="122"
                  fill="none"
                  stroke="url(#ring1)"
                  strokeWidth="3"
                  strokeDasharray="80 999"
                  strokeLinecap="round"
                  opacity="0.35"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="180 150 150"
                    to="540 150 150"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Dark circle bg behind image */}
                <circle cx="150" cy="150" r="118" fill="#0a0a0a" />

                {/* Profile Image */}
                <image
                  href="/assets/osama.png"
                  x="32" y="32"
                  width="236" height="236"
                  clipPath="url(#circleClip)"
                  preserveAspectRatio="xMidYMid slice"
                />

                {/* Floating dots */}
                <circle cx="26" cy="80" r="3" fill="#3b82f6" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="274" cy="200" r="2.5" fill="#8b5cf6" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="60" cy="240" r="2" fill="#06b6d4" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="60" r="2" fill="#3b82f6" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3.5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='education'>
        <Education />
      </section>

      <section id='skills'>
        <Skills />
      </section>

      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <section id='home'>
        <Footer />
      </section>
    </>
  );
};

export default Hero;
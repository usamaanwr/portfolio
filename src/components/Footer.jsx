import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white py-12 px-6 lg:px-20 border-t border-slate-800/60 relative overflow-hidden">
      
      {/* Background Ambient Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          {/* Brand Name & Role */}
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">
              OSAMA<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-xs font-mono mt-1">
              Full-Stack Web Developer (MERN)
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a 
              href="https://github.com/usamaanwr" 
              target="_blank" 
              rel="noreferrer" 
              title="GitHub"
              className="p-3 bg-[#121212] border border-slate-800/80 rounded-xl text-slate-400 hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <FiGithub size={18} />
            </a>

            <a 
              href="https://www.linkedin.com/in/muhammad-osama-125213292/" 
              target="_blank" 
              rel="noreferrer" 
              title="LinkedIn"
              className="p-3 bg-[#121212] border border-slate-800/80 rounded-xl text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <FiLinkedin size={18} />
            </a>

            <a 
              href="https://x.com/UsamaAnweru98" 
              target="_blank" 
              rel="noreferrer" 
              title="Twitter (X)"
              className="p-3 bg-[#121212] border border-slate-800/80 rounded-xl text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <FiTwitter size={18} />
            </a>

            <a 
              href="https://www.instagram.com/usamasheikh7208/?hl=en" 
              target="_blank" 
              rel="noreferrer" 
              title="Instagram"
              className="p-3 bg-[#121212] border border-slate-800/80 rounded-xl text-slate-400 hover:text-pink-400 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <FiInstagram size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-slate-500 text-xs font-mono">
            &copy; {currentYear} Designed & Built by <span className="text-slate-300 font-bold">Osama</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
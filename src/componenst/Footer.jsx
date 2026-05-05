import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5 px-6 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-white italic tracking-tighter">
              OSAMA<span className="text-blue-600">.</span>
            </h2>
            <p className="text-slate-500 text-sm mt-2 font-medium">
              MERN Stack Developer & Designer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 hover:-translate-y-1 transition-all duration-300">
              <FiLinkedin size={20} />
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300">
              <FiTwitter size={20} />
            </a>
            <a href="https://instagram.com/your-username" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 hover:-translate-y-1 transition-all duration-300">
              <FiInstagram size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-slate-600 text-xs font-mono tracking-widest uppercase">
            &copy; {currentYear} All Rights Reserved
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
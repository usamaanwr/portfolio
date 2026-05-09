import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50 px-4 lg:px-8 border-b border-white/5">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-white  tracking-tighter">
              OSAMA<span className="text-blue-600">.</span>
            </h2>
            <p className="text-slate-500 text-sm mt-2 font-medium">
              MERN Stack Developer & Designer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="https://github.com/usamaanwr" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-osama-125213292/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 hover:-translate-y-1 transition-all duration-300">
              <FiLinkedin size={20} />
            </a>
            <a href="https://x.com/UsamaAnweru98" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300">
              <FiTwitter size={20} />
            </a>
            <a href="https://www.instagram.com/usamasheikh7208/?hl=en" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 hover:-translate-y-1 transition-all duration-300">
              <FiInstagram size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-slate-600 text-xs font-mono tracking-widest uppercase">
            &copy; {currentYear} Designed & Built by Osama.
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
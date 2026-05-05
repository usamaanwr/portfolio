import React from 'react';

function Navbar() {
  return (
    // "fixed" aur "backdrop-blur" se navbar premium lagega scroll ke waqt
    <div className="navbar bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50 px-4 lg:px-8 border-b border-white/5">
      
      {/* Start: Logo Section */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          {/* Mobile Menu */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#141414] rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl border border-white/10 text-slate-300">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
        
        {/* Aapka Naam */}
        <a href="#home" className="btn btn-ghost text-xl font-bold tracking-tighter text-white">
          OSAMA<span className="text-blue-500">.</span>
        </a>
      </div>

      {/* Center: Desktop Navigation (IDs connected) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-2 text-slate-400">
          <li><a href="#home" className="hover:text-white transition">Home</a></li>
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#education" className="hover:text-white transition">Education</a></li>
          <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
        </ul>
      </div>

      {/* End: Action Button (Let's Talk) */}
      <div className="navbar-end">
        <a 
          href="#contact" 
          className="btn bg-white hover:bg-slate-200 text-black border-none rounded-full px-8 font-bold transition-all shadow-lg shadow-white/5"
        >
          Let's Talk
        </a>
      </div>
    </div>
  );
}

export default Navbar;
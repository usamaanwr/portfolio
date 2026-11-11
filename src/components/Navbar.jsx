
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaCode,
  FaFolder,
  FaEllipsisH,
  FaEnvelope,
  FaBriefcase,
} from 'react-icons/fa';

const mobileLinks = [
  { name: 'Home', href: '#home', icon: FaHome },
  { name: 'About', href: '#about', icon: FaUser },
  { name: 'Education', href: '#education', icon: FaGraduationCap },
  { name: 'Projects', href: '#projects', icon: FaFolder },
];

const moreLinks = [
  { name: 'Skills', href: '#skills', icon: FaCode },
  { name: 'Services', href: '#services', icon: FaBriefcase },
  { name: 'Contact', href: '#contact', icon: FaEnvelope },
];

function Navbar() {
  const [active, setActive] = useState('home');

  // Detect active section while scrolling
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'education',
      'skills',
      'projects',
      'services',
      'contact',
    ];

    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight * 0.35;

      let currentSection = 'home';

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= position) {
          currentSection = id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMoreActive = moreLinks.some(
    (item) => item.href.slice(1) === active
  );

  return (
    <>
      {/* Desktop Navbar */}
      <div className="sticky top-0 z-50 hidden lg:block bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="navbar max-w-6xl mx-auto px-6">

          <div className="navbar-start">
            <a
              href="#home"
              className="btn btn-ghost text-xl font-bold tracking-tighter text-white"
            >
              OSAMA<span className="text-blue-500">.</span>
            </a>
          </div>

          <div className="navbar-center">
            <ul className="menu menu-horizontal px-1 font-medium gap-2 text-slate-400">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#education" className="hover:text-white transition">Education</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
            </ul>
          </div>

          <div className="navbar-end">
            <a
              href="#contact"
              className="btn bg-white hover:bg-slate-200 text-black border-none rounded-full px-8 font-bold transition-all shadow-lg shadow-white/5"
            >
              Let's Talk
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Top Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/5 px-5 py-4">
        <a
          href="#home"
          onClick={() => setActive('home')}
          className="text-xl font-bold tracking-tighter text-white"
        >
          OSAMA<span className="text-blue-500">.</span>
        </a>

        <a
          href="#contact"
          className="float-right text-xs font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          Let's Talk
        </a>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-[#101014]/90 backdrop-blur-2xl border-t border-white/10 px-2 pt-2 pb-[max(8px,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.25)]">

        <div className="flex items-center justify-around max-w-lg mx-auto">

          {mobileLinks.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.href.slice(1);

            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.href.slice(1))}
                whileTap={{ scale: 0.9 }}
                className={`relative flex flex-col items-center justify-center gap-1 min-w-0 flex-1 py-2 rounded-xl transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-slate-400 hover:text-white'
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-mobile-tab"
                    className="absolute inset-0 rounded-xl bg-blue-500/10 border border-blue-400/10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}

                <motion.span
                  className="relative z-10 text-lg"
                  animate={{ y: isActive ? -2 : 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon />
                </motion.span>

                <span className="relative z-10 text-[10px] font-semibold">
                  {item.name}
                </span>
              </motion.a>
            );
          })}

          {/* More Menu */}
          <div className="dropdown dropdown-top dropdown-end flex-1">

            <motion.div
              tabIndex={0}
              role="button"
              whileTap={{ scale: 0.9 }}
              className={`relative flex flex-col items-center justify-center gap-1 py-2 rounded-xl cursor-pointer transition-colors duration-300 ${isMoreActive ? 'text-blue-400' : 'text-slate-400 hover:text-white'
                }`}
            >
              {isMoreActive && (
                <span className="absolute inset-0 rounded-xl bg-blue-500/10 border border-blue-400/10" />
              )}

              <motion.span
                className="relative z-10 text-lg"
                animate={{ rotate: isMoreActive ? 90 : 0 }}
              >
                <FaEllipsisH />
              </motion.span>

              <span className="relative z-10 text-[10px] font-semibold">
                More
              </span>
            </motion.div>

            <ul
              tabIndex={0}
              className="dropdown-content menu mb-4 w-48 rounded-2xl bg-[#18181d]/95 backdrop-blur-2xl border border-white/10 p-2 shadow-2xl text-slate-300"
            >
              {moreLinks.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.href.slice(1);

                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setActive(item.href.slice(1))}
                      className={`flex items-center gap-3 py-3 rounded-xl transition-colors ${isActive
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'hover:bg-white/5 hover:text-white'
                        }`}
                    >
                      <Icon className="text-blue-400" />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

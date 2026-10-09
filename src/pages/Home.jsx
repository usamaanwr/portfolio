import React from 'react';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import About from '../components/About';


export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <Hero />
      <About/>
      <Education />
      <Skills />
      <Projects/>
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a] px-6 lg:px-20 border-t border-white/5">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-black text-white mb-8 italic uppercase tracking-tighter">About My Journey</h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-6">
          I am a dedicated <span className="text-white font-bold">MERN Stack Developer</span> who has spent the last 8 months mastering the art of building scalable web applications. My focus is on creating seamless connections between the frontend and backend.
        </p>
        <p className="text-slate-400 text-lg leading-relaxed">
          I have hands-on experience developing complex logic like an <span className="text-white font-semibold">Inventory Management System</span> and a full-featured <span className="text-white font-semibold">Property Management System</span> using React, Node.js, and MongoDB.
        </p>
      </div>
    </section>
  );
};

export default About;
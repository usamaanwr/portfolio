import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaLayerGroup, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

// 🚨 YAHAN APNA BUSINESS WHATSAPP NUMBER DALO (Without '+' or spaces, e.g., "923001234567")
const BUSINESS_WHATSAPP_NUMBER = "923000000000";

const servicesData = [
    {
        id: 'web-dev',
        icon: <FaCode className="text-3xl text-blue-500" />,
        title: "Full-Stack Web Apps",
        tagline: "React / Next.js + Node.js",
        description: "Custom web applications built for speed, security, and scalability. From admin dashboards to complex business tools.",
        features: ["Custom UI/UX", "API Integration", "Database Architecture"]
    },
    {
        id: 'erp-system',
        icon: <FaServer className="text-3xl text-purple-500" />,
        title: "ERP & Inventory Systems",
        tagline: "Operations & Automation",
        description: "Tailored internal tools to manage inventory, track operations, and automate repetitive business workflows.",
        features: ["Real-time Tracking", "Role-based Access", "Data Reconciliation"]
    },
    {
        id: 'backend-api',
        icon: <FaDatabase className="text-3xl text-cyan-500" />,
        title: "Backend & Database Logic",
        tagline: "MongoDB / PostgreSQL + JWT",
        description: "Robust REST APIs, secure user authentication, optimized database schemas, and fast server-side logic.",
        features: ["JWT Auth", "Scalable Schemas", "Optimized Queries"]
    },
    {
        id: 'ui-frontend',
        icon: <FaLayerGroup className="text-3xl text-emerald-500" />,
        title: "Modern Frontend Engineering",
        tagline: "Tailwind CSS + Dynamic UI",
        description: "Converting modern designs or ideas into responsive, pixel-perfect, interactive frontend interfaces.",
        features: ["Mobile Responsive", "Clean Code", "Interactive Animations"]
    }
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(servicesData[0]);
    const [budget, setBudget] = useState('Flexible / To discuss');

    // Direct Business WhatsApp Link Generator
    const handleWhatsAppOrder = () => {

        const BussineswhatsappNumber = "923463527828"
        const text = `Hi Osama! I checked your portfolio website and I am interested in: *${selectedService.title}*.\nTarget Budget: *${budget}*.\nLet's discuss my project details.`;
        window.open(`https://wa.me/${BussineswhatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <section id="services" className="py-24 bg-[#0a0a0a] text-white px-6 lg:px-20 border-t border-slate-800/60 relative overflow-hidden">

            {/* Background Glow Effects */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto z-10 relative">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <p className="text-blue-500 font-mono tracking-[0.2em] mb-3 text-sm uppercase">Interactive Solutions</p>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
                        Services <span>& Scope</span>
                    </h2>
                    <p className="text-slate-400 text-sm mt-3 max-w-md mx-auto">
                        Select a service below to customize your scope and initiate direct project discussion.
                    </p>
                </div>

                {/* Services Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {servicesData.map((service) => {
                        const isSelected = selectedService.id === service.id;
                        return (
                            <motion.div
                                key={service.id}
                                onClick={() => setSelectedService(service)}
                                whileHover={{ y: -4 }}
                                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative ${isSelected
                                        ? 'bg-[#141824] border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.2)]'
                                        : 'bg-[#121212] border-slate-800/80 hover:border-slate-700'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-[#0a0a0a] rounded-xl border border-slate-800">
                                        {service.icon}
                                    </div>
                                    {isSelected && (
                                        <span className="flex items-center gap-1.5 text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full font-mono">
                                            <FaCheckCircle className="text-xs" /> Selected
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                                <p className="text-xs font-mono text-slate-500 mb-3">{service.tagline}</p>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>

                                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                                    {service.features.map((feat, i) => (
                                        <span key={i} className="text-[11px] text-slate-400 bg-[#0a0a0a] px-2.5 py-1 rounded-md border border-slate-800">
                                            • {feat}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

              {/* 🚀 Interactive WhatsApp Project Brief Launcher */}
<motion.div
  layout
  className="bg-[#121212] p-8 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden shadow-xl"
>
  {/* Subtle Ambient Glow Effect */}
  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">

    {/* Left Brief Info */}
    <div className="lg:col-span-2">
      <span className="text-xs font-mono text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
        Direct WhatsApp Brief
      </span>
      
      <h3 className="text-2xl font-bold mt-3 text-white">
        Discuss <span className="text-blue-400">{selectedService.title}</span> Project
      </h3>
      
      <p className="text-slate-400 text-sm mt-2 leading-relaxed">
        Select a budget option below and click the icon to open a direct chat on WhatsApp with pre-filled details.
      </p>

      {/* Realistic Budget Options */}
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <span className="text-xs font-mono text-slate-400 mr-2">Est. Budget:</span>
        {['Basic ($50-$150)', 'Standard ($150-$300)', 'Custom / Discuss'].map((b) => (
          <button
            key={b}
            onClick={() => setBudget(b)}
            className={`text-xs px-4 py-2 rounded-full font-mono transition-all duration-200 ${
              budget === b
                ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)] font-bold'
                : 'bg-[#0a0a0a] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            {b}
          </button>
        ))}
      </div>
    </div>

    {/* Right Side: Sleek WhatsApp Icon-only Button */}
    <div className="flex justify-center lg:justify-end items-center">
      <button
        onClick={handleWhatsAppOrder}
        title="Chat on WhatsApp"
        className="relative group bg-[#25D366] hover:bg-[#20bd5a] text-black p-5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95 flex items-center justify-center"
      >
        <FaWhatsapp className="text-3xl text-black" />
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-20 group-hover:opacity-50 blur animate-pulse -z-10"></span>
      </button>
    </div>

  </div>
</motion.div>
            </div>
        </section>
    );
};

export default Services;
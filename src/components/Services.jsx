import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaLayerGroup, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

// Configurable Business WhatsApp Number
const WHATSAPP_NUMBER = "923463527828";

const servicesData = [
  {
    id: 'web-dev',
    icon: <FaCode className="text-3xl text-blue-500" />,
    title: "Full-Stack Web Apps",
    tagline: "React / Next.js + Node.js",
    description: "Custom web applications built for speed, security, and scalability. From admin dashboards to complex SaaS interfaces.",
    features: ["Custom UI/UX Architecture", "REST API Integration", "Database Design"]
  },
  {
    id: 'admin-tools',
    icon: <FaServer className="text-3xl text-purple-500" />,
    title: "Internal Tools & Dashboards",
    tagline: "Operations & Management",
    description: "Custom management systems to track inventory, manage user roles, and streamline internal business workflows.",
    features: ["Real-time Data Sync", "Role-based Access (RBAC)", "Custom Workflows"]
  },
  {
    id: 'backend-api',
    icon: <FaDatabase className="text-3xl text-cyan-500" />,
    title: "Backend & Database Architecture",
    tagline: "Node / Express / Supabase / MongoDB",
    description: "Robust REST APIs, secure user authentication systems, optimized database schemas, and clean server logic.",
    features: ["JWT / OAuth Auth", "Scalable Schemas", "Optimized DB Queries"]
  },
  {
    id: 'ui-frontend',
    icon: <FaLayerGroup className="text-3xl text-emerald-500" />,
    title: "Modern Frontend Systems",
    tagline: "Next.js + Tailwind CSS",
    description: "Translating complex product requirements or UI design into responsive, performant, and clean frontend components.",
    features: ["Mobile-first Responsive", "Clean Code Standards", "Interactive UI States"]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);
  const [scope, setScope] = useState('MVP / Basic Scope');

  const handleWhatsAppOrder = () => {
    const text = `Hi Osama! I checked your portfolio website and I am interested in discussing: *${selectedService.title}*.\nTarget Scope: *${scope}*.\nLet's connect regarding project requirements.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] text-white px-6 lg:px-20 border-t border-slate-800/60 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-mono tracking-[0.2em] mb-3 text-sm uppercase">Engineering Capabilities</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Services <span>& Solutions</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-md mx-auto">
            Select a service area below to initiate a direct technical or business discussion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {servicesData.map((service) => {
            const isSelected = selectedService.id === service.id;
            return (
              <motion.div
                key={service.id}
                onClick={() => setSelectedService(service)}
                whileHover={{ y: -4 }}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative ${
                  isSelected
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

        {/* Interactive Brief Launcher */}
        <motion.div
          layout
          className="bg-[#121212] p-8 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">

            <div className="lg:col-span-2">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Direct WhatsApp Brief
              </span>
              
              <h3 className="text-2xl font-bold mt-3 text-white">
                Discuss <span className="text-blue-400">{selectedService.title}</span> Scope
              </h3>
              
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Select an estimated scope level below to launch a direct WhatsApp project inquiry with pre-filled details.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <span className="text-xs font-mono text-slate-400 mr-2">Project Scope:</span>
                {['MVP / Basic Scope', 'Full-Scale Web App', 'Custom / Enterprise'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setScope(s)}
                    className={`text-xs px-4 py-2 rounded-full font-mono transition-all duration-200 ${
                      scope === s
                        ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)] font-bold'
                        : 'bg-[#0a0a0a] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

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
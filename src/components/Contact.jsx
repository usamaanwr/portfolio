import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiSend, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    // .trim() check
    if (formData.get('message').trim() === "") {
      setButtonText("Message cannot be empty! ❌");
      setTimeout(() => setButtonText("Send Message"), 2000);
      return;
    }

    setIsSending(true);
    setButtonText("Sending...");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setIsSending(false);
        setButtonText("Message Sent Successfully! ✅");
        e.target.reset();
        setTimeout(() => setButtonText("Send Message"), 3000);
      })
      .catch((error) => {
        console.error("Email error:", error);
        setIsSending(false);
        setButtonText("Error Sending Message! ❌");
        setTimeout(() => setButtonText("Send Message"), 3000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] text-white px-6 lg:px-20 border-t border-slate-800/60 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-mono tracking-[0.2em] mb-3 text-sm uppercase">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Let's <span>Connect</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <p className="text-slate-400 text-base lg:text-lg leading-relaxed">
              Have a project in mind, need a full-stack solution, or just want to discuss an opportunity? Feel free to reach out. I am always open to new projects!
            </p>

            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-center gap-5 group p-3 bg-[#121212] border border-slate-800/80 rounded-2xl hover:border-blue-500/40 transition-all duration-300">
                <div className="p-3 bg-[#0a0a0a] border border-slate-800 text-blue-500 rounded-xl group-hover:scale-110 transition-transform">
                  <FiMail className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Me</h4>
                  <a href="mailto:anweru98@gmail.com" className="text-white font-bold text-sm lg:text-base hover:text-blue-400 transition-colors">
                    anweru98@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 group p-4 bg-[#121212] border border-slate-800/80 rounded-2xl hover:border-blue-500/40 transition-all duration-300">
                <div className="p-3 bg-[#0a0a0a] border border-slate-800 text-blue-500 rounded-xl group-hover:scale-110 transition-transform">
                  <FiPhone className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Call / WhatsApp</h4>
                  <p className="text-white font-bold text-sm lg:text-base">
                    +92 307 2136203
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 group p-4 bg-[#121212] border border-slate-800/80 rounded-2xl hover:border-blue-500/40 transition-all duration-300">
                <div className="p-3 bg-[#0a0a0a] border border-slate-800 text-blue-500 rounded-xl group-hover:scale-110 transition-transform">
                  <FiMapPin className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location</h4>
                  <p className="text-white font-bold text-sm lg:text-base">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form 
              ref={form} 
              onSubmit={sendEmail} 
              className="bg-[#121212] border border-slate-800/80 p-8 lg:p-10 rounded-2xl shadow-xl space-y-6 relative overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    name='from_name' 
                    required 
                    className="w-full h-12 bg-[#0a0a0a] border border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl text-white px-4 text-sm transition-colors" 
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    name='from_email' 
                    required 
                    className="w-full h-12 bg-[#0a0a0a] border border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl text-white px-4 text-sm transition-colors" 
                  />
                </div>

              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Your Message</label>
                <textarea 
                  name='message'
                  required 
                  placeholder="Tell me about your project or requirement..." 
                  className="w-full h-32 bg-[#0a0a0a] border border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl text-white p-4 text-sm resize-none transition-colors"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSending}
                className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm tracking-wide transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed disabled:shadow-none"
              >
                {isSending ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>{buttonText}</span>
                    <FiSend className="text-base group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
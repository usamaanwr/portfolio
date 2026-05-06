import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import  emailjs  from '@emailjs/browser';
import { FiMail, FiPhone,  FiSend } from 'react-icons/fi';
import { Form } from 'react-router-dom';

const Contact = () => {
const form = useRef();
const sendEmail = (e)=>{
    e.preventDefault();
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    console.log(SERVICE_ID);
    
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    emailjs.sendForm(SERVICE_ID , TEMPLATE_ID , form.current , PUBLIC_KEY)
    
    .then((result)=>{
        console.log("Succces" , result.text);
        alert("Message sent successfully!")
        e.target.reset()
    }, (error)=>{
        console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
    })
}

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] px-6 lg:px-20 border-t border-white/5">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-sm font-mono text-blue-500 tracking-[0.3em] uppercase mb-2">Connect</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-white ">LET'S TALK</h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <p className="text-slate-400 text-lg leading-relaxed">
              Have a project in mind? Or just want to say hi? Feel free to reach out. I am always open to new opportunities!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-[#141414] border border-white/10 rounded-2xl text-blue-500 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">Email Me</h4>
                  <p className="text-slate-500" ><a href="mailto:anweru98@gmail.com" className="hover:text-blue-500 transition-colors">anweru98@gmail.com</a></p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-[#141414] border border-white/10 rounded-2xl text-blue-500 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">Call Me</h4>
                  <p className="text-slate-500">+92 307 2136203</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form ref={Form} onSubmit={sendEmail} className="bg-[#141414] border border-white/10 p-8 lg:p-10 rounded-[2.5rem] shadow-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label"><span className="label-text text-slate-400 font-bold uppercase text-[10px]">Your Name</span></label>
                  <input type="text" placeholder="Your Name" name='name' className="input bg-[#0a0a0a] border-white/5 focus:border-blue-600 focus:outline-none rounded-xl text-white w-full h-14" />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text text-slate-400 font-bold uppercase text-[10px]">Email Address</span></label>
                  <input type="email" placeholder="Your email" name='email' className="input bg-[#0a0a0a] border-white/5 focus:border-blue-600 focus:outline-none rounded-xl text-white w-full h-14" />
                </div>
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text text-slate-400 font-bold uppercase text-[10px]">Your Message</span></label>
                <textarea className="textarea bg-[#0a0a0a] border-white/5 focus:border-blue-600 focus:outline-none rounded-xl text-white w-full h-32 resize-none" placeholder="Tell me about your project..." name='message'></textarea>
              </div>

              <button className="btn bg-white hover:bg-slate-200 text-black border-none w-full h-14 rounded-xl font-black text-lg transition-all group">
                SEND MESSAGE
                <FiSend className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
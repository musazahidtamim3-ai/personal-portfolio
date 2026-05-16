"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Connect = () => {
     const [result, setResult] = useState("");
     const [isSubmitting, setIsSubmitting] = useState(false);

     const onSubmit = async (event) => {
          event.preventDefault();
          setIsSubmitting(true);
          setResult("Sending message...");

          const formData = new FormData(event.target);
          formData.append("access_key", "a9ae8e66-4bd2-4ec0-9e3b-8beb88e58ecc");

          try {
               const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
               });

               const data = await response.json();

               if (data.success) {
                    setResult("Message Sent Successfully! 🚀");
                    event.target.reset();
               } else {
                    console.log("Error", data);
                    setResult(data.message || "Something went wrong. Try again.");
               }
          } catch (error) {
               console.error("Form Submit Error:", error);
               setResult("Network error. Please try again later.");
          } finally {
               setIsSubmitting(false);
          }
     };

     return (
          <section id='contact' className='max-w-7xl mx-auto my-16 lg:my-32 px-6 lg:px-12 relative overflow-hidden bg-transparent'>

               {/* Global CSS Style for Border Rotation */}
               <style jsx global>{`
                    @keyframes border-rotate {
                         100% { transform: rotate(360deg); }
                    }
                    .animate-border-spin {
                         animation: border-rotate 6s linear infinite;
                    }
               `}</style>

               {/* Left-Bottom Ambient Glow Effect */}
               <div className='absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[#00F5D4]/5 rounded-full blur-[140px] pointer-events-none'></div>

               {/* Section Header */}
               <div className='text-left lg:text-center mb-12 lg:mb-16'>
                    <span className='inline-block text-[#00F5D4] font-semibold tracking-widest uppercase text-xs bg-[#00F5D4]/10 px-3 py-1.5 rounded-md border border-[#00F5D4]/20 mb-3'>
                         Contact Information
                    </span>
                    <h2 className='text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight'>
                         Let's Talk to <span className='bg-gradient-to-r from-[#00F5D4] to-[#0284c7] bg-clip-text text-transparent'>Work Together</span>
                    </h2>
               </div>

               {/* Animated Outer Frame Container */}
               <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className='max-w-3xl mx-auto group relative p-[1.5px] rounded-2xl overflow-hidden bg-slate-900/50 shadow-2xl'
               >
                    {/* CONTINUOUS ROTATING CYBER BORDER LIGHT */}
                    <div className='absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_40%,#00F5D4_60%,transparent_100%)] animate-border-spin pointer-events-none opacity-50 group-hover:opacity-90 transition-opacity duration-300'></div>

                    {/* Inside Contact Form Box */}
                    <form onSubmit={onSubmit} className='w-full h-full bg-slate-950/95 p-6 md:p-10 rounded-2xl relative z-10 flex flex-col'>

                         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                              {/* Name Input field */}
                              <div className="flex flex-col">
                                   <label className="text-slate-300 mb-2 text-sm font-semibold tracking-wide">Name</label>
                                   <input
                                        name="name"
                                        type="text"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl focus:outline-none focus:border-[#00F5D4] focus:bg-slate-900 text-slate-100 placeholder-slate-600 transition-all text-sm font-medium"
                                        placeholder="Enter your name..."
                                   />
                              </div>

                              {/* Email Input field */}
                              <div className="flex flex-col">
                                   <label className="text-slate-300 mb-2 text-sm font-semibold tracking-wide">Email Address</label>
                                   <input
                                        name="email"
                                        type="email"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl focus:outline-none focus:border-[#00F5D4] focus:bg-slate-900 text-slate-100 placeholder-slate-600 transition-all text-sm font-medium"
                                        placeholder="Enter your email..."
                                   />
                              </div>
                         </div>

                         {/* Message Textarea */}
                         <div className='mt-6 flex flex-col'>
                              <label className="text-slate-300 mb-2 text-sm font-semibold tracking-wide">Message</label>
                              <textarea
                                   name="message"
                                   required
                                   disabled={isSubmitting}
                                   className='w-full bg-slate-900/60 border border-slate-800 p-4 rounded-xl focus:outline-none focus:border-[#00F5D4] focus:bg-slate-900 text-slate-100 placeholder-slate-600 transition-all text-sm font-medium'
                                   rows={5}
                                   placeholder='Type your details here...'
                              ></textarea>
                         </div>

                         {/* Cyber Submit Button */}
                         <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-[#00F5D4] text-slate-950 font-bold py-3.5 mt-8 rounded-xl transition-all transform active:scale-[0.99] disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-sm uppercase tracking-wider hover:shadow-[0_0_25px_rgba(0,245,212,0.25)]"
                         >
                              {isSubmitting ? "Processing..." : "Submit Message"}
                         </button>

                         {/* Status Message Display */}
                         {result && (
                              <motion.p
                                   initial={{ opacity: 0, y: 5 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   className={`mt-5 text-center text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-lg bg-slate-900/80 border ${result.includes("Successfully")
                                        ? "text-[#00F5D4] border-[#00F5D4]/10"
                                        : "text-amber-400 border-amber-400/10"
                                        }`}
                              >
                                   {result}
                              </motion.p>
                         )}
                    </form>
               </motion.div>
          </section>
     );
};

export default Connect;
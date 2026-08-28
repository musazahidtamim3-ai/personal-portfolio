"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';

const Connect = () => {
     const { isDark } = useTheme();
     const [result, setResult] = useState("");
     const [isSubmitting, setIsSubmitting] = useState(false);

     const onSubmit = async (event) => {
          event.preventDefault();
          setIsSubmitting(true);
          setResult("Sending message...");

          const formData = new FormData(event.target);
          const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
          formData.append("access_key", apiKey);

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
                    console.error("Form Submission Error:", data);
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
          <section
               id='contact'
               className={`w-full py-16 lg:py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
                    }`}
          >

               {/* CSS Keyframe Animation for Border Spin */}
               <style>{`
                    @keyframes borderRotate {
                         100% { transform: rotate(360deg); }
                    }
                    .animate-border-spin {
                         animation: borderRotate 6s linear infinite;
                    }
               `}</style>

               {/* Ambient Glow Effect matching Theme */}
               <div className={`absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none ${isDark ? 'bg-purple-900/20' : 'bg-purple-200/50'
                    }`} />

               <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                    {/* Section Header */}
                    <div className='text-left lg:text-center mb-12 lg:mb-16 space-y-3'>
                         <span className={`inline-block font-semibold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full border shadow-sm transition-all ${isDark
                                   ? 'text-purple-400 bg-purple-500/10 border-purple-500/20'
                                   : 'text-purple-700 bg-purple-100 border-purple-200'
                              }`}>
                              Contact Information
                         </span>
                         <h2 className='text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight'>
                              Let's Talk to <span className='bg-gradient-to-r from-purple-500 to-indigo-500  bg-clip-text text-transparent'>Work Together</span>
                         </h2>
                    </div>

                    {/* Animated Outer Frame Container */}
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6, ease: "easeOut" }}
                         className={`max-w-3xl mx-auto group relative p-[1.5px] rounded-2xl overflow-hidden transition-all duration-300 shadow-xl ${isDark ? 'bg-slate-900/60' : 'bg-white'
                              }`}
                    >
                         {/* ROTATING BORDER LIGHT (Theme Dynamic) */}
                         <div className={`absolute inset-[-200%] animate-border-spin pointer-events-none transition-opacity duration-300 ${isDark
                                   ? 'bg-[conic-gradient(from_0deg,transparent_40%,#a855f7_60%,transparent_100%)] opacity-50 group-hover:opacity-90'
                                   : 'bg-[conic-gradient(from_0deg,transparent_40%,#9333ea_60%,transparent_100%)] opacity-30 group-hover:opacity-70'
                              }`} />

                         {/* Inside Contact Form Box */}
                         <form
                              onSubmit={onSubmit}
                              className={`w-full h-full p-6 md:p-10 rounded-2xl relative z-10 flex flex-col transition-colors duration-500 ${isDark ? 'bg-slate-950/95' : 'bg-white/95'
                                   }`}
                         >

                              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                   {/* Name Input field */}
                                   <div className="flex flex-col">
                                        <label htmlFor="name" className={`mb-2 text-sm font-semibold tracking-wide ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                             Name
                                        </label>
                                        <input
                                             id="name"
                                             name="name"
                                             type="text"
                                             required
                                             disabled={isSubmitting}
                                             className={`w-full p-3.5 rounded-xl border focus:outline-none transition-all text-sm font-medium disabled:opacity-50 ${isDark
                                                       ? 'bg-slate-900/60 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-purple-500 focus:bg-slate-900'
                                                       : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:bg-white'
                                                  }`}
                                             placeholder="Enter your name..."
                                        />
                                   </div>

                                   {/* Email Input field */}
                                   <div className="flex flex-col">
                                        <label htmlFor="email" className={`mb-2 text-sm font-semibold tracking-wide ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                             Email Address
                                        </label>
                                        <input
                                             id="email"
                                             name="email"
                                             type="email"
                                             required
                                             disabled={isSubmitting}
                                             className={`w-full p-3.5 rounded-xl border focus:outline-none transition-all text-sm font-medium disabled:opacity-50 ${isDark
                                                       ? 'bg-slate-900/60 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-purple-500 focus:bg-slate-900'
                                                       : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:bg-white'
                                                  }`}
                                             placeholder="Enter your email..."
                                        />
                                   </div>
                              </div>

                              {/* Message Textarea */}
                              <div className='mt-6 flex flex-col'>
                                   <label htmlFor="message" className={`mb-2 text-sm font-semibold tracking-wide ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                        Message
                                   </label>
                                   <textarea
                                        id="message"
                                        name="message"
                                        required
                                        disabled={isSubmitting}
                                        rows={5}
                                        className={`w-full p-4 rounded-xl border focus:outline-none transition-all text-sm font-medium disabled:opacity-50 ${isDark
                                                  ? 'bg-slate-900/60 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-purple-500 focus:bg-slate-900'
                                                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:bg-white'
                                             }`}
                                        placeholder='Type your details here...'
                                   />
                              </div>

                              {/* Submit Button */}
                              <button
                                   type="submit"
                                   disabled={isSubmitting}
                                   className="w-full bg-gradient-to-r from-purple-600 to-indigo-600  text-white font-bold py-3.5 mt-8 rounded-xl transition-all transform active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider shadow-lg hover:shadow-purple-500/25"
                              >
                                   {isSubmitting ? "Processing..." : "Submit Message"}
                              </button>

                              {/* Status Message Display */}
                              {result && (
                                   <motion.p
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`mt-5 text-center text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-lg border ${result.includes("Successfully")
                                                  ? isDark
                                                       ? "text-purple-400 bg-purple-500/10 border-purple-500/20"
                                                       : "text-purple-700 bg-purple-50 border-purple-200"
                                                  : "text-amber-500 bg-amber-500/10 border-amber-500/20"
                                             }`}
                                   >
                                        {result}
                                   </motion.p>
                              )}
                         </form>
                    </motion.div>

               </div>
          </section>
     );
};

export default Connect;
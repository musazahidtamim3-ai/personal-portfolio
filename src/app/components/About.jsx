"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegUser, FaMapMarkerAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

const About = () => {
     const { isDark } = useTheme();
     const [mounted, setMounted] = useState(false);

     useEffect(() => {
          setMounted(true);
     }, []);

     if (!mounted) return null;

     const leftInfo = [
          { icon: <FaRegUser />, label: 'Full Name', value: 'MD. Jahidul Islam' },
          { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Feni, Bangladesh' },
     ];

     const rightInfo = [
          { icon: <FaEnvelope />, label: 'Email', value: 'musazahidtamim3@gmail.com' },
          { icon: <FaGlobe />, label: 'Languages', value: 'English, Bangla' },
     ];

     return (
          <section
               id='about'
               className={`w-full px-2 lg:px-6 py-16 sm:py-24 transition-colors duration-300 relative overflow-hidden ${isDark ? 'bg-[#0a0a0f] text-slate-100' : 'bg-slate-50 text-slate-900'
                    }`}
          >
               {/* Ambient Glow */}
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] rounded-full blur-[130px] pointer-events-none z-0 ${isDark ? 'bg-purple-600/15' : 'bg-purple-400/20'
                    }`}></div>

               <div className='max-w-7xl mx-auto px-6 sm:px-8 relative z-10'>

                    {/* Section Header */}
                    <motion.div
                         initial={{ opacity: 0, y: 15 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.4 }}
                         className='text-center mb-8'
                    >
                         <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border ${isDark
                                   ? 'bg-purple-500/10 border-purple-500/30 text-purple-300'
                                   : 'bg-purple-100 border-purple-200 text-purple-700'
                              }`}>
                              About Me
                         </span>
                         <h2 className={`text-2xl lg:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                              Know This Man <span className='bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent'>Behind The Code</span>
                         </h2>
                    </motion.div>

                    {/* Expanded & Highlighted Story Content */}
                    <motion.div
                         initial={{ opacity: 0, y: 15 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.4, delay: 0.1 }}
                         className={` rounded-2xl text-sm sm:text-base leading-relaxed ${isDark ? ' text-slate-300' : ' text-slate-700'
                              }`}
                    >
                         <p className='text-justify sm:text-left space-y-4'>
                              Hello! I am <span className='font-bold text-purple-500 dark:text-purple-400'>MD. Jahidul Islam</span>, a dedicated web developer based in Feni, Bangladesh. Currently, I am studying in <span className='text-purple-500 font-bold'>computer science and technology</span> at Feni Polytechnic Institute. My programming journey began with a strong curiosity to understand how software applications and complex web platforms operate seamlessly behind the scenes. What started as basic experimentation with foundational coding concepts quickly turned into a genuine passion for creating scalable, modern web solutions.
                              <br /><br />
                              In my daily workflow, I specialize in <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>Full Stack Web Development</span>—building end-to-end applications that prioritize functionality and performant user experiences. I deeply enjoy diving into algorithmic logic through <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>Problem Solving</span>, as well as crafting clean, responsive, and aesthetically pleasing <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>UI/UX Designs</span>.
                              <br /><br />
                              As a professional, I define myself as a <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>curious learner</span>, an effective <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>team player</span>, a <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>fast learner</span>, and a highly <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>self-motivated engineer</span> who thrives on solving real-world technological challenges. When I am away from my code editor, I like to recharge my mind by <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>reading books</span>, <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>playing football</span>, and continuously <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>learning new technologies</span> to stay updated with industry trends.
                         </p>
                    </motion.div>

                    {/* 2-Column Split Information Card */}
                    <motion.div
                         initial={{ opacity: 0, y: 15 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.4, delay: 0.2 }}
                         className='mt-10'
                    >
                         <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 relative'>
                              {/* Divider Line */}
                              <div className={`hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] ${isDark ? 'bg-slate-800' : 'bg-slate-200'
                                   }`}></div>

                              {/* Left Column */}
                              <div className='space-y-4'>
                                   {leftInfo.map((item, idx) => (
                                        <div key={idx} className='flex items-center gap-3.5'>
                                             <div className={`p-2.5 rounded-xl border text-purple-500 ${isDark ? 'bg-purple-950/40 border-purple-500/30' : 'bg-purple-50 border-purple-200'
                                                  }`}>
                                                  {item.icon}
                                             </div>
                                             <div>
                                                  <p className={`text-[10px] uppercase font-bold tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</p>
                                                  <p className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item.value}</p>
                                             </div>
                                        </div>
                                   ))}
                              </div>

                              {/* Right Column */}
                              <div className='space-y-4 sm:pl-4'>
                                   {rightInfo.map((item, idx) => (
                                        <div key={idx} className='flex items-center gap-3.5'>
                                             <div className={`p-2.5 rounded-xl border text-purple-500 ${isDark ? 'bg-purple-950/40 border-purple-500/30' : 'bg-purple-50 border-purple-200'
                                                  }`}>
                                                  {item.icon}
                                             </div>
                                             <div>
                                                  <p className={`text-[10px] uppercase font-bold tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</p>
                                                  <p className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item.value}</p>
                                             </div>
                                        </div>
                                   ))}
                              </div>

                         </div>
                    </motion.div>

               </div>
          </section>
     );
};

export default About;
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

                         <p className="text-justify sm:text-left space-y-4">
                              Hello! I'm{" "}
                              <span className="font-bold text-purple-500">
                                   MD. Jahidul Islam
                              </span>
                              , a web developer from Feni, Bangladesh, with a background in <span className="font-semibold text-purple-500">
                                   Computer Science and Technology
                              </span> from Feni Polytechnic Institute.
                              My journey into web development started with curiosity about how
                              websites work, but it gradually grew into a passion for building
                              useful, interactive, and well-structured web applications.

                              <br /><br />

                              I primarily work with the <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                                   MERN Stack 
                              </span> and modern web technologies, including React, Next.js, TypeScript,
                              Node.js, Express.js, and MongoDB. Through hands-on projects, I've
                              explored REST APIs, authentication, database integration, and
                              responsive UI development. I enjoy turning ideas into working
                              products and learning how different parts of an application fit
                              together. I'm also exploring Prisma and PostgreSQL to broaden my
                              backend development skills.

                              <br /><br />

                              Beyond writing code, I believe in{" "}
                              <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                                   learning by building
                              </span>
                              , taking responsibility, and improving through feedback and mistakes.
                              I enjoy solving technical challenges, collaborating with others, and
                              finding practical solutions rather than simply making things work on
                              the surface. Currently, I'm continuing to strengthen my development
                              skills through hands-on work, web development training, and personal
                              projects, with the goal of becoming a{" "}
                              <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                                   well-rounded Full-Stack Developer
                              </span>
                              . Outside coding, I enjoy playing football or Cricket, spending time with friends,
                              and learning English to improve my communication skills.
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
'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/app/ThemeContext';

const EducationTimeline = () => {
     const { isDark } = useTheme();
     const [mounted, setMounted] = useState(false);

     useEffect(() => {
          setMounted(true);
     }, []);

     if (!mounted) return null;

     const educationData = [
          {
               id: 1,
               degree: "Diploma in Engineering",
               duration: "2022 - Present",
               description: "I am currently pursuing my Diploma in Engineering in Computer Science and Technology from Feni Polytechnic Institute. Throughout this journey, I have been deeply immersed in core engineering principles, software development methodologies, and hands-on technical projects. My academic focus consistently revolves around mastering modern web technologies, database management, and system analysis, while maintaining a strong track record in my coursework and technical labs.",
               result: "CGPA: 3.80/4.00"
          },
          {
               id: 2,
               degree: "Secondary School Certificate (SSC)",
               duration: "2020 - 2022",
               description: "I successfully completed my Secondary School Certificate from high school under the Science group. During these formative years, I developed a robust foundation in Mathematics, Physics, and analytical problem-solving. Achieving a perfect GPA was a testament to my dedication, and it was during this period that I discovered my passion for technology and engineering, which eventually led me to pursue my further studies in this field.",
               result: "GPA: 5.00/5.00"
          }
     ];

     // Framer Motion Animation Variants
     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1
               }
          }
     };

     const itemVariants = {
          hidden: { opacity: 0, x: -20 },
          visible: {
               opacity: 1,
               x: 0,
               transition: { duration: 0.6, ease: "easeOut" }
          }
     };

     return (
          <section id='education' className={`w-full py-16 lg:py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
               }`}>
               <div className='max-w-6xl mx-auto px-6 lg:px-12 relative z-10'>

                    {/* Ambient Background Glow */}
                    <div className={`absolute top-1/3 right-0 w-80 h-80 rounded-full blur-[130px] pointer-events-none ${isDark ? 'bg-purple-500/10' : 'bg-purple-300/20'
                         }`}></div>

                    {/* Section Header */}
                    <div className='text-left lg:text-center mb-12 lg:mb-16'>
                         <span className={`inline-block font-semibold tracking-widest uppercase text-xs px-3.5 py-1.5 rounded-lg border mb-3 ${isDark
                                   ? 'text-purple-400 bg-purple-500/10 border-purple-500/20'
                                   : 'text-purple-700 bg-purple-100 border-purple-200'
                              }`}>
                              Education
                         </span>
                         <h2 className={`text-3xl lg:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'
                              }`}>
                              My Educational <span className='bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent'>Qualification</span>
                         </h2>
                    </div>

                    {/* Glowing Timeline Axis */}
                    <div className={`relative mt-10 ml-3 md:ml-6 border-l-2 ${isDark ? 'border-slate-800' : 'border-slate-200'
                         } before:absolute before:inset-y-0 before:left-[-2px] before:w-[2px] before:bg-gradient-to-b before:from-purple-500 before:to-indigo-500`}>

                         {/* Staggered Container */}
                         <motion.div
                              variants={containerVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.1 }}
                         >
                              {educationData.map((edu) => (
                                   <motion.div
                                        key={edu.id}
                                        variants={itemVariants}
                                        whileHover={{ x: 4 }}
                                        className="mb-10 ml-6 relative group"
                                   >

                                        {/* ACTIVE PULSING TIMELINE DOT */}
                                        <div className="absolute -left-[31px] top-[26px] z-20 flex h-3 w-3 items-center justify-center">
                                             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75"></span>
                                             <span className={`relative inline-flex h-3 w-3 rounded-full bg-purple-500 border-2 ${isDark ? 'border-slate-950' : 'border-slate-50'
                                                  }`}></span>
                                        </div>

                                        {/* Content Card */}
                                        <div className={`relative p-[1px] rounded-2xl overflow-hidden transition-all duration-300 ${isDark ? 'bg-slate-900/60' : 'bg-slate-200/60'
                                             }`}>

                                             {/* Border Glow Effect */}
                                             <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/30 via-indigo-500/20 to-pink-500/30 opacity-40 group-hover:opacity-100 rounded-2xl pointer-events-none transition-opacity duration-300`}></div>

                                             {/* Inner Content Box */}
                                             <div className={`w-full h-full p-6 lg:p-8 rounded-2xl relative z-10 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white shadow-sm'
                                                  }`}>

                                                  {/* Card Hover Radial Glow */}
                                                  <div className='absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none'></div>

                                                  <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${isDark
                                                            ? 'text-purple-300 bg-purple-500/10 border-purple-500/20'
                                                            : 'text-purple-700 bg-purple-50 border-purple-200'
                                                       }`}>
                                                       {edu.duration}
                                                  </span>

                                                  <h3 className={`text-xl lg:text-2xl font-bold mt-4 tracking-tight transition-colors ${isDark ? 'text-slate-100 group-hover:text-white' : 'text-slate-800 group-hover:text-purple-950'
                                                       }`}>
                                                       {edu.degree}
                                                  </h3>

                                                  <p className={`text-sm lg:text-base mt-3 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'
                                                       }`}>
                                                       {edu.description}
                                                  </p>

                                                  <div className={`mt-5 inline-block text-xs font-bold px-3 py-1.5 rounded-full border transition-all duration-300 ${isDark
                                                            ? 'bg-slate-900 border-slate-800 text-purple-300 group-hover:border-purple-500/30'
                                                            : 'bg-purple-50 border-purple-200 text-purple-700 group-hover:border-purple-300'
                                                       }`}>
                                                       {edu.result}
                                                  </div>
                                             </div>
                                        </div>

                                   </motion.div>
                              ))}
                         </motion.div>

                    </div>
               </div>
          </section>
     );
};

export default EducationTimeline;
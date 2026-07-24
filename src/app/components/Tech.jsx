'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/app/ThemeContext';
import { DiMongodb, DiCss3, DiHtml5 } from 'react-icons/di';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiTypescript, SiPostman, SiFigma } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Tech = () => {
     const { isDark } = useTheme();

     // 2 Main Column Categories
     const skillCategories = [
          {
               category: "Frontend Development",
               skills: [
                    { name: 'HTML', icon: <DiHtml5 className="text-orange-500" />, percentage: 95 },
                    { name: 'CSS', icon: <DiCss3 className="text-blue-500" />, percentage: 90 },
                    { name: 'JavaScript', icon: <IoLogoJavascript className="text-yellow-400" />, percentage: 88 },
                    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, percentage: 75 },
                    { name: 'React', icon: <FaReact className="text-cyan-400" />, percentage: 90 },
                    { name: 'Next.js', icon: <RiNextjsFill />, percentage: 85 },
                    { name: 'Tailwind CSS', icon: <RiTailwindCssFill className="text-teal-400" />, percentage: 92 },
               ]
          },
          {
               category: "Backend & Tools",
               skills: [
                    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, percentage: 80 },
                    { name: 'Express.js', icon: <SiExpress />, percentage: 82 },
                    { name: 'MongoDB', icon: <DiMongodb className="text-emerald-500" />, percentage: 78 },
                    { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, percentage: 85 },
                    { name: 'GitHub', icon: <FaGithub />, percentage: 88 },
                    { name: 'VS Code', icon: <VscCode className="text-blue-500" />, percentage: 95 },
                    { name: 'Figma', icon: <SiFigma className="text-purple-400" />, percentage: 70 },
               ]
          }
     ];

     return (
          <section id='skills' className={`w-full py-16 lg:py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
               }`}>
               <div className='max-w-6xl mx-auto px-6 lg:px-12 relative z-10'>

                    {/* Ambient Background Glow */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[150px] pointer-events-none ${isDark ? 'bg-purple-500/10' : 'bg-purple-300/30'
                         }`} />

                    {/* Section Header */}
                    <div className='text-left lg:text-center mb-12 relative z-10'>
                         <motion.span
                              initial={{ opacity: 0, y: -10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className={`inline-block font-semibold tracking-widest uppercase text-xs px-3.5 py-1.5 rounded-lg border mb-3 ${isDark
                                        ? 'text-purple-400 bg-purple-500/10 border-purple-500/20'
                                        : 'text-purple-700 bg-purple-100 border-purple-200'
                                   }`}
                         >
                              Technical Stack
                         </motion.span>

                         <motion.h2
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className={`text-3xl lg:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'
                                   }`}
                         >
                              My Professional <span className='bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent'>Skills</span>
                         </motion.h2>
                    </div>

                    {/* 2 Grid Column Layout */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 items-start'>
                         {skillCategories.map((group, groupIdx) => (
                              <motion.div
                                   key={groupIdx}
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
                                   className={`rounded-2xl border p-6 sm:p-8 transition-all ${isDark
                                             ? 'bg-slate-900/60 border-slate-800/80 shadow-xl'
                                             : 'bg-white border-slate-200 shadow-sm'
                                        }`}
                              >
                                   {/* Card Header */}
                                   <div className='flex items-center gap-2.5 pb-4 mb-5 border-b border-slate-700/20'>
                                        <span className='w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 inline-block' />
                                        <h3 className={`text-xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                                             {group.category}
                                        </h3>
                                   </div>

                                   {/* Skills Table List */}
                                   <div className='space-y-4.5'>
                                        {group.skills.map((skill, index) => (
                                             <div key={index} className='space-y-1.5'>
                                                  <div className='flex items-center justify-between text-sm'>
                                                       <div className='flex items-center gap-2.5 font-medium'>
                                                            <span className='text-xl'>{skill.icon}</span>
                                                            <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>
                                                                 {skill.name}
                                                            </span>
                                                       </div>
                                                       <span className={`text-xs font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'
                                                            }`}>
                                                            {skill.percentage}%
                                                       </span>
                                                  </div>

                                                  {/* Graphical Progress Bar */}
                                                  <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-100'
                                                       }`}>
                                                       <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.percentage}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                                            className='h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full'
                                                       />
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </motion.div>
                         ))}
                    </div>

               </div>
          </section>
     );
};

export default Tech;
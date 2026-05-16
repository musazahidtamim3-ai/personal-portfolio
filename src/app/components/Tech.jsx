'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { DiMongodb } from 'react-icons/di';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiBetterauth, SiExpress, SiFirebase, SiFramer } from 'react-icons/si';

const Tech = () => {
     const skills = [
          { name: 'React.js', icon: <FaReact />, level: 'Advanced' },
          { name: 'Next.js', icon: <RiNextjsFill />, level: 'Expert' },
          { name: 'Tailwind', icon: <RiTailwindCssFill />, level: 'Advanced' },
          { name: 'JavaScript', icon: <IoLogoJavascript />, level: 'Expert' },
          { name: 'MongoDB', icon: <DiMongodb />, level: 'Intermediate' },
          { name: 'BetterAuth', icon: <SiBetterauth />, level: 'Advanced' },
          { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate' },
          { name: 'Express', icon: <SiExpress />, level: 'Intermediate' },
          { name: 'Firebase', icon: <SiFirebase />, level: 'Advanced' },
          { name: 'Framer', icon: <SiFramer />, level: 'Beginner' },
     ];

     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: { staggerChildren: 0.05, delayChildren: 0.1 }
          }
     };

     const cardVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: {
               opacity: 1,
               y: 0,
               transition: { duration: 0.5, ease: "easeOut" }
          }
     };

     return (
          <section id='skills' className='max-w-7xl my-16 lg:my-32 mx-auto px-6 lg:px-12 relative overflow-hidden'>

               {/* Global CSS Style for the Custom Border Rotation */}
               <style jsx global>{`
                    @keyframes border-rotate {
                         100% { transform: rotate(360deg); }
                    }
                    .animate-border-spin {
                         animation: border-rotate 4s linear infinite;
                    }
               `}</style>

               {/* Ambient Background Glow */}
               <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00F5D4]/5 rounded-full blur-[150px] pointer-events-none'></div>

               {/* Section Header */}
               <div className='text-left lg:text-center mb-12 lg:mb-16'>
                    <motion.span
                         initial={{ opacity: 0, y: -10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5 }}
                         className='inline-block text-[#00F5D4] font-semibold tracking-widest uppercase text-xs bg-[#00F5D4]/10 px-3 py-1.5 rounded-md border border-[#00F5D4]/20 mb-3'
                    >
                         Technical Stack
                    </motion.span>

                    <motion.h2
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5, delay: 0.1 }}
                         className='text-3xl lg:text-5xl font-extrabold text-white tracking-tight'
                    >
                         My Professional <span className='bg-gradient-to-r from-[#00F5D4] to-[#0284c7] bg-clip-text text-transparent'>Skills</span>
                    </motion.h2>
               </div>

               {/* Grid Layout */}
               <motion.div
                    className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 relative z-10'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.9 }}
               >
                    {skills.map((skill, index) => (
                         <motion.div
                              key={index}
                              variants={cardVariants}
                              whileHover={{ y: -5 }}
                              whileTap={{ scale: 0.97 }}
                              className='group relative p-[1.5px] rounded-2xl overflow-hidden flex flex-col items-center justify-center bg-slate-900/50'
                         >
                              {/* CONTINUOUS ROTATING BORDER LIGHT (Always Active)
                                  This creates a laser light moving around the card borders.
                              */}
                              <div className='absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_40%,#00F5D4_70%,transparent_100%)] animate-border-spin pointer-events-none opacity-60 group-hover:opacity-100 group-hover:duration-300 transition-opacity'></div>

                              {/* Inner Content Box */}
                              <div className='w-full h-full bg-slate-950 p-6 lg:p-8 rounded-2xl flex flex-col items-center justify-center relative z-10 min-h-[140px] lg:min-h-[170px]'>

                                   {/* Subtle Inner Glow on Hover */}
                                   <div className='absolute inset-0 bg-gradient-to-b from-[#00F5D4]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none'></div>

                                   {/* Skill Icon */}
                                   <div className='text-4xl lg:text-5xl text-slate-400 group-hover:text-[#00F5D4] group-hover:scale-110 transition-all duration-300 z-10'>
                                        {skill.icon}
                                   </div>

                                   {/* Skill Name */}
                                   <p className='mt-4 text-base lg:text-lg font-bold text-slate-200 group-hover:text-white z-10 transition-colors duration-300 text-center'>
                                        {skill.name}
                                   </p>

                                   {/* Skill Level */}
                                   <span className='text-[10px] font-semibold uppercase tracking-widest text-slate-500 group-hover:text-[#00F5D4] mt-1.5 z-10 bg-slate-950/80 px-2 py-0.5 rounded-full border border-slate-900 group-hover:border-[#00F5D4]/20 transition-all duration-300'>
                                        {skill.level}
                                   </span>
                              </div>
                         </motion.div>
                    ))}
               </motion.div>

          </section>
     );
};

export default Tech;
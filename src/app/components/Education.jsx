'use client'
import React from 'react';
import { motion } from 'framer-motion';

const EducationTimeline = () => {
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
               description: "I successfully completed my Secondary School Certificate from this high school under the Science group. During these formative years, I developed a robust foundation in Mathematics, Physics, and analytical problem-solving. Achieving a perfect GPA was a testament to my dedication, and it was during this period that I discovered my passion for technology and engineering, which eventually led me to pursue my further studies in this field.",
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
          <section id='education' className="max-w-7xl mx-auto my-16 lg:my-32 px-6 lg:px-12 relative overflow-hidden bg-transparent">

               {/* Ambient Background Glow */}
               <div className='absolute top-1/3 right-0 w-80 h-80 bg-[#00F5D4]/5 rounded-full blur-[130px] pointer-events-none'></div>

               {/* Section Header */}
               <div className='text-left lg:text-center mb-12 lg:mb-16'>
                    <span className='inline-block text-[#00F5D4] font-semibold tracking-widest uppercase text-xs bg-[#00F5D4]/10 px-3 py-1.5 rounded-md border border-[#00F5D4]/20 mb-3'>
                         Education
                    </span>
                    <h2 className='text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight'>
                         My Educational Qualification
                    </h2>
               </div>

               {/* Glowing Timeline Axis */}
               <div className="relative mt-10 ml-3 md:ml-6 border-l-2 border-slate-800 before:absolute before:inset-y-0 before:left-[-2px] before:w-[2px] before:bg-gradient-to-b before:from-[#00F5D4] before:to-transparent">

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

                                   {/* ALWAYS ACTIVE PULSING TIMELINE DOT */}
                                   <div className="absolute -left-[31px] top-[26px] z-20 flex h-3 w-3 items-center justify-center">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00F5D4] opacity-75"></span>
                                        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00F5D4] border-2 border-slate-950"></span>
                                   </div>

                                   {/* Content Card with Breathing Cyber Border */}
                                   <div className="relative p-[1px] rounded-2xl overflow-hidden bg-slate-900/40 backdrop-blur-md transition-all duration-300">

                                        {/* Breathing Cyber Border Effect */}
                                        <div className='absolute inset-0 bg-gradient-to-r from-[#00F5D4]/30 via-slate-800 to-[#00F5D4]/30 animate-pulse rounded-2xl pointer-events-none'></div>

                                        {/* Inner Content Box */}
                                        <div className='w-full h-full bg-slate-950 p-6 lg:p-8 rounded-2xl relative z-10'>

                                             {/* Card Hover Radial Glow */}
                                             <div className='absolute inset-0 bg-gradient-to-b from-[#00F5D4]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none'></div>

                                             <span className="text-xs font-bold text-[#00F5D4] uppercase tracking-widest bg-[#00F5D4]/10 px-2.5 py-1 rounded-md border border-[#00F5D4]/10">
                                                  {edu.duration}
                                             </span>

                                             <h3 className="text-xl lg:text-2xl font-bold text-slate-100 mt-4 tracking-tight group-hover:text-white transition-colors">
                                                  {edu.degree}
                                             </h3>

                                             <p className="text-sm lg:text-base text-slate-400 mt-3 leading-relaxed font-normal">
                                                  {edu.description}
                                             </p>

                                             <div className="mt-5 inline-block bg-slate-900 border border-slate-800/80 group-hover:border-[#00F5D4]/20 text-[#00F5D4] text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300">
                                                  {edu.result}
                                             </div>
                                        </div>
                                   </div>

                              </motion.div>
                         ))}
                    </motion.div>

               </div>
          </section>
     );
};

export default EducationTimeline;
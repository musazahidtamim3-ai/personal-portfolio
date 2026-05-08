'use client'
import React from 'react';
import Marquee from 'react-fast-marquee';
import { DiMongodb } from 'react-icons/di';
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiBetterauth, SiExpress, SiFirebase, SiFramer } from 'react-icons/si';

const Tech = () => {
     // রিক্রুটারদের জন্য স্কিলগুলোকে একটি লিস্টে সাজানো হয়েছে
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

     return (
          <section id='skills' className='max-w-7xl my-20 lg:my-32 mx-auto px-5 lg:px-0'>
               {/* Section Header */}
               <div className='text-left lg:text-center mb-16'>
                    <p className='text-[#b4f404] font-bold mb-3'>Technical Stack</p>
                    <h1 className='text-3xl lg:text-4xl font-semibold text-white'>
                         My Professional <span className='text-[#b4f404]'>Skills</span>
                    </h1>
                    
               </div>

               {/* Laptop/Desktop View: Interactive Grid */}
               <div className='hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                    {skills.map((skill, index) => (
                         <div
                              key={index}
                              className='group relative bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:border-[#b4f404]/40 hover:bg-[#b4f404]/5'
                         >
                              {/* Glowing Background on Hover */}
                              <div className='absolute inset-0 bg-[#b4f404]/5 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500'></div>

                              <div className='text-5xl text-gray-400 group-hover:text-[#b4f404] group-hover:scale-110 transition-all duration-500 z-10'>
                                   {skill.icon}
                              </div>
                              <p className='mt-4 text-lg font-bold text-gray-200 group-hover:text-white z-10'>{skill.name}</p>
                              <span className='text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-[#b4f404] mt-1 z-10 transition-colors'>
                                   {skill.level}
                              </span>
                         </div>
                    ))}
               </div>

               {/* Mobile View: Smooth Marquee */}
               <div className='lg:hidden'>
                    <Marquee gradient={true} gradientColor='black' speed={40} pauseOnHover={true}>
                         {skills.map((skill, index) => (
                              <div key={index} className='bg-white/10 w-44 backdrop-blur-xl p-6 border rounded-2xl border-white/20 mx-4 flex flex-col items-center group'>
                                   <div className='text-4xl text-[#b4f404] mb-3 group-hover:scale-110 transition-transform'>
                                        {skill.icon}
                                   </div>
                                   <p className='text-center text-sm text-white font-bold'>{skill.name}</p>
                              </div>
                         ))}
                    </Marquee>

                    {/* Secondary Marquee (Reverse Direction) for more visual dynamic */}
                    <div className='mt-6'>
                         <Marquee direction='right' gradient={true} gradientColor='black' speed={30}>
                              {skills.slice().reverse().map((skill, index) => (
                                   <div key={index} className='bg-white/5 w-36 backdrop-blur-lg p-4 border rounded-xl border-white/10 mx-3 flex flex-col items-center'>
                                        <div className='text-3xl text-gray-400'>
                                             {skill.icon}
                                        </div>
                                        <p className='text-center text-[12px] text-gray-400 mt-2'>{skill.name}</p>
                                   </div>
                              ))}
                         </Marquee>
                    </div>
               </div>
          </section>
     );
};

export default Tech;
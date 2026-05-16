"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaCircleDot } from 'react-icons/fa6';
import { GoDownload } from 'react-icons/go';
import { IoIosRocket } from 'react-icons/io';
import { IoMailOutline } from 'react-icons/io5';

const Hero = () => {
     // Framer Motion Variants for Staggered Animations
     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: { staggerChildren: 0.15, delayChildren: 0.1 }
          }
     };

     const itemVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
     };

     return (
          // টপ মার্জিন কমিয়ে pt (padding-top) এবং py দিয়ে লেআউট ব্যালেন্স করা হয়েছে
          <section id='home' className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-8 px-6 lg:px-12 justify-between items-center pt-8 pb-16 lg:py-24 relative overflow-hidden bg-transparent'>

               {/* Ambient Background Glow Effect - পজিশন আরও নিখুঁত ও নিরাপদ করা হয়েছে */}
               <div className='absolute top-10 left-10 w-72 h-72 bg-[#00F5D4]/10 rounded-full blur-[120px] pointer-events-none z-0'></div>

               {/* Left Content - Text and CTA */}
               <motion.div
                    className='flex-1 z-10 w-full'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
               >
                    {/* Status Badge */}
                    <motion.div variants={itemVariants} className='inline-flex items-center gap-2 bg-slate-900/60 border border-slate-800 backdrop-blur-md px-4 py-2 rounded-full mb-6 shadow-sm'>
                         <FaCircleDot className='animate-pulse text-[#00F5D4] text-xs' />
                         <span className='text-xs lg:text-sm font-medium tracking-wide text-slate-300'>Available for Work</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1 variants={itemVariants} className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight'>
                         Hi, I'm <br />
                         <span className='bg-gradient-to-r from-[#00F5D4] via-[#0284c7] to-[#00F5D4] bg-clip-text text-transparent bg-[length:200%_auto] animate-pulse py-1 inline-block'>
                              MD. Jahidul Islam
                         </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.div variants={itemVariants} className='mt-4'>
                         <p className='text-lg lg:text-xl font-medium text-slate-400'>
                              Frontend Developer <span className='text-[#00F5D4] font-semibold'>/ Next.js Enthusiast</span>
                         </p>
                    </motion.div>

                    {/* Short Bio */}
                    <motion.p variants={itemVariants} className='text-slate-400 pt-4 text-base lg:text-lg max-w-xl leading-relaxed font-normal'>
                         I craft high-performance, visually stunning, and user-centric web applications.
                         Turning complex problems into elegant, clean-coded solutions is what I do best.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className='flex flex-wrap justify-start gap-4 mt-8'>
                         <button className="group relative px-6 py-3 bg-[#00F5D4] text-slate-950 font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,245,212,0.4)] flex items-center gap-2 overflow-hidden text-sm uppercase tracking-wider">
                              <IoIosRocket className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                              View Projects
                         </button>

                         <button className="px-6 py-3 bg-transparent border border-slate-800 text-slate-200 font-bold rounded-xl hover:border-[#00F5D4] hover:text-[#00F5D4] transition-all duration-300 backdrop-blur-sm flex items-center gap-2 text-sm uppercase tracking-wider">
                              <GoDownload className='w-4 h-4' />
                              Download CV
                         </button>
                    </motion.div>

                    {/* Social Profiles */}
                    <motion.div variants={itemVariants} className='flex gap-4 mt-10 lg:mt-14'>
                         {[
                              { icon: <FaGithub />, link: "https://github.com/musazahidtamim3-ai" },
                              { icon: <FaLinkedin />, link: "#" },
                              { icon: <FaTwitter />, link: "#" },
                              { icon: <IoMailOutline />, link: "#" },
                         ].map((social, index) => (
                              <a
                                   key={index}
                                   href={social.link}
                                   className='p-3 bg-slate-900/50 border border-slate-800 text-slate-400 rounded-xl hover:border-[#00F5D4] hover:text-[#00F5D4] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm'
                              >
                                   {React.cloneElement(social.icon, { className: 'w-5 h-5' })}
                              </a>
                         ))}
                    </motion.div>
               </motion.div>

               {/* Right Content - Interactive Profile Image */}
               <motion.div
                    className='relative group flex justify-center items-center z-10 shrink-0'
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
               >
                    {/* Pulsing Outer Ambient Glow */}
                    <div className='absolute inset-0 bg-[#00F5D4]/10 rounded-full blur-[80px] group-hover:bg-[#00F5D4]/20 transition-all duration-700 pointer-events-none'></div>

                    {/* Floating & Rotating Accent Elements */}
                    <div className='absolute inset-0 border-2 border-dashed border-slate-900 rounded-full animate-[spin_80s_linear_infinite] p-4 pointer-events-none'></div>

                    {/* Profile Frame with Continuous Float Animation - মোবাইল ফ্রেন্ডলি রেসপন্সিভ সাইজ */}
                    <motion.div
                         className="relative w-64 sm:w-80 lg:w-[400px] h-64 sm:h-80 lg:h-[400px] rounded-full p-[2px] bg-gradient-to-b from-[#00F5D4]/60 to-transparent shadow-[0_0_40px_rgba(0,245,212,0.1)]"
                         animate={{ y: [0, -10, 0] }}
                         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                         <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center relative">
                              <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,245,212,0.15)_0%,transparent_60%)]'></div>

                              <Image
                                   src="/hero.png"
                                   alt="MD. Jahidul Islam"
                                   height={500}
                                   width={500}
                                   className="w-[85%] h-[85%] object-cover translate-y-2 transition-transform duration-500 group-hover:scale-[1.03] origin-bottom"
                                   priority
                              />
                         </div>
                    </motion.div>

                    {/* Glassmorphic Experience Badge */}
                    <motion.div
                         className='absolute bottom-2 right-2 bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-4 rounded-2xl hidden md:block shadow-[0_20px_40px_rgba(0,0,0,0.6)]'
                         animate={{ y: [0, 6, 0] }}
                         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                         <p className='text-[#00F5D4] font-extrabold text-2xl lg:text-3xl tracking-tight'>1+</p>
                         <p className='text-slate-400 text-[10px] uppercase tracking-wider font-bold mt-0.5'>Years Experience</p>
                    </motion.div>
               </motion.div>

          </section>
     );
};

export default Hero;
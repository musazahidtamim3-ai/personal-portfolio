"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import { FaCircleDot } from 'react-icons/fa6';
import { GoDownload } from 'react-icons/go';
import { IoMailOutline } from 'react-icons/io5';
import { useTheme } from '../ThemeContext';
import Link from 'next/link';

const roles = [
     "Full Stack Developer",
     "React Specialist",
     "Next.js Developer",
     "Node.js Developer"
];

const Hero = () => {
     const { isDark } = useTheme();

     const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
     const [displayedText, setDisplayedText] = useState("");
     const [isDeleting, setIsDeleting] = useState(false);

     const scrollToSection = (id) => {
          const element = document.getElementById(id);
          if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
               setOpen(false);
          }
     };

     useEffect(() => {
          const targetText = roles[currentRoleIndex];
          let timeout;

          if (!isDeleting && displayedText === targetText) {
               timeout = setTimeout(() => setIsDeleting(true), 1800);
          } else if (isDeleting && displayedText === "") {
               setIsDeleting(false);
               setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          } else {
               timeout = setTimeout(() => {
                    setDisplayedText((prev) =>
                         isDeleting
                              ? targetText.slice(0, prev.length - 1)
                              : targetText.slice(0, prev.length + 1)
                    );
               }, isDeleting ? 40 : 90);
          }

          return () => clearTimeout(timeout);
     }, [displayedText, isDeleting, currentRoleIndex]);

     const containerVariants = {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
     };

     const itemVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } }
     };

     const socialLinks = [
          { icon: <FaGithub />, link: "https://github.com/musazahidtamim3-ai" },
          { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/jahidul-islam-dev" },
          { icon: <FaFacebook />, link: "https://www.facebook.com/share/19GwUyCVyF/" },
     ];

     return (
          <section
               id='home'
               className={`relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#0a0714]' : 'bg-[#faf9ff]'
                    }`}
          >
               <div className='absolute top-12 left-10 w-96 h-96 bg-purple-500/15 rounded-full blur-[130px] pointer-events-none z-0'></div>
               <div className='absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-[130px] pointer-events-none z-0'></div>

               <div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-10 px-6 lg:px-12 justify-between items-center pt-8 pb-16 lg:py-20 relative z-10'>

                    {/* Left Content */}
                    <motion.div
                         className='flex-1 z-10 w-full'
                         variants={containerVariants}
                         initial="hidden"
                         animate="visible"
                    >
                         <motion.div
                              variants={itemVariants}
                              className={`inline-flex items-center gap-2 backdrop-blur-xl px-4 py-2 rounded-full mb-6 shadow-lg border ${isDark
                                   ? 'bg-slate-900/80 border-purple-500/20 shadow-purple-950/20'
                                   : 'bg-white/80 border-purple-300/50 shadow-purple-200/40'
                                   }`}
                         >
                              <FaCircleDot className='animate-pulse text-purple-500 text-xs' />
                              <span className={`text-xs lg:text-sm font-medium tracking-wide ${isDark ? 'text-purple-200/90' : 'text-purple-700'}`}>
                                   Available for Work
                              </span>
                         </motion.div>

                         <motion.h1
                              variants={itemVariants}
                              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight ${isDark ? 'text-white' : 'text-slate-900'
                                   }`}
                         >
                              <span className='block text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 text-slate-400'>
                                   Hi, I'm
                              </span>
                              <span className='bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent py-1 inline-block'>
                                   MD. Jahidul Islam
                              </span>
                         </motion.h1>

                         <motion.div variants={itemVariants} className='mt-2 h-8 sm:h-9 flex items-center'>
                              <p className='text-lg lg:text-2xl font-semibold flex items-center gap-1'>
                                   <span className='bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent'>
                                        I am a {displayedText}
                                   </span>
                                   <span className='w-[2px] h-6 bg-purple-500 inline-block animate-pulse ml-0.5'></span>
                              </p>
                         </motion.div>

                         <motion.p
                              variants={itemVariants}
                              className={`pt-3 text-base lg:text-lg max-w-xl leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'
                                   }`}
                         >
                              I build modern, responsive and user-friendly web applications using React, Next.js and Node.js.
                         </motion.p>

                         <motion.div variants={itemVariants} className='flex flex-wrap items-center gap-4 mt-8'>
                              <Link href="https://drive.google.com/file/d/11sNMJNmvXa3MA9VU1unk4aGI_zlcYeUN/view?usp=sharing" target="_blank">
                                   <button className="group relative px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 overflow-hidden text-sm uppercase tracking-wider">
                                        <GoDownload className='w-4 h-4' />
                                        Download Resume
                                   </button>
                              </Link>


                              <button
                                   onClick={() => scrollToSection('contact')}
                                        className={`px-6 py-3.5 border font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md flex items-center gap-2 text-sm uppercase tracking-wider ${isDark
                                             ? 'bg-slate-900/60 border-slate-800 hover:border-purple-500/50 text-slate-200 hover:text-purple-300'
                                             : 'bg-white border-slate-300 hover:border-purple-400 text-slate-700 hover:text-purple-600'
                                             }`}
                                   >
                                        <IoMailOutline className='w-4 h-4' />
                                        Contact Me
                                   </button>
                         </motion.div>

                         <motion.div variants={itemVariants} className='flex items-center gap-4 mt-8 border-slate-800/20'>
                              {socialLinks.map((item, idx) => (
                                   <a
                                        key={idx}
                                        href={item.link}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={`p-3 rounded-xl border transition-all duration-300 hover:scale-110 text-lg ${isDark
                                             ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/40'
                                             : 'bg-white border-slate-200 text-slate-600 hover:text-purple-600 hover:border-purple-300'
                                             }`}
                                   >
                                        {item.icon}
                                   </a>
                              ))}
                         </motion.div>

                    </motion.div>

                    {/* Right Content - Modern Geometric Profile Frame */}
                    <motion.div
                         className='relative group flex justify-center items-center z-10 shrink-0'
                         initial={{ opacity: 0, scale: 0.95 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                         {/* Ambient Glow */}
                         <div className='absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-full blur-[70px] group-hover:from-purple-500/30 transition-all duration-700 pointer-events-none'></div>

                         {/* 1. Geometric Outer Rotator (Rotated Rounded Square) */}
                         <motion.div
                              className={`absolute w-72 sm:w-88 lg:w-[410px] h-72 sm:h-88 lg:h-[410px] rounded-[45px] sm:rounded-[55px] border border-dashed transition-colors duration-500 pointer-events-none ${isDark ? 'border-purple-500/25' : 'border-purple-400/35'
                                   }`}
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                         />

                         {/* 2. Geometric Hexagon/Diamond Decorative Accent (Top Right) */}
                         <motion.div
                              className={`absolute -top-3 -right-3 w-8 h-8 rounded-lg border rotate-45 pointer-events-none backdrop-blur-md hidden sm:block ${isDark ? 'border-purple-400/30 bg-purple-900/20' : 'border-purple-300 bg-purple-100/50'
                                   }`}
                              animate={{ y: [0, -6, 0], rotate: [45, 90, 45] }}
                              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                         />

                         {/* 3. Main Modern Squircle Frame (Rounded Polygon Look) */}
                         <motion.div
                              className="relative w-64 sm:w-80 lg:w-[380px] h-64 sm:h-80 lg:h-[380px] rounded-[40px] sm:rounded-[50px] p-[3px] bg-gradient-to-br from-purple-200 via-indigo-500/40 to-pink-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)] overflow-hidden"
                              animate={{ y: [0, -8, 0] }}
                              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                         >
                              <div className={`w-full h-full rounded-[37px] sm:rounded-[47px] overflow-hidden flex items-center justify-center relative ${isDark ? 'bg-slate-950' : 'bg-white'}`}>

                                   <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.2)_0%,transparent_60%)]'></div>

                                   <Image
                                        src="/developer.png"
                                        alt="Mohammed Jahidul Islam"
                                        height={500}
                                        width={500}
                                        className="object-cover translate-y-2  origin-bottom drop-shadow-[0_0_25px_rgba(168,85,247,0.45)]"
                                        priority
                                   />
                              </div>
                         </motion.div>

                         {/* Floating Experience Badge */}
                         <motion.div
                              className={`absolute -bottom-2 -right-2 backdrop-blur-xl border px-5 py-3 rounded-2xl hidden md:block shadow-[0_15px_30px_rgba(0,0,0,0.3)] ${isDark ? 'bg-slate-900/90 border-purple-500/20' : 'bg-white/90 border-purple-200'
                                   }`}
                              animate={{ y: [0, 6, 0] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                         >
                              <p className='bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-extrabold text-2xl lg:text-3xl tracking-tight'>1+</p>
                              <p className={`text-[10px] uppercase tracking-wider font-bold mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                   Years Experience
                              </p>
                         </motion.div>
                    </motion.div>

               </div>
          </section>
     );
};

export default Hero;
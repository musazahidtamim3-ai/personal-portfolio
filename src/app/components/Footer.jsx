"use client"
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
     const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
     };

     return (
          <footer className='max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10 relative overflow-hidden bg-transparent'>

               {/* Top Border with Gradient (Matching the Contact Theme) */}
               <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-[#00F5D4]/20 to-transparent mb-16'></div>

               <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-start gap-10 mb-12'>

                    {/* Left Side: Name & Tagline */}
                    <div className='text-left flex flex-col justify-center h-full'>
                         <h2 className='text-2xl font-bold text-white tracking-tight'>
                              Jahidul <span className='bg-gradient-to-r from-[#00F5D4] to-[#0284c7] bg-clip-text text-transparent'>Islam</span>
                         </h2>
                         <p className='text-sm text-slate-400 mt-3 max-w-sm leading-relaxed'>
                              Crafting digital experiences with precision and passion. Let's build something amazing together.
                         </p>
                    </div>

                    {/* Center: Quick Links */}
                    <div className='flex flex-col md:items-center w-full'>
                         <div className='text-left md:text-center'>
                              <h3 className='text-sm font-semibold text-slate-200 uppercase tracking-widest mb-4'>
                                   Quick Links
                              </h3>
                              <ul className='space-y-2.5 text-sm font-medium'>
                                   <li>
                                        <a href="#home" className='text-slate-400 hover:text-[#00F5D4] transition-colors duration-300'>Home</a>
                                   </li>
                                   <li>
                                        <a href="#about" className='text-slate-400 hover:text-[#00F5D4] transition-colors duration-300'>About</a>
                                   </li>
                                   <li>
                                        <a href="#projects" className='text-slate-400 hover:text-[#00F5D4] transition-colors duration-300'>Projects</a>
                                   </li>
                                   <li>
                                        <a href="#contact" className='text-slate-400 hover:text-[#00F5D4] transition-colors duration-300'>Contact</a>
                                   </li>
                              </ul>
                         </div>
                    </div>

                    {/* Right Side: Socials & Back to Top */}
                    <div className='flex flex-col items-start md:items-end justify-between h-full gap-6 md:gap-10'>
                         <div>
                              <h3 className='text-sm font-semibold text-slate-200 uppercase tracking-widest mb-4 text-left md:text-right'>
                                   Social Profiles
                              </h3>
                              <div className='flex gap-3.5'>
                                   <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900/60 border border-slate-800 text-[#00F5D4] hover:bg-[#00F5D4] hover:text-slate-950 hover:shadow-[0_0_20px_rgba(0,245,212,0.3)] transition-all duration-300'>
                                        <FaGithub size={18} />
                                   </a>
                                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900/60 border border-slate-800 text-[#00F5D4] hover:bg-[#00F5D4] hover:text-slate-950 hover:shadow-[0_0_20px_rgba(0,245,212,0.3)] transition-all duration-300'>
                                        <FaLinkedin size={18} />
                                   </a>
                                   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900/60 border border-slate-800 text-[#00F5D4] hover:bg-[#00F5D4] hover:text-slate-950 hover:shadow-[0_0_20px_rgba(0,245,212,0.3)] transition-all duration-300'>
                                        <FaTwitter size={18} />
                                   </a>
                              </div>
                         </div>

                         {/* Smooth Back to Top Button */}
                         <button
                              onClick={scrollToTop}
                              className='flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-[#00F5D4] group transition-colors duration-300 mt-2 self-start md:self-auto'
                         >
                              Back to top
                              <span className='w-8 h-8 flex items-center justify-center rounded-lg bg-slate-900/60 border border-slate-800 group-hover:border-[#00F5D4]/40 group-hover:bg-slate-900 transition-all duration-300'>
                                   <FaArrowUp size={12} className='group-hover:-translate-y-0.5 transition-transform duration-300' />
                              </span>
                         </button>
                    </div>
               </div>

               {/* Bottom Divider */}
               <div className='w-full h-[1px] bg-slate-900 my-6'></div>

               {/* Copyright Section */}
               <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left'>
                    <p className='text-slate-500 text-xs font-medium tracking-wide'>
                         © {new Date().getFullYear()} MD. Jahidul Islam. All Rights Reserved.
                    </p>
                    <p className='text-slate-600 text-xs font-medium'>
                         Designed & Developed with 🤍
                    </p>
               </div>
          </footer>
     );
};

export default Footer;
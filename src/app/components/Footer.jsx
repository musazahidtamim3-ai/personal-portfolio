"use client"
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { useTheme } from '../ThemeContext'; // আপনার থিম ফাইলের সঠিক পাথ দিন

const Footer = () => {
     const { isDark } = useTheme();

     const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
     };

     return (
          <footer className={`w-full relative overflow-hidden transition-colors duration-500 border-t ${isDark
                    ? 'bg-slate-950 text-white border-slate-900'
                    : 'bg-slate-50 text-slate-900 border-slate-200'
               }`}>
               <div className='max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10 relative z-10'>

                    {/* Top Top Ambient Border Line */}
                    <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-16' />

                    <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-start gap-10 mb-12'>

                         {/* Left Side: Name & Tagline */}
                         <div className='text-left flex flex-col justify-center h-full'>
                              <h2 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                   Jahidul <span className='bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent'>Islam</span>
                              </h2>
                              <p className={`text-sm mt-3 max-w-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                   Crafting digital experiences with precision and passion. Let's build something amazing together.
                              </p>
                         </div>

                         {/* Center: Quick Links */}
                         <div className='flex flex-col md:items-center w-full'>
                              <div className='text-left md:text-center'>
                                   <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                                        Quick Links
                                   </h3>
                                   <ul className='space-y-2.5 text-sm font-medium'>
                                        <li>
                                             <a href="#home" className={`transition-colors duration-300 ${isDark ? 'text-slate-400 hover:text-purple-400' : 'text-slate-600 hover:text-purple-600'}`}>Home</a>
                                        </li>
                                        <li>
                                             <a href="#about" className={`transition-colors duration-300 ${isDark ? 'text-slate-400 hover:text-purple-400' : 'text-slate-600 hover:text-purple-600'}`}>About</a>
                                        </li>
                                        <li>
                                             <a href="#projects" className={`transition-colors duration-300 ${isDark ? 'text-slate-400 hover:text-purple-400' : 'text-slate-600 hover:text-purple-600'}`}>Projects</a>
                                        </li>
                                        <li>
                                             <a href="#contact" className={`transition-colors duration-300 ${isDark ? 'text-slate-400 hover:text-purple-400' : 'text-slate-600 hover:text-purple-600'}`}>Contact</a>
                                        </li>
                                   </ul>
                              </div>
                         </div>

                         {/* Right Side: Socials & Back to Top */}
                         <div className='flex flex-col items-start md:items-end justify-between h-full gap-6 md:gap-10'>
                              <div>
                                   <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 text-left md:text-right ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                                        Social Profiles
                                   </h3>
                                   <div className='flex gap-3.5'>
                                        <a
                                             href="https://github.com"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-300 ${isDark
                                                       ? 'bg-slate-900/60 border-slate-800 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                                                       : 'bg-white border-slate-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-md'
                                                  }`}
                                        >
                                             <FaGithub size={18} />
                                        </a>
                                        <a
                                             href="https://linkedin.com"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-300 ${isDark
                                                       ? 'bg-slate-900/60 border-slate-800 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                                                       : 'bg-white border-slate-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-md'
                                                  }`}
                                        >
                                             <FaLinkedin size={18} />
                                        </a>
                                        <a
                                             href="https://twitter.com"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-300 ${isDark
                                                       ? 'bg-slate-900/60 border-slate-800 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                                                       : 'bg-white border-slate-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-md'
                                                  }`}
                                        >
                                             <FaTwitter size={18} />
                                        </a>
                                   </div>
                              </div>

                              {/* Smooth Back to Top Button */}
                              <button
                                   onClick={scrollToTop}
                                   className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider group transition-colors duration-300 mt-2 self-start md:self-auto ${isDark ? 'text-slate-400 hover:text-purple-400' : 'text-slate-600 hover:text-purple-600'
                                        }`}
                              >
                                   Back to top
                                   <span className={`w-8 h-8 flex items-center justify-center rounded-lg border transition-all duration-300 ${isDark
                                             ? 'bg-slate-900/60 border-slate-800 group-hover:border-purple-500/40 group-hover:bg-slate-900'
                                             : 'bg-white border-slate-200 group-hover:border-purple-300 group-hover:bg-purple-50'
                                        }`}>
                                        <FaArrowUp size={12} className='group-hover:-translate-y-0.5 transition-transform duration-300' />
                                   </span>
                              </button>
                         </div>
                    </div>

                    {/* Bottom Divider */}
                    <div className={`w-full h-[1px] my-6 ${isDark ? 'bg-slate-900' : 'bg-slate-200'}`} />

                    {/* Copyright Section */}
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left'>
                         <p className={`text-xs font-medium tracking-wide ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                              © {new Date().getFullYear()} MD. Jahidul Islam. All Rights Reserved.
                         </p>
                         <p className={`text-xs font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                              Designed & Developed with 🤍
                         </p>
                    </div>

               </div>
          </footer>
     );
};

export default Footer;
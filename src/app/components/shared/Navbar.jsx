'use client'
import { useTheme } from '@/app/ThemeContext';
import React, { useState, useEffect } from 'react';
import { IoMailOutline, IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { PiTextAlignLeft } from 'react-icons/pi';
import { RxCrossCircled } from 'react-icons/rx';
import Image from 'next/image';

const Navbar = () => {
     const [open, setOpen] = useState(false);
     const [activeSection, setActiveSection] = useState('home');
     const { isDark, toggleTheme } = useTheme();

     useEffect(() => {
          const handleScroll = () => {
               const sections = ['home', 'about', 'skills', 'education', 'projects', 'certificates', 'blog'];

               for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                         const rect = element.getBoundingClientRect();
                         if (rect.top >= -250 && rect.top <= 250) {
                              setActiveSection(section);
                         }
                    }
               }
          };

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     const scrollToSection = (id) => {
          const element = document.getElementById(id);
          if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
               setOpen(false);
          }
     };

     const navLinks = [
          { name: 'Home', id: 'home' },
          { name: 'About', id: 'about' },
          { name: 'Skills', id: 'skills' },
          { name: 'Projects', id: 'projects' },
          { name: 'Education', id: 'education' },
          { name: 'Certificates', id: 'certificates' },
          { name: 'Blog', id: 'blog' }
     ];

     return (
          <header
               className={`sticky top-0 z-[999] transition-colors duration-300 ${isDark
                    ? 'bg-slate-950 text-white border-b border-slate-800'
                    : 'bg-white text-slate-900 border-b border-slate-200 shadow-sm'
                    }`}
          >
               <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
                    <div className='flex justify-between items-center py-3 relative'>

                         <div className='flex items-center gap-3 sm:gap-4'>
                              <button
                                   onClick={() => setOpen(!open)}
                                   aria-label="Toggle menu"
                                   className={`lg:hidden p-2 rounded-xl text-2xl transition-transform active:scale-95 ${isDark ? 'text-purple-400 hover:bg-slate-900' : 'text-purple-600 hover:bg-purple-50'
                                        }`}
                              >
                                   {open ? <RxCrossCircled /> : <PiTextAlignLeft />}
                              </button>

                              {/* Brand Logo */}
                              <div className='flex items-center'>
                                   <Image
                                        src={`/main-logo.png`}
                                        alt='logo'
                                        height={45}
                                        width={65}
                                        className='h-12 w-auto object-contain'
                                        priority
                                   />
                              </div>
                         </div>

                         {/* Desktop Navigation Links */}
                         <ul className='hidden lg:flex items-center gap-8'>
                              {navLinks.map((link) => (
                                   <li key={link.id}>
                                        <button
                                             onClick={() => scrollToSection(link.id)}
                                             className={`relative text-sm font-semibold tracking-wide py-1 transition-all duration-300 hover:text-purple-500 ${activeSection === link.id
                                                  ? 'text-purple-500 font-bold'
                                                  : isDark ? 'text-slate-400' : 'text-slate-600'
                                                  }`}
                                        >
                                             {link.name}
                                             {/* Active Indicator Bar */}
                                             <span
                                                  className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 rounded-full ${activeSection === link.id ? 'w-full' : 'w-0'
                                                       }`}
                                             />
                                        </button>
                                   </li>
                              ))}
                         </ul>

                         {/* Right Side Controls: Theme Toggle & Contact Button */}
                         <div className='flex items-center gap-3'>
                              {/* Theme Toggle Button */}
                              <button
                                   onClick={toggleTheme}
                                   aria-label="Toggle theme"
                                   className={`p-2.5 rounded-xl border transition-all duration-300 hover:scale-105 active:scale-95 ${isDark
                                        ? 'bg-slate-900 border-slate-800 text-purple-400 hover:border-purple-500/50'
                                        : 'bg-purple-50 border-purple-200 text-purple-600 hover:border-purple-300 shadow-sm'
                                        }`}
                              >
                                   {isDark ? <IoSunnyOutline className='w-4 h-4' /> : <IoMoonOutline className='w-4 h-4' />}
                              </button>

                              {/* Desktop CTA Button */}
                              <button
                                   onClick={() => scrollToSection('contact')}
                                   className='hidden lg:flex items-center gap-2 px-5 py-2.5 text-white border border-purple-500/20 rounded-xl font-bold text-xs uppercase tracking-wider bg-linear-to-r from-purple-500 to-indigo-500 hover:bg-purple-500 hover:border-transparent hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300'
                              >
                                   <IoMailOutline className='w-4 h-4' /> Contact me
                              </button>
                         </div>

                    </div>
               </div>

               <div
                    className={`fixed left-0 top-[65px] h-[calc(100vh-65px)] w-64 p-6 shadow-2xl border-r transition-all duration-300 ease-in-out lg:hidden flex flex-col justify-between z-[999] ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-purple-100'
                         } ${open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
                         }`}
               >
                    <ul className='flex flex-col gap-3 w-full'>
                         {navLinks.map((link) => (
                              <li key={link.id} className='w-full'>
                                   <button
                                        onClick={() => scrollToSection(link.id)}
                                        className={`text-sm font-bold tracking-wide w-full text-left py-3 px-4 rounded-xl transition-all ${activeSection === link.id
                                             ? isDark
                                                  ? 'text-purple-300 bg-purple-500/15 border-l-4 border-purple-500'
                                                  : 'text-purple-700 bg-purple-100/80 border-l-4 border-purple-600'
                                             : isDark
                                                  ? 'text-slate-400 hover:text-purple-300 hover:bg-slate-900'
                                                  : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
                                             }`}
                                   >
                                        {link.name}
                                   </button>
                              </li>
                         ))}
                    </ul>

                    {/* Mobile CTA inside menu */}
                    <div className={`pt-4 border-t w-full ${isDark ? 'border-slate-800' : 'border-purple-100'}`}>
                         <button
                              onClick={() => scrollToSection('contact')}
                              className='flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-opacity'
                         >
                              <IoMailOutline className='w-4 h-4' /> Contact me
                         </button>
                    </div>
               </div>
          </header>
     );
};

export default Navbar;
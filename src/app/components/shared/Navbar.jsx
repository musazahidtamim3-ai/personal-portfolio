'use client'
import React, { useState, useEffect } from 'react';
import { IoMailOutline } from 'react-icons/io5';
import { PiTextAlignRight } from 'react-icons/pi';
import { RxCrossCircled } from 'react-icons/rx';

const Navbar = () => {
     const [open, setOpen] = useState(false);
     const [activeSection, setActiveSection] = useState('home');

     // স্ক্রল করার সময় একটিভ সেকশন ডিটেক্ট করা
     useEffect(() => {
          const handleScroll = () => {
               const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];

               for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                         const rect = element.getBoundingClientRect();
                         // স্ক্রিনের মিডল পজিশনের সাপেক্ষে ডিটেকশন আরও নিখুঁত করা হয়েছে
                         if (rect.top >= -250 && rect.top <= 250) {
                              setActiveSection(section);
                         }
                    }
               }
          };

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     // স্মুথ স্ক্রল হ্যান্ডেলার
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
          { name: 'Contact', id: 'contact' },
     ];

     return (
          <div className='sticky top-0 z-[100] bg-slate-950/70 backdrop-blur-md border-b border-slate-900 transition-all duration-300'>
               <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                    <div className='flex justify-between items-center py-4 relative'>

                         {/* Logo / Name */}
                         <h1
                              className='text-xl font-bold cursor-pointer tracking-tight text-white select-none'
                              onClick={() => scrollToSection('home')}
                         >
                              Jahidul <span className='bg-gradient-to-r from-[#00F5D4] to-[#0284c7] bg-clip-text text-transparent'>Islam</span>
                         </h1>

                         {/* Desktop Menu */}
                         <ul className='hidden lg:flex items-center gap-8'>
                              {navLinks.map((link) => (
                                   <li key={link.id}>
                                        <button
                                             onClick={() => scrollToSection(link.id)}
                                             className={`relative text-sm font-semibold tracking-wide py-1 transition-all duration-300 hover:text-[#00F5D4] 
                                             ${activeSection === link.id ? 'text-[#00F5D4]' : 'text-slate-400'}`}
                                        >
                                             {link.name}
                                             {/* Smooth Active Underline Indicator */}
                                             <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#00F5D4] to-[#0284c7] transition-all duration-300 rounded-full 
                                             ${activeSection === link.id ? 'w-full' : 'w-0'}`}></span>
                                        </button>
                                   </li>
                              ))}
                         </ul>

                         {/* Desktop CTA Button */}
                         <button
                              onClick={() => scrollToSection('contact')}
                              className='hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#00F5D4]/5 text-[#00F5D4] border border-[#00F5D4]/20 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#00F5D4] hover:text-slate-950 hover:shadow-[0_0_25px_rgba(0,245,212,0.25)] transition-all duration-300'
                         >
                              <IoMailOutline className='w-4 h-4' /> Contact me
                         </button>

                         {/* Mobile Toggle Icon */}
                         <div
                              className='flex lg:hidden text-2xl text-[#00F5D4] cursor-pointer p-1 active:scale-95 transition-transform'
                              onClick={() => setOpen(!open)}
                         >
                              {open ? <RxCrossCircled /> : <PiTextAlignRight />}
                         </div>

                         {/* Mobile Menu (Glassmorphic Upgrade) */}
                         <ul className={`flex absolute flex-col duration-500 z-50 backdrop-blur-2xl px-8 py-6 rounded-2xl border border-slate-800 bg-slate-950/95 shadow-2xl lg:hidden items-start w-64 gap-4 transition-all 
                              ${open ? "top-16 right-0 opacity-100 scale-100" : "top-16 right-[-300px] opacity-0 scale-95 pointer-events-none"}`}
                         >
                              {navLinks.map((link) => (
                                   <li key={link.id} className='w-full'>
                                        <button
                                             onClick={() => scrollToSection(link.id)}
                                             className={`text-sm font-bold tracking-wide w-full text-left py-2 px-3 rounded-xl transition-all 
                                             ${activeSection === link.id
                                                       ? 'text-[#00F5D4] bg-[#00F5D4]/10 border-l-2 border-[#00F5D4]'
                                                       : 'text-slate-300 hover:text-[#00F5D4] hover:bg-slate-900/50'}`}
                                        >
                                             {link.name}
                                        </button>
                                   </li>
                              ))}

                              {/* Mobile CTA inside dropdown */}
                              <li className='w-full pt-2 border-t border-slate-900/60'>
                                   <button
                                        onClick={() => scrollToSection('contact')}
                                        className='flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#00F5D4] text-slate-950 rounded-xl font-bold text-xs uppercase tracking-wider'
                                   >
                                        <IoMailOutline className='w-4 h-4' /> Contact me
                                   </button>
                              </li>
                         </ul>

                    </div>
               </div>
          </div>
     );
};

export default Navbar;
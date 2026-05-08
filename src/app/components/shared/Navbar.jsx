'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IoMailOutline } from 'react-icons/io5';
import { PiTextAlignRight } from 'react-icons/pi';
import { RxCrossCircled } from 'react-icons/rx';

const Navbar = () => {
     const [open, setOpen] = useState(false);
     const [activeSection, setActiveSection] = useState('home');

     // স্ক্রল করার সময় কোন সেকশনটি বর্তমানে স্ক্রিনে আছে তা ডিটেক্ট করা
     useEffect(() => {
          const handleScroll = () => {
               const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];

               for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                         const rect = element.getBoundingClientRect();
                         // যদি সেকশনটি স্ক্রিনের ওপরের কাছাকাছি থাকে
                         if (rect.top >= -200 && rect.top <= 300) {
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
               setOpen(false); // মোবাইল মেনু বন্ধ করার জন্য
          }
     };

     const navLinks = [
          { name: 'Home', id: 'home' },
          { name: 'About', id: 'about' },
          { name: 'Skills', id: 'skills' },
          { name: 'Education', id: 'education' },
          { name: 'Projects', id: 'projects' },
          { name: 'Contact', id: 'contact' },
     ];

     return (
          <div className='sticky top-0 z-[100] bg-black/50 backdrop-blur-md border-b border-white/5'>
               <div className='max-w-7xl mx-auto px-5 lg:px-0'>
                    <div className='flex justify-between items-center py-4'>
                         <h1
                              className='text-xl font-bold cursor-pointer hover:text-[#b4f404] transition-all'
                              onClick={() => scrollToSection('home')}
                         >
                              Jahidul Islam<span className='text-[#b4f404]'>.</span>
                         </h1>

                         {/* Desktop Menu */}
                         <ul className='hidden lg:flex items-center gap-8'>
                              {navLinks.map((link) => (
                                   <li key={link.id}>
                                        <button
                                             onClick={() => scrollToSection(link.id)}
                                             className={`relative text-sm font-medium transition-all duration-300 hover:text-[#b4f404] 
                                    ${activeSection === link.id ? 'text-[#b4f404]' : 'text-gray-400'}`}
                                        >
                                             {link.name}
                                             {/* Active Line Indicator */}
                                             <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#b4f404] transition-all duration-300 
                                    ${activeSection === link.id ? 'w-full' : 'w-0'}`}></span>
                                        </button>
                                   </li>
                              ))}
                         </ul>

                         {/* Mobile Toggle Icon */}
                         <div className='flex lg:hidden text-2xl text-[#b4f404] cursor-pointer' onClick={() => setOpen(!open)}>
                              {open === false ? <PiTextAlignRight /> : <RxCrossCircled />}
                         </div>

                         {/* Mobile Menu (Your Version Style) */}
                         <ul className={`flex absolute flex-col duration-700 z-50 backdrop-blur-2xl px-10 py-8 rounded-xl border border-white/10 bg-[#b4f40415] lg:hidden items-center gap-6 ${open ? "top-20 right-5 opacity-100" : "-top-[500px] right-5 opacity-0"}`}>
                              {navLinks.map((link) => (
                                   <li key={link.id}>
                                        <button
                                             onClick={() => scrollToSection(link.id)}
                                             className={`text-lg font-semibold ${activeSection === link.id ? 'text-[#b4f404]' : 'text-white'}`}
                                        >
                                             {link.name}
                                        </button>
                                   </li>
                              ))}
                         </ul>

                         {/* Desktop CTA Button */}
                         <button
                              onClick={() => scrollToSection('contact')}
                              className='hidden lg:flex items-center gap-2 px-5 py-2 bg-black text-[#b4f404] border border-[#b4f404] rounded-full hover:bg-[#b4f404] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(180,244,4,0.1)]'
                         >
                              <IoMailOutline className='w-5 h-5' /> Contact me
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
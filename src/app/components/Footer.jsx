"use client"
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
     const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
     };

     return (
          <footer className='max-w-7xl mx-auto px-5 lg:px-0 pt-20 pb-10'>
               {/* Top Border with Gradient */}
               <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-[#b4f40450] to-transparent mb-10'></div>

               <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    {/* Left Side: Name & Tagline */}
                    <div className='text-left'>
                         <h2 className='text-xl font-semibold text-white'>
                              Jahidul Islam
                         </h2>
                         <p className='text-sm lg:text-md text-gray-400 mt-2 max-w-lg'>
                              Crafting digital experiences with precision and passion.
                              Let's build something amazing together.
                         </p>
                    </div>

                    {/* Center: Quick Links or Copyright */}
                    

                    {/* Right Side: Socials & Back to Top */}
                    <div className='flex gap-4'>
                         <div className='flex gap-4'>
                              <a href="#" className='w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#b4f404] hover:bg-[#b4f404] hover:text-black transition-all duration-300'>
                                   <FaGithub size={30} />
                              </a>
                              <a href="#" className='w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#b4f404] hover:bg-[#b4f404] hover:text-black transition-all duration-300'>
                                   <FaLinkedin size={30} />
                              </a>
                              <a href="#" className='w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#b4f404] hover:bg-[#b4f404] hover:text-black transition-all duration-300'>
                                   <FaTwitter size={30} />
                              </a>
                         </div>

                         
                    </div>
               </div>
               <hr className='border border-gray-900 my-3'/>
               <div className='text-center'>
                    <p className='text-gray-500 text-sm'>
                         © MD. Jahidul Islam All Rights Reserved
                    </p>
               </div>
          </footer>
     );
};

export default Footer;
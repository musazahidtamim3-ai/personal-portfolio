import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaCircleDot } from 'react-icons/fa6';
import { GoDownload } from 'react-icons/go';
import { IoIosRocket } from 'react-icons/io';
import { IoMailOutline } from 'react-icons/io5';

const Hero = () => {
     return (
          <div id='home' className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-0 px-5 lg:px-10 justify-between items-center my-10 lg:my-32 relative overflow-hidden'>

               {/* Text Content */}
               <div className='flex-1 z-10 '>
                    <p className='text-sm lg:text-md text-[#b4f404] justify-center items-center bg-white/10 border border-white/20 py-2 max-w-50 rounded-full flex gap-2 mb-2'><FaCircleDot className='animate-pulse text-[#b4f404c4] '/> Available for Work</p>

                    <h1 className='text-3xl lg:text-4xl pt-1 font-bold text-white leading-tight'>
                         Hi, I'm <br />
                         <span className='bg-gradient-to-r from-[#b4f404] via-[#d4ff5c] to-[#b4f404] bg-clip-text text-transparent'>
                              MD. Jahidul Islam
                         </span>
                    </h1>

                    <div className='mt-2'>
                         <p className='text-md lg:text-lg font-semibold text-gray-200'>Frontend Developer <span className='text-[#b4f404]'>| Next.js Enthusiast</span></p>
                         
                    </div>

                    <p className='text-gray-400 pt-5 text-sm lg:text-md max-w-xl leading-relaxed'>
                         I craft high-performance, visually stunning, and user-centric web applications.
                         Turning complex problems into elegant, clean-coded solutions is what I do best.
                    </p>

                    {/* Action Buttons */}
                    <div className='flex flex-wrap justify-start gap-5 mt-5'>
                         <button className="group relative bg-[#b4f404] text-black overflow-hidden transition-all duration-300 btn">
                              <span className='flex items-center gap-2'>
                                   <IoIosRocket className='w-5 h-5 group-hover:animate-bounce' /> View Projects
                              </span>
                              
                         </button>

                         <button className="btn flex items-center gap-2 bg-transparent border-2 border-[#b4f404] text-[#b4f404] hover:bg-[#b4f404]/10 transition-all duration-300 shadow-[0_0_15px_rgba(180,244,4,0.1)]">
                              <GoDownload className='w-5 h-5' /> Download CV
                         </button>
                    </div>

                    {/* Social Icons */}
                    <div className='flex gap-4 mt-6 lg:mt-12'>
                         {[
                              { icon: <FaGithub />, link: "#" },
                              { icon: <FaLinkedin />, link: "#" },
                              { icon: <FaTwitter />, link: "#" },
                              { icon: <IoMailOutline />, link: "#" },
                         ].map((social, index) => (
                              <a
                                   key={index}
                                   href={social.link}
                                   className='p-3 bg-white/10 border border-white/20 text-[#b4f404] rounded-full hover:bg-[#b4f404] hover:text-black hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm'
                              >
                                   {React.cloneElement(social.icon, { className: 'w-6 h-6' })}
                              </a>
                         ))}
                    </div>
               </div>

               {/* Profile Image Section */}
               <div className='relative group'>
                    {/* Animated Background Rings */}
                    <div className='absolute inset-0 bg-[#b4f404]/20 rounded-full blur-[80px] group-hover:bg-[#b4f404]/30 transition-all duration-500'></div>

                    <div className="relative w-72 lg:w-[450px] h-72 lg:h-[450px] rounded-full p-[6px] bg-gradient-to-b from-[#b4f404] to-transparent shadow-[0_0_50px_rgba(180,244,4,0.2)] animate-float">

                         <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center relative">
                              {/* Inner Gradient Glow */}
                              <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#b4f404_0%,transparent_70%)] opacity-40'></div>

                              <Image
                                   src="/hero.png"
                                   alt="Profile"
                                   height={1000}
                                   width={1000}
                                   className="w-full h-full object-cover translate-y-4  transition-all duration-500 origin-bottom"
                                   priority
                              />
                         </div>
                    </div>

                    {/* Floating Badges or Decorative Elements */}
                    <div className='absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl hidden lg:block shadow-2xl'>
                         <p className='text-[#b4f404] font-bold text-2xl'>1+</p>
                         <p className='text-white'>Years Experience</p>
                    </div>
               </div>
               
          </div>
     );
};

export default Hero;
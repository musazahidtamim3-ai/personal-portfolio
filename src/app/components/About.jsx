import Image from 'next/image';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { FiGlobe, FiPhone } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoMailOutline } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';

const About = () => {
     const infoDetails = [
          { icon: <FaRegUser />, label: 'Name', value: 'MD. Jahidul Islam' },
          { icon: <IoMailOutline />, label: 'Email', value: 'musazahidtamim3@gmail.com' },
          { icon: <HiOutlineLocationMarker />, label: 'Location', value: 'Feni, Bangladesh' },
          { icon: <MdDateRange />, label: 'Date of Birth', value: '24 June 2006' },
          { icon: <FiPhone />, label: 'Phone', value: '+880 1818490324' },
          { icon: <FiGlobe />, label: 'Languages', value: 'English, Bangla' },
     ];

     return (
          <div id='about' className='max-w-7xl my-10 lg:my-24 mx-auto grid grid-cols-1 lg:grid-cols-6 gap-10 px-5 lg:px-0 items-center'>

               {/* Image Section - ল্যাপটপে col-span-2 থাকবে আপনার আগের মতোই */}
               <div className='lg:col-span-2 flex justify-center'>
                    <div className='relative group'>
                         <div className='absolute -inset-2 bg-[#b4f404]/20 rounded-xl blur-lg group-hover:bg-[#b4f404]/30 transition duration-500'></div>
                         <Image
                              src="/aboutHero.png"
                              alt="Profile"
                              height={1000}
                              width={1000}
                              className="relative w-64 lg:w-full h-auto object-cover rounded-xl border border-white/10"
                         />
                    </div>
               </div>

               {/* Content Section - ল্যাপটপে col-span-4 থাকবে */}
               <div className='lg:col-span-4'>
                    <h1 className='text-[#b4f404] font-medium tracking-widest uppercase text-sm'>About Me</h1>
                    <h1 className='text-3xl lg:text-5xl pt-2 font-semibold text-white'>
                         Get to Know me <span className='text-[#b4f404]'>better</span>
                    </h1>

                    <p className='text-gray-400 pt-5 text-sm lg:text-base leading-relaxed'>
                         I am a creator, a problem-solver, and a lifelong learner. With a focus on turning ideas into reality, I specialize in crafting experiences that are not only functional but also visually compelling. My journey is driven by a curiosity to explore new technologies and a desire to build things that matter.
                    </p>

                    {/* Info Grid - এটি ল্যাপটপে ৩টি কলামে এবং মোবাইলে ১টি কলামে দেখাবে */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
                         {infoDetails.map((info, index) => (
                              <div key={index} className='flex flex-col gap-1'>
                                   <div className='flex items-center gap-2 text-[#b4f404]'>
                                        {React.cloneElement(info.icon, { className: 'w-4 h-4' })}
                                        <span className='text-xs font-bold uppercase tracking-wider'>{info.label}</span>
                                   </div>
                                   <p className='text-gray-300 text-sm pl-6 md:pl-0 lg:pl-0'>{info.value}</p>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default About;
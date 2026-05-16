"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
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

     // Mobile friendly staggered animation setup
     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: { staggerChildren: 0.1, delayChildren: 0.05 }
          }
     };

     const itemVariants = {
          hidden: { opacity: 0, y: 20 }, // মোবাইলের জন্য y এক্সিস ৩০ থেকে কমিয়ে ২০ করা হয়েছে যাতে মসৃণ লাগে
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
     };

     return (
          <section id='about' className='max-w-7xl my-16 lg:my-32 mx-auto grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-16 px-6 lg:px-12 items-center relative overflow-hidden'>

               {/* Decorative Background Light Burst */}
               <div className='absolute bottom-0 right-0 w-80 h-80 bg-[#00F5D4]/5 rounded-full blur-[120px] pointer-events-none'></div>

               {/* Left Section - Image Section (col-span-2) */}
               <motion.div
                    className='lg:col-span-2 flex justify-center w-full'
                    initial={{ opacity: 0, y: 30 }} // মোবাইলে সাইড থেকে আসার চেয়ে নিচ থেকে আসা বেশি সুন্দর দেখায়
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }} // amount: 0.2 মানে স্ক্রিনে ২০% আসা মাত্রই অ্যানিমেশন শুরু হবে (মোবাইলের জন্য বেস্ট)
                    transition={{ duration: 0.6, ease: "easeOut" }}
               >
                    <div className='relative group w-72 lg:w-full max-w-[320px] aspect-square lg:aspect-auto lg:h-[400px]'>
                         <div className='absolute -inset-2 bg-gradient-to-tr from-[#00F5D4] to-transparent rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition duration-700'></div>

                         <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00F5D4]/40 to-transparent p-[1.5px] group-hover:from-[#00F5D4] transition-all duration-500'>
                              <div className='w-full h-full bg-slate-950 rounded-2xl overflow-hidden relative'>
                                   <Image
                                        src="/aboutHero.png"
                                        alt="MD. Jahidul Islam"
                                        height={600}
                                        width={600}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                   />
                              </div>
                         </div>
                    </div>
               </motion.div>

               {/* Right Section - Content Section (col-span-4) */}
               <motion.div
                    className='lg:col-span-4'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }} // মোবাইল স্ক্রিনের সামান্য ছোঁয়া লাগলেই কন্টেন্ট ভেসে উঠবে
               >
                    <motion.span variants={itemVariants} className='inline-block text-[#00F5D4] font-semibold tracking-widest uppercase text-xs bg-[#00F5D4]/10 px-3 py-1.5 rounded-md border border-[#00F5D4]/20 mb-4'>
                         About Me
                    </motion.span>

                    <motion.h2 variants={itemVariants} className='text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight'>
                         Get to Know me <span className='bg-gradient-to-r from-[#00F5D4] to-[#0284c7] bg-clip-text text-transparent'>better</span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className='text-slate-400 pt-4 text-sm lg:text-base leading-relaxed font-normal max-w-3xl'>
                         I am a creator, a problem-solver, and a lifelong learner. With a focus on turning ideas into reality, I specialize in crafting experiences that are not only functional but also visually compelling. My journey is driven by a curiosity to explore new technologies and a desire to build things that matter.
                    </motion.p>

                    {/* Info Cards Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8'>
                         {infoDetails.map((info, index) => (
                              <motion.div
                                   key={index}
                                   variants={itemVariants}
                                   whileHover={{ y: -4, borderColor: "rgba(0, 245, 212, 0.4)" }}
                                   whileTap={{ scale: 0.98 }} // মোবাইলে টাচ করলে হালকা দেবে যাওয়ার ইফেক্ট (Haptic feel)
                                   className='flex flex-col gap-2 p-4 bg-slate-900/40 border border-slate-800/80 backdrop-blur-md rounded-xl transition-all duration-300'
                              >
                                   <div className='flex items-center gap-2.5 text-[#00F5D4]'>
                                        <div className='p-1.5 bg-[#00F5D4]/10 rounded-lg border border-[#00F5D4]/10'>
                                             {React.cloneElement(info.icon, { className: 'w-4 h-4' })}
                                        </div>
                                        <span className='text-[11px] font-bold uppercase tracking-widest text-slate-400'>{info.label}</span>
                                   </div>
                                   <p className='text-slate-200 text-sm font-medium pl-0.5 break-words'>{info.value}</p>
                              </motion.div>
                         ))}
                    </div>
               </motion.div>

          </section>
     );
};

export default About;
import Navbar from '@/app/components/shared/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoIosRocket, IoIosArrowBack } from 'react-icons/io';
import { TiTick } from 'react-icons/ti';

const ProjectDetailsPage = async ({ params }) => {
     const { id } = await params;

     // প্রোডাকশনে localhost এর জায়গায় আপনার ডোমেইন বা env ভেরিয়েবল ব্যবহার করবেন
     const res = await fetch("https://personal-portfolio-seven-pied.vercel.app/project.json", { cache: 'no-store' });
     const projects = await res.json();
     const project = projects.find(p => p.id.toString() === id);

     if (!project) return <div className="text-center py-20 text-white">Project not found!</div>;

     return (
          <div className="min-h-screen bg-black text-white">
               <Navbar />

               <div className='max-w-7xl mx-auto my-10 lg:my-20 px-5'>
                    {/* Back Button */}
                    <Link href="/#projects" className='flex items-center gap-2 text-gray-400 hover:text-[#b4f404] transition-all mb-8 group'>
                         <IoIosArrowBack className='group-hover:-translate-x-1 transition-transform' /> Back to Projects
                    </Link>

                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start'>

                         {/* Left Side: Project Image */}
                         <div className='lg:col-span-2 lg:sticky top-24'>
                              <div className='lg:relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2'>
                                   <Image
                                        src={`${project.image}`}
                                        alt={project.title}
                                        height={1200}
                                        width={1200}
                                        className="w-full h-100 object-cover rounded-xl shadow-2xl"
                                   />
                              </div>

                              {/* Links for Mobile (hidden on desktop) */}
                              <div className='flex lg:hidden gap-3 mt-6'>
                                   <Link href={`${project.liveLink}`} target="_blank" className="btn flex-1 flex items-center justify-center gap-2 bg-[#b4f404] text-black font-semibold shadow-[0_0_20px_rgba(180,244,4,0.3)]">
                                        <IoIosRocket /> Live
                                   </Link>
                                   <Link href={`${project.githubLink || '#'}`} target="_blank" className="btn flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold">
                                        <FaGithub /> GitHub
                                   </Link>
                              </div>
                         </div>

                         {/* Right Side: Project Info */}
                         <div className='lg:col-span-3 space-y-8'>
                              <div>
                                   <h1 className='text-3xl lg:text-4xl font-semibold text-white'>
                                        {project.title}
                                   </h1>
                              </div>

                              <div className='space-y-4'>
                                   <h3 className='text-xl font-bold text-gray-200'>Project Overview</h3>
                                   <p className='text-gray-400 leading-relaxed text-lg'>
                                        {project.description}
                                   </p>
                              </div>

                              {/* Tech Stack */}
                              <div className='space-y-4'>
                                   <h3 className='text-xl font-bold text-gray-200'>Technologies Used</h3>
                                   <div className='flex flex-wrap gap-3'>
                                        {project.techStack.map((tech, index) => (
                                             <span
                                                  className='px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-[#b4f404]'
                                                  key={index}
                                             >
                                                  {tech}
                                             </span>
                                        ))}
                                   </div>
                              </div>

                              {/* Features */}
                              <div className='space-y-4 p-6 bg-white/5 border border-white/10 rounded-2xl'>
                                   <h3 className='text-xl font-bold text-gray-200'>Key Features</h3>
                                   <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        {project.features.map((feature, index) => (
                                             <div className='flex items-start gap-3 group' key={index}>
                                                  <div className='mt-1 p-0.5 bg-[#b4f404]/20 rounded-full'>
                                                       <TiTick className='text-[#b4f404] text-lg' />
                                                  </div>
                                                  <p className='text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors'>
                                                       {feature}
                                                  </p>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              {/* Action Buttons for Desktop */}
                              <div className='hidden lg:flex gap-5 pt-5'>
                                   <Link
                                        href={`${project.liveLink}`}
                                        target="_blank"
                                        className="btn bg-[#b4f404] text-black font-semibold hover:scale-105 transition-all flex items-center gap-2 shadow-[0_10px_20px_-10px_rgba(180,244,4,0.5)]"
                                   >
                                        <IoIosRocket className='text-xl' /> Live Demo
                                   </Link>
                                   <Link
                                        href={`${project.githubLink || '#'}`}
                                        target="_blank"
                                        className="btn bg-transparent border border-white/20 text-white font-semibold  hover:bg-white hover:scale-105  hover:text-black transition-all flex items-center gap-2"
                                   >
                                        <FaGithub className='text-xl' /> View Source
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProjectDetailsPage;
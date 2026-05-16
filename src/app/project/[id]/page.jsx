import Navbar from '@/app/components/shared/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoIosRocket, IoIosArrowBack } from 'react-icons/io';
import { TiTick } from 'react-icons/ti';

const ProjectDetailsPage = async ({ params }) => {
     const { id } = await params;

     const res = await fetch("https://personal-portfolio-seven-pied.vercel.app/project.json", { cache: 'no-store' });
     const projects = await res.json();
     const project = projects.find(p => p.id.toString() === id);

     if (!project) {
          return (
               <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center gap-4">
                    <h2 className="text-xl font-bold tracking-wide">Project not found!</h2>
                    <Link href="/#projects" className="text-sm text-[#00F5D4] hover:underline">Back to portfolio</Link>
               </div>
          );
     }

     return (
          <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
               <Navbar />

               <div className='max-w-7xl mx-auto my-12 lg:my-24 px-6 lg:px-12'>

                    {/* Premium Back Button */}
                    <Link
                         href="/#projects"
                         className='inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-400 hover:text-[#00F5D4] transition-colors mb-10 group'
                    >
                         <IoIosArrowBack className='group-hover:-translate-x-1 transition-transform duration-300' />
                         Back to Projects
                    </Link>

                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start'>

                         {/* Left Side: Project Image & Mobile Actions */}
                         <div className='lg:col-span-2 lg:sticky top-28'>
                              <div className='overflow-hidden rounded-2xl border border-slate-900 bg-slate-900/40 p-2.5 backdrop-blur-3xl shadow-2xl'>
                                   <Image
                                        src={`${project.image}`}
                                        alt={project.title}
                                        height={800}
                                        width={800}
                                        priority
                                        className="w-full h-auto object-cover rounded-xl shadow-inner group-hover:scale-[1.02] transition-transform duration-500"
                                   />
                              </div>

                              {/* Action Links for Mobile (hidden on desktop) */}
                              <div className='flex lg:hidden gap-4 mt-6'>
                                   <Link
                                        href={`${project.liveLink}`}
                                        target="_blank"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#00F5D4] text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider active:scale-95 transition-all shadow-[0_0_20px_rgba(0,245,212,0.2)]"
                                   >
                                        <IoIosRocket className='text-sm' /> Live Link
                                   </Link>
                                   <Link
                                        href={`${project.githubLink || '#'}`}
                                        target="_blank"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 border border-slate-800 text-slate-200 font-bold rounded-xl text-xs uppercase tracking-wider active:scale-95 transition-all"
                                   >
                                        <FaGithub className='text-sm' /> GitHub
                                   </Link>
                              </div>
                         </div>

                         {/* Right Side: Project Detailed Info */}
                         <div className='lg:col-span-3 space-y-10'>

                              {/* Title with Gradient Text Style */}
                              <div>
                                   <h1 className='text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight'>
                                        {project.title}
                                   </h1>
                                   <div className='h-[2px] w-20 bg-gradient-to-r from-[#00F5D4] to-[#0284c7] mt-4 rounded-full'></div>
                              </div>

                              {/* Project Overview */}
                              <div className='space-y-4'>
                                   <h3 className='text-lg font-bold uppercase tracking-wider text-slate-200'>Project Overview</h3>
                                   <p className='text-slate-400 leading-relaxed text-base lg:text-lg font-medium'>
                                        {project.description}
                                   </p>
                              </div>

                              {/* Tech Stack Chips */}
                              <div className='space-y-4'>
                                   <h3 className='text-lg font-bold uppercase tracking-wider text-slate-200'>Technologies Used</h3>
                                   <div className='flex flex-wrap gap-2.5'>
                                        {project.techStack.map((tech, index) => (
                                             <span
                                                  key={index}
                                                  className='px-4 py-1.5 bg-slate-900/60 border border-slate-800 rounded-xl text-xs font-semibold text-[#00F5D4] tracking-wide'
                                             >
                                                  {tech}
                                             </span>
                                        ))}
                                   </div>
                              </div>

                              {/* Key Features Section */}
                              <div className='space-y-4 p-6 lg:p-8 bg-slate-900/30 border border-slate-900 rounded-2xl backdrop-blur-3xl'>
                                   <h3 className='text-lg font-bold uppercase tracking-wider text-slate-200 mb-2'>Key Features</h3>
                                   <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                        {project.features.map((feature, index) => (
                                             <div className='flex items-start gap-3 group' key={index}>
                                                  <div className='mt-1 p-0.5 bg-[#00F5D4]/10 rounded-lg border border-[#00F5D4]/20 shrink-0'>
                                                       <TiTick className='text-[#00F5D4] text-base' />
                                                  </div>
                                                  <p className='text-slate-300 text-sm leading-relaxed font-medium group-hover:text-white transition-colors duration-200'>
                                                       {feature}
                                                  </p>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              {/* Action Buttons for Desktop */}
                              <div className='hidden lg:flex items-center gap-5 pt-4'>
                                   <Link
                                        href={`${project.liveLink}`}
                                        target="_blank"
                                        className="flex items-center gap-2 px-6 py-3.5 bg-[#00F5D4] text-slate-950 font-bold rounded-xl text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(0,245,212,0.3)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
                                   >
                                        <IoIosRocket className='text-base' /> Live Demo
                                   </Link>
                                   <Link
                                        href={`${project.githubLink || '#'}`}
                                        target="_blank"
                                        className="flex items-center gap-2 px-6 py-3.5 bg-slate-950 border border-slate-800 text-slate-200 font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-slate-900 hover:border-slate-700 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
                                   >
                                        <FaGithub className='text-base' /> View Source
                                   </Link>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProjectDetailsPage;
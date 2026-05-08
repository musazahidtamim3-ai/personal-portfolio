import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInfoCircle } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';

const Project = async () => {
     // API Call
     const res = await fetch("http://localhost:3000/project.json", { cache: 'no-store' });
     const projects = await res.json();

     return (
          <div id='projects' className='max-w-7xl mx-auto my-20 px-5 lg:px-0'>
               {/* Section Header */}
               <div className='mb-10 text-left lg:text-center'>
                    <p className='text-[#b4f404] uppercase tracking-widest text-xs'>Project Collections</p>
                    <h1 className='text-3xl lg:text-4xl pt-2 font-bold text-white'>Some of My Recent Works</h1>
               </div>

               {/* Grid Container: Mobile 1, Tablet 2, Desktop 4 */}
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                         projects.map(project => (
                              <div key={project.id} className='group bg-[#111111] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-[#b4f404]/50 transition-all duration-300'>

                                   {/* Image Wrapper with Hover Effects */}
                                   <div className='relative h-44 w-full overflow-hidden'>
                                        <Image
                                             src={project.image}
                                             alt={project.title}
                                             height={500}
                                             width={800}
                                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Black Overlay & Icons on Hover */}
                                        <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5'>
                                             <Link href={`${project.liveLink}`} target="_blank" title="Live Preview" className='text-[#b4f404] hover:scale-125 transition-transform'>
                                                  <IoIosRocket size={26} />
                                             </Link>
                                             <Link href={project.githubLink || "#"} target="_blank" title="GitHub Source" className='text-white hover:scale-125 transition-transform'>
                                                  <FaGithub size={26} />
                                             </Link>
                                        </div>
                                   </div>

                                   {/* Project Content */}
                                   <div className='p-5 flex flex-col flex-grow'>
                                        <h1 className='text-lg text-[#b4f404] font-bold truncate'>{project.title}</h1>

                                        {/* Line Clamp implementation */}
                                        <p className='pt-2 text-gray-400 text-sm line-clamp-2 min-h-[40px]'>
                                             {project.description}
                                        </p>

                                        {/* Buttons Wrapper */}
                                        <div className='flex gap-3 mt-6'>
                                             <Link
                                                  href={`${project.liveLink}`}
                                                  className="flex-1 flex items-center justify-center gap-2 btn font-bold bg-[#b4f404] text-black hover:bg-[#c9ff2b] transition-colors"
                                             >
                                                  Live Link
                                             </Link>
                                             <Link
                                                  href={`/project/${project.id}`}
                                                  className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold bg-transparent text-[#b4f404] border border-[#b4f404] rounded hover:bg-[#b4f404]/10 transition-all"
                                             >
                                                  View Details
                                             </Link>
                                        </div>
                                   </div>
                              </div>
                         ))
                    }
               </div>
          </div>
     );
};

export default Project;
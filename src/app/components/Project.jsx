import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';

// ক্লায়েন্ট সাইড গ্রিড এবং রানিং বর্ডার অ্যানিমেশন র‍্যাপার ইমপোর্ট
import { ClientAnimationWrapper, ClientCardWrapper } from './ProjectClientWrappers';

const Project = async () => {
     // API Call (Server Side Execution)
     let projects = [];
     try {
          const res = await fetch("https://personal-portfolio-seven-pied.vercel.app/project.json", { cache: 'no-store' });
          if (!res.ok) throw new Error('Failed to fetch projects');
          projects = await res.json();
     } catch (error) {
          console.error("Project Fetch Error:", error);
          return <p className="text-center text-slate-500 py-10">Error loading projects. Please check connection.</p>;
     }

     return (
          <section id='projects' className='max-w-7xl mx-auto my-16 lg:my-32 px-6 lg:px-12 relative overflow-hidden bg-transparent'>

               {/* Decorative Background Blur Burst */}
               <div className='absolute bottom-0 left-0 w-80 h-80 bg-[#00F5D4]/5 rounded-full blur-[120px] pointer-events-none'></div>

               {/* Section Header */}
               <div className='mb-12 lg:mb-16 text-left lg:text-center'>
                    <span className='inline-block text-[#00F5D4] font-semibold tracking-widest uppercase text-xs bg-[#00F5D4]/10 px-3 py-1.5 rounded-md border border-[#00F5D4]/20 mb-3'>
                         Project Collections
                    </span>
                    <h2 className='text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto'>
                         Some of My Recent Works
                    </h2>
               </div>

               {/* Unified Staggered Animation Container via Client Wrapper */}
               <ClientAnimationWrapper>
                    {projects.map(project => (
                         <ClientCardWrapper key={project.id}>

                              {/* CONTINUOUS ROTATING BORDER LIGHT (Tech সেকশনের মতো অলওয়েজ একটিভ) */}
                              <div className='absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_40%,#00F5D4_70%,transparent_100%)] animate-border-spin pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300'></div>

                              {/* Inside Card Content Box (Glassmorphism + Slate-950) */}
                              <div className='w-full h-full bg-slate-950 p-1.5 rounded-2xl overflow-hidden flex flex-col relative z-10'>

                                   {/* Image Wrapper with Interaction */}
                                   <div className='relative h-48 w-full overflow-hidden rounded-md bg-slate-900'>
                                        <Image
                                             src={project.image}
                                             alt={project.title}
                                             height={600}
                                             width={900}
                                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                             priority
                                        />

                                        {/* Radial Inner Glow on Image Hover */}
                                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-5'>
                                             <Link href={`${project.liveLink}`} target="_blank" title="Live Preview" className='text-[#00F5D4] hover:scale-125 transition-transform'>
                                                  <IoIosRocket size={28} />
                                             </Link>
                                             <Link href={project.githubLink || "#"} target="_blank" title="GitHub Source" className='text-white hover:scale-125 transition-transform'>
                                                  <FaGithub size={28} />
                                             </Link>
                                        </div>
                                   </div>

                                   {/* Project Content Body */}
                                   <div className='p-5 flex flex-col flex-grow'>
                                        <h3 className='text-lg lg:text-xl text-[#00F5D4] font-bold tracking-tight truncate'>{project.title}</h3>

                                        {/* Dynamic Text Truncation */}
                                        <p className='pt-2 text-slate-400 text-sm leading-relaxed font-normal line-clamp-2 min-h-[44px]'>
                                             {project.description}
                                        </p>

                                        {/* Tech Stack Badges */}
                                        <div className='flex gap-2 mt-4'>
                                             <span className='text-[10px] font-semibold uppercase tracking-widest text-slate-500 bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-800/80'>MERN Stack</span>
                                             <span className='text-[10px] font-semibold uppercase tracking-widest text-slate-500 bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-800/80'>Web App</span>
                                        </div>

                                        {/* Call to Actions Wrapper */}
                                        <div className='grid grid-cols-2 gap-3 mt-6'>
                                             <Link
                                                  href={`${project.liveLink}`}
                                                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-[#00F5D4] text-slate-950 hover:bg-[#77ada6] transition-all hover:shadow-[0_0_20px_rgba(0,245,212,0.3)]"
                                             >
                                                  Live Preview
                                             </Link>
                                             <Link
                                                  href={`/project/${project.id}`}
                                                  className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold bg-transparent text-[#00F5D4] border border-slate-800 rounded-lg hover:border-[#00F5D4] hover:bg-[#00F5D4]/10 transition-all backdrop-blur-sm"
                                             >
                                                  View Details
                                             </Link>
                                        </div>
                                   </div>
                              </div>
                         </ClientCardWrapper>
                    ))}
               </ClientAnimationWrapper>

          </section>
     );
};

export default Project;

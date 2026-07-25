'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { ClientAnimationWrapper, ClientCardWrapper } from './ProjectClientWrappers';
import { useTheme } from '../ThemeContext';

const ProjectContent = ({ projects }) => {
     const { isDark } = useTheme();

     return (
          <section
               id='projects'
               className={`w-full py-16 lg:py-28 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
                    }`}
          >
               <div className={`absolute -top-10 -right-10 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none transition-all duration-500 ${isDark ? 'bg-purple-600/20' : 'bg-purple-400/25'
                    }`} />

               <div className={`absolute -bottom-10 -left-10 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none transition-all duration-500 ${isDark ? 'bg-indigo-600/20' : 'bg-purple-300/35'
                    }`} />

               {/* 💜 Center Soft Ambient Glow */}
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[180px] pointer-events-none ${isDark ? 'bg-purple-900/10' : 'bg-purple-200/40'
                    }`} />

               <div className='max-w-7xl mx-auto px-6 lg:px-12 relative z-10'>

                    {/* Section Header */}
                    <div className='mb-12 lg:mb-16 text-left lg:text-center space-y-3'>
                         <span className={`inline-block font-semibold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full border shadow-sm transition-all ${isDark
                                   ? 'text-purple-400 bg-purple-500/10 border-purple-500/20'
                                   : 'text-purple-700 bg-purple-100 border-purple-200'
                              }`}>
                              Project Collections
                         </span>
                         <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto ${isDark ? 'text-white' : 'text-slate-900'
                              }`}>
                              Some of My <span className='bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent'>Recent Works</span>
                         </h2>
                    </div>

                    {/* Cards Animation Grid */}
                    <ClientAnimationWrapper>
                         {projects?.map(project => (
                              <ClientCardWrapper key={project.id}>

                                   {/* Clean Card Box with Smooth Purple Hover Border */}
                                   <div className={`group relative w-full h-full rounded-2xl overflow-hidden transition-all duration-300 border ${isDark
                                             ? 'bg-slate-900/90 border-slate-800 hover:border-purple-500/50 shadow-xl'
                                             : 'bg-white/90 backdrop-blur-sm border-purple-100 hover:border-purple-300 shadow-md hover:shadow-xl'
                                        }`}>

                                        {isDark && (
                                             <div className='absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_40%,#A855F7_70%,#EC4899_85%,transparent_100%)] animate-border-spin pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300' />
                                        )}

                                        {/* Inner Card Content */}
                                        <div className={`w-full h-full p-4 flex flex-col relative z-10 ${isDark ? 'bg-slate-950/80' : 'bg-white'
                                             }`}>

                                             {/* Image Box */}
                                             <div className='relative h-48 w-full overflow-hidden rounded-xl bg-slate-100'>
                                                  <Image
                                                       src={project.bannerImage}
                                                       alt={project.projectName}
                                                       height={600}
                                                       width={900}
                                                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                       priority
                                                  />

                                                  {/* Hover Icons Overlay */}
                                                  <div className='absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                                                       {project.liveLink && (
                                                            <a
                                                                 href={project.liveLink}
                                                                 target="_blank"
                                                                 title="Live Preview"
                                                                 className='p-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full hover:scale-110 transition-all shadow-lg'
                                                            >
                                                                 <IoIosRocket size={20} />
                                                            </a>
                                                       )}

                                                       {(project.githubClient || project.githubLink) && (
                                                            <Link
                                                                 href={project.githubClient || project.githubLink || "#"}
                                                                 target="_blank"
                                                                 title="GitHub Source"
                                                                 className='p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full hover:scale-110 transition-all shadow-lg'
                                                            >
                                                                 <FaGithub size={20} />
                                                            </Link>
                                                       )}
                                                  </div>
                                             </div>

                                             {/* Content Details */}
                                             <div className='pt-5 flex flex-col flex-grow justify-between'>
                                                  <div>
                                                       <h3 className={`text-lg lg:text-xl font-bold tracking-tight truncate transition-colors ${isDark
                                                                 ? 'text-purple-300 group-hover:text-purple-400'
                                                                 : 'text-slate-900 group-hover:text-purple-600'
                                                            }`}>
                                                            {project.projectName}
                                                       </h3>

                                                       <p className={`pt-2 text-sm leading-relaxed font-normal line-clamp-2 min-h-[44px] ${isDark ? 'text-slate-400' : 'text-slate-600'
                                                            }`}>
                                                            {project.briefDescription}
                                                       </p>

                                                       {/* Tech Badges */}
                                                       <div className='flex gap-1.5 mt-4 flex-wrap'>
                                                            {project.technologiesUsed?.map((tech, idx) => (
                                                                 <span key={idx} className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${isDark
                                                                           ? 'text-purple-300 bg-purple-500/10 border-purple-500/20'
                                                                           : 'text-purple-700 bg-purple-50 border-purple-200/80'
                                                                      }`}>
                                                                      {tech}
                                                                 </span>
                                                            ))}
                                                       </div>
                                                  </div>

                                                  {/* Buttons */}
                                                  <div className='grid grid-cols-2 gap-3 mt-6'>
                                                       <Link
                                                            href={project.liveLink || '#'}
                                                            target="_blank"
                                                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-md hover:shadow-purple-500/25"
                                                       >
                                                            Live Preview
                                                       </Link>
                                                       <Link
                                                            href={`/project/${project.id}`}
                                                            className={`flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl transition-all border ${isDark
                                                                      ? 'text-purple-300 border-slate-800 hover:border-purple-500 hover:bg-purple-500/10'
                                                                      : 'text-slate-700 border-purple-100 bg-slate-50 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200'
                                                                 }`}
                                                       >
                                                            View Details
                                                       </Link>
                                                  </div>

                                             </div>
                                        </div>
                                   </div>

                              </ClientCardWrapper>
                         ))}
                    </ClientAnimationWrapper>

               </div>
          </section>
     );
};

export default ProjectContent;
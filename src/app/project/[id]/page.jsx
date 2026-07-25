'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTheme } from '@/app/ThemeContext';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle, FaLightbulb } from 'react-icons/fa';

const ProjectDetails = () => {
     const params = useParams();
     const router = useRouter();
     const { isDark } = useTheme();

     const [project, setProject] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          const fetchProjectDetails = async () => {
               try {
                    setLoading(true);

                    const response = await fetch('/project.json');

                    if (!response.ok) {
                         throw new Error('Failed to fetch project data');
                    }

                    const data = await response.json();

                    const projectId = params?.id;

                    if (projectId) {
                         const foundProject = data.find((p) => String(p.id) === String(projectId));
                         setProject(foundProject || null);
                    }
               } catch (err) {
                    console.error('Error fetching project:', err);
                    setError(err.message);
               } finally {
                    setLoading(false);
               }
          };

          if (params?.id) {
               fetchProjectDetails();
          }
     }, [params]);

     if (loading) {
          return (
               <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
                    <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
               </div>
          );
     }

     if (error || !project) {
          return (
               <div className={`min-h-screen flex flex-col items-center justify-center gap-4 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
                    <h2 className="text-2xl font-bold">{error ? 'Error Loading Data!' : 'Project Not Found!'}</h2>
                    <button
                         onClick={() => router.push('/#projects')}
                         className="px-5 py-2.5 bg-purple-600 text-white rounded-xl text-sm font-semibold shadow-md hover:bg-purple-700 transition-all"
                    >
                         Back to Projects
                    </button>
               </div>
          );
     }

     return (
          <main className={`min-h-screen py-12 lg:py-20 transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
               <div className='max-w-5xl mx-auto px-6 lg:px-12 relative z-10'>

                    {/* Ambient Glow */}
                    <div className={`absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[160px] pointer-events-none ${isDark ? 'bg-purple-500/10' : 'bg-purple-300/30'}`} />

                    {/* Back Button */}
                    <motion.div
                         initial={{ opacity: 0, x: -10 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.4 }}
                         className='mb-8'
                    >
                         <Link
                              href="/#projects"
                              className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl border transition-all ${isDark
                                   ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/50'
                                   : 'bg-white border-slate-200 text-slate-700 hover:text-purple-700 hover:border-purple-300 shadow-sm'
                                   }`}
                         >
                              <FaArrowLeft className='text-xs' /> Back to Projects
                         </Link>
                    </motion.div>

                    {/* Header Section */}
                    <motion.div
                         initial={{ opacity: 0, y: 15 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5 }}
                         className='space-y-4 mb-8'
                    >
                         <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight'>
                              {project.projectName}
                         </h1>

                         {/* Action Buttons */}
                         <div className='flex flex-wrap gap-4 pt-2'>
                              {project.liveLink && (
                                   <a
                                        href={project.liveLink}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2.5 rounded-xl shadow-md hover:opacity-95 transition-all hover:scale-[1.02]'
                                   >
                                        Live Preview <FaExternalLinkAlt className='text-xs' />
                                   </a>
                              )}

                              {project.githubClient && (
                                   <a
                                        href={project.githubClient}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={`inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl border transition-all hover:scale-[1.02] ${isDark
                                             ? 'bg-slate-900 border-slate-800 text-slate-200 hover:text-white hover:border-slate-700'
                                             : 'bg-white border-slate-300 text-slate-800 hover:border-slate-400 shadow-sm'
                                             }`}
                                   >
                                        <FaGithub className='text-base' /> GitHub Repository
                                   </a>
                              )}
                         </div>
                    </motion.div>

                    {/* Banner Image */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6, delay: 0.1 }}
                         className={`relative w-full h-[190px] lg:h-[480px] rounded-2xl overflow-hidden border mb-10 ${isDark ? 'border-slate-800 shadow-2xl' : 'border-slate-200 shadow-lg'}`}
                    >
                         <Image
                              src={project.bannerImage}
                              alt={project.projectName}
                              fill
                              className='object-contain'
                              priority
                         />
                    </motion.div>

                    {/* Main Details Section */}
                    <div className='space-y-10'>

                         {/* Brief Description & Tech Stack */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className={`p-6 lg:p-8 rounded-2xl border transition-all ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}
                         >
                              <h2 className='text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>
                                   Overview
                              </h2>
                              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                   {project.briefDescription}
                              </p>

                              <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                   Technologies Used
                              </h3>
                              <div className='flex flex-wrap gap-2.5'>
                                   {project.technologiesUsed?.map((tech, index) => (
                                        <span
                                             key={index}
                                             className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${isDark
                                                  ? 'bg-purple-500/10 border-purple-500/20 text-purple-300'
                                                  : 'bg-purple-50 border-purple-200 text-purple-700'
                                                  }`}
                                        >
                                             {tech}
                                        </span>
                                   ))}
                              </div>
                         </motion.div>

                         {/* Challenges & Future Improvements Grid */}
                         <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                              {/* Key Challenges */}
                              <motion.div
                                   initial={{ opacity: 0, x: -20 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.5, delay: 0.3 }}
                                   className={`p-6 lg:p-8 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}
                              >
                                   <div className='flex items-center gap-2.5 mb-5'>
                                        <FaCheckCircle className='text-purple-500 text-lg' />
                                        <h2 className='text-xl font-bold'>Key Challenges</h2>
                                   </div>
                                   <ul className='space-y-3.5'>
                                        {project.challenges?.map((challenge, idx) => (
                                             <li key={idx} className='flex items-start gap-3 text-sm leading-relaxed'>
                                                  <span className='w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0' />
                                                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                                                       {challenge}
                                                  </span>
                                             </li>
                                        ))}
                                   </ul>
                              </motion.div>

                              {/* Future Improvements */}
                              <motion.div
                                   initial={{ opacity: 0, x: 20 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.5, delay: 0.3 }}
                                   className={`p-6 lg:p-8 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}
                              >
                                   <div className='flex items-center gap-2.5 mb-5'>
                                        <FaLightbulb className='text-indigo-500 text-lg' />
                                        <h2 className='text-xl font-bold'>Future Improvements</h2>
                                   </div>
                                   <ul className='space-y-3.5'>
                                        {project.futureImprovements?.map((improvement, idx) => (
                                             <li key={idx} className='flex items-start gap-3 text-sm leading-relaxed'>
                                                  <span className='w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0' />
                                                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                                                       {improvement}
                                                  </span>
                                             </li>
                                        ))}
                                   </ul>
                              </motion.div>

                         </div>

                    </div>
               </div>
          </main>
     );
};

export default ProjectDetails;
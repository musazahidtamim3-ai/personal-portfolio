'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

const Blog = () => {
     const { isDark } = useTheme();

     const blogs = [
          {
               id: 1,
               title: "Have You Ever Wondered How the Internet Really Works ?",
               description: "We all search on Google, watch videos on YouTube, use Facebook or send messages to our friends daily.But do you ever think, how a lot of data reaches your mobile or computer by just clicking a button?Mainly, the Internet is a huge network which connects millions of devices across the world.It does notmatter where you are, you can see information about anything in just a few seconds.Suppose, you want to send a letter to your friend’s home.You write your friend’s address on anenvelope.Then the postal service delivers it through several post offices.",
          }
     ];

     return (
          <section
               id='blog'
               className={`w-full py-16 lg:py-24 transition-colors duration-500 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
                    }`}
          >
               <div className="max-w-5xl mx-auto px-6 lg:px-12">

                    {/* Section Header */}
                    <div className='text-center mb-12 space-y-3'>
                         <span className={`inline-block font-semibold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full border shadow-sm ${isDark
                              ? 'text-purple-400 bg-purple-500/10 border-purple-500/20'
                              : 'text-purple-700 bg-purple-100 border-purple-200'
                              }`}>
                              Articles & News
                         </span>
                         <h2 className='text-3xl lg:text-5xl font-extrabold tracking-tight'>
                              Recent <span className='bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent'>Blog Post</span>
                         </h2>
                    </div>

                    {/* Card */}
                    <div className="w-full">
                         {blogs.map((blog) => (
                              <motion.div
                                   key={blog.id}
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ duration: 0.5 }}
                                   className={`group flex flex-col md:flex-row items-stretch p-3 md:p-4 rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl w-full ${isDark
                                        ? 'bg-slate-900/60 border-slate-800 hover:border-purple-500/50'
                                        : 'bg-white border-slate-200 hover:border-purple-300 shadow-lg'
                                        }`}
                              >

                                   {/* Content: stacks under image on mobile, sits beside it from md up */}
                                   <div className="w-full md:w-[64%] p-4 md:p-6 flex flex-col justify-between gap-4">
                                        <div className="space-y-3">
                                             <h3 className={`text-lg lg:text-2xl font-bold leading-snug transition-colors duration-300 group-hover:text-purple-400 ${isDark ? 'text-slate-100' : 'text-slate-800'
                                                  }`}>
                                                  {blog.title}
                                             </h3>
                                             <p className={`text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none ${isDark ? 'text-slate-400' : 'text-slate-600'
                                                  }`}>
                                                  {blog.description}
                                             </p>
                                        </div>

                                        {/* Read More Link */}
                                        <div className="pt-2">
                                             <Link
                                                  href={`/blog/${blog.id}`}
                                                  className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-purple-500 hover:text-purple-400 transition-colors uppercase tracking-wider"
                                             >
                                                  Read More <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                                             </Link>
                                        </div>
                                   </div>
                              </motion.div>
                         ))}
                    </div>

               </div>
          </section>
     );
};

export default Blog;
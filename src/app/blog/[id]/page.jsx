'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTheme } from '@/app/ThemeContext';
import { FaArrowLeft, FaCalendarAlt, FaUser } from 'react-icons/fa';

const BlogDetails = () => {
     const params = useParams();
     const { id } = params;
     const { isDark } = useTheme();

     const blogData = {
          title: "Have You Ever Wondered How the Internet Really Works?",
          author: "Jahid",
          date: "Jul 25, 2026",
          image: "/blog.png",
     };

     return (
          <main className={`min-h-screen py-12 lg:py-20 transition-colors duration-500 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
               }`}>
               <div className="mx-auto px-6" style={{ maxWidth: '64rem' }}>

                    {/* Back Button */}
                    <Link
                         href="/#blog"
                         className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all mb-8 border ${isDark
                              ? 'bg-slate-900 border-slate-800 text-purple-400 hover:bg-slate-800'
                              : 'bg-white border-slate-200 text-purple-600 hover:bg-slate-100 shadow-sm'
                              }`}
                    >
                         <FaArrowLeft /> Back to Home
                    </Link>

                    {/* Blog Header */}
                    <div className="space-y-4 mb-8">
                         <div className="flex items-center gap-4 text-xs font-medium text-purple-500">
                              <span className="flex items-center gap-1.5"><FaCalendarAlt /> {blogData.date}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1.5"><FaUser /> {blogData.author}</span>
                         </div>
                         <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug">
                              {blogData.title}
                         </h1>
                    </div>

                    {/* Cover Image Container */}
                    <div className={`w-full rounded-2xl overflow-hidden mb-10 shadow-xl border flex justify-center items-center ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-100 border-slate-200'
                         }`}>
                         <Image
                              src={blogData.image}
                              alt={blogData.title}
                              width={800}
                              height={450}
                              priority
                              className="w-full h-35 object-cover rounded-2xl"
                         />
                    </div>

                    {/* Blog Content — Hardcoded with styled subtitles */}
                    <article className={`text-sm md:text-base leading-relaxed space-y-6 ${isDark ? 'text-slate-300' : 'text-slate-700'
                         }`}>

                         <h2 className={`text-xl md:text-2xl font-bold pb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                              Introduction
                         </h2>
                         <p>
                              We all search on Google, watch videos on YouTube, use Facebook or send messages to our friends daily.
                              But do you ever think, how a lot of data reaches your mobile or computer by just clicking a button?
                              Mainly, the Internet is a huge network which connects millions of devices across the world. It does not
                              matter where you are, you can see information about anything in just a few seconds.
                         </p>
                         <br />

                         <h2 className={`text-xl md:text-2xl font-bold pb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                              Real World Analogy
                         </h2>
                         <p>
                              Suppose, you want to send a letter to your friend's home. You write your friend's address on an
                              envelope. Then the postal service delivers it through several post offices. The Internet also works like
                              that. When you want to open a website, your device sends a request to that website's server through
                              several routers and networks. The server understands the request and sends necessary data to your
                              device.
                         </p>
                         <br />

                         <h2 className={`text-xl md:text-2xl font-bold pb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                              What Happens Step by Step
                         </h2>
                         <p>
                              <strong>Step-1:</strong> You write a website name like Google.com<br />
                              <strong>Step-2:</strong> Computers don't understand website names directly. So, DNS (Domain Name System)
                              converts the website's domain name to an IP Address. It's called the internet's phonebook.<br />
                              <strong>Step-3:</strong> Your request goes to the right server by many routers and optical fibers.<br />
                              <strong>Step-4:</strong> The server sends your requested web page in small data packets.<br />
                              <strong>Step-5:</strong> Your browser, such as Chrome, Firefox reassembles the data and shows you the full webpage.
                         </p>
                         <p>This full process happens in less than 1 second.</p>
                         <br />

                         <h2 className={`text-xl md:text-2xl font-bold pb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                              Why Does It Use Data Packets
                         </h2>
                         <p>
                              Imagine sending your belongings in several small boxes instead of one large box. If one box gets lost,
                              only that box needs to be sent again. The internet works the same way using data packets.
                         </p>
                         <br />

                         <h2 className={`text-xl md:text-2xl font-bold pb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                              Why is the Internet so Important for Us
                         </h2>
                         <p>
                              If we don't have the internet, we can't transfer data within a few seconds. Our online classes, video calls,
                              social media, online banking, e-commerce and etc. are dependent on the Internet.
                         </p>
                         <br />

                         <h2 className={`text-xl md:text-2xl font-bold pb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                              Conclusion
                         </h2>
                         <p>
                              In simple words, the internet is a huge communication system for millions of computers in the world.
                              When you want to open a website, your device sends a request on the server, the server sends data to
                              your devices and your browser shows you all the data in an organized way. The full process happens so
                              quickly that we can't understand what big technology is working here.
                         </p>

                    </article>

               </div>
          </main>
     );
};

export default BlogDetails;
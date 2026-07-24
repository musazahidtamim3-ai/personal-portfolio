'use client';
import React from 'react';
import { useTheme } from '@/app/ThemeContext';

const Logo = ({ onClick }) => {
     const { isDark } = useTheme();

     return (
          <div
               onClick={onClick}
               className="group flex items-center gap-1.5 cursor-pointer select-none py-1"
          >
               {/* Monogram / Icon Box */}
               <div className={`relative flex items-center justify-center w-9 h-9 rounded-xl font-extrabold text-lg transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 ${isDark
                         ? 'bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 text-white shadow-lg shadow-purple-950/40'
                         : 'bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 text-white shadow-md shadow-purple-500/20'
                    }`}>
                    {/* Glowing Backdrop for Dark mode */}
                    <div className="absolute inset-0 bg-purple-500/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <span className="relative z-10 tracking-tighter">J</span>
               </div>

               {/* Typography Text */}
               <div className="flex flex-col">
                    <div className="flex items-center">
                         {/* JAHID Text */}
                         <span className={`text-2xl font-black tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'
                              }`}>
                              jahid
                         </span>

                         {/* Stylish Animated Dot */}
                         <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 ml-0.5 mt-2 animate-pulse" />
                    </div>

                    {/* Subtitle Accent Line */}
                    <span className="text-[9px] font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-500 bg-clip-text text-transparent -mt-1 opacity-90">
                         Developer
                    </span>
               </div>
          </div>
     );
};

export default Logo;
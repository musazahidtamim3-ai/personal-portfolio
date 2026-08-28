'use client'
import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { useTheme } from '@/app/ThemeContext';

const GlobalLoader = ({ finishLoading }) => {
     const { isDark } = useTheme();
     const [progress, setProgress] = useState(0);

     useEffect(() => {
          const controls = animate(0, 100, {
               duration: 1.2,
               ease: [0.22, 1, 0.36, 1],
               onUpdate: (latest) => setProgress(Math.round(latest)),
               onComplete: () => {
                    setTimeout(() => {
                         finishLoading();
                    }, 200);
               }
          });

          return () => controls.stop();
     }, [finishLoading]);

     return (
          <motion.div
               initial={{ opacity: 1 }}
               exit={{ opacity: 0, scale: 1.05 }}
               transition={{ duration: 0.4, ease: "easeInOut" }}
               className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none transition-colors duration-500 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
                    }`}
          >
               {/* Ambient Background Glow Effect */}
               <div className={`absolute w-96 h-96 rounded-full blur-[140px] pointer-events-none animate-pulse ${isDark ? 'bg-purple-600/20' : 'bg-purple-300/40'
                    }`} />

               <div className="relative flex flex-col items-center gap-8 max-w-sm w-full px-8 z-10">

                    {/* Glowing Logo / Brand */}
                    <motion.div
                         initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.3 }}
                         className="text-center space-y-2"
                    >
                         <h2 className="text-3xl font-black tracking-widest uppercase bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                              Jahidul Islam
                         </h2>
                         <p className={`text-[10px] font-bold tracking-[0.3em] uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'
                              }`}>
                              Initializing Portfolio
                         </p>
                    </motion.div>

                    {/* Main Progress Bar Container */}
                    <div className="w-full relative flex flex-col items-center gap-3">
                         <div className={`w-full h-[5px] rounded-full overflow-hidden relative shadow-inner ${isDark ? 'bg-slate-900 border border-slate-800' : 'bg-slate-200 border border-slate-300'
                              }`}>
                              {/* Glowing Moving Progress Line */}
                              <motion.div
                                   className="h-full bg-linear-to-r from-purple-500  to-indigo-500 rounded-full relative"
                                   style={{ width: `${progress}%` }}
                              >
                                   {/* Leading Edge Glow Bead */}
                                   <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
                              </motion.div>
                         </div>

                         {/* Percentage Counter Indicator */}
                         <div className="flex items-center justify-between w-full px-1">
                              <span className={`text-[11px] font-semibold tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'
                                   }`}>
                                   LOADING
                              </span>
                              <span className="text-xs font-mono font-extrabold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                                   {progress}%
                              </span>
                         </div>
                    </div>

               </div>
          </motion.div>
     );
};

export default GlobalLoader;
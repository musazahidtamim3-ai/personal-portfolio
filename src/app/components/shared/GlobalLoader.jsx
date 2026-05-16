'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GlobalLoader = ({ finishLoading }) => {
     const [progress, setProgress] = useState(0);

     useEffect(() => {
          // ৫ সেকেন্ডে (৫০০০ মিলিমেকেন্ড) প্রগ্রেস বার ১০০% করার জন্য ইন্টারভাল
          const duration = 5000;
          const intervalTime = 50; // প্রতি ৫০ মিলিমেকেন্ড পর পর আপডেট হবে
          const step = (100 / duration) * intervalTime;

          const timer = setInterval(() => {
               setProgress((prev) => {
                    if (prev >= 100) {
                         clearInterval(timer);
                         setTimeout(() => {
                              finishLoading(); // ১০০% হওয়ার পর লোডার রিমুভ হবে
                         }, 400); // একটু স্মুথ ট্রানজিশন গ্যাপ
                         return 100;
                    }
                    return prev + step;
               });
          }, intervalTime);

          return () => clearInterval(timer);
     }, [finishLoading]);

     return (
          <motion.div
               initial={{ opacity: 1 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.5, ease: "easeInOut" }}
               className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white select-none"
          >
               {/* Ambient Background Glow Effect */}
               <div className='absolute w-80 h-80 bg-[#00F5D4]/10 rounded-full blur-[130px] pointer-events-none animate-pulse'></div>

               <div className="relative flex flex-col items-center gap-6 max-w-sm w-full px-8">

                    {/* Glowing Logo / Brand */}
                    <div className="text-center space-y-1">
                         <h2 className="text-2xl font-extrabold tracking-widest uppercase bg-gradient-to-r from-[#00F5D4] to-[#0284c7] bg-clip-text text-transparent animate-pulse">
                              Jahidul Islam
                         </h2>
                         <p className="text-xs text-slate-500 font-semibold tracking-wider">
                              INITIALIZING PORTFOLIO
                         </p>
                    </div>

                    {/* Main Progress Bar Container */}
                    <div className="w-full h-[6px] bg-slate-900/80 rounded-full overflow-hidden p-[1px] border border-slate-800 relative">
                         {/* Glowing Moving Progress Line */}
                         <motion.div
                              className="h-full bg-gradient-to-r from-[#00F5D4] to-[#0284c7] rounded-full shadow-[0_0_15px_rgba(0,245,212,0.6)]"
                              style={{ width: `${progress}%` }}
                              transition={{ ease: "linear" }}
                         />
                    </div>

                    {/* Percentage Counter Indicator */}
                    <div className="text-center">
                         <span className="text-sm font-mono font-bold text-[#00F5D4] bg-[#00F5D4]/5 border border-[#00F5D4]/10 px-3 py-1 rounded-md">
                              {Math.round(progress)}%
                         </span>
                    </div>
               </div>
          </motion.div>
     );
};

export default GlobalLoader;
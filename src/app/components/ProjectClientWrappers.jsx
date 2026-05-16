"use client";
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
     hidden: { opacity: 0 },
     visible: {
          opacity: 1,
          transition: {
               staggerChildren: 0.08,
               delayChildren: 0.1
          }
     }
};

const cardVariants = {
     hidden: { opacity: 0, y: 25 },
     visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" }
     }
};

// গ্রিড কন্টেইনার অ্যানিমেশন
export const ClientAnimationWrapper = ({ children }) => {
     return (
          <motion.div
               className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10'
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.1 }}
          >
               {/* ক্লায়েন্ট সাইড থেকে গ্লোবাল অ্যানিমেশন ইনজেক্ট করা হচ্ছে */}
               <style jsx global>{`
                    @keyframes border-rotate {
                         100% { transform: rotate(360deg); }
                    }
                    .animate-border-spin {
                         animation: border-rotate 5s linear infinite;
                    }
               `}</style>
               {children}
          </motion.div>
     );
};

// ইন্ডিভিজুয়াল প্রজেক্ট কার্ড অ্যানিমেশন
export const ClientCardWrapper = ({ children }) => {
     return (
          <motion.div
               variants={cardVariants}
               whileHover={{ y: -5 }}
               whileTap={{ scale: 0.98 }}
               className='group relative p-[1.5px] rounded-xl overflow-hidden flex flex-col items-center justify-center transition-all duration-300 bg-slate-900/50 shadow-lg'
          >
               {children}
          </motion.div>
     );
};
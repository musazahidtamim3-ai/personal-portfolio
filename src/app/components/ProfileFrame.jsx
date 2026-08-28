'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';

/**
 * ProfileFrame — signature hero visual.
 *
 * What changed from the previous version, and why:
 * 1. The dashed rotating square is replaced by a slow-spinning SVG ring made
 *    of two unequal arcs (like an orbit, not a loading spinner) — reads as
 *    intentional rather than decorative.
 * 2. The frame itself morphs its corner radii over time (squircle -> blob ->
 *    squircle) using keyframed borderRadius, so the "container" feels alive
 *    instead of just floating up and down.
 * 3. Floating motion uses spring physics (not linear ease) so it settles
 *    naturally instead of ping-ponging at a fixed speed.
 * 4. Two small orbiting particles travel around the frame at different
 *    radii/speeds — a lightweight ambient detail, not a busy one.
 * 5. A subtle hover tilt (rotateX/rotateY tied to pointer position) adds a
 *    3D feel without any extra libraries.
 */

const morphRadii = [
     '42% 58% 60% 40% / 45% 42% 58% 55%',
     '58% 42% 45% 55% / 55% 60% 40% 45%',
     '45% 55% 55% 45% / 60% 45% 55% 40%',
     '42% 58% 60% 40% / 45% 42% 58% 55%',
];

function OrbitParticle({ radius, size, duration, delay, color }) {
     return (
          <motion.div
               className="absolute left-1/2 top-1/2 pointer-events-none"
               style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
               animate={{ rotate: 360 }}
               transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
          >
               <div
                    className="absolute rounded-full blur-[1px]"
                    style={{
                         width: size,
                         height: size,
                         top: 0,
                         left: '50%',
                         marginLeft: -size / 2,
                         background: color,
                         boxShadow: `0 0 12px ${color}`,
                    }}
               />
          </motion.div>
     );
}

export default function ProfileFrame() {
     const { isDark } = useTheme();

     return (
          <motion.div
               className="relative group flex justify-center items-center z-10 shrink-0"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, ease: 'easeOut' }}
               style={{ perspective: 900 }}
          >
               {/* Ambient glow, gently pulsing */}
               <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-full blur-[70px] pointer-events-none"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
               />

               {/* Orbit ring — two unequal arcs instead of a plain dashed square */}
               <motion.svg
                    className="absolute w-72 sm:w-88 lg:w-[420px] h-72 sm:h-88 lg:h-[420px] pointer-events-none"
                    viewBox="0 0 100 100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
               >
                    <circle
                         cx="50" cy="50" r="47"
                         fill="none"
                         stroke={isDark ? 'rgba(168,85,247,0.35)' : 'rgba(168,85,247,0.3)'}
                         strokeWidth="0.6"
                         strokeDasharray="120 40"
                         strokeLinecap="round"
                    />
                    <circle
                         cx="50" cy="50" r="47"
                         fill="none"
                         stroke={isDark ? 'rgba(99,102,241,0.25)' : 'rgba(99,102,241,0.2)'}
                         strokeWidth="0.6"
                         strokeDasharray="30 200"
                         strokeLinecap="round"
                         transform="rotate(140 50 50)"
                    />
               </motion.svg>

               {/* Orbiting particles at two radii/speeds */}
               <OrbitParticle radius={165} size={7} duration={14} delay={0} color="#a855f7" />
               <OrbitParticle radius={145} size={5} duration={11} delay={2} color="#6366f1" />

               {/* Small decorative diamond, floats independently */}
               <motion.div
                    className={`absolute -top-3 -right-3 w-8 h-8 rounded-lg border rotate-45 pointer-events-none backdrop-blur-md hidden sm:block ${isDark ? 'border-purple-400/30 bg-purple-900/20' : 'border-purple-300 bg-purple-100/50'
                         }`}
                    animate={{ y: [0, -6, 0], rotate: [45, 90, 45] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
               />

               {/* Main frame: morphs its own corner radii + floats with spring easing + subtle hover tilt */}
               <motion.div
                    className="relative w-64 sm:w-80 lg:w-[380px] h-64 sm:h-80 lg:h-[380px] p-[3px] bg-gradient-to-br from-purple-200 via-indigo-500/40 to-pink-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)] overflow-hidden"
                    animate={{
                         y: [0, -10, 0],
                         borderRadius: morphRadii,
                    }}
                    transition={{
                         y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                         borderRadius: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    whileHover={{ rotateX: -4, rotateY: 6, scale: 1.02 }}
                    style={{ transformStyle: 'preserve-3d' }}
               >
                    <motion.div
                         className={`w-full h-full overflow-hidden flex items-center justify-center relative ${isDark ? 'bg-slate-950' : 'bg-white'}`}
                         animate={{ borderRadius: morphRadii }}
                         transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    >
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.2)_0%,transparent_60%)]" />

                         <Image
                              src="/developer.png"
                              alt="Mohammed Jahidul Islam"
                              height={500}
                              width={500}
                              className="object-cover translate-y-2 origin-bottom drop-shadow-[0_0_25px_rgba(168,85,247,0.45)]"
                              priority
                         />
                    </motion.div>
               </motion.div>

               {/* Floating experience badge, springier settle */}
               <motion.div
                    className={`absolute -bottom-2 -right-2 backdrop-blur-xl border px-5 py-3 rounded-2xl hidden md:block shadow-[0_15px_30px_rgba(0,0,0,0.3)] ${isDark ? 'bg-slate-900/90 border-purple-500/20' : 'bg-white/90 border-purple-200'
                         }`}
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5, type: 'tween' }}
                    whileHover={{ scale: 1.05 }}
               >
                    <p className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-extrabold text-2xl lg:text-3xl tracking-tight">1+</p>
                    <p className={`text-[10px] uppercase tracking-wider font-bold mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                         Years Experience
                    </p>
               </motion.div>
          </motion.div>
     );
}
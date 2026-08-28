"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaAward, FaCalendarAlt, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const Certificates = () => {
     const { isDark } = useTheme();
     const [mounted, setMounted] = useState(false);
     const [imgErrors, setImgErrors] = useState({});

     useEffect(() => {
          setMounted(true);
     }, []);

     if (!mounted) return null;

     const certificatesData = [
          {
               id: 1,
               title: "Complete Web Development Course",
               issuer: "Programming Hero",
               date: "August 2026",
               credentialId: "WEB13-0354",
               verifyUrl: "https://web.programming-hero.com/verification?validationNumber=PHbatch-13WEB13-03541767",
               image: "/certificate.png",
               skills: ["React.js", "Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
               highlights: [
                    "Mastered Full-stack MERN Development",
                    "Built 12+ Industry Standard Web Applications",
                    "Select for SCIC"
               ]
          }
     ];

     const handleImgError = (id) => {
          setImgErrors((prev) => ({ ...prev, [id]: true }));
     };

     return (
          <section
               id="certificates"
               className={`w-full px-4 lg:px-6 py-16 sm:py-24 transition-colors duration-300 relative overflow-hidden ${isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
                    }`}
          >
               <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] rounded-full blur-[130px] pointer-events-none z-0 ${isDark ? "bg-purple-600/15" : "bg-purple-400/20"
                         }`}
               />

               <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                         initial={{ opacity: 0, y: 15 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.4 }}
                         className="text-center mb-12"
                    >
                         <span
                              className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border ${isDark
                                        ? "bg-purple-500/10 border-purple-500/30 text-purple-300"
                                        : "bg-purple-100 border-purple-200 text-purple-700"
                                   }`}
                         >
                              Credentials
                         </span>
                         <h2
                              className={`text-2xl lg:text-4xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"
                                   }`}
                         >
                              Official Honors &{" "}
                              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                                   Certifications
                              </span>
                         </h2>
                    </motion.div>

                    <div className="space-y-8">
                         {certificatesData.map((cert) => (
                              <motion.div
                                   key={cert.id}
                                   initial={{ opacity: 0, y: 15 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ duration: 0.4, delay: 0.1 }}
                                   className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 backdrop-blur-md ${isDark
                                             ? "bg-slate-900/40 border-slate-800/80 hover:border-purple-500/30"
                                             : "bg-white/80 border-slate-200 hover:border-purple-300 shadow-sm"
                                        }`}
                              >
                                   <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-8">
                                        <div className="w-full lg:w-[45%] flex-shrink-0 flex items-center justify-center">
                                             <div
                                                  className={`w-full rounded-xl overflow-hidden border p-2 flex items-center justify-center relative ${isDark ? "bg-slate-950/80 border-slate-800" : "bg-slate-100 border-slate-200"
                                                       }`}
                                             >
                                                  {!imgErrors[cert.id] ? (
                                                       <Image
                                                            src={cert.image}
                                                            alt={cert.title}
                                                            width={600}
                                                            height={420}
                                                            onError={() => handleImgError(cert.id)}
                                                            className="w-full h-64 sm:h-80 lg:h-96 object-contain\\ rounded-lg hover:scale-[1.02] transition-transform duration-300"
                                                       />
                                                  ) : (
                                                       <div className="flex flex-col items-center justify-center text-center p-6 min-h-[220px]">
                                                            <div className="p-3 rounded-full bg-purple-500/10 text-purple-500 mb-2 border border-purple-500/20">
                                                                 <FaAward className="w-8 h-8" />
                                                            </div>
                                                            <p className="font-bold text-sm text-purple-500">{cert.issuer}</p>
                                                            <p className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                                                 {cert.title}
                                                            </p>
                                                       </div>
                                                  )}
                                             </div>
                                        </div>

                                        <div className="w-full lg:w-[55%] flex flex-col justify-between">
                                             <div>
                                                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                       <span className="text-xs font-bold uppercase tracking-wider text-purple-500">
                                                            {cert.issuer}
                                                       </span>
                                                       <div
                                                            className={`flex items-center gap-1.5 text-xs font-medium ${isDark ? "text-slate-400" : "text-slate-500"
                                                                 }`}
                                                       >
                                                            <FaCalendarAlt className="text-purple-500" />
                                                            <span>{cert.date}</span>
                                                       </div>
                                                  </div>

                                                  <h3
                                                       className={`text-xl sm:text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"
                                                            }`}
                                                  >
                                                       {cert.title}
                                                  </h3>

                                                  <div className="space-y-2 mb-5">
                                                       {cert.highlights.map((point, idx) => (
                                                            <div key={idx} className="flex items-start gap-2.5">
                                                                 <FaCheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                                                 <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                                                                      {point}
                                                                 </p>
                                                            </div>
                                                       ))}
                                                  </div>

                                                  <div className="flex flex-wrap gap-2 mb-6">
                                                       {cert.skills.map((skill, idx) => (
                                                            <span
                                                                 key={idx}
                                                                 className={`text-xs font-semibold px-3 py-1 rounded-md border ${isDark
                                                                           ? "bg-purple-950/40 border-purple-500/30 text-purple-300"
                                                                           : "bg-purple-50 border-purple-200 text-purple-700"
                                                                      }`}
                                                            >
                                                                 {skill}
                                                            </span>
                                                       ))}
                                                  </div>
                                             </div>

                                             <div
                                                  className={`pt-4 border-t flex flex-wrap items-center justify-between gap-3 ${isDark ? "border-slate-800" : "border-slate-200"
                                                       }`}
                                             >
                                                  <span className={`text-xs font-mono ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                                                       Credential ID: {cert.credentialId}
                                                  </span>


                                                  <a href={cert.verifyUrl}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-all shadow-md shadow-purple-500/20 group">
                                                  <span>Verify Certificate</span>
                                                  <FaExternalLinkAlt className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                             </a>
                                        </div>
                                   </div>
                              </div>
            </motion.div>
          ))}
               </div>
          </div>
    </section >
  );
};

export default Certificates;
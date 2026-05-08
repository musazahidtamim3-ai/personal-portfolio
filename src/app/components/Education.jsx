import React from 'react';

const EducationTimeline = () => {
     const educationData = [
          {
               id: 1,
               degree: "Diploma in Engineering",
               duration: "2022 - Present",
               description: "I am currently pursuing my Diploma in Engineering in Computer Science and Technology from Feni Polytechnic Institute. Throughout this journey, I have been deeply immersed in core engineering principles, software development methodologies, and hands-on technical projects. My academic focus consistently revolves around mastering modern web technologies, database management, and system analysis, while maintaining a strong track record in my coursework and technical labs.",
               result: "CGPA: 3.80/4.00"
          },
          {
               id: 2,
               degree: "Secondary School Certificate (SSC)",
               duration: "2020 - 2022",
               description: "I successfully completed my Secondary School Certificate from this high school under the Science group. During these formative years, I developed a robust foundation in Mathematics, Physics, and analytical problem-solving. Achieving a perfect GPA was a testament to my dedication, and it was during this period that I discovered my passion for technology and engineering, which eventually led me to pursue my further studies in this field.",
               result: "GPA: 5.00/5.00"
          }
     ];

     return (
          <div id='education' className="max-w-7xl mx-auto px-4 py-10">
               <div className='text-left lg:text-center'>
                    <p className='text-[#b4f404]'>Education</p>
                    <h1 className='text-3xl lg:text-4xl pt-2 font-semibold'>My Educational Qualification</h1>
               </div>

               <div className="relative mt-10 border-l-4 border-[#b4f404] ml-3 md:ml-6">
                    {educationData.map((edu) => (
                         <div key={edu.id} className="mb-10 ml-6">
                              {/* Timeline Dot */}
                              <div className="absolute w-5 h-5 bg-[#b4f404] rounded-full -left-[12px] border-4 border-black shadow-sm"></div>

                              {/* Content Card */}
                              <div className="bg-white/10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-white/20">
                                   <h3 className="text-xl font-bold text-white mt-1">{edu.degree}</h3>
                                   <span className="text-sm font-semibold text-[#b4f404] tracking-wide">
                                        {edu.duration}
                                   </span>
                                   
                                   <p className="text-sm lg:text-md text-gray-400 mt-3 leading-relaxed">
                                        {edu.description}
                                   </p>
                                   <div className="mt-4 inline-block bg-white/10 text-[#b4f404] text-sm font-bold px-3 py-1 rounded-full">
                                        {edu.result}
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default EducationTimeline;
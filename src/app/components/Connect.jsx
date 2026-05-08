"use client"
import React, { useState } from 'react';

const Connect = () => {
     const [result, setResult] = useState("");

     const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);

          // এখানে আপনার Web3Forms Access Key বসান
          formData.append("access_key", "a9ae8e66-4bd2-4ec0-9e3b-8beb88e58ecc");

          const response = await fetch("https://api.web3forms.com/submit", {
               method: "POST",
               body: formData
          });

          const data = await response.json();

          if (data.success) {
               setResult("Message Sent Successfully!");
               event.target.reset();
          } else {
               console.log("Error", data);
               setResult(data.message);
          }
     };

     return (
          <div id='contact' className='max-w-7xl mx-auto my-10 lg:my-20 px-5 lg:px-0'>
               <p className='text-[#b4f404] text-left lg:text-center'>Contact Information</p>
               <h1 className='text-3xl lg:text-4xl pt-2 font-semibold text-left lg:text-center text-white'>Let's Talk to Work Together</h1>

               <div className='max-w-3xl mx-auto'>
                    <form onSubmit={onSubmit} className='bg-white/10 border border-white/20 p-5 my-10 rounded-xl backdrop-blur-md'>
                         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                              <div>
                                   <label className="block text-[#b4f404] mb-2 text-sm">Name</label>
                                   <input
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full p-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-[#b4f404] text-white transition-all"
                                        placeholder="Enter your name..."
                                   />
                              </div>
                              <div>
                                   <label className="block text-[#b4f404] mb-2 text-sm">Email</label>
                                   <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full p-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-[#b4f404] text-white transition-all"
                                        placeholder="Enter your email"
                                   />
                              </div>
                         </div>

                         <div className='mt-6'>
                              <label className="block text-[#b4f404] mb-2 text-sm">Message</label>
                              <textarea
                                   name="message"
                                   required
                                   className='w-full border border-white/20 bg-white/5 p-4 rounded-md focus:outline-none focus:border-[#b4f404] text-white transition-all'
                                   rows={6}
                                   placeholder='Type your message...'
                              ></textarea>
                         </div>

                         <button
                              type="submit"
                              className="w-full bg-[#b4f404] hover:bg-[#a3db03] text-black font-semibold py-3 mt-6 rounded-md transition-all transform active:scale-95 shadow-lg shadow-[#b4f404]/20"
                         >
                              Submit Message
                         </button>

                         {/* স্ট্যাটাস মেসেজ দেখানোর জন্য */}
                         {result && (
                              <p className="mt-4 text-center text-sm font-medium text-[#b4f404] py-2 rounded">
                                   {result}
                              </p>
                         )}
                    </form>
               </div>
          </div>
     );
};

export default Connect;
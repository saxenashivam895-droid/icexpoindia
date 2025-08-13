'use client'


import { motion } from "framer-motion"
import {  useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

export default function Contact()
{
   
  
const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here, like sending to an API or email service
    console.log('Form submitted:', form);
  };
  return (
    <div className="bg-white">
        <section className="relative py-12 px-4 flex justify-center items-center bg-[url('/bg.png')] bg-cover bg-center">
                 <div className="absolute inset-0" style={{
          background: 'linear-gradient(151deg, rgba(14, 52, 88, 0.75) 9%, rgba(242, 102, 34, 0.68) 100%)'
        }}></div>
                <motion.h2 initial={{opacity:0, y:0}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl text-white z-10 relative font-bold">Contact Us</motion.h2>
            </section>

            <section className="p-12 ">
                <div className="md:flex md:items-center md:gap-8">
                    {/* Image Section */}
                    <div className="md:w-2/5 w-full mb-6 md:mb-0">
                    <ul className="list-none list-inside">
                        <motion.li className="py-2" initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            <span className="flex gap-2 items-start">
                                <FaLocationDot className="text-4xl text-orange-400"/>
                                11J, Gopala Tower, Rajendra Place, New Delhi - 110008
                                </span>
                        </motion.li>
                        <motion.li className="py-2" initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.5}}>
                            <span className="flex gap-2 items-center">
                                <FaPhoneAlt className="text-lg text-orange-400"/>
                                +91 99580 97807
                                </span>
                        </motion.li>
                        <motion.li className="py-2" initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.6}}>
                             <span className="flex gap-2 items-center">
                                <FaEnvelope className="text-lg text-orange-400"/>
                                info@icexpoindia.com,
                                marketing@icexpoindia.com
                                </span>
                        </motion.li>
                        
                    </ul>
                    </div>

                    {/* Text Section */}
                    <motion.div initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}} className="md:w-3/5 w-full">
                    
                   

                    <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl p-8 bg-white rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-left">Please fill your information here and let us get back to you.</h2>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-600 mb-1">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-medium text-gray-600 mb-1">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-gray-600 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-400 text-white font-medium py-2 rounded-lg hover:bg-orange-700 transition"
        >
          Send Message
        </button>
      </form>
                    
                    </motion.div>
                </div>
                </section>

    </div>
  )
}
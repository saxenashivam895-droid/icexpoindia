'use client'
import { motion } from "framer-motion"
import { useRef } from 'react';


export default function Services()
{
     const ref = useRef(null);
 
    return (
        <div className="bg-white">
            <section className="relative py-12 px-4 flex justify-center items-center bg-[url('/bg.png')] bg-cover bg-center">
                 <div className="absolute inset-0" style={{
          background: 'linear-gradient(151deg, rgba(14, 52, 88, 0.75) 9%, rgba(242, 102, 34, 0.68) 100%)'
        }}></div>
                <motion.h2 initial={{opacity:0, y:0}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl text-white z-10 relative font-bold">Services</motion.h2>
            </section>
            <section className="p-12 ">
                <div className="md:flex md:items-start md:gap-8">
                    {/* Image Section */}
                    <div className="md:w-2/5 w-full mb-6 md:mb-0">
                    <motion.img ref={ref}
                initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.3}} src="/image_15.png" className="w-full h-auto rounded-md" alt="About Us" />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-3/5 w-full ">
                    <h2 className="text-2xl font-semibold mb-4 text-orange-400">Exhibitions</h2>
                    <motion.p ref={ref}
                initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.3}} className="mb-4 text-gray-800">
                        We conceptualize and execute B2B exhibitions across key industry sectors, particularly Pharma, MedHealth, and Technology. Our exhibitions offer a strategic platform for companies to showcase innovation, build networks, and unlock market opportunities at regional and global levels.
                    </motion.p>

                    <ul className="list-disc list-inside">
                        <motion.li initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            International & regional exhibitors
                        </motion.li>
                        <motion.li initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            Targeted buyer-seller meetups
                        </motion.li>
                        <motion.li initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            Industry-led innovation zones
                        </motion.li>
                        <motion.li initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                          Marketing & branding support
                        </motion.li>
                        <motion.li initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            End-to-end exhibitor assistance
                        </motion.li>
                    </ul>
                    
                    </div>
                </div>


                <div className="md:flex md:items-start md:gap-8 my-8">
                    
                    

                    {/* Text Section */}
                    <div className="md:w-3/5 w-full">
                    <h2 className="text-2xl font-semibold mb-4 text-orange-400">Conferences</h2>
                    <motion.p ref={ref}
                initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.3}} className="mb-4 text-gray-800">
                    We organize content-driven conferences designed to inspire dialogue, share insights, and foster professional development. Our summits attract thought leaders, policymakers, and C-level executives, creating opportunities for collaboration, education, and business development.

                    </motion.p>

                    <ul className="list-disc list-inside">
                        <motion.li initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            Curated keynote sessions & panel discussions

                        </motion.li>
                        <motion.li initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            CPD-certified tracks (where applicable)

                        </motion.li>
                        <motion.li initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            High-value networking

                        </motion.li>
                        <motion.li initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                          Conference delegate packages

                        </motion.li>
                        <motion.li initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            Sponsor & speaking opportunities

                        </motion.li>
                    </ul>
                    
                    </div>
                    <div className="md:w-2/5 w-full mb-6 md:mb-0">
                    <motion.img ref={ref}
                initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.3}} src="/conference.jpg" className="rounded-md w-full h-auto" alt="About Us" />
                    </div>
                </div>



                <div className="md:flex md:items-start md:gap-8">
                    {/* Image Section */}
                    <div className="md:w-2/5 w-full mb-6 md:mb-0">
                    <motion.img ref={ref}
                initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.3}} src="/events.jpg" className="w-full h-auto rounded-md" alt="About Us" />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-3/5 w-full">
                    <h2 className="text-2xl font-semibold mb-4 text-orange-400">Events</h2>
                    <motion.p ref={ref}
                initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.3}} className="mb-4 text-gray-800 ">
Enabling companies to achieve their marketing objectives by taking end-to-end control over organizing and managing their events.
                    </motion.p>

                    <ul className="list-disc list-inside">
                        <motion.li initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            End-to-end event planning
                        </motion.li>
                        <motion.li initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            Custom event design
                        </motion.li>
                        <motion.li initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            Venue selection and Setup

                        </motion.li>
                        <motion.li initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                          Vendor and guest management

                        </motion.li>
                        <motion.li initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            Audio-visual services

                        </motion.li>
                         <motion.li initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            Event marketing and promotion


                        </motion.li>
                         <motion.li initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}}>
                            ompliance and permits


                        </motion.li>
                    </ul>
                    
                    </div>
                </div>
            </section>
        </div>
    )
}
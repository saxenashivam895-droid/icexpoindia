'use client'
import { motion } from "framer-motion"


import { FaDownload } from "react-icons/fa6";

export default function Downloads()
{
   
    return (
         <div className="bg-white">
            <section className="relative py-12 px-4 flex justify-center items-center bg-[url('/new-slider.jpg')] bg-cover bg-center">
                 <div className="absolute inset-0" style={{
          background: 'linear-gradient(151deg, rgba(14, 52, 88, 0.75) 9%, rgba(242, 102, 34, 0.68) 100%)'
        }}></div>
                <motion.h2 initial={{opacity:0, y:0}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl text-white z-10 relative font-bold">Downloads</motion.h2>
            </section>


            <section className="py-12 px-4 bg-white">
                <div className="mb-6 flex gap-8 justify-start items-center w-75">
                    <FaDownload className="text-5xl text-orange-300" />
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Brochure</h3>
                        <h3 className="text-lg mb-4">IIME/Pharma Live</h3>
                        <a href="/downloads/pharma-real-brochure-with-idma-and-icexpo.pdf" target="_blank" className="bg-orange-400 text-white py-2 px-4">Download</a>
                    </div>
                </div>
                
                <div className="mb-4 flex gap-8 justify-start items-center w-75">
                    <FaDownload className="text-5xl text-orange-300" />
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Brochure</h3>
                        <h3 className="text-lg mb-4">I Trans</h3>
                        <a href="/downloads/i-trans-brochure-with-all-pages-copy.pdf" target="_blank" className="bg-orange-400 text-white py-2 px-4">Download</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
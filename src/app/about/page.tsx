'use client';
import { motion,useInView } from "framer-motion"
import { useRef } from 'react';

export default function OurStory()
{
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
    return (
        <div className="bg-white">
            <section className="relative py-12 px-4 flex justify-center items-center bg-[url('/bg.png')] bg-cover bg-center">
                 <div className="absolute inset-0" style={{
          background: 'linear-gradient(151deg, rgba(14, 52, 88, 0.75) 9%, rgba(242, 102, 34, 0.68) 100%)'
        }}></div>
                <motion.h2 initial={{opacity:0, y:0}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl text-white z-10 relative font-bold">About</motion.h2>
            </section>

            <section className="py-12 px-4 bg-white">
<motion.p ref={ref}
      
      initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.2}}
      className="mb-4 text-gray-800">
            ICEXPO (International Conference & Exhibition) is a premier event management and business networking company, bringing together industries, professionals, and innovation through world-class exhibitions, conferences, and customized travel solutions. With a focus on quality, strategic partnerships, and global outreach, ICEXPO delivers unmatched business value and immersive experiences to clients across the globe.
          </motion.p>
          <motion.p ref={ref}
      initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.3}}
       className="mb-4 text-gray-800">
            At ICEXPO, we specialize in delivering high-impact B2B exhibitions, knowledge-driven conferences, and curated corporate travel experiences. With a strong network, industry insights, and a proven track record, we empower businesses to grow, connect, and lead.
          </motion.p>
          <motion.p initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.4}} className="mb-4 text-gray-800">Whether it&apos;s curating industry-focused expos, facilitating knowledge-driven conferences, or designing seamless luxury and group travel, ICEXPO stands as a reliable partner for growth, visibility, and impactful engagement.

          </motion.p>

          <motion.p initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.5}} className="mb-4 text-gray-800">
            As a corporate event management company, ICEXPO is committed to showcasing the most agile and liquid growth markets through B2B events and conferences. Facilitating businesses to boost growth by entering new markets to build sales pipelines, close prospects, raise capital, and identify the right solution providers to meet their business requirements.
          </motion.p>
            </section>
            <section className="py-12 px-4 bg-gray-100">
                <motion.h2 initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.6}} className="text-3xl font-bold text-orange-400 mb-4">Our Story</motion.h2>
                <motion.p initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.7}} className="text-gray-800 mb-4">
                    Founded with a vision to bridge global businesses through meaningful events and partnerships, ICEXPO has steadily grown into one of the most respected names in the trade and exhibition industry. Backed by over a decade of expertise, our team has successfully executed events across India, Southeast Asia, and the Middle East, consistently delivering value to our stakeholders.
                </motion.p>

                <motion.p ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay:0.6 }} className="text-gray-800 mb-4">
                    Every event is designed to reflect our deep understanding of industry dynamics, our commitment to quality, and our passion for connecting people with purpose.
                </motion.p>

                <motion.h3 ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay:0.7 }} className="text-xl font-semibold text-orange-400 mb-4">Core Values</motion.h3>

                <motion.p ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay:0.8 }} className="text-gray-800 mb-4"><span className="font-bold">Integrity & Transparency:</span>
                We build relationships rooted in trust and open communication.
                </motion.p>
                <motion.p ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay:0.9 }} className="text-gray-800 mb-4"><span className="font-bold">Excellence & Innovation: </span>
                We deliver nothing less than world-class experiences tailored to evolving market needs.
                </motion.p>
                <motion.p ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay:1 }} className="text-gray-800 mb-4"><span className="font-bold">Collaboration & Growth:</span>
                We believe in building synergies with clients, partners, and communities.

                </motion.p>
                <motion.p ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay:1.1 }} className="text-gray-800 mb-4"><span className="font-bold">Customer-Centricity:</span>
                Our clients&apos; success is our ultimate goal, and we strive to exceed their expectations every time
                </motion.p>
            </section>
            
        </div>
        
    )
}
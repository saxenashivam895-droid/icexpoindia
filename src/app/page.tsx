'use client';

import Cards from "./components/Cards"
import {ClientSlider} from "./components/ClientLogoCarousel";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { motion } from "framer-motion"
import { useRef } from 'react';
import CountUp from 'react-countup';
import { Swiper as SwiperClass } from 'swiper';
export default function Home() {
  const ref = useRef(null);
  const stats = [
    { title: 'Years of Legacy', value: 5, suffix: '+' },
    { title: 'Delegates', value: 25000, suffix: '+' },
    { title: 'Speakers', value: 200, suffix: '+' },
    { title: 'Sponsors/Partners', value: 400, suffix: '+' },
    { title: 'Countries', value: 30, suffix: '+' },
  ];
  const swiper1Ref = useRef<SwiperClass | null>(null);
  const swiper2Ref = useRef<SwiperClass | null>(null);
  const logos1 =  [
  '/clients/c1.png',
  '/clients/c2.png',
  '/clients/c3.png',
  '/clients/c4.png',
  '/clients/c5.png',
  '/clients/c6.png',
];

const logos2 = [
  '/clients/c7.png',
  '/clients/c8.png',
  '/clients/c9.png',
  '/clients/c10.png',
  '/clients/c11.png',
  '/clients/c12.png',
];
  return (
    <>
     <Topbar/>
            <Navbar/>
            <div >
<section className="relative w-full min-h-screen bg-cover bg-center flex justify-center items-center overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/bg_video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Gradient Overlay */}
  <div
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(151deg, rgb(5 29 52 / 75%) 9%, rgb(107 35 0 / 77%) 100%)',
    }}
  ></div>

  {/* Decorative Dotted Images */}
  <motion.img
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 0.3, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    src="/dotted.png"
    alt="Right Decoration"
    className="hidden md:block w-auto h-full absolute right-0 z-0"
  />
  <motion.img
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 0.3, y: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    src="/dotted.png"
    alt="Left Decoration"
    className="hidden md:block w-auto h-full absolute left-0 rotate-180 z-0"
  />

  {/* Main Content */}
  <div className="relative z-10 text-center px-4 sm:px-8 md:px-10 lg:px-0 w-full max-w-6xl">
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white capitalize leading-tight sm:leading-snug mb-10"
    >
      <span className="text-orange-500">Empowering</span><br />
      global interactions through<br />
      our <span className="text-orange-500">innovative platforms</span>
    </motion.h1>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center mb-10 px-2">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-2 rounded-full border-white/40 flex items-center justify-center text-2xl sm:text-3xl font-bold text-white">
            <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
          </div>
          <span className="mt-4 text-white text-xs sm:text-sm font-semibold uppercase text-center px-1">
            {stat.title}
          </span>
        </div>
      ))}
    </div>

    {/* Button */}
    <motion.a
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      href="#events"
      className="inline-block border-2 border-white text-white px-6 py-3 sm:py-4 rounded-sm text-sm sm:text-base"
    >
      Upcoming Events
    </motion.a>
  </div>
</section>



      <section className="px-4 sm:px-6 lg:px-12 py-12 bg-white" id="events">
      

<motion.div
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-screen-lg mx-auto px-4"
>
  <div className="relative flex flex-col sm:flex-row items-center py-5 text-center sm:text-left">
    {/* Left Border Line */}
    <div className="hidden sm:block flex-grow border-t border-orange-400"></div>

    {/* Center Heading */}
    <span className="mx-4 text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold py-2">
      Upcoming Events
    </span>

    {/* Right Border Line */}
    <div className="hidden sm:block flex-grow border-t border-orange-400"></div>
  </div>
</motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 py-8">
          <Cards link="/medHealth" heading="MedHealth Pharma Expo 2026" image="upcomingEvents/medlogo.png" place="Malaysia" date="12 - 14 May 2026" />
          <Cards link="#" heading="Pharma Live Expo & Summit 2026" image="upcomingEvents/livelogo.png" place="Nesco, Mumbai" date="07 - 09 April 2026" />
          <Cards link="#" heading="Pharma Bulk Drug Manufacturing Summit 2025" image="upcomingEvents/bulklogo.png" place="Hyderabad" date="15th October 2025" />
        </div>
      </section>


      <section className="p-12 bg-gray-200">
      <div className="md:flex md:items-center md:gap-8">
        {/* Image Section */}
        <div className="md:w-2/5 w-full mb-6 md:mb-0">
          <motion.img ref={ref}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{opacity:1,x:0}}
      transition={{ duration: 0.6, ease: 'easeOut' }} src="/image_42.png" className="w-full h-auto" alt="About Us" />
        </div>

        {/* Text Section */}
        <div className="md:w-3/5 w-full">
          <motion.h2 initial={{ opacity: 0, x: 100 }}
      whileInView={{opacity:1,x:0}}
      transition={{ duration: 0.6, ease: 'easeOut' }} className="text-2xl font-semibold mb-4 text-orange-400">About ICEXPO</motion.h2>
          <motion.p ref={ref}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{opacity:1,x:0}}
      transition={{ duration: 0.6, ease: 'easeOut',delay:0.1 }} className="mb-4 text-gray-800">
            ICEXPO (International Conference & Exhibition) is a premier event management and business networking company, bringing together industries, professionals, and innovation through world-class exhibitions, conferences, and customized travel solutions. With a focus on quality, strategic partnerships, and global outreach, ICEXPO delivers unmatched business value and immersive experiences to clients across the globe.
          </motion.p>
          <motion.p ref={ref}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{opacity:1,x:0}}
      transition={{ duration: 0.6, ease: 'easeOut',delay:0.2 }} className="mb-4 text-gray-800">
            At ICEXPO, we specialize in delivering high-impact B2B exhibitions, knowledge-driven conferences, and curated corporate travel experiences. With a strong network, industry insights, and a proven track record, we empower businesses to grow, connect, and lead.
          </motion.p>
          <motion.p ref={ref}
      initial={{ opacity: 0, x: 100 }}
     whileInView={{opacity:1,x:0}}
      transition={{ duration: 0.6, ease: 'easeOut', delay:0.4 }} className="mb-4 text-gray-800">Whether it&apos;s curating industry-focused expos, facilitating knowledge-driven conferences, or designing seamless luxury and group travel, ICEXPO stands as a reliable partner for growth, visibility, and impactful engagement.

          </motion.p>

          <motion.p ref={ref}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{opacity:1,x:0}}
      transition={{ duration: 0.6, ease: 'easeOut',delay:0.8 }} className="mb-4 text-gray-800">
            As a corporate event management company, ICEXPO is committed to showcasing the most agile and liquid growth markets through B2B events and conferences. Facilitating businesses to boost growth by entering new markets to build sales pipelines, close prospects, raise capital, and identify the right solution providers to meet their business requirements.
          </motion.p>
          <motion.a initial={{ opacity: 0, x: 100 }}
      whileInView={{opacity:1,x:0}}
      transition={{ duration: 0.6, ease: 'easeOut',delay:0.9 }} href="/about" className="bg-orange-400 text-white py-2 px-4">Read More</motion.a>
        </div>
      </div>
    </section>


   
  <section
  className="relative w-full h-auto py-16 gap-6 flex flex-col items-center justify-center text-white bg-fixed bg-center bg-cover bg-no-repeat"
  style={{ backgroundImage: "url('/conference.jpg')" }}
>
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(151deg, rgb(5 29 52 / 75%) 9%, rgb(166 66 17 / 68%) 100%)",
    }}
  ></div>

  <div className="relative z-10 w-full px-4 sm:px-8 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-orange-400"></div>
        <span className="flex-shrink mx-4 text-2xl sm:text-3xl text-white font-bold">
          What We Do
        </span>
        <div className="flex-grow border-t border-orange-400"></div>
      </div>
    </motion.div>

    <div className="flex flex-col lg:flex-row gap-8 mt-8">
      {/* Conferences */}
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-orange-400">
          Conferences
        </h2>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 text-white text-sm sm:text-base"
        >
          We organize content-driven conferences designed to inspire dialogue,
          share insights, and foster professional development. Our summits
          attract thought leaders, policymakers, and C-level executives,
          creating opportunities for collaboration, education, and business
          development.
        </motion.p>

        <ul className="list-disc list-inside text-sm sm:text-base space-y-2">
          {[
            "Curated keynote sessions & panel discussions",
            "CPD-certified tracks (where applicable)",
            "High-value networking",
            "Conference delegate packages",
            "Sponsor & speaking opportunities",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Exhibitions */}
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-orange-400">
          Exhibitions
        </h2>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 text-white text-sm sm:text-base"
        >
          We conceptualize and execute B2B exhibitions across key industry
          sectors, particularly Pharma, MedHealth, and Technology. Our
          exhibitions offer a strategic platform for companies to showcase
          innovation, build networks, and unlock market opportunities at
          regional and global levels.
        </motion.p>

        <ul className="list-disc list-inside text-sm sm:text-base space-y-2">
          {[
            "International & regional exhibitors",
            "Targeted buyer-seller meetups",
            "Industry-led innovation zones",
            "Marketing & branding support",
            "End-to-end exhibitor assistance",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>


   
    <Gallery/>
   
       


        <section className="relative w-full h-[500px] gap-6 flex flex-col items-center justify-center text-white bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/newsletter.jpg')" }}>
        
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(151deg, rgba(14, 52, 88, 0.75) 9%, rgba(242, 102, 34, 0.68) 100%)'
        }}></div>

        <div className="relative z-10 flex flex-col justify-center items-center gap-6">
          <h2 className="text-4xl text-white font-bold">Join Newsletter</h2>
                  <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis tortor sed diam luctus suscipit. Cras et mollis tortor,</p>

                  <form className="flex items-center space-x-2 bg-white rounded px-2 py-1">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded text-black outline-none w-64"
                      />
                      <button
                        type="submit"
                        className=" px-4 py-2 rounded bg-orange-400 text-white"
                      >
                        Submit
                      </button>
                    </form>
        </div>
        

        </section>


 <section className="px-4 sm:px-6 lg:px-12 py-12 bg-gray-200">
       

<motion.div
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-screen-xl mx-auto px-4"
>
  <div className="relative flex flex-col sm:flex-row py-5 items-center text-center sm:text-left">
    {/* Left Line */}
    <div className="hidden sm:block flex-grow border-t border-orange-400"></div>

    {/* Text */}
    <span className="mx-4 text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold py-2">
      Our Esteemed Clients
    </span>

    {/* Right Line */}
    <div className="hidden sm:block flex-grow border-t border-orange-400"></div>
  </div>
</motion.div>

         <ClientSlider logos={logos1} onSwiper={(swiper) => (swiper1Ref.current = swiper)} />

      <div className="mt-8">
        <ClientSlider logos={logos2} reverse onSwiper={(swiper) => (swiper2Ref.current = swiper)} />
      </div>
      </section>
        


    </div>
    <Footer/>
    </>
    
  );
}

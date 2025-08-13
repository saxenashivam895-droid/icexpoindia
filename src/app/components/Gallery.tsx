'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'react-image-lightbox/style.css';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import { motion } from "framer-motion"


const slides = [
  {
    date: 'July 10, 2025',
    title: 'Event One',
    image: '/events/event1.jpg',
  },
  {
    date: 'July 12, 2025',
    title: 'Event Two',
    image: '/events/event2.jpg',
  },
  {
    date: 'July 14, 2025',
    title: 'Event Three',
    image: '/events/event3.jpg',
  },
  {
    date: 'July 16, 2025',
    title: 'Event Four',
    image: '/events/event4.jpg',
  },
  {
    date: 'July 18, 2025',
    title: 'Event Five',
    image: '/events/event5.jpg',
  },
  {
    date: 'July 20, 2025',
    title: 'Event Six',
    image: '/events/event1.jpg',
  },
];

export default function Gallery() {
     const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const getFullUrl = (path: string) => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${path}`;
  }
  return path;
};
  return (
    <section className="p-12 bg-gray-100">
      <motion.div
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-screen-lg mx-auto px-4"
>
  <div className="relative flex flex-col sm:flex-row py-5 items-center text-center sm:text-left">
    {/* Left line */}
    <div className="hidden sm:block flex-grow border-t border-orange-400"></div>

    {/* Text */}
    <span className="mx-4 text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold py-2">
      Our Work
    </span>

    {/* Right line */}
    <div className="hidden sm:block flex-grow border-t border-orange-400"></div>
  </div>
</motion.div>


      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <div
                className="relative h-70 text-white flex flex-col justify-center items-center rounded-md overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black opacity-40" />

                {/* Text */}
                <div className="relative z-10 text-center">
                  <p className="text-sm opacity-90">{slide.date}</p>
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
  <Lightbox
    mainSrc={getFullUrl(slides[photoIndex].image)}
    nextSrc={getFullUrl(slides[(photoIndex + 1) % slides.length].image)}
    prevSrc={getFullUrl(slides[(photoIndex + slides.length - 1) % slides.length].image)}
    onCloseRequest={() => setIsOpen(false)}
    onMovePrevRequest={() =>
      setPhotoIndex((photoIndex + slides.length - 1) % slides.length)
    }
    onMoveNextRequest={() =>
      setPhotoIndex((photoIndex + 1) % slides.length)
    }
    imageTitle={slides[photoIndex].title}
    imageCaption={slides[photoIndex].date}
  />
)}

    </section>
  );
}

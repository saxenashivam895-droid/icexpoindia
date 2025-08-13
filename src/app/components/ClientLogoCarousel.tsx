
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Swiper as SwiperClass } from 'swiper';
import Image from 'next/image';

interface ClientSliderProps {
  logos: string[];
  reverse?: boolean;
  onSwiper?: (swiper: SwiperClass) => void;
}

export const ClientSlider: React.FC<ClientSliderProps> = ({ logos, reverse = false, onSwiper }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={5}
      loop={true}
      dir={reverse ? 'rtl' : 'ltr'}
      autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
      speed={4000}
      onSwiper={onSwiper}
      allowTouchMove={false} // disable manual drag
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index}>
              <div className="flex items-center justify-center bg-white rounded-md py-2 px-1 ">
                <Image
                  width={300}
                  height={100}
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-18 object-contain rounded-md ms-2"
                />
              </div>
            </SwiperSlide>
      ))}
    </Swiper>
  );
};

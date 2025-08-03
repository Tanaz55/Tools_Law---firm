import React from 'react';

// import testimonials data
import { testimonials } from '../data';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../testimonialSlider.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{ dynamicBullets: true, clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className='mySwiper'
    >
      {testimonials.map((item, index) => {
        const { text, image, name, position } = item;
        return (
          <SwiperSlide key={index}>
            <div className="relative lg:mt-[34px] before:content-quote p-8">
              <p>{text}</p>
              <div className='flex items-center mt-[18px] mb-8 '>
                <img src={image} alt="Client" />
                <div className='ml-4'>
                    <h6 className='font-bold'>{name}</h6>
                    <p className='text-sm'>{position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

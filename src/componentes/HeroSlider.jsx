import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      img: '/images/flyermessi.png',
    },
    {
      id: 2,
      img: '/images/flyermbappe.jpg',
    },
    {
      id: 3,
      img: '/images/flyerney.jpg',
    },
  ];

  return (
    <Swiper
      modules={[EffectFade, Autoplay, Pagination, Navigation]}
      effect="fade"
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
      className="hero-slider"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="slide"
            style={{ backgroundImage: `url('${slide.img}')` }}
          >
            <h2>{slide.title}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

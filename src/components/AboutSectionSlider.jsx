"use client";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
  { title: 'Steigerung der Vitalität und Wärme', text: 'Steigerung Sie Ihre Vitalität...', color: 'text-orange-500' },
  { title: 'Smart Home', text: 'Intelligenter Spiegel mit Bluetooth...', color: 'text-gray-200' },
  { title: 'Anti-Beschlagsfunktion', text: 'Halten Sie die digitale Taste...', color: 'text-gray-200' },
  { title: 'Technologische Funktionalität', text: 'Erleichtern Sie Ihren Tag...', color: 'text-gray-200' }
];

export default function AboutSectionSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-lg">
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        className="mb-4"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-64 bg-black">
              <img src="/images/w-15.png" alt={slide.title} className="rounded-md" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-4 gap-4">
        {slides.map((slide, index) => (
          <div key={index} className={`p-4 rounded-lg ${activeIndex === index ? slide.color : 'text-gray-400'} bg-gray-700` }>
            <h3 className="text-lg font-semibold">{slide.title}</h3>
            <p className="text-sm">{slide.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

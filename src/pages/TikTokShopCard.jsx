import React from 'react';
import { Star } from 'lucide-react';
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TikTokShopCard = () => {
  // Array of slides to keep the code clean
  const slides = [
    { id: 1, img: "/93a7074bb6c3d3653a546d9fa8e67443.png" },
    { id: 2, img: "/e8080796e7e53c514a4de58a1ca48945.png" },
    { id: 3, img: "/8d410792ddcd0d1aed679689aca55012.png" },
  ];

  return (
    <div className="max-w-xl pt-6 mx-auto bg-white overflow-hidden font-sans border border-gray-100 rounded-lg shadow-sm">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          {/* Logo Circle - Fixed path */}
          <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden bg-gray-100">
            <img src="/56b52373e8359af4cb42c172b52060c2.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-gray-900 leading-tight">Grabify</h2>
            <div className="flex gap-0.5 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-gray-300 fill-transparent" />
              ))}
            </div>
          </div>
        </div>

        {/* Message Icon - Fixed path */}
       <a href="/message"> <div className="relative p-2">
          <img src="/1-TsEaoXt0.png" alt="Chat" className="w-8 h-8 object-contain" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">
            7
          </span>
        </div></a>
      </div>

      {/* Infinite Hero Slider */}
      <div className="mx-4 mb-4 rounded-xl overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-48"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.img} alt="Slide" className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TikTokShopCard;
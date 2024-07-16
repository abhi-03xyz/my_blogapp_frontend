import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import img1 from "@/assets/sliderimages/blogoftheday.png";
import img2 from "@/assets/sliderimages/blog.png";
import img3 from "@/assets/sliderimages/img3.png";
import img4 from "@/assets/sliderimages/img4.png";
import img5 from "@/assets/sliderimages/img5.png";
import img6 from "@/assets/sliderimages/img6.png";
import img7 from "@/assets/sliderimages/img7.png";
const width=window.innerWidth;
const height=window.innerHeight;
function AutoHomeSlider() {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
   <SwiperSlide>
       <Image src={img1} alt="" width={width} height={height /2} style={{objectFit:"cover"}}/>
       </SwiperSlide>
      <SwiperSlide>
      <Image src={img2} alt="" width={width} height={height /2} style={{objectFit:"cover"}}/>
      </SwiperSlide>
      <SwiperSlide>
      <Image src={img3} alt="" width={width} height={height /2} style={{objectFit:"cover"}}/>
      </SwiperSlide>
      <SwiperSlide>
      <Image src={img4} alt="" width={width} height={height /2} style={{objectFit:"cover"}}/>
      </SwiperSlide>
      <SwiperSlide>
      <Image src={img5} alt="" width={width} height={height /2} style={{objectFit:"cover"}}/>
      </SwiperSlide>
      <SwiperSlide>
      <Image src={img6} alt="" width={width} height={height /2} style={{objectFit:"cover"}}/>
      </SwiperSlide>
      <SwiperSlide>
      <Image src={img7} alt="" width={width} height={height /2} style={{objectFit:"cover"}}/>
      </SwiperSlide>
  </Swiper>
  )
}

export default AutoHomeSlider
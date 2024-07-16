import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import BlogCard from './BlogCard';
function BlogSlider() {
    const blogs=[
        {
            name:"Blog 1",
            path:"#",
            bgcolor:"grey"
            
        },
        {
            name:"Blog 2",
            path:"#",
            bgcolor:"grey"
        },
        {
            name:"Blog 3",
            path:"#",
            bgcolor:"grey"
        },
        {
            name:"Blog 4",
            path:"#",
            bgcolor:"grey"
        },
        {
            name:"Blog 5",
            path:"#",
            bgcolor:"grey"
        },
        {
            name:"Blog 6",
            path:"#",
            bgcolor:"grey"
        },
        {
            name:"Blog 7",
            path:"#",
            bgcolor:"grey"
        }
    ]
  return (
    <div>
    <h1 style={{
        fontSize:"20px",
        fontWeight:"400",
        margin:"10px 5px"
    }}>Latest Blog</h1>
     <Swiper
slidesPerView={1}
spaceBetween={1}
pagination={{
  clickable: true,
}}
breakpoints={{
  '@0.00': {
    slidesPerView: 1,
    spaceBetween: 2,
  },
  '@0.75': {
    slidesPerView: 2,
    spaceBetween: 2,
  },
  '@1.00': {
    slidesPerView: 3,
    spaceBetween: 2,
  },
  '@1.50': {
    slidesPerView: 5,
    spaceBetween: 2,
  },
}}
modules={[Pagination]}
className="mySwiper"
>
{
blogs.map((blog)=>{
return (
    <SwiperSlide>
       <BlogCard {...blog}/>
    </SwiperSlide>
)
})}
</Swiper></div>
  )
}

export default BlogSlider
// Import Swiper React components
// import Swiper core and required modules
import {EffectCoverflow, Navigation, Pagination,Autoplay } from 'swiper/modules';
import "../Header/header.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[EffectCoverflow,Navigation, Pagination,Autoplay ]}
      slidesPerView={"auto"}
      centeredSlides
      effect={"coverflow"}
      coverflowEffect={{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:true}}
      autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={{
            nextEl: null, // Hide next arrow
            prevEl: null, // Hide previous arrow
          }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
    <SwiperSlide>
        <div className="slider">
            <img src="https://cdn.spartanpoker.com/images/1701174302-Ultimate-Cash-Back-1640x723.jpg" alt="" className='desktop' />
            <img src="https://cdn.spartanpoker.com/images/1701174317-Ultimate-Cash-Back_-Mobile_-640-x-950.jpg" alt="" className='mobile' />

        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="slider">
        <img src="https://cdn.spartanpoker.com/images/1701174302-Ultimate-Cash-Back-1640x723.jpg" alt="" className='desktop' />
            <img src="https://cdn.spartanpoker.com/images/1701174317-Ultimate-Cash-Back_-Mobile_-640-x-950.jpg" alt="" className='mobile' />
        </div>
    </SwiperSlide>
    
    <SwiperSlide>
        <div className="slider">
        <img src="https://cdn.spartanpoker.com/images/1701174302-Ultimate-Cash-Back-1640x723.jpg" alt="" className='desktop' />
            <img src="https://cdn.spartanpoker.com/images/1701174317-Ultimate-Cash-Back_-Mobile_-640-x-950.jpg" alt="" className='mobile' />

        </div>
    </SwiperSlide>
    
    <SwiperSlide>
        <div className="slider">
        <img src="https://cdn.spartanpoker.com/images/1701174302-Ultimate-Cash-Back-1640x723.jpg" alt="" className='desktop' />
            <img src="https://cdn.spartanpoker.com/images/1701174317-Ultimate-Cash-Back_-Mobile_-640-x-950.jpg" alt="" className='mobile' />

        </div>
    </SwiperSlide>   
  </Swiper>
  );
}
export default Slider;

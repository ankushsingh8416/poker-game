import "./games.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Games() {
  return (
    <>
      <div id="games">
        <div className="game_heading">
          <h1>OUR TOP GAMES</h1>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          effect="fade"
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
          breakpoints={{
            // when window width is >= 920px
            320: {
              slidesPerView: 1,
            },
            752: {
              slidesPerView: 2,
            },
            920: {
              slidesPerView: 3,
            },
          }}
        >
        <div id="games_box">
     
          <SwiperSlide>
          <div className="game-box">
              <img
                src="./images/poker.jpeg"
                alt=""
              />
               <div className="play_btn">
                    <a href="https://webglgames.s3.ap-southeast-1.amazonaws.com/Blackjack/index.html">Play Now</a>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="game-box">
              <img
                src="./images/roulette.jpeg"
                alt=""
              />
               <div className="play_btn">
                    <a href="https://webglgames.s3.ap-southeast-1.amazonaws.com/Roulette/index.html">Play Now</a>
                  </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="game-box">
              <img
                src="./images/ludo.jpeg"
                alt=""
              />
              <div className="play_btn">
                    <a href="javascript:;">Play Now</a>
                  </div>
          </div>
          </SwiperSlide>
        </div>
        </Swiper>
      </div>
    </>
  );
}
export default Games;

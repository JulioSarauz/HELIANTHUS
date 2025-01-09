import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './../styles/CuerpoPrincipal.css';

const CuerpoPrincipal = () => {
  return (
    <section className="cuerpo-principal">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="my-swiper"
      >
        <SwiperSlide>
          <div className="slide">
            <img src="assets/inicio/img1.jpg" alt="Slider 1" className="slider-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="assets/inicio/img2.jpg" alt="Slider 2" className="slider-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="assets/inicio/img3.jpg" alt="Slider 3" className="slider-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="assets/inicio/img4.jpg" alt="Slider 4" className="slider-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="assets/inicio/img5.jpg" alt="Slider 5" className="slider-image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CuerpoPrincipal;

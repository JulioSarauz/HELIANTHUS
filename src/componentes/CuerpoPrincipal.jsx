import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './../styles/CuerpoPrincipal.css';
import CardVertical from './CardVertical';
import Card from './Card';

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
          {/* limpieza facial profunda */}
          <div className="slide">
            <Card
              image='assets/inicio/image1.png'
              title='Limpieza facial Profunda'
              subtitle='Incluye:'
              content1='Gel de limpieza'
              content2='Exfoliante'
              content3='Vapor de ozono'
              content4='Mascarilla desincrustante'
              content5='Extracción de puntos negros'
              content6='Punta de diamante'
              content7='Alta frecuencia'
              content8='Dermaplanig'
              content9='Tónico según tipo de piel'
              content10='Crema hidratante'
              content11='Protector Solar' />
            {/* <img src="assets/inicio/img1.jpg" alt="Slider 1" className="slider-image" /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <CardVertical
              image='assets/inicio/image2.png'
              title='Pack Reducción de Medidas'
              subtitle='Incluye:'
              content1='2 Lipolíticos '
              content2='6 Masajes reductores'
              content3='6 Drenajes linfáticos '
              content4='3 Mantas térmicas'
              content5='5 Madero terapia'
              content6='5 Ultra cavitación'
              content7='5 Radiofrecuencia'
              content8='5 Lipoláser no invasivo '
              content9='5 Vacumterapia'
            />
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

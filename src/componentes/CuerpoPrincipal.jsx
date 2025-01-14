import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './../styles/CuerpoPrincipal.css';
import CardVertical from './CardVertical';
import Card from './Card1';
import Card3 from './Card3';
import Card2 from './Card2';
import Card4 from './Card4';

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
          <Card3
              image='assets/inicio/image3.png'
              title='Radiofrecuencia facial y corporal'
              subtitle='Beneficios:'
              content1='Disminuye las arrugas'
              content2='Reduce la ceulitis'
              content3='Combate estrías y flacidez'
              content4='Elimina grasa localizada'
              content5='Rejuvenecimiento de la piel'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
          <Card2
         titulo1="Electrocauterización de Lunares"
         detalle1="Elimina lunares y lesiones cutáneas de forma segura y precisa. ¡Recupera la confianza en tu piel con este procedimiento rápido y eficaz!"
         titulo2="Pen Fibroblast para Arrugas y Cicatrices"
         detalle2="Innovadora tecnología que rejuvenece tu piel al reducir arrugas y mejorar cicatrices. ¡Resultados visibles desde la primera sesión!"
         titulo3="Electroporación Despigmentante"
         detalle3="Aclara manchas y unifica el tono de tu piel mediante la aplicación de activos despigmentantes sin dolor. ¡Luce una piel radiante y uniforme!"
        />
            {/* <img src="assets/inicio/img4.jpg" alt="Slider 4" className="slider-image" /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
          <Card4
            title="Limpieza Facial"
            image="assets/inicio/image5.png"
            subtitle="Beneficios:"
            content="Elimina impurezas y células muertas"
            content1="Limpia poros a profundidad y reduce su tamaño"
            content2="Permite que la piel se regenere y se oxigene"
            content3="Active la circulación sanguínea "
            content4="Tonifica los músculos faciales"
            content5="Previene el envejecimiento prematuro"
            />
            {/* <img src="assets/inicio/img5.jpg" alt="Slider 5" className="slider-image" /> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CuerpoPrincipal;

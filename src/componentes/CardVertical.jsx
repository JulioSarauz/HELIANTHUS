import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/CardVertical.css'; // Opcional para estilos personalizados

const CardVertical = ({ image, title, subtitle, content1, content2, content3, content4, content5, content6, content7, content8, content9 }) => {
  return (
    <div className="card card-vertical shadow mb-4">
      {/* Imagen en la parte superior */}
      <img src={image} className="card-img-top img-fluid img" alt={title} />
      
      {/* Contenido debajo */}
      <div className="card-body d-flex flex-column flex-md-row">
        {/* Columna izquierda: Título y subtítulo */}
        <div className="text-center text-md-start col-md-4">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        </div>

        {/* Columna derecha: Contenido */}
        <div className="card-content col-md-4">
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content1}</p>
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content2}</p>
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content3}</p>
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content4}</p>
        </div>
        <div className="card-content col-md-4">
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content5}</p>
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content6}</p>
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content7}</p>
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content8}</p>
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content9}</p>
        </div>
      </div>
    </div>
  );
};

export default CardVertical;

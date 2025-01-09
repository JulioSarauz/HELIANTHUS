import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/Card.css'; // Opcional, para agregar estilos personalizados

const Card = ({ image, title, subtitle, content1,content2,content3,content4,content5,content6,content7,content8,content9,content10,content11 }) => {
  return (
    <div className="card mb-4 p-3 shadow">
      <div className="row g-0">
        <div className="col-md-6">
          <img src={image} className="img-fluid rounded-start img" alt={title} />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
            <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content1}</p>
            <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content2}</p>
            <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content3}</p>
            <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content4}</p>
            <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content5}</p>
            <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content6}</p>
            <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content7}</p>
            <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content8}</p>
            <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content9}</p>
            <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content10}</p>
            <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/> {content11}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

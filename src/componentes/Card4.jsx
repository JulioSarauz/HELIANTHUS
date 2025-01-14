import React from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';  
import './../styles/Card4.css'; // Opcional para estilos personalizados  

const Card4 = ({ title, image, subtitle, content, content1, content2, content3, content4, content5 }) => {  
  return (  
    <div className="card text-center shadow mb-4 card">  
      {/* Título */}
      <div className="card-title">  
        <h3>{title}</h3>  
      </div>  

      {/* Imagen */}
      <img src={image} className="card-img-top img-fluid" alt={title} style={{ maxHeight: '300px', objectFit: 'cover' }} />  

      {/* Subtítulo */}
      <div className="card-body">  
        <h5 className="card-subtitle mb-3 text-muted card-subtitle">{subtitle}</h5>  

        {/* Contenido */}
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/>{content}</p>  
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/>{content1}</p>  
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/>{content2}</p>  
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/>{content3}</p>  
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/>{content4}</p>  
        <p className="card-text"><img src="assets/iconos/check.png" alt="" className='check'/>{content5}</p>  
      </div>  
    </div>  
  );  
};  

export default Card4;

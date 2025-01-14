import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/Card2.css'; // Opcional para estilos personalizados

const Card2 = ({titulo1, detalle1, titulo2, detalle2,titulo3, detalle3, titulo4, detalle4}) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Fila 1 */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          {/* Imagen en fila 1, columna 1 */}
          <img src="assets/inicio/image4A.png" alt="Imagen 1" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover' }} />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          {/* Detalles en fila 1, columna 2 */}
          <div className="row">
            <div className="col">
            <h5 className='card-title'>{titulo1}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"><img src="assets/iconos/check.png" alt="" className='check'/></div>
            <div className="col-md-10"><p>{detalle1}</p></div>
          </div>

          <div className="row">
            <div className="col">
            <h5 className='card-title'>{titulo2}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"><img src="assets/iconos/check.png" alt="" className='check'/></div>
            <div className="col-md-10"><p>{detalle2}</p></div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        {/* Fila 2 */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          {/* Detalles en fila 2, columna 1 */}
          <div className="row">
            <div className="col">
            <h5 className='card-title'>{titulo3}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"><img src="assets/iconos/check.png" alt="" className='check'/></div>
            <div className="col-md-10"><p>{detalle3}</p></div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          {/* Imagen en fila 2, columna 2 */}
          <img src="assets/inicio/image4B.png" alt="Imagen 2" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
};

export default Card2;
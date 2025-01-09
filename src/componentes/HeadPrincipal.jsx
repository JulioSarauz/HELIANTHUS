import React from 'react';
import './../styles/HeadPrincipal.css'; 

const HeadPrincipal = () => {

    const mensaje = "https://wa.me/593984538479?text=Quiero%20una%20cita";
    const EnviarMensaje = () => {
        window.location.href = mensaje;
    }

  return (
    <header className="head-principal">
      <div className="content">
        <div className="logo-text">
          <img src="assets/inicio/logo.png" alt="Logo Clínica" className="logo" />
          <div className="text">
            <h1 className="title">Helianthus</h1>
            <p className="subtitle">Cuidamos tu piel, realzamos tu belleza</p>
            <button className="cta-button" onClick={EnviarMensaje} >Reserva tu cita</button>
          </div>
        </div>
      </div>
      <div className="wave"></div>
      
    </header>
  );
};

export default HeadPrincipal;

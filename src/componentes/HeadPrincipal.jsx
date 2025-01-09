import React from 'react';
import './../styles/HeadPrincipal.css'; 

const HeadPrincipal = () => {
    const EnviarMensaje = () => {
        console.log("dirigir");
        
        const numeroTelefono = '593984538479'; // Reemplaza con el número real
        const mensaje = 'Quiero una cita';
        const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
      };

  return (
    <header className="head-principal">
      <div className="content">
        <div className="logo-text">
          <img src="assets/inicio/logo.png" alt="Logo Clínica" className="logo" />
          <div className="text">
            <h1 className="title">Helianthus</h1>
            <p className="subtitle">Cuidamos tu piel, realzamos tu belleza</p>
            <button className="cta-button" onClick={EnviarMensaje}>
                <img src="assets/iconos/reserva.png" alt="Reserva" className="reserva-icon" />
                Reserva tu cita
            </button>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default HeadPrincipal;

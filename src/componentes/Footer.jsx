import React from 'react';
import './../styles/Footer.css'; // Archivo CSS para los estilos

const Footer = () => {


  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Helianthus (Dermatology Center)</h3>
        <p className="footer-address">
          Dirección: Ecuador - Conocoto, Juan Montalvo e Ilalo (Conjunto Angela)
        </p>
        <p className="footer-contact">
          Teléfono: <a href="https://wa.me/593984538479?text=Quiero%20una%20cita">+593 984 538 479</a>
        </p>
        <p className="footer-email">
          Correo electrónico: <a href="evesarauz20@gmail.com">evesarauz20@gmail.com</a>
        </p>
        <div className="footer-social">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='footer-derechos'>&copy; {new Date().getFullYear()} Helianthus Centro Dermatológica. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

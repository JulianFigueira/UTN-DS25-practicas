import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer
      className="d-flex align-items-center justify-content-center"
      style={{ backgroundColor: 'lightblue', height: '60px', marginTop: '50px' }}
    >
      <p className="m-0">&copy; 2025 Librería UTN - Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;

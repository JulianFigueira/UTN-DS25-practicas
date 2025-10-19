import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-light px-3"
      style={{ margin: "20px", border: "1px solid #ccc", borderRadius: "5px" }}
    >
      <div className="d-flex">
        <h2 className="navbar-brand mb-0">Menú</h2>
        <ul className="navbar-nav flex-column flex-md-row gap-3 ms-3">
          <li className="nav-item">
            <a className="nav-link" href="#Categoria">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Libros">Libros</a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="#AgregarLibro">AgregarLibro</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Registro">Registro</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

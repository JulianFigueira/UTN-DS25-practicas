import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const BookCard = ({ titulo, autor, descripcion, imagen}) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm custom-card">
        <img
          src={imagen|| "https://via.placeholder.com/150x200?text=Sin+imagen"}
          className="card-img-top"
          alt={titulo}
          style={{ height: "500px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          {autor && <h6 className="card-subtitle mb-2 text-muted">Autor: {autor}</h6>}
          <p className="card-text">{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

import React from "react";

const BookCard = ({ titulo, autor, descripcion, imagen }) => {
  return (
    <li>
      <div className="Foto">
        Titulo:{titulo}
        <br />
        {autor && <>Autor: {autor}<br /></>}
        Descripcion: {descripcion}
        <br />
        <img src={imagen} alt={titulo} />
      </div>
      <br />
    </li>
  );
};

export default BookCard;

import React, { useState } from "react";
import BookCard from "./bookcard";
import "../App.css";
import useLibros from "../hooks/hook";
import 'bootstrap/dist/css/bootstrap.min.css';

function Buscador() {
  const { catalogo } = useLibros();
  const [busqueda, setBusqueda] = useState("");

  const resultados = catalogo.filter(
    (libro) =>
      libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      libro.autor.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="Desc">
      <h3>Buscar libros</h3>
      <input
        type="text"
        placeholder="Buscar por título o autor..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="form-control mb-3"
      />

      <div className="row g-4">
        {resultados.length > 0 ? (
          resultados.map((libro) => (
            <div key={libro.id} className="col-md-6 col-lg-4">
              <BookCard {...libro} />
            </div>
          ))
        ) : (
          <p>No se encontraron libros que coincidan con la búsqueda.</p>
        )}
      </div>
    </section>
  );
}

export default Buscador;

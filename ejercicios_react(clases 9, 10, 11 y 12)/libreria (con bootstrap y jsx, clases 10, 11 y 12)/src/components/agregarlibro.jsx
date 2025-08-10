import React, { useState } from "react";
import useLibros from "../hooks/hook";
import 'bootstrap/dist/css/bootstrap.min.css';


function FormularioAgregarLibro() {
  const { agregarLibro } = useLibros();

  const [nuevoLibro, setNuevoLibro] = useState({
    titulo: "",
    autor: "",
    descripcion: "",
    imagen: "",
    categoria: "Personal",
  });

  const handleChange = (e) => {
    setNuevoLibro({ ...nuevoLibro, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevoLibro.titulo && nuevoLibro.autor) {
      agregarLibro(nuevoLibro);
      setNuevoLibro({
        titulo: "",
        autor: "",
        descripcion: "",
        imagen: "",
        categoria: "Personal",
      });
    }
  };

  return (
    <section id="AgregarLibro" style={{ border: "2px solid black",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        marginTop:10,
        backgroundColor: "#f9f9f9"}} >
      <h3>Agregar nuevo libro</h3>
      <form onSubmit={handleSubmit} className="mb-5">
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={nuevoLibro.titulo}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="autor"
          placeholder="Autor"
          value={nuevoLibro.autor}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={nuevoLibro.descripcion}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="imagen"
          placeholder="URL de imagen"
          value={nuevoLibro.imagen}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <select
          name="categoria"
          value={nuevoLibro.categoria}
          onChange={handleChange}
          className="form-control mb-3"
          required
        >
          <option value="CienciaFiccion">Ciencia Ficción</option>
          <option value="Historia">Historia</option>
          <option value="Ciencia">Ciencia</option>
          <option value="Arte">Arte</option>
        </select>

        <button type="submit" className="btn btn-primary">Agregar Libro</button>
      </form>
    </section>
  );
}

export default FormularioAgregarLibro;

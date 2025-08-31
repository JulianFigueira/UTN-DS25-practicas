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

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (nuevoLibro.titulo && nuevoLibro.autor) {
    try {
      const res = await fetch("http://localhost:3000/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoLibro),
      });

      if (!res.ok) {
        throw new Error("Error al agregar libro en el backend");
      }

      const libroCreado = await res.json();
      agregarLibro(libroCreado);

      setNuevoLibro({
        titulo: "",
        autor: "",
        descripcion: "",
        imagen: "",
        categoria: "Personal",
      });
    } catch (error) {
      console.error("Error al agregar libro:", error);
    }
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

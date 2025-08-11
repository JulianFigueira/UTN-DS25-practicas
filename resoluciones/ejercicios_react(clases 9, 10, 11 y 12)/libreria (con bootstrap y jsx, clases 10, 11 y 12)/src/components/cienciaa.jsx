import React from "react";
import BookCard from "./BookCard";
import "../App.css";
import resp from "../assets/respuestas.jpg"
import elgen from "../assets/elgen.webp"
import cosmos from "../assets/cosmos.webp"
import universo from "../assets/eluniverso.jpg"
import estructura from "../assets/laestructura.webp"
import historia from "../assets/unabrevehistoria.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';



export const librosCiencia = [
  {
      id: 13,
      titulo: "Breves respuestas a las grandes preguntas",
      autor: "Stephen Hawking",
      descripcion: "Descripcion:Una recopilación de ideas del famoso físico sobre el universo, los agujeros negros, el futuro de la humanidad y las grandes incógnitas científicas.",
      imagen: resp,
      categoria: "Ciencia"
    },
    {
      id: 14,
      titulo: "El gen",
      autor: "Siddhartha Mukherjee",
      descripcion: "Explora la historia y la ciencia detrás de la genética, desde los primeros descubrimientos hasta la biotecnología moderna.",
      imagen: elgen,
      categoria: "Ciencia"
    },
    {
      id: 15,
      titulo: "Cosmos",
      autor: "Carl Sagan",
      descripcion: "Un viaje fascinante a través del universo, combinando ciencia, historia y filosofía para explicar el lugar de la humanidad en el cosmos.",
      imagen: cosmos,
      categoria: "Ciencia"
    },
    {
      id: 16,
      titulo: "El universo en una cáscara de nuez",
      autor: "Stephen Hawking",
      descripcion: "Explica de forma accesible conceptos complejos de física moderna como la teoría de cuerdas, los agujeros negros y el tiempo.",
      imagen: universo,
      categoria: "Ciencia"
    },
    {
      id: 17,
      titulo: "La estructura de las revoluciones científicas",
      autor: "Bill Bryson",
      descripcion: "Relato sobre la física de partículas y la búsqueda del bosón de Higgs, explicando conceptos complejos con humor y claridad.",
      imagen: estructura,
      categoria: "Ciencia"
    },
    {
      id: 18,
      titulo: "Una breve historia de casi todo",
      autor: "Bill Bryson",
      descripcion: "Explica con humor y claridad los grandes descubrimientos científicos en campos como la física, la química, la biología y la geología.",
      imagen: historia,
      categoria: "Ciencia"
    },
  ];
  
const Ciencia = ({ catalogo }) => {
  const libros = catalogo.filter((libro) => libro.categoria === "Ciencia");
  return (
    <section id="Ciencia" className="Desc">
      <h3>Ciencia</h3>
      <div className="row g-4">
        {libros.map((libro) => (
          <div key={libro.id} className="col-md-6 col-lg-4">
            <BookCard {...libro} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ciencia;

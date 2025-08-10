import React from "react";
import BookCard from "./BookCard";
import "../App.css";
import historia from "../assets/historia.webp"
import shock from "../assets/elschock.webp"
import secreta from "../assets/elarte.webp"
import mirando from "../assets/que esta mirando.webp"
import arte from "../assets/mirada.jpg"
import monumento from '../assets/monuments.webp'
import 'bootstrap/dist/css/bootstrap.min.css';


export const librosArte = [

 {
      id: 19,
      titulo: "La historia del arte",
      autor: "E.H. Gombrich",
      descripcion: "Una introducción accesible al arte occidental desde la prehistoria hasta el siglo XX, explicando estilos, técnicas y contextos históricos.",
      imagen: historia,
      categoria: "Arte"
    },
    {
      id: 20,
      titulo: "El shock del nuevo",
      autor: "Robert Hughes",
      descripcion: "Explora el arte moderno del siglo XX, desde el cubismo hasta el pop art, en un estilo directo y con aguda crítica cultural.",
      imagen: shock,
      categoria: "Arte"
    },
    {
      id: 21,
      titulo: "El arte y la percepción visual",
      autor: "Rudolf Arnheim",
      descripcion: "Analiza cómo percibimos visualmente las obras de arte, combinando psicología, teoría del diseño y análisis artístico.",
      imagen: secreta,
      categoria: "Arte"
    },
    {
      id: 22,
      titulo: "¿Qué estás mirando?",
      autor: "Will Gompertz",
      descripcion: "Guía entretenida sobre el arte moderno y contemporáneo, explicando movimientos y artistas de forma clara y accesible para el lector general.",
      imagen: mirando,
      categoria: "Arte"
    },
    {
      id: 23,
      titulo: "The Monuments Men",
      autor: "Marion Augustin y Bruno Heitz",
      descripcion: "Narra la misión de un grupo aliado que, durante la Segunda Guerra Mundial, protegió y recuperó obras de arte saqueadas por los nazis para devolverlas a sus dueños  legítimos.",
      imagen: monumento,
      categoria: "Arte"
    },
    {
      id: 24,
      titulo: "La mirada inquieta",
      autor: "Eugenia Tenenbaum",
      descripcion: "Explora el arte desde la Antigüedad hasta el siglo XX con una voz cercana y  reflexiva, invitando al lector a cuestionar lo que nos han contado y a disfrutar de las obras con ojos propios",
      imagen: arte,
      categoria: "Arte"
    }
  ];

const Arte = ({ catalogo }) => {
  const libros = catalogo.filter((libro) => libro.categoria === "Arte");
  return (
    <section id="Arte" className="Desc">
      <h3>Arte</h3>
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

export default Arte;

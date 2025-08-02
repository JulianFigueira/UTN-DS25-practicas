import React from "react";
import BookCard from "./BookCard";
import "../App.css";
import hp from "../assets/harrypotter.webp"
import img1984 from "../assets/1984.webp"
import juegos from "../assets/losjuegosdelhambre.jpg"
import mano from "../assets/lamano.jpg"
import fundacion from "../assets/fundacion.webp"
import neuro from "../assets/neuromante.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

 export const librosCienciaFiccion = [
    {
      id: 1,
      titulo: "Harry Potter",
      autor: "J.K Rowling",
      descripcion: "Saga fantástica que sigue la vida de Harry Potter, un joven mago que asiste a la escuela de magia Hogwarts y se enfrenta al oscuro mago Lord Voldemort. Combina aventuras, amistad y magia en un mundo fascinante.",
      imagen: hp,
      categoria: "Ciencia Ficcion"
    },
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      descripcion: "Novela distópica sobre un régimen totalitario que vigila y controla cada aspecto de la vida humana. El protagonista, Winston Smith, lucha por preservar su libertad y pensamiento individual en un mundo de opresión y manipulación.",
      imagen: img1984,
      categoria: "Ciencia Ficcion"
    },
    {
      id: 3,
      titulo: "Los juegos del hambre",
      autor: "Suzanne Collins",
      descripcion: "En un futuro postapocalíptico, Katniss Everdeen debe sobrevivir a un mortal torneo televisado donde jóvenes luchan a muerte. Una crítica al poder autoritario y al entretenimiento extremo.",
      imagen: juegos,
      categoria: "Ciencia Ficcion"
    },
    {
      id: 4,
      titulo: "La mano izquierda de la oscuridad",
      autor: "Ursula K. Le Guin",
      descripcion: "Un enviado humano llega a un planeta donde los habitantes no tienen género fijo. La novela explora temas de identidad, política y cultura, desafiando las nociones tradicionales de género.",
      imagen: mano,
      categoria: "Ciencia Ficcion"
    },
    {
      id: 5,
      titulo: "Fundación",
      autor: "Isaac Asimov",
      descripcion: "Primer libro de una saga épica que narra cómo un científico intenta salvar el conocimiento humano ante la inminente caída de un imperio galáctico. Introduce el concepto de 'psicohistoria', una ciencia ficticia que predice el futuro.",
      imagen: fundacion,
      categoria: "Ciencia Ficcion"
    },
    {
      id: 6,
      titulo: "Neuromante",
      autor: "William Gibson",
      descripcion: "Obra pionera del ciberpunk que sigue a un hacker en un mundo dominado por corporaciones, inteligencia artificial y realidades virtuales. Influyó profundamente en la cultura digital y la ciencia ficción moderna.",
      imagen: neuro,
      categoria: "Ciencia Ficcion"
    },
  ];

const CienciaFiccion = ({ catalogo }) => {
  const libros = catalogo.filter((libro) => libro.categoria === "Ciencia Ficcion");
  return (
    <section id="CienciaF" className="Desc">
      <h3>Ciencia Ficción</h3>
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

export default CienciaFiccion;
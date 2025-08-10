import React from "react";
import BookCard from "./bookCard";
import historia from "../assets/historia.webp"
import shock from "../assets/elschock.webp"
import secreta from "../assets/elarte.webp"
import mirando from "../assets/que esta mirando.webp"
import arte from "../assets/mirada.jpg"
import monumento from '../assets/monuments.webp'

function Arte() {
  return (
    <section id="Arte" className="Desc">
      <h3>Arte</h3>
      <ul>
        <li>
          <BookCard
            titulo="La historia del arte"
            autor="E.H. Gombrich"
            descripcion="Una introducción accesible al arte occidental desde la prehistoria hasta el siglo XX, explicando estilos, técnicas y contextos históricos."
            imagen={historia}
          />
        </li>
        <li>
          <BookCard
            titulo="El shock del nuevo"
            autor="Robert Hughes"
            descripcion="Explora cómo el arte moderno rompió con las tradiciones pasadas, analizando movimientos como el cubismo, el surrealismo y el pop art."
            imagen={shock}
          />
        </li>
        <li>
          <BookCard
            titulo="La historia secreta del arte"
            autor="Noah Charney"
            descripcion="Relatos de crímenes, robos y falsificaciones en el mundo del arte, revelando el lado oculto del mercado artístico."
            imagen={secreta}
          />
        </li>
        <li>
          <BookCard
              titulo= "¿Qué estás mirando?"
              autor="Will Gompertz"
              descripcion= "Guía entretenida sobre el arte moderno y contemporáneo, explicando movimientos y artistas de forma clara y accesible para el lector general."
              imagen= {mirando}
           />
        </li>
        <li>
          <BookCard
           titulo= "The Monuments Men"
            autor= "Marion Augustin y Bruno Heitz"
            descripcion= "Narra la misión de un grupo aliado que, durante la Segunda Guerra Mundial, protegió y recuperó obras de arte saqueadas por los nazis para devolverlas a sus dueños  legítimos."
            imagen= {monumento}
          />
        </li>
        <li>
          <BookCard
            titulo="La mirada inquieta"
            autor= "Eugenia Tenenbaum"
            descripcion= "Explora el arte desde la Antigüedad hasta el siglo XX con una voz cercana y  reflexiva, invitando al lector a cuestionar lo que nos han contado y a disfrutar de las obras con ojos propios"
            imagen= {arte}
          />
        </li>
      </ul>
    </section>
  );
}

export default Arte;

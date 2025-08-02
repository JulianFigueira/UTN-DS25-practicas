import React from "react";
import "../App.css";
import BookCard from "./bookCard";
import resp from "../assets/respuestas.jpg"
import elgen from "../assets/elgen.webp"
import cosmos from "../assets/cosmos.webp"
import universo from "../assets/eluniverso.jpg"
import estructura from "../assets/laestructura.webp"
import historia from "../assets/unabrevehistoria.jpg"

function Ciencia() {
  return (
    <section id="Ciencia" className="Desc">
      <h3>Ciencia</h3>
      <ul>
        <li>
          <BookCard
            titulo="Breves respuestas a las grandes preguntas"
            autor="Stephen Hawking"
            descripcion="Último libro del físico teórico donde aborda interrogantes sobre el universo, Dios, el futuro de la humanidad y la inteligencia artificial."
            imagen={resp}
          />
        </li>
        <li>
          <BookCard
            titulo="El gen"
            autor="Siddhartha Mukherjee"
            descripcion="Historia del gen y la genética, desde Mendel hasta la ingeniería genética, explorando su impacto en la salud y la identidad humana."
            imagen={elgen}
          />
        </li>
        <li>
          <BookCard
            titulo="Cosmos"
            autor="Carl Sagan"
            descripcion="Viaje por el universo y la historia de la ciencia, combinando astronomía, evolución y filosofía para inspirar el pensamiento científico."
            imagen={cosmos}
          />
        </li>
        <li>
          <BookCard
             titulo="El universo en una cáscara de nuez"
             autor= "Stephen Hawking"
             descripcion="Explica de forma accesible conceptos complejos de física moderna como la teoría de cuerdas, los agujeros negros y el tiempo."
             imagen= {universo}
          />
        </li>
        <li>
          <BookCard
           titulo= "La estructura de las revoluciones científicas"
           autor= "Bill Bryson"
           descripcion= "Relato sobre la física de partículas y la búsqueda del bosón de Higgs, explicando conceptos complejos con humor y claridad."
           imagen={estructura}
          />
        </li>
        <li>
          <BookCard
            titulo="Una breve historia de casi todo"
            autor="Bill Bryson"
            descripcion="Explica de forma entretenida los grandes descubrimientos científicos y la historia del universo, la Tierra y la vida humana."
            imagen={historia}
          />
        </li>
      </ul>
    </section>
  );
}

export default Ciencia;

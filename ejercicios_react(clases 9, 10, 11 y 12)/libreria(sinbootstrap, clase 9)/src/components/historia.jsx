import React from "react";
import "../App.css";
import BookCard from "./bookCard";
import pilares from "../assets/lospilares.webp"
import guns from "../assets/guns.webp"
import unahistoria from "../assets/unahistoria.jpg"
import siglo from "../assets/elsiglodeoro.webp"
import segunda from "../assets/lasegundaguerra.jpg"
import sapiens from   "../assets/sapiens.jpg"

function Historia() {
  return (
    <section id="Historia" className="Desc">
      <h3>Historia</h3>
      <ul>
        <li>
          <BookCard
            titulo="Sapiens: De animales a dioses"
            autor="Yuval Noah Harari"
            descripcion="Un recorrido por la historia de la humanidad desde el surgimiento del Homo sapiens hasta la actualidad, analizando cómo la biología y la cultura moldearon nuestras sociedades."
            imagen={sapiens}
          />
        </li>
        <li>
          <BookCard
            titulo="Los pilares de la Tierra"
            autor="Ken Follett"
            descripcion="Una novela histórica ambientada en la Edad Media que narra la construcción de una catedral, entrelazando política, religión y luchas de poder en la Inglaterra del siglo XII."
            imagen={pilares}
          />
        </li>
        <li>
          <BookCard
            titulo="Guns, Germs, and Steel"
            autor="Jared Diamond"
            descripcion="Explora cómo las condiciones geográficas y ambientales influyeron en el desarrollo de civilizaciones y la conquista del mundo por las potencias europeas."
            imagen={guns}
          />
        </li>
        <li>
          <BookCard
            titulo="Una historia popular de Estados Unidos"
            autor="Howard Zinn"
            descripcion="Presenta la historia de EE.UU. desde la perspectiva de los grupos oprimidos, como trabajadores, mujeres y minorías, cuestionando la narrativa tradicional."
            imagen={unahistoria}
          />
        </li>
        <li>
          <BookCard
            titulo="El siglo de oro español"
            autor="Henry Kamen"
            descripcion="Analiza el apogeo cultural, político y militar de España durante los siglos XVI y XVII, desmontando mitos sobre su decadencia."
            imagen={siglo}
          />
        </li>
        <li>
          <BookCard
            titulo="La Segunda Guerra Mundial"
            autor="Antony Beevor"
            descripcion="Relato detallado y riguroso del conflicto global más devastador de la historia, incluyendo testimonios y análisis estratégicos de los frentes de batalla."
            imagen={segunda}
          />
        </li>
      </ul>
    </section>
  );
}

export default Historia;

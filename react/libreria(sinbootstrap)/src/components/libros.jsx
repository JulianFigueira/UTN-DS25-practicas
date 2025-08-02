import bookCard from './bookCard'
import "../App.css"
import React from 'react';

function Ciencia(){
    return (
        <section id="CienciaF" className="Desc">
        <h3>Ciencia Ficcion</h3>
        <ul>
          <li><BookCard titulo="Harry Potter" autor="J.K Rowling" descripcion="Saga fantástica que sigue la vida de Harry Potter, un joven mago que asiste a la escuela de magia Hogwarts y se enfrenta al oscuro mago Lord Voldemort. Combina aventuras, amistad y magia en un mundo fascinante." imagen="harrypotter.webp" /></li>
          <li><BookCard titulo="1984" autor="George Orwell" descripcion="Novela distópica sobre un régimen totalitario que vigila y controla cada aspecto de la vida humana. El protagonista, Winston Smith, lucha por preservar su libertad y pensamiento individual en un mundo de opresión y manipulación." imagen="Tercer año/Desarrollo de Software/1984.webp" /></li>
          <li><BookCard titulo="Los juegos del hambre" autor="Suzanne Collins" descripcion="En un futuro postapocalíptico, Katniss Everdeen debe sobrevivir a un mortal torneo televisado donde jóvenes luchan a muerte. Una crítica al poder autoritario y al entretenimiento extremo." imagen="Tercer año/Desarrollo de Software/losjuegosdelhambre.jpg" /></li>
          <li><BookCard titulo="La mano izquierda de la oscuridad" autor="Ursula K. Le Guin" descripcion="Un enviado humano llega a un planeta donde los habitantes no tienen género fijo. La novela explora temas de identidad, política y cultura, desafiando las nociones tradicionales de género." imagen="Tercer año/Desarrollo de Software/lamano.jpg" /></li>
          <li><BookCard titulo="Fundación" autor="Isaac Asimov" descripcion="Primer libro de una saga épica que narra cómo un científico intenta salvar el conocimiento humano ante la inminente caída de un imperio galáctico. Introduce el concepto de 'psicohistoria', una ciencia ficticia que predice el futuro." imagen="Tercer año/Desarrollo de Software/fundacion.webp" /></li>
          <li><BookCard titulo="Neuromante" autor="William Gibson" descripcion="Obra pionera del ciberpunk que sigue a un hacker en un mundo dominado por corporaciones, inteligencia artificial y realidades virtuales. Influyó profundamente en la cultura digital y la ciencia ficción moderna." imagen="Tercer año/Desarrollo de Software/neuromante.jpg" /></li>
        </ul>
      </section>

    )
}

export default Cienca;
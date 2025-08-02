import React from "react";
import "../App.css"

const Contacto=()=>{
return (
 <section id="Contacto" className="completar">
            <h3>Contacto</h3>
            <div>
            <p>Teléfono: +54 11 1234-5678</p>
            <p>Email: contacto@libreriautn.com</p>
            <form>
            <label>Mensaje: <textarea></textarea></label><br />
            <button className="boton" type="submit">Enviar</button>
            </form>
            </div>
            </section>
    )
}   

export default Contacto;
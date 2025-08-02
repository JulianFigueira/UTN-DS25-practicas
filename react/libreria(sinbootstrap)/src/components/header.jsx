import React from "react";
import "../App.css"
import utn from "../assets/UTN_logo.jpg"

const Header =()=>{
   return (
     <header>
     <img id="hola" src={utn} />
     <h2>Libreria UTN</h2>
     </header>
   )
}

export default Header;
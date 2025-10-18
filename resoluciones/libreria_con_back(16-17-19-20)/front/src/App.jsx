import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Formulario from "./components/formulario";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import Buscador from "./components/busqueda";
import FormularioAgregarLibro from "./components/agregarlibro";
import "./App.css";
import { LibroProvider } from "./context/context";

function App() {
  const [catalogo, setCatalogo] = useState([]);
  const [cargando, setCargando] = useState(true);

 useEffect(() => {
  const cargarLibros = async () => {
    try {
      setCargando(true);

     
      const resBack = await fetch("http://localhost:3000/api/books");
      const librosBackData = await resBack.json();
      
      const res = await fetch(
          "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
        );
        const data = await res.json();

        
        const librosAPI = data.docs.map((libro, index) => ({
          id: index + 1000,
          titulo: libro.title || "Sin título",
          autor: libro.author_name ? libro.author_name.join(", ") : "Desconocido",
          descripcion: libro.first_sentence
            ? Array.isArray(libro.first_sentence)
              ? libro.first_sentence.join(" ")
              : libro.first_sentence
            : "Sin descripción",
          imagen: libro.cover_edition_key
            ? `https://covers.openlibrary.org/b/olid/${libro.cover_edition_key}-M.jpg`
            : "",
          categoria: "API",
        }));

      
      setCatalogo([ ...librosBackData.data, ...librosAPI]);
    } catch (error) {
      console.error("Error al cargar libros de la API:", error);

    } finally {
      setCargando(false);
    }
  };

  cargarLibros();
}, []);


 const agregarLibro = (nuevoLibro) => {
  // Si no viene id del backend, usamos Date.now() temporalmente
  const libroConId = {
    ...nuevoLibro,
    id: nuevoLibro.id || Date.now(),
  };
  console.log(" Agregando libro al catálogo:", libroConId);
  setCatalogo([...catalogo, libroConId]);
};


  return (
    <LibroProvider value={{ catalogo, agregarLibro }}>
      <section id="Inicio">
      <Header /></section>
      <Nav/>
      <section id="Libros">
      <Buscador/></section>
      <br/><br/><FormularioAgregarLibro />
      <Formulario />
      <Contacto />
      <Footer />
    </LibroProvider>
  );
}

export default App;
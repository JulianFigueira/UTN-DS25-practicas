import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import CienciaFiccion, { librosCienciaFiccion } from "./components/ciencia";
import Historia, { librosHistoria } from "./components/historia";
import Ciencia, { librosCiencia } from "./components/cienciaa";
import Arte, { librosArte } from "./components/arte";
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

  // Libros estáticos combinados de todas las categorías (sin API)
  const librosEstaticos = [
    ...librosCienciaFiccion,
    ...librosHistoria,
    ...librosCiencia,
    ...librosArte,
  ];

  useEffect(() => {
    const cargarLibros = async () => {
      try {
        setCargando(true);
        const res = await fetch(
          "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
        );
        const data = await res.json();

        // Mapear los libros que vienen de la API
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

  
        setCatalogo([...librosEstaticos, ...librosAPI]);
      } catch (error) {
        console.error("Error al cargar libros de la API:", error);
        setCatalogo(librosEstaticos);
      } finally {
        setCargando(false);
      }
    };

    cargarLibros();
  }, []);

  const agregarLibro = (nuevoLibro) => {
    setCatalogo([...catalogo, { ...nuevoLibro, id: catalogo.length + 1 }]);
  };

  return (
    <LibroProvider value={{ catalogo, agregarLibro }}>
      <Header />
      <Nav />
      <Buscador />
      <br/><br/>
      <CienciaFiccion catalogo={catalogo} />
      <br/><br/><Historia catalogo={catalogo} />
      <br/><Ciencia catalogo={catalogo} />
      <br/><Arte catalogo={catalogo} />
      <br/><br/><FormularioAgregarLibro />
      <Formulario />
      <Contacto />
      <Footer />
    </LibroProvider>
  );
}

export default App;

// App.jsx
import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import Nav from './components/nav'
import Formulario from './components/formulario'
import Contacto from './components/contacto'
import CienciaFiccion from './components/ciencia'
import Historia from './components/historia'
import Ciencia from './components/cienciaa'
import Arte from './components/arte'


function App() {
  return (
    <>
      <Header />
      <Nav/>
      <section id="seccion">
      <CienciaFiccion/>
      <Historia/>
      <Ciencia/>
      <Arte/>
      </section>
      <Formulario/>
      <Contacto/>
      <Footer/>
    </>
  );
}

export default App;

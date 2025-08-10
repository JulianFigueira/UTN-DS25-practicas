import React from "react";
import "../App.css";

const Formulario = () => {
  return (
    <section
      id="Registro"
      className="completar"
      
    >
      <form>
        <h3 className="cuadro">Formulario</h3>

        <div className="mb-3">
          <label htmlFor="name" className="cuadro">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Julian"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ape" className="cuadro">
            Apellido
          </label>
          <input
            type="text"
            id="ape"
            name="ape"
            placeholder="Figueira"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nacimiento" className="cuadro">
            Fecha de nacimiento
          </label>
          <input type="date" id="nacimiento" name="nacimiento" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="mail" className="cuadro">
            Mail
          </label>
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="julianfigueira485..."
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ps" className="cuadro">
            Contraseña
          </label>
          <input
            type="password"
            id="ps"
            name="ps"
            placeholder="......"
            className="form-control"
          />
        </div>

        <fieldset className="mb-3">
          <legend className="cuadro">Sexo</legend>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="sexo"
              id="masculino"
              value="masculino"
            />
            <label className="cuadro" htmlFor="masculino">
              Masculino
            </label>
          </div>
          <div className="cuadro">
            <input
              className="cuadro"
              type="radio"
              name="sexo"
              id="femenino"
              value="femenino"
            />
            <label className="cuadro" htmlFor="femenino">
              Femenino
            </label>
          </div>
        </fieldset>

        <div className="mb-3">
          <label htmlFor="genero" className="cuadro">
            Género
          </label>
          <select id="genero" className="cuadro">
            <option value=".">..</option>
            <option value="cf">Ciencia Ficcion</option>
            <option value="h">Historia</option>
            <option value="c">Ciencia</option>
            <option value="a">Arte</option>
          </select>
        </div>

        <button type="submit" className="boton">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Formulario;

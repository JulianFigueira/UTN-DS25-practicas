import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Formulario = () => {
  return (
    <section id="Registro" className="Registro container my-4" style={{ border: "2px solid black",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "#f9f9f9"}} >
      <form>
        <h3 className="mb-4">Formulario</h3>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" id="name" name="name" placeholder="Julian" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="ape" className="form-label">Apellido</label>
          <input type="text" id="ape" name="ape" placeholder="Figueira" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="nacimiento" className="form-label">Fecha de nacimiento</label>
          <input type="date" id="nacimiento" name="nacimiento" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="mail" className="form-label">Mail</label>
          <input type="email" id="mail" name="mail" placeholder="julianfigueira485..." className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="ps" className="form-label">Contraseña</label>
          <input type="password" id="ps" name="ps" placeholder="......" className="form-control" />
        </div>

        <fieldset className="mb-3">
          <legend className="col-form-label pt-0">Sexo</legend>
          <div className="form-check">
            <input type="radio" id="masculino" name="sexo" value="masculino" className="form-check-input" />
            <label htmlFor="masculino" className="form-check-label">Masculino</label>
          </div>
          <div className="form-check">
            <input type="radio" id="femenino" name="sexo" value="femenino" className="form-check-input" />
            <label htmlFor="femenino" className="form-check-label">Femenino</label>
          </div>
        </fieldset>

        <div className="mb-3">
          <label htmlFor="genero" className="form-label">Género</label>
          <select id="genero" className="form-select">
            <option value=".">..</option>
            <option value="cf">Ciencia Ficcion</option>
            <option value="h">Historia</option>
            <option value="c">Ciencia</option>
            <option value="a">Arte</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </section>
  );
};

export default Formulario;

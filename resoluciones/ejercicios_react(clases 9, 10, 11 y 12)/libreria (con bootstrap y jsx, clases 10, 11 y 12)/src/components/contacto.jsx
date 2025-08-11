import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Contacto = () => {
  return (
    <section
      id="Contacto"
      className="container my-4"
      style={{
        border: "2px solid black",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3 className="mb-4">Contacto</h3>
      <div>
        <p>Teléfono: +54 11 1234-5678</p>
        <p>Email: contacto@libreriautn.com</p>
        <form>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje:
            </label>
            <textarea
              id="mensaje"
              className="form-control"
              rows={3}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;

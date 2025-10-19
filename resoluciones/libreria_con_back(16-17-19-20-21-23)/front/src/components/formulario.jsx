import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createFormularioSchema } from "../validations/formulario";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(createFormularioSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    // Aquí `data.sexo` será true o false
    console.log("Datos del formulario:", data);
    alert("Formulario enviado con éxito");
  };

  return (
    <section
      id="Registro"
      className="Registro container my-4"
      style={{
        border: "2px solid black",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-4">Formulario</h3>

        {/* Nombre */}
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Julian"
            {...register("nombre")}
            disabled={isSubmitting}
          />
          {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
        </div>

        {/* Apellido */}
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input
            type="text"
            id="apellido"
            className="form-control"
            placeholder="Figueira"
            {...register("apellido")}
            disabled={isSubmitting}
          />
          {errors.apellido && <p className="text-danger">{errors.apellido.message}</p>}
        </div>

        {/* Fecha de nacimiento */}
        <div className="mb-3">
          <label htmlFor="fechanac" className="form-label">Fecha de nacimiento</label>
          <input
            type="date"
            id="fechanac"
            className="form-control"
            {...register("fechanac", { valueAsDate: true })}
            disabled={isSubmitting}
          />
          {errors.fechanac && <p className="text-danger">{errors.fechanac.message}</p>}
        </div>

        {/* Mail */}
        <div className="mb-3">
          <label htmlFor="Mail" className="form-label">Mail</label>
          <input
            type="email"
            id="Mail"
            className="form-control"
            placeholder="julian@example.com"
            {...register("Mail")}
            disabled={isSubmitting}
          />
          {errors.Mail && <p className="text-danger">{errors.Mail.message}</p>}
        </div>

        {/* Contraseña */}
        <div className="mb-3">
          <label htmlFor="Contraseña" className="form-label">Contraseña</label>
          <input
            type="password"
            id="Contraseña"
            className="form-control"
            placeholder="......"
            {...register("Contraseña")}
            disabled={isSubmitting}
          />
          {errors.Contraseña && <p className="text-danger">{errors.Contraseña.message}</p>}
        </div>

        {/* Sexo (como booleano) */}
        <fieldset className="mb-3">
          <legend className="col-form-label pt-0">Sexo</legend>
          <div className="form-check">
            <input
              type="radio"
              id="masculino"
              className="form-check-input"
              value="true"
              {...register("sexo")}
              disabled={isSubmitting}
            />
            <label htmlFor="masculino" className="form-check-label">Masculino</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="femenino"
              className="form-check-input"
              value="false"
              {...register("sexo")}
              disabled={isSubmitting}
            />
            <label htmlFor="femenino" className="form-check-label">Femenino</label>
          </div>
          {errors.sexo && <p className="text-danger">{errors.sexo.message}</p>}
        </fieldset>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </section>
  );
};

export default Formulario;
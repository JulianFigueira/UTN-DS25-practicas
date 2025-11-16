import React from "react";
import useLibros from "../hooks/hook";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookSchema } from "../validations/libro"; // ✅ tu validación Yup externa

function FormularioAgregarLibro() {
  const { agregarLibro } = useLibros();

  // ✅ Integración con React Hook Form + Yup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(bookSchema),
    mode: "onChange", // valida en tiempo real
  });

  // ✅ submit del formulario
  const onSubmit = async (data) => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
    try {
      const res = await fetch(`${API_BASE_URL}/api/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Error al agregar libro en el backend");

      const libroCreado = await res.json();
      agregarLibro(libroCreado.data?.libro || libroCreado.data);

      reset(); // limpia el formulario
    } catch (error) {
      console.error("Error al agregar libro:", error);
    }
  };

  return (
    <section
      id="AgregarLibro"
      style={{
        border: "2px solid black",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        marginTop: 10,
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>Agregar nuevo libro</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
        {/* Título */}
        <input
          type="text"
          placeholder="Título"
          {...register("titulo")}
          className="form-control mb-2"
        />
        {errors.titulo && (
          <div className="text-danger">{errors.titulo.message}</div>
        )}

        {/* Autor */}
        <input
          type="text"
          placeholder="Autor"
          {...register("autor")}
          className="form-control mb-2"
        />
        {errors.autor && (
          <div className="text-danger">{errors.autor.message}</div>
        )}

        {/* Descripción */}
        <textarea
          placeholder="Descripción"
          {...register("descripcion")}
          className="form-control mb-2"
        />
        {errors.descripcion && (
          <div className="text-danger">{errors.descripcion.message}</div>
        )}

        {/* Imagen */}
        <input
          type="text"
          placeholder="URL de imagen"
          {...register("imagen")}
          className="form-control mb-2"
        />
        {errors.imagen && (
          <div className="text-danger">{errors.imagen.message}</div>
        )}

        {/* Categoría */}
        <select {...register("categoria")} className="form-control mb-3">
          <option value="">Seleccionar categoría</option>
          <option value="CienciaFiccion">Ciencia Ficción</option>
          <option value="Historia">Historia</option>
          <option value="Ciencia">Ciencia</option>
          <option value="Arte">Arte</option>
        </select>
        {errors.categoria && (
          <div className="text-danger">{errors.categoria.message}</div>
        )}

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Agregando..." : "Agregar Libro"}
        </button>
      </form>
    </section>
  );
}

export default FormularioAgregarLibro;

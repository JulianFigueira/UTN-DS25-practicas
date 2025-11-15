import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../helpers/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserSchema } from "../validations/usuario"; // Ajusta la ruta según tu estructura

//mails de prueba.  julian@example.com contraseña:1234
//                  ana@example.com    contraseña:4321


function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(createUserSchema),
    mode: "onBlur", // o "onChange" si prefieres validación en tiempo real
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        alert(json.error || "Login fallido");
        return;
      }

      setToken(json.data.token);
      navigate("/catalog");
    } catch (err) {
      alert("Error de conexión. Intenta nuevamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>

      <input
        {...register("email")}
        placeholder="Email"
        disabled={isSubmitting}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

      <input
        type="password"
        {...register("password")}
        placeholder="Password"
        disabled={isSubmitting}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Ingresando..." : "Ingresar"}
      </button>
    </form>
  );
}

export default LoginPage;
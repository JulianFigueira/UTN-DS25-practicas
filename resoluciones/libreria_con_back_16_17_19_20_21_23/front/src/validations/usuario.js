// src/validations/auth.validation.js (o .ts)
import * as yup from 'yup';

export const createUserSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email es requerido')
    .email('Email inválido')
    .trim()
    .lowercase(),
  password: yup
    .string()
    .required('Contraseña es requerida')
    // Puedes agregar reglas adicionales si es necesario
    // .min(6, 'La contraseña debe tener al menos 6 caracteres')
});
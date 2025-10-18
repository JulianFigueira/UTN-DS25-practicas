import * as yup from 'yup';

export const updateBookSchema = yup.object().shape({
  titulo: yup
    .string()
    .notRequired()
    .min(1, 'El título del libro es requerido')
    .max(50, 'El título del libro no puede exceder los 50 caracteres')
    .trim(),

  autor: yup
    .string()
    .notRequired()
    .min(1, 'El autor del libro es requerido')
    .max(40, 'El autor del libro no puede exceder los 40 caracteres')
    .trim(),

  descripcion: yup
    .string()
    .notRequired()
    .min(1, 'La descripción del libro es requerida')
    .max(300, 'La descripción del libro no puede exceder los 300 caracteres')
    .trim(),

  imagen: yup
    .string()
    .notRequired()
    .url('La imagen debe ser una URL válida'),

  categoria: yup
    .string()
    .notRequired(),
});

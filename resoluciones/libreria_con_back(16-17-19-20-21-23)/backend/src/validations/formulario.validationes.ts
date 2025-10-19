import { z } from 'zod';

export const createFormularioSchema = z.object({
   nombre: z.string()
      .min(1, 'El nombre es requerido')
      .max(50, 'El nombre no puede exceder 50 caracteres')
      .trim(),

   apellido: z.string()
      .min(1, 'El apellido es requerido')
      .max(40, 'El apellido no puede exceder 40 caracteres')
      .trim(),

   Mail: z.string()
      .min(1, 'El mail es requerido')
      .trim(),

   Contraseña: z.string()
      .min(1, 'La contraseña es requerida')
      .trim(),

      fechanac: z.preprocess(
      (arg) => (typeof arg === 'string' || arg instanceof Date ? new Date(arg) : undefined),
      z.date({ message: 'La fecha de nacimiento es requerida y debe ser válida' })
   ),


});



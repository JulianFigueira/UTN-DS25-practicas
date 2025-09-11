import {z} from 'zod';

export const createBookSchema=z.object({
   titulo:z.string()
   .min(1, 'El titulo del libro es requerido')
   .max(50, 'El titulo del libro no puedo exceder 50 caracteres')
   .trim(),

    autor:z.string()
   .min(1, 'El autor del libro es requerido')
   .max(40, 'El autor del libro no puede exceder 40 caracteres')
   .trim(),


   descripcion:z.string()
   .min(1, 'La descripcion del libro es requerida')
   .max(300, 'La descripcion del libro no puede exceder 300 caracteres')
   .trim(),
   
  imagen: z.string().optional(),       // ✅ AGREGADO opcional
  categoria: z.string().optional()

});

export const updateBookSchema=createBookSchema.partial()

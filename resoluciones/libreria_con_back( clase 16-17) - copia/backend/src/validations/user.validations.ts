import {z} from 'zod';

export const createUserSchema=z.object({
    email:z.email("Email invalido")
        .toLowerCase()
        .trim(),
    password:z.string()
       .min(8, "Minimo 8 caracteres")
       .regex(/[A-Z]/, "Debe contener al menos una mayuscula")
       .regex(/[0-9]/, "Debe contener al menos un numero"),
    name:z.string()
       .regex(/[A-Z]/, "Debe contener al menos 2 caracteres")
       .regex(/[0-9]/, "Debe contener al menos un caracter")
       .trim(),
    role:z.enum(['USER', 'ADMIN']).optional().default('USER')
})

export const updateSchema=createUserSchema.partial();
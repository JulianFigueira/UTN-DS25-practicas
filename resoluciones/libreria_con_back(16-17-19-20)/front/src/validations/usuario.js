import * as yup from 'yup';

export const createUserSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email invalido')
    .email('Email invalido')
    .trim()
    .lowercase(),

  password: yup
    .string()
    .required('Password invalida')
    .test('password-check', 'Password invalida', (value) => {
      if (!value) return false; 
   
    }),

  name: yup
    .string()
    .required('Debe contener al menos 2 caracteres')
    .matches(/[A-Z]/, 'Debe contener al menos 2 caracteres')
    .matches(/[0-9]/, 'Debe contener al menos un caracter')
    .trim(),

  role: yup
    .string()
    .oneOf(['USER', 'ADMIN'])
    .notRequired()
    .default('USER'),
});

export const updateSchema = createUserSchema.shape({
  email: yup.string().email('Email invalido').notRequired(),
  password: yup.string().notRequired(),
  name: yup.string().notRequired(),
  role: yup.string().oneOf(['USER', 'ADMIN']).notRequired(),
});

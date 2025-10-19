import * as yup from 'yup';

export const createFormularioSchema = yup.object().shape({
   nombre: yup
      .string()
      .required('El nombre es requerido')
      .max(50, 'El nombre no puede exceder 50 caracteres')
      .trim(),

   apellido: yup
      .string()
      .required('El apellido es requerido')
      .max(40, 'El apellido no puede exceder 40 caracteres')
      .trim(),

   Mail: yup
      .string()
      .required('El mail es requerido')
      .email('El mail no es válido')
      .trim(),

   Contraseña: yup
      .string()
      .required('La contraseña es requerida')
      .trim(),

   fechanac: yup
      .date()
      .required('La fecha de nacimiento es requerida y debe ser válida')
      .typeError('La fecha de nacimiento es requerida y debe ser válida'),

   sexo: yup
      .boolean()
      .required('El sexo es requerido')
      .typeError('El sexo debe ser verdadero o falso'),
});

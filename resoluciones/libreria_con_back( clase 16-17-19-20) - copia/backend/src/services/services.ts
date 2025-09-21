import{Formulario, AgregarFormulario, FormularioResponse, FormularioListResponse} from '../types/formulario';
import prisma from "../config/prisma";
import { formularioRoutes } from "../routes/formulario.ruta";


export async function getAllFormularios():Promise<Formulario[]>{
  return prisma.formulario.findMany({
  });
}

export async function createFormulario(data: AgregarFormulario):
 Promise<Formulario>{
 return prisma.formulario.create({
    data:{
      nombre: data.nombre,
      apellido: data.apellido,
      fechanac: data.fechanac,
      mail: data.mail,
      contraseña: data.contraseña,
      sexo:data.sexo,
    }
 })
}
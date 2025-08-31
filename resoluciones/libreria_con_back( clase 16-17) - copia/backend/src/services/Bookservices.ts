import{Book, AgregarLibro, BookResponse, BookListResponse} from '../types/books';
import prisma from "../config/prisma";
import { bookRoutes } from "../routes/rutas";


export async function getAllBooks():Promise<Book[]>{
  return prisma.book.findMany({
  });
}

export async function createBook(data: AgregarLibro):
 Promise<Book>{
 return prisma.book.create({
    data:{
      titulo: data.titulo,
      autor: data.autor,
      descripcion: data.descripcion,
      imagen: data.imagen,
      categoria: data.categoria,
    }
 })
}
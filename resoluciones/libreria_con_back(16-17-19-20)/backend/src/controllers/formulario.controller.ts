import { Request, Response , NextFunction} from 'express';
import * as bookService from '../services/services';

export async function getAllFormularios(req: Request, res: Response,  next: NextFunction) {
  try {
    const books = await bookService.getAllFormularios(); // Trae todos los libros
    res.json({
      success:true,
      data:books
    }); // Los manda al frontend
  } catch (error) {
    next(error);
  }
}

export async function createFormulario (req: Request, res: Response, next: NextFunction) {
  try {
     const newBook = await bookService.createFormulario(req.body);
      res.status(201).json({
      success:true,
      message: 'Formulario creado', data:newBook});
  } catch (error) {
    next(error);
  }
}
   